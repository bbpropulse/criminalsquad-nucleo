#!/usr/bin/env python3
"""Setup / preflight do captura-midia-av (CriminalSquad).

Modos:
  setup.py --check   Preflight silencioso. Exit 0 se pronto, !=0 se falta algo.
  setup.py --json    Status legivel por maquina.
  setup.py           Instalador. Instala deps no uso (ffmpeg/ffprobe/yt-dlp + faster-whisper).

Filosofia do CriminalSquad:
- Transcricao LOCAL (faster-whisper) e o PADRAO — nao precisa de nenhuma chave de API.
  Roda offline; o audio nunca sai da maquina (obrigatorio para segredo de justica).
- OpenRouter (nuvem multimodal) e OPCIONAL, so para midia ja PUBLICA.
- Deps instalam no uso; nunca sudo automatico. Adaptado do setup do claude-video (MIT).
- Em Python "gerenciado pelo sistema" (PEP 668 — Homebrew, Debian/Ubuntu), pip no
  interpretador do sistema e recusado; nesse caso o faster-whisper vai para um
  ambiente proprio do subsistema (venv) que o providers.py sabe localizar.
"""
from __future__ import annotations

import importlib
import json
import os
import platform
import shutil
import site
import subprocess
import sys
import sysconfig
from pathlib import Path

REQUIRED_BINARIES = ["ffmpeg", "ffprobe", "yt-dlp"]
PY_DEP = "faster_whisper"          # import name
PY_DEP_PIP = "faster-whisper"      # pip name

CONFIG_DIR = Path.home() / ".config" / "captura-midia-av"
CONFIG_FILE = CONFIG_DIR / ".env"

ENV_TEMPLATE = """# captura-midia-av — configuracao (CriminalSquad)
#
# TRANSCRICAO LOCAL e o padrao e NAO precisa de chave nenhuma (faster-whisper).
# Material sigiloso (audiencia/depoimento em segredo de justica) SEMPRE local.
#
# OpenRouter e OPCIONAL — so para midia ja PUBLICA (envia audio a um terceiro).
# Uma API da acesso a varios modelos. Chave: https://openrouter.ai/keys
OPENROUTER_API_KEY=
# Modelo do backend openrouter. O endpoint e escolhido pelo tipo de modelo:
#   openai/whisper-large-v3        -> /audio/transcriptions, timestamps REAIS (padrao)
#   google/gemini-3.1-flash-lite   -> /chat/completions (multimodal: le audio e video)
OPENROUTER_MODEL=openai/whisper-large-v3

# Whisper local (opcionais): modelo (tiny|base|small|medium|large-v3), device, idioma.
# small e um bom equilibrio para PT-BR; large-v3 e mais preciso e mais lento.
WATCH_WHISPER_MODEL=small
WATCH_WHISPER_LANG=pt

# VAD (Silero) DESLIGADO por padrao para transcrever TODO o audio (nao cortar fala
# fraca/distante). Ligue so em audio muito ruidoso, p/ saida mais limpa:
# WATCH_WHISPER_VAD=1

# Air-gapped / sigilo maximo: no 1o uso o backend local baixa o MODELO do Whisper
# (so o modelo, nunca o audio). Pre-baixe o modelo uma vez e descomente a linha abaixo
# para proibir qualquer acesso de rede do transcritor local.
# HF_HUB_OFFLINE=1
"""


def _which(name: str) -> str | None:
    return shutil.which(name)


def _missing_binaries() -> list[str]:
    return [b for b in REQUIRED_BINARIES if not _which(b)]


# ------------------------------------------------- ambiente proprio (venv) do subsistema
# ESPELHO: providers.py repete _config_root/_venv_dir/_venv_site_packages para achar
# o mesmo venv na hora de transcrever. Duplicamos de proposito (12 linhas) em vez de
# um import cruzado: o instalador precisa rodar mesmo com o resto do motor quebrado.
# Mudou aqui, mude la.

def _config_root() -> Path:
    """Raiz de configuracao do usuario (XDG_CONFIG_HOME quando definido)."""
    xdg = (os.environ.get("XDG_CONFIG_HOME") or "").strip()
    return Path(xdg).expanduser() if xdg else Path.home() / ".config"


def _venv_dir() -> Path:
    return _config_root() / "criminalsquad" / "captura-venv"


def _venv_python(venv: Path) -> Path:
    return venv / ("Scripts" if os.name == "nt" else "bin") / ("python.exe" if os.name == "nt" else "python")


def _venv_matches_python(venv: Path) -> bool:
    """O venv foi criado com a mesma versao de Python que esta rodando agora?"""
    want = f"{sys.version_info.major}.{sys.version_info.minor}."
    try:
        for line in (venv / "pyvenv.cfg").read_text(encoding="utf-8", errors="replace").splitlines():
            key, _, val = line.partition("=")
            if key.strip().lower() == "version":
                return val.strip().startswith(want)
    except OSError:
        return False
    return False


def _venv_site_packages(venv: Path | None = None) -> Path | None:
    """site-packages do venv, SO se casar com a versao do Python que esta rodando.

    O caminho carrega a versao (lib/python3.14/site-packages). Se o usuario trocar de
    Python, o venv antigo vira lixo: melhor devolver None e mandar refazer o setup do
    que injetar extensoes C compiladas para outra ABI e quebrar no meio da transcricao.
    """
    venv = venv or _venv_dir()
    if os.name == "nt":
        # No Windows o caminho nao carrega a versao; a prova esta no pyvenv.cfg.
        if not _venv_matches_python(venv):
            return None
        candidate = venv / "Lib" / "site-packages"
    else:
        candidate = venv / f"lib/python{sys.version_info.major}.{sys.version_info.minor}" / "site-packages"
    return candidate if candidate.is_dir() else None


def _venv_has_dep() -> bool:
    """Checagem so de arquivo — importar faster-whisper custa segundos e o --check e quente."""
    sp = _venv_site_packages()
    return bool(sp and (sp / PY_DEP).is_dir())


def _has_python_dep() -> bool:
    """faster-whisper importavel no interpretador atual (instalacao normal via pip)."""
    # pip --user pode ter acabado de CRIAR o diretorio do usuario; o site.py so o
    # registra no proximo boot do Python, entao registramos aqui para nao acusar
    # falso negativo logo apos instalar.
    user_site = site.getusersitepackages()
    if isinstance(user_site, str) and user_site and user_site not in sys.path and Path(user_site).is_dir():
        sys.path.append(user_site)
    importlib.invalidate_caches()
    try:
        __import__(PY_DEP)
        return True
    except Exception:
        return False


def _local_backend_ready() -> bool:
    """Transcricao local disponivel — no Python do sistema OU no venv proprio."""
    return _has_python_dep() or _venv_has_dep()


def _brew_pkgs(missing: list[str]) -> list[str]:
    pkgs: list[str] = []
    for b in missing:
        pkg = "ffmpeg" if b in ("ffmpeg", "ffprobe") else b
        if pkg not in pkgs:
            pkgs.append(pkg)
    return pkgs


def _install_binaries(missing: list[str]) -> tuple[bool, str]:
    system = platform.system()
    pkgs = _brew_pkgs(missing)
    if system == "Darwin":
        if _which("brew") is None:
            return False, "Homebrew ausente (https://brew.sh). Depois: brew install " + " ".join(pkgs)
        cmd = ["brew", "install", *pkgs]
        print(f"[setup] {' '.join(cmd)}", file=sys.stderr)
        if subprocess.run(cmd).returncode != 0:
            return False, "brew install falhou"
        return True, f"instalado via brew: {', '.join(pkgs)}"
    if system == "Linux":
        hints = []
        if "ffmpeg" in pkgs:
            hints.append("`sudo apt install ffmpeg` (ou dnf)")
        if "yt-dlp" in pkgs:
            hints.append("`pipx install yt-dlp` (ou pip install --user yt-dlp)")
        return False, "instale manualmente: " + " ; ".join(hints)
    if system == "Windows":
        hints = []
        if "ffmpeg" in pkgs:
            hints.append("`winget install Gyan.FFmpeg`")
        if "yt-dlp" in pkgs:
            hints.append("`winget install yt-dlp.yt-dlp` (ou pip install --user yt-dlp)")
        return False, "instale manualmente: " + " ; ".join(hints)
    return False, f"plataforma {system} sem auto-install: instale {', '.join(pkgs)}"


def _is_externally_managed() -> bool:
    """PEP 668: o Python e 'gerenciado pelo sistema' (Homebrew, Debian/Ubuntu)?

    Nesses Pythons qualquer `pip install` no interpretador do sistema — inclusive
    com --user — e recusado com 'externally-managed-environment'. Detectamos ANTES
    de tentar para nao mostrar ao advogado um erro em ingles que ele nao pode resolver.
    """
    for key in ("stdlib", "platstdlib", "purelib"):
        try:
            path = sysconfig.get_path(key)
        except Exception:
            continue
        if path and (Path(path) / "EXTERNALLY-MANAGED").exists():
            return True
    return False


def _venv_creation_hint() -> str:
    system = platform.system()
    if system == "Linux":
        # Debian/Ubuntu separam o modulo venv num pacote a parte.
        return "instale o suporte a venv: `sudo apt install python3-venv` (ou dnf install python3-virtualenv)"
    return "verifique se o Python 3 esta completo (modulo `venv` disponivel)"


def _ensure_venv() -> tuple[Path | None, str]:
    """Cria (ou reaproveita) o ambiente Python proprio do captura."""
    venv = _venv_dir()
    if _venv_python(venv).exists() and _venv_site_packages(venv) is not None:
        return venv, f"ambiente proprio ja existe: {venv}"
    venv.parent.mkdir(parents=True, exist_ok=True)
    cmd = [sys.executable, "-m", "venv", str(venv)]
    print(f"[setup] criando ambiente proprio do captura em {venv}", file=sys.stderr)
    if subprocess.run(cmd).returncode != 0 or not _venv_python(venv).exists():
        return None, f"nao consegui criar o ambiente em {venv} — {_venv_creation_hint()}"
    return venv, f"ambiente proprio criado: {venv}"


def _install_python_dep() -> tuple[bool, str]:
    """Instala o faster-whisper (transcricao local) onde ele de fato consiga rodar.

    Caminho 1 (Python comum): pip install --user, como sempre foi.
    Caminho 2 (PEP 668 — Homebrew/Debian): pip no sistema e proibido, entao criamos
    um venv proprio do subsistema e instalamos dentro dele. O providers.py sabe achar
    esse venv na hora de transcrever.
    """
    if not _is_externally_managed():
        cmd = [sys.executable, "-m", "pip", "install", "--user", PY_DEP_PIP]
        print(f"[setup] {' '.join(cmd)}", file=sys.stderr)
        if subprocess.run(cmd).returncode == 0 and _has_python_dep():
            return True, f"instalado: {PY_DEP_PIP}"
        print("[setup] pip no Python do sistema nao resolveu — vou usar um ambiente proprio.", file=sys.stderr)
    else:
        print(
            "[setup] este Python e gerenciado pelo sistema (PEP 668) e nao aceita instalacao direta;"
            " vou usar um ambiente proprio do captura.",
            file=sys.stderr,
        )

    venv, msg = _ensure_venv()
    print(f"[setup] {msg}", file=sys.stderr)
    if venv is None:
        return False, f"{PY_DEP_PIP} nao instalado: sem ambiente proprio"

    cmd = [str(_venv_python(venv)), "-m", "pip", "install", PY_DEP_PIP]
    print(f"[setup] {' '.join(cmd)}", file=sys.stderr)
    if subprocess.run(cmd).returncode != 0 or not _venv_has_dep():
        return False, (
            f"pip install {PY_DEP_PIP} falhou dentro de {venv}. "
            f"Rode a mao para ver o erro: {_venv_python(venv)} -m pip install {PY_DEP_PIP}"
        )
    return True, f"instalado: {PY_DEP_PIP} (ambiente proprio em {venv})"


def _status() -> dict:
    missing = _missing_binaries()
    in_system = _has_python_dep()
    in_venv = _venv_has_dep()
    has_local = in_system or in_venv
    has_openrouter = bool((os.environ.get("OPENROUTER_API_KEY") or "").strip())
    # Pronto = da para transcrever localmente (o padrao): binarios + faster-whisper.
    ready = (not missing) and has_local
    return {
        "ready": ready,
        "missing_binaries": missing,
        "local_transcription": has_local,
        # De onde sai o transcritor local — util para diagnosticar suporte a distancia.
        "local_transcription_source": ("sistema" if in_system else ("venv" if in_venv else None)),
        "venv_dir": str(_venv_dir()),
        "externally_managed": _is_externally_managed(),
        "openrouter_available": has_openrouter,
        "config_file": str(CONFIG_FILE),
        "platform": platform.system(),
    }


def cmd_check() -> int:
    """Preflight. Saida deterministica: 0 = pronto, 2 = falta algo (sempre 2)."""
    s = _status()
    if s["ready"]:
        return 0
    lines = ["[captura] setup incompleto — ainda nao da para transcrever. Falta:"]
    for binary in s["missing_binaries"]:
        lines.append(f"  - {binary} (extrai o audio/video do arquivo)")
    if not s["local_transcription"]:
        lines.append(f"  - {PY_DEP_PIP} (transcricao local, offline, sem enviar audio para ninguem)")
    # Aponta o passo que RESOLVE. O instalador agora tem saida para Python gerenciado
    # pelo sistema (PEP 668), entao rodar de novo nao cai no mesmo erro de antes.
    lines.append("[captura] resolva com um comando so: npx criminalsquad captura setup")
    lines.append(f"[captura] (equivalente direto: python3 {Path(__file__).resolve()})")
    sys.stderr.write("\n".join(lines) + "\n")
    return 2


def cmd_json() -> int:
    json.dump(_status(), sys.stdout, indent=2)
    sys.stdout.write("\n")
    return 0


def _scaffold_env() -> None:
    if CONFIG_FILE.exists():
        print(f"[setup] config existe: {CONFIG_FILE}")
        return
    CONFIG_DIR.mkdir(parents=True, exist_ok=True)
    CONFIG_FILE.write_text(ENV_TEMPLATE, encoding="utf-8")
    try:
        CONFIG_FILE.chmod(0o600)
    except OSError:
        pass
    print(f"[setup] criado: {CONFIG_FILE}")


def cmd_install() -> int:
    # O .env vem PRIMEIRO: ele nao depende de nada e o advogado precisa dele mesmo
    # quando a instalacao emperra (e onde ficam modelo do Whisper, idioma e sigilo).
    _scaffold_env()

    missing = _missing_binaries()
    if missing:
        ok, msg = _install_binaries(missing)
        print(f"[setup] {msg}", file=sys.stderr)
        if not ok or _missing_binaries():
            return 2
    if not _local_backend_ready():
        ok, msg = _install_python_dep()
        print(f"[setup] {msg}", file=sys.stderr)
        if not ok or not _local_backend_ready():
            return 2
    print("[setup] pronto — transcricao LOCAL disponivel (offline, sigilo-safe).")
    if _venv_has_dep() and not _has_python_dep():
        print(f"[setup] transcritor local instalado no ambiente proprio: {_venv_dir()}")
    print("[setup] OpenRouter e opcional (so midia publica): edite OPENROUTER_API_KEY em", CONFIG_FILE)
    return 0


def main() -> int:
    if len(sys.argv) > 1:
        if sys.argv[1] == "--check":
            return cmd_check()
        if sys.argv[1] == "--json":
            return cmd_json()
    return cmd_install()


if __name__ == "__main__":
    raise SystemExit(main())
