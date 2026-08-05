#!/usr/bin/env python3
"""Download a video via yt-dlp, or resolve a local file path.

Also fetches subtitles (manual first, then auto-generated) in VTT format so
transcribe.py can parse them without needing Whisper.

Fidelidade probatoria: em midia brasileira a legenda tem que ser a PORTUGUESA.
Uma legenda em ingles gerada pelo YouTube e TRADUCAO AUTOMATICA do audio em PT;
se ela for escolhida, substitui a transcricao do audio original e o advogado
acabaria citando minutagem de audiencia a partir de texto traduzido por maquina.
Por isso aqui: (1) pedimos pt antes de en, (2) ordenamos os candidatos por idioma
e (3) descartamos legenda que seja traducao automatica de outro idioma.
"""
from __future__ import annotations

import json
import shutil
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlparse


VIDEO_EXTS = {".mp4", ".mkv", ".webm", ".mov", ".m4v", ".avi", ".flv", ".wmv"}

# O que pedimos ao yt-dlp, nesta ordem. `pt.*` ja cobriria pt-BR/pt-PT/pt-orig,
# mas as variantes ficam explicitas para quem le o comando entender a intencao.
SUB_LANGS_REQUEST = "pt.*,pt-BR.*,pt-PT.*,en.*"

# Ordem de preferencia ao ESCOLHER entre os arquivos .vtt que chegaram.
SUBTITLE_LANG_PRIORITY = ("pt-br", "pt-pt", "pt", "en")


def is_url(source: str) -> bool:
    if source.startswith("-"):
        return False
    parsed = urlparse(source)
    return parsed.scheme in ("http", "https") and bool(parsed.netloc)


def resolve_local(path: str) -> dict:
    p = Path(path).expanduser().resolve()
    if not p.exists():
        raise SystemExit(f"File not found: {p}")
    if p.suffix.lower() not in VIDEO_EXTS:
        print(
            f"[watch] warning: {p.suffix} is not a known video extension, proceeding anyway",
            file=sys.stderr,
        )
    return {
        "video_path": str(p),
        "subtitle_path": None,
        # Arquivo local nao traz legenda embutida por este caminho: o audio e
        # sempre transcrito, que e justamente a fonte mais fiel.
        "subtitle_lang": None,
        "subtitle_origin": None,
        "subtitle_label": "sem legenda (arquivo local — transcricao do audio)",
        "subtitle_discarded": [],
        "info": {"title": p.name, "url": str(p)},
        "downloaded": False,
    }


def _subtitle_lang(path: Path) -> str:
    """Extrai o idioma do nome que o yt-dlp gera: video.<lang>.vtt -> <lang>."""
    stem = path.name[: -len(".vtt")] if path.name.endswith(".vtt") else path.name
    _, _, lang = stem.partition("video.")
    return lang or "desconhecido"


def _base_lang(lang: str) -> str:
    """Reduz a tag ao idioma-raiz: pt-BR -> pt, en-US -> en, pt-orig -> pt."""
    return lang.lower().replace("_", "-").split("-")[0]


def _lang_rank(lang: str) -> int:
    normalized = lang.lower().replace("_", "-")
    for index, preferred in enumerate(SUBTITLE_LANG_PRIORITY):
        if normalized == preferred or normalized.startswith(preferred + "-"):
            return index
    # Idioma fora da lista fica por ultimo, mas nunca e descartado por aqui:
    # um video em espanhol legendado em espanhol ainda e melhor que nada.
    return len(SUBTITLE_LANG_PRIORITY)


def _ranked_subtitles(out_dir: Path) -> list[Path]:
    """Legendas baixadas, da mais desejavel para a menos.

    Ordena por idioma (pt-BR > pt-PT > pt > en > resto) e, no empate, pelo nome —
    assim a escolha e deterministica e nao depende da ordem do sistema de arquivos.
    """
    candidates = list(out_dir.glob("video*.vtt"))
    return sorted(candidates, key=lambda c: (_lang_rank(_subtitle_lang(c)), c.name))


def _describe_subtitle(subtitle: Path, raw: dict) -> dict:
    """Rotula a legenda: idioma, origem (manual/automatica) e se e traducao de outro idioma."""
    lang = _subtitle_lang(subtitle)
    manual = set(raw.get("subtitles") or {})
    automatic = set(raw.get("automatic_captions") or {})
    if lang in manual:
        origin = "manual"
    elif lang in automatic:
        origin = "automatica"
    else:
        origin = "desconhecida"

    # Traducao automatica so e afirmavel comparando com o idioma do proprio video.
    # Sem esse dado no info.json nao ha como saber, e nao afirmamos o que nao sabemos.
    video_lang = str(raw.get("language") or "")
    translated = (
        origin == "automatica"
        and bool(video_lang)
        and _base_lang(lang) != _base_lang(video_lang)
    )

    if translated:
        label = f"{lang} (traducao automatica a partir de {video_lang})"
    elif origin == "manual":
        label = f"{lang} (legenda do proprio material)"
    elif origin == "automatica":
        label = f"{lang} (legenda automatica no idioma original)"
    else:
        label = f"{lang} (origem nao declarada pela fonte)"

    return {
        "path": subtitle,
        "lang": lang,
        "origin": origin,
        "translated": translated,
        "label": label,
    }


def _resolve_subtitle(out_dir: Path, raw: dict) -> dict:
    """Escolhe a legenda utilizavel e a rotula; descarta traducao de maquina.

    Descartar e o ponto central: a legenda traduzida SUBSTITUIRIA a transcricao do
    audio original. Devolvendo path=None, o watch.py cai na transcricao local do
    audio em portugues — mais lento, porem fiel ao que foi efetivamente dito.
    """
    descartadas: list[str] = []
    for candidate in _ranked_subtitles(out_dir):
        described = _describe_subtitle(candidate, raw)
        if not described["translated"]:
            print(f"[captura] legenda usada: {described['label']}", file=sys.stderr)
            return {**described, "path": str(candidate), "discarded": descartadas}
        descartadas.append(described["label"])

    if descartadas:
        print(
            "[captura] legenda descartada (" + "; ".join(descartadas) + "): e traducao "
            "automatica, nao o que foi dito. Vou transcrever o audio original.",
            file=sys.stderr,
        )
    return {
        "path": None,
        "lang": None,
        "origin": None,
        "translated": False,
        "label": "sem legenda utilizavel" if descartadas else "sem legenda",
        "discarded": descartadas,
    }


def _pick_video(out_dir: Path) -> Path | None:
    for ext in (".mp4", ".mkv", ".webm", ".mov", ".m4a", ".mp3", ".opus"):
        for candidate in out_dir.glob(f"video*{ext}"):
            return candidate
    for candidate in out_dir.glob("video.*"):
        if candidate.suffix.lower() in VIDEO_EXTS:
            return candidate
    return None


def fetch_captions(url: str, out_dir: Path) -> dict:
    """Fetch metadata and best available VTT captions without downloading video."""
    if shutil.which("yt-dlp") is None:
        raise SystemExit("yt-dlp is not installed. Install with: brew install yt-dlp")

    out_dir.mkdir(parents=True, exist_ok=True)
    output_template = str(out_dir / "video.%(ext)s")
    cmd = [
        "yt-dlp",
        "--skip-download",
        "--write-info-json",
        "--write-subs",
        "--write-auto-subs",
        "--sub-langs", SUB_LANGS_REQUEST,
        "--sub-format", "vtt",
        "--convert-subs", "vtt",
        "--no-playlist",
        "--ignore-errors",
        "-o", output_template,
        "--",
        url,
    ]
    subprocess.run(cmd, stdout=sys.stderr, stderr=sys.stderr)
    raw = _load_raw_info(out_dir / "video.info.json")
    subtitle = _resolve_subtitle(out_dir, raw)
    info = _read_info(raw, url)
    return {
        "video_path": None,
        "subtitle_path": subtitle["path"],
        "subtitle_lang": subtitle["lang"],
        "subtitle_origin": subtitle["origin"],
        "subtitle_label": subtitle["label"],
        "subtitle_discarded": subtitle["discarded"],
        "info": info or {"url": url},
        "downloaded": False,
    }


def _load_raw_info(info_path: Path) -> dict:
    """info.json cru do yt-dlp — precisamos dele inteiro para saber a origem da legenda."""
    if not info_path.exists():
        return {}
    try:
        return json.loads(info_path.read_text(encoding="utf-8"))
    except Exception as exc:
        print(f"[watch] info.json parse failed: {exc}", file=sys.stderr)
        return {}


def _read_info(raw: dict, url: str) -> dict:
    if not raw:
        return {}
    return {
        "title": raw.get("title"),
        "uploader": raw.get("uploader") or raw.get("channel"),
        "duration": raw.get("duration"),
        "url": raw.get("webpage_url") or url,
    }


def download_url(
    url: str,
    out_dir: Path,
    audio_only: bool = False,
) -> dict:
    if shutil.which("yt-dlp") is None:
        raise SystemExit("yt-dlp is not installed. Install with: brew install yt-dlp")

    out_dir.mkdir(parents=True, exist_ok=True)
    output_template = str(out_dir / "video.%(ext)s")

    fmt = "ba/bestaudio" if audio_only else "bv*[height<=720]+ba/b[height<=720]/bv+ba/b"
    cmd = [
        "yt-dlp",
        "-N", "8",
        "-f", fmt,
        "--merge-output-format", "mp4",
        "--write-info-json",
        "--write-subs",
        "--write-auto-subs",
        "--sub-langs", SUB_LANGS_REQUEST,
        "--sub-format", "vtt",
        "--convert-subs", "vtt",
        "--no-playlist",
        "--ignore-errors",
        "-o", output_template,
        "--",
        url,
    ]

    # yt-dlp may exit non-zero if a subtitle variant fails (e.g. 429) even when
    # the video itself downloaded fine. Treat "video file present" as success.
    result = subprocess.run(cmd, stdout=sys.stderr, stderr=sys.stderr)
    video = _pick_video(out_dir)
    if video is None:
        raise SystemExit(
            f"yt-dlp did not produce a video file in {out_dir} (exit {result.returncode})"
        )

    raw = _load_raw_info(out_dir / "video.info.json")
    subtitle = _resolve_subtitle(out_dir, raw)
    info = _read_info(raw, url)

    return {
        "video_path": str(video),
        "subtitle_path": subtitle["path"],
        "subtitle_lang": subtitle["lang"],
        "subtitle_origin": subtitle["origin"],
        "subtitle_label": subtitle["label"],
        "subtitle_discarded": subtitle["discarded"],
        "info": info or {"url": url},
        "downloaded": True,
    }


def download(
    source: str,
    out_dir: Path,
    audio_only: bool = False,
) -> dict:
    if is_url(source):
        return download_url(source, out_dir, audio_only=audio_only)
    return resolve_local(source)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("usage: download.py <url-or-path> <out-dir>", file=sys.stderr)
        raise SystemExit(2)
    result = download(sys.argv[1], Path(sys.argv[2]))
    print(json.dumps(result, indent=2))
