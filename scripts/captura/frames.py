#!/usr/bin/env python3
"""Probe video metadata and extract frames at an auto-scaled fps.

Auto-fps targets a frame budget, not a fixed rate. Token cost scales with frame
count, so budget-by-duration keeps short videos dense and long videos capped.
When a user-specified range is passed, focused-mode budgets denser (they are
zooming in for detail).
"""
from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
from pathlib import Path


MAX_FPS = 2.0
SCENE_THRESHOLD = 0.20
# Keep scene-detection results once we have at least this many distinct shots.
# Below this the video is effectively static (screen recording, talking head),
# so we fall back to uniform sampling. Matching the reference fork's behaviour,
# this is a low floor — NOT the frame budget — so normal videos with cuts use
# the (single-pass) scene engine instead of paying for a wasted second decode.
SCENE_MIN_FRAMES = 8
# Below this many decoded keyframes a clip is too sparse for keyframe coverage
# (very short or oddly encoded), so the cheap tier falls back to uniform.
KEYFRAME_MIN = 4
MAX_READ_DIMENSION = 1998
# Colapso de quadros semelhantes: cada frame vira uma miniatura
# DEDUP_THUMB x DEDUP_THUMB **em COR** (rgb24) e dois quadros so sao tratados como
# o mesmo momento quando a metrica de diferenca fica em DEDUP_THRESHOLD ou abaixo.
#
# Por que COR e por BLOCO (e nao media global em cinza): num contexto forense o que
# importa e o objeto pequeno (uma pessoa a 40x90 px num quadro 640x480) e a mudanca
# so de cor (semaforo, farol, roupa). A media global em cinza afogava os dois: o
# objeto pequeno virava ~1,9 de delta (abaixo do limiar) e vermelho->verde dava 0,0
# porque as lumas coincidem. Aqui a diferenca e o MAXIMO entre os canais R/G/B por
# pixel (enxerga cor) e o score final e o MAXIMO entre blocos DEDUP_BLOCK x
# DEDUP_BLOCK (a mudanca local nao e diluida pelo resto do quadro parado).
DEDUP_THUMB = 32
DEDUP_BLOCK = 4
DEDUP_THRESHOLD = 2.0
# Subpasta para onde vao os quadros colapsados. Nunca se apaga um quadro extraido:
# em processo penal o arquivo movido pode ser reexaminado; o apagado nao.
COLLAPSED_DIRNAME = "_colapsados"
SHOWINFO_TS_RE = re.compile(r"pts_time:([0-9.]+)")


def _scale_filter(resolution: int) -> str:
    return (
        f"scale=w='min({resolution},iw)':h='min({MAX_READ_DIMENSION},ih)':"
        "force_original_aspect_ratio=decrease:force_divisible_by=2"
    )


def _clamp_fps(fps: float, duration_seconds: float, max_frames: int) -> tuple[float, int]:
    fps = min(fps, MAX_FPS)
    target = min(max_frames, max(1, int(round(fps * duration_seconds))))
    return fps, target


def parse_time(value: str | float | int | None) -> float | None:
    """Parse SS, MM:SS, or HH:MM:SS (with optional .ms) into seconds."""
    if value is None:
        return None
    if isinstance(value, (int, float)):
        return float(value)
    s = str(value).strip()
    if not s:
        return None
    parts = s.split(":")
    try:
        if len(parts) == 1:
            return float(parts[0])
        if len(parts) == 2:
            return int(parts[0]) * 60 + float(parts[1])
        if len(parts) == 3:
            return int(parts[0]) * 3600 + int(parts[1]) * 60 + float(parts[2])
    except ValueError:
        pass
    raise SystemExit(f"Cannot parse time value: {value!r} (expected SS, MM:SS, or HH:MM:SS)")


def format_time(seconds: float) -> str:
    total = int(round(seconds))
    hours, rem = divmod(total, 3600)
    minutes, sec = divmod(rem, 60)
    if hours:
        return f"{hours}:{minutes:02d}:{sec:02d}"
    return f"{minutes:02d}:{sec:02d}"


def get_metadata(video_path: str) -> dict:
    if shutil.which("ffprobe") is None:
        raise SystemExit("ffprobe is not installed. Install with: brew install ffmpeg")

    result = subprocess.run(
        [
            "ffprobe",
            # -v error (nao "quiet"): com "quiet" o ffprobe engolia o log e a mensagem
            # de erro abaixo saia SEMPRE vazia ("ffprobe falhou:" sem motivo nenhum).
            "-v", "error",
            "-print_format", "json",
            "-show_format",
            "-show_streams",
            str(Path(video_path).resolve()),
        ],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise SystemExit(
            "Nao consegui ler o arquivo de midia. Confira se o caminho esta certo e se o "
            "arquivo abre num player comum (pode estar corrompido ou incompleto). "
            f"Detalhe tecnico: {result.stderr.strip() or 'ffprobe nao informou o motivo'}"
        )

    data = json.loads(result.stdout or "{}")
    streams = data.get("streams", [])
    fmt = data.get("format", {})
    video_stream = next((s for s in streams if s.get("codec_type") == "video"), {})
    audio_stream = next((s for s in streams if s.get("codec_type") == "audio"), None)

    duration = float(fmt.get("duration") or video_stream.get("duration") or 0)
    return {
        "duration_seconds": duration,
        "width": video_stream.get("width"),
        "height": video_stream.get("height"),
        "codec": video_stream.get("codec_name"),
        "size_bytes": int(fmt.get("size") or 0),
        "has_audio": audio_stream is not None,
        # Quem chama decide o modo ANTES de tentar extrair frames: um mp3/m4a dos
        # autos nao tem o que extrair, e insistir so produz erro cru do ffmpeg.
        "has_video": bool(video_stream),
    }


def auto_fps(duration_seconds: float, max_frames: int = 100) -> tuple[float, int]:
    """Pick fps that targets a sensible frame budget for full-video scans."""
    if duration_seconds <= 0:
        return 1.0, 1

    if duration_seconds <= 30:
        target = min(max_frames, max(12, int(round(duration_seconds))))
    elif duration_seconds <= 60:
        target = min(max_frames, 40)
    elif duration_seconds <= 180:  # 3 min
        target = min(max_frames, 60)
    elif duration_seconds <= 600:  # 10 min
        target = min(max_frames, 80)
    else:
        target = max_frames

    return _clamp_fps(target / duration_seconds, duration_seconds, max_frames)


def auto_fps_focus(duration_seconds: float, max_frames: int = 100) -> tuple[float, int]:
    """Denser budget for user-specified ranges — they are zooming in for detail."""
    if duration_seconds <= 0:
        return min(MAX_FPS, 2.0), 2

    if duration_seconds <= 5:
        target = min(max_frames, max(10, int(round(duration_seconds * 6))))
    elif duration_seconds <= 15:
        target = min(max_frames, max(30, int(round(duration_seconds * 4))))
    elif duration_seconds <= 30:
        target = min(max_frames, 60)
    elif duration_seconds <= 60:
        target = min(max_frames, 80)
    elif duration_seconds <= 180:
        target = max_frames
    else:
        target = max_frames

    return _clamp_fps(target / duration_seconds, duration_seconds, max_frames)


def extract(
    video_path: str,
    out_dir: Path,
    fps: float,
    resolution: int = 512,
    max_frames: int = 100,
    start_seconds: float | None = None,
    end_seconds: float | None = None,
) -> list[dict]:
    if shutil.which("ffmpeg") is None:
        raise SystemExit("ffmpeg is not installed. Install with: brew install ffmpeg")

    out_dir.mkdir(parents=True, exist_ok=True)
    for existing in out_dir.glob("frame_*.jpg"):
        existing.unlink()

    output_pattern = str(out_dir / "frame_%04d.jpg")
    cmd: list[str] = [
        "ffmpeg",
        "-hide_banner",
        "-loglevel", "error",
        "-y",
    ]

    # -ss before -i = fast seek (keyframe-snap, good enough for preview frames).
    if start_seconds is not None:
        cmd += ["-ss", f"{start_seconds:.3f}"]
    if end_seconds is not None:
        cmd += ["-to", f"{end_seconds:.3f}"]

    cmd += [
        "-i", str(Path(video_path).resolve()),
        "-vf", f"fps={fps},{_scale_filter(resolution)}",
        "-frames:v", str(max_frames),
        "-q:v", "4",
        output_pattern,
    ]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(
            "Nao consegui extrair os frames deste arquivo. Se ele for so de audio "
            "(mp3/m4a/ogg/wav), nao ha imagem para extrair — rode com `--detail transcript` "
            "para obter so a transcricao. Se for video, confira se o arquivo abre num player "
            f"comum. Detalhe tecnico: {result.stderr.strip() or 'ffmpeg nao informou o motivo'}"
        )

    offset = start_seconds or 0.0
    frames = sorted(out_dir.glob("frame_*.jpg"))
    return [
        {
            "index": i,
            "timestamp_seconds": round(offset + (i / fps if fps > 0 else 0.0), 2),
            "path": str(p),
            "reason": "uniform",
        }
        for i, p in enumerate(frames)
    ]


def extract_scene_candidates(
    video_path: str,
    out_dir: Path,
    resolution: int = 512,
    max_frames: int | None = 100,
    start_seconds: float | None = None,
    end_seconds: float | None = None,
    threshold: float = SCENE_THRESHOLD,
) -> list[dict]:
    """Extract first frame plus ffmpeg scene-change frames.

    When ``max_frames`` is set, ``-frames:v`` lets ffmpeg stop decoding once it
    has emitted that many frames (early exit) and avoids writing extras that we
    would only delete afterwards. ``None`` (uncapped "complete" detail) keeps
    every detected shot, as the user explicitly opted in.
    """
    if shutil.which("ffmpeg") is None:
        raise SystemExit("ffmpeg is not installed. Install with: brew install ffmpeg")

    out_dir.mkdir(parents=True, exist_ok=True)
    for existing in out_dir.glob("frame_*.jpg"):
        existing.unlink()

    output_pattern = str(out_dir / "frame_%04d.jpg")
    cmd: list[str] = [
        "ffmpeg",
        "-hide_banner",
        "-loglevel", "info",
        "-y",
    ]
    if start_seconds is not None:
        cmd += ["-ss", f"{start_seconds:.3f}"]
    if end_seconds is not None:
        cmd += ["-to", f"{end_seconds:.3f}"]

    vf = f"select='eq(n\\,0)+gt(scene\\,{threshold})',{_scale_filter(resolution)},showinfo"
    cmd += [
        "-i", str(Path(video_path).resolve()),
        "-vf", vf,
        "-vsync", "vfr",
    ]
    if max_frames is not None:
        cmd += ["-frames:v", str(max_frames)]
    cmd += [
        "-q:v", "4",
        output_pattern,
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(
            "Nao consegui extrair os frames deste arquivo (deteccao de cenas). Se ele for so de "
            "audio (mp3/m4a/ogg/wav), nao ha imagem para extrair — rode com `--detail transcript` "
            "para obter so a transcricao. Se for video, confira se o arquivo abre num player "
            f"comum. Detalhe tecnico: {result.stderr.strip() or 'ffmpeg nao informou o motivo'}"
        )

    offset = start_seconds or 0.0
    timestamps = [round(offset + float(match.group(1)), 2) for match in SHOWINFO_TS_RE.finditer(result.stderr)]
    frames = sorted(out_dir.glob("frame_*.jpg"))
    out: list[dict] = []
    for i, path in enumerate(frames):
        ts = timestamps[i] if i < len(timestamps) else offset
        out.append({
            "index": i,
            "timestamp_seconds": ts,
            "path": str(path),
            "reason": "first-frame" if i == 0 else "scene-change",
        })
    return out


def _even_indices(count: int, n: int) -> list[int]:
    """Indices of ``n`` evenly-spaced items out of ``count`` (first + last kept).

    ``n >= count`` returns every index; ``n == 1`` returns just the first.
    """
    if n >= count:
        return list(range(count))
    if n <= 1:
        return [0]
    return [round(i * (count - 1) / (n - 1)) for i in range(n)]


def parse_timestamps(value: str | None) -> list[float]:
    """Parse a comma-separated list of times (SS, MM:SS, HH:MM:SS) into a
    sorted, de-duplicated list of seconds. Empty/blank tokens are skipped;
    an unparseable token raises (via :func:`parse_time`)."""
    if not value:
        return []
    out: list[float] = []
    for token in value.split(","):
        token = token.strip()
        if not token:
            continue
        seconds = parse_time(token)
        if seconds is not None:
            out.append(float(seconds))
    return sorted(set(out))


def merge_frames(primary: list[dict], pinned: list[dict]) -> list[dict]:
    """Combine two frame lists into one chronological list and reindex 0..n-1.

    ``pinned`` frames (transcript cues) are never dropped — this is a plain
    union, so the cap is enforced upstream by reserving budget for the cues.
    """
    merged = sorted([*primary, *pinned], key=lambda f: f["timestamp_seconds"])
    for i, frame in enumerate(merged):
        frame["index"] = i
    return merged


def extract_at_timestamps(
    video_path: str,
    out_dir: Path,
    timestamps: list[float],
    resolution: int = 512,
    max_frames: int | None = None,
    start_seconds: float | None = None,
    end_seconds: float | None = None,
) -> tuple[list[dict], dict]:
    """Grab exactly one frame at each requested timestamp (transcript cues).

    Timestamps are absolute source seconds. Any falling outside an active
    ``[start, end]`` focus window are dropped. Files use a ``cue_*.jpg`` prefix
    so they sit alongside detail-engine ``frame_*.jpg`` output without either
    clobbering the other. When more cues than ``max_frames`` survive, they are
    even-sampled (first + last kept) before extraction.
    """
    if shutil.which("ffmpeg") is None:
        raise SystemExit("ffmpeg is not installed. Install with: brew install ffmpeg")

    out_dir.mkdir(parents=True, exist_ok=True)
    for existing in out_dir.glob("cue_*.jpg"):
        existing.unlink()

    lo = start_seconds or 0.0
    hi = end_seconds if end_seconds is not None else float("inf")
    requested = sorted(set(round(float(t), 2) for t in timestamps))
    in_window = [t for t in requested if lo <= t <= hi]
    dropped = len(requested) - len(in_window)

    if max_frames is not None and len(in_window) > max_frames:
        points = [in_window[i] for i in _even_indices(len(in_window), max_frames)]
    else:
        points = in_window

    out: list[dict] = []
    for t in points:
        path = out_dir / f"cue_{len(out):04d}.jpg"
        cmd = [
            "ffmpeg",
            "-hide_banner",
            "-loglevel", "error",
            "-y",
            "-ss", f"{t:.3f}",
            "-i", str(Path(video_path).resolve()),
            "-frames:v", "1",
            "-vf", _scale_filter(resolution),
            "-q:v", "4",
            str(path),
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0 and path.exists():
            out.append({
                "index": len(out),
                "timestamp_seconds": t,
                "path": str(path),
                "reason": "transcript-cue",
            })

    meta = {
        "engine": "timestamps",
        "candidate_count": len(requested),
        "selected_count": len(out),
        "dropped_out_of_window": dropped,
        "fallback": False,
    }
    return out, meta


def _even_sample(candidates: list[dict], n: int) -> list[dict]:
    """Pick ``n`` evenly-spaced candidates (always including first and last),
    delete the JPEGs we drop, and reindex the survivors 0..len-1.

    Shared by every capped engine so all detail modes sample the same way:
    detect all candidates across the full range, then thin down to the cap.
    ``n >= len(candidates)`` keeps everything (the uncapped / under-cap case).
    """
    selected = [candidates[i] for i in _even_indices(len(candidates), n)]

    keep_paths = {sel["path"] for sel in selected}
    for cand in candidates:
        if cand["path"] not in keep_paths:
            try:
                Path(cand["path"]).unlink()
            except OSError:
                pass
    for i, frame in enumerate(selected):
        frame["index"] = i
    return selected


THUMB_BYTES = DEDUP_THUMB * DEDUP_THUMB * 3


def _frame_delta(a: bytes, b: bytes) -> float:
    """Diferenca entre duas miniaturas RGB: MAXIMO, entre os blocos, da media do
    bloco — onde cada pixel contribui com o maior desvio entre os canais R/G/B.

    Duas escolhas deliberadas, ambas para nao perder prova:
    - **por canal (nao luma):** vermelho e verde de mesma luminancia sao mudanca
      visivel e tem de pontuar; em cinza davam diferenca zero;
    - **maximo por bloco (nao media global):** uma pessoa entrando num canto do
      quadro muda poucos pixels; a media do quadro inteiro diluia isso abaixo do
      limiar e o quadro era descartado.

    Tamanhos incompativeis contam como diferenca maxima, para que uma falha de
    decodificacao nunca junte quadros distintos.
    """
    if not a or len(a) != len(b) or len(a) != THUMB_BYTES:
        return float("inf")

    n = DEDUP_THUMB
    per_pixel = [0] * (n * n)
    for i in range(n * n):
        o = i * 3
        per_pixel[i] = max(
            abs(a[o] - b[o]),
            abs(a[o + 1] - b[o + 1]),
            abs(a[o + 2] - b[o + 2]),
        )

    block = DEDUP_BLOCK
    area = block * block
    worst = 0.0
    for by in range(0, n, block):
        for bx in range(0, n, block):
            total = 0
            for y in range(by, by + block):
                row = y * n
                for x in range(bx, bx + block):
                    total += per_pixel[row + x]
            score = total / area
            if score > worst:
                worst = score
    return worst


def _thumb_frames(paths: list[Path]) -> list[bytes]:
    """Decode every frame in ``paths`` to a small RGB thumbnail via one ffmpeg
    pass over the JPEG sequence.

    ffmpeg does the pixel decode (keeps us pure-stdlib); we slice the raw
    ``rgb24`` stream into one ``DEDUP_THUMB``-square thumbnail per frame.
    Fail-open: any ffmpeg error, an unrecognized name, or a byte-count mismatch
    returns ``[]`` so the caller skips dedup rather than breaking extraction.
    """
    if not paths:
        return []
    paths = [Path(p) for p in paths]
    m = re.match(r"(.*?)(\d+)(\.[A-Za-z0-9]+)$", paths[0].name)
    if m is None:
        return []
    prefix, digits, ext = m.group(1), m.group(2), m.group(3)
    pattern = str(paths[0].parent / f"{prefix}%0{len(digits)}d{ext}")

    cmd = [
        "ffmpeg",
        "-hide_banner",
        "-loglevel", "error",
        "-start_number", str(int(digits)),
        "-i", pattern,
        # rgb24 (nao gray): sem os tres canais, uma troca puramente cromatica
        # (vermelho -> verde) tem diferenca zero e o quadro seria colapsado.
        "-vf", f"scale={DEDUP_THUMB}:{DEDUP_THUMB},format=rgb24",
        "-f", "rawvideo",
        "-",
    ]
    result = subprocess.run(cmd, capture_output=True)
    if result.returncode != 0:
        return []

    chunk = THUMB_BYTES
    data = result.stdout
    if len(data) != chunk * len(paths):
        return []
    return [data[i * chunk:(i + 1) * chunk] for i in range(len(paths))]


def dedupe_perceptual(
    candidates: list[dict], threshold: float = DEDUP_THRESHOLD
) -> tuple[list[dict], int, list[dict]]:
    """Colapsa quadros muito semelhantes numa lista cronologica de candidatos.

    Retorna ``(mantidos, quantidade_colapsada, intervalos_colapsados)``. Nada e
    apagado: os quadros colapsados vao para a subpasta ``_colapsados/``. Vira
    no-op (lista intacta, zero intervalos) quando as miniaturas nao saem ou ha
    menos de dois candidatos.
    """
    if len(candidates) <= 1:
        return candidates, 0, []
    thumbs = _thumb_frames([Path(c["path"]) for c in candidates])
    return _dedupe_by_deltas(candidates, thumbs, threshold)


def collapsed_dir_for(candidates: list[dict]) -> Path | None:
    """Pasta ``_colapsados/`` ao lado dos frames extraidos (None se lista vazia)."""
    if not candidates:
        return None
    return Path(candidates[0]["path"]).parent / COLLAPSED_DIRNAME


def _dedupe_by_deltas(
    candidates: list[dict], thumbs: list[bytes], threshold: float = DEDUP_THRESHOLD
) -> tuple[list[dict], int, list[dict]]:
    """Colapsa, em cadeia, os quadros a ``threshold`` ou menos do ultimo quadro
    MANTIDO, **movendo** (nunca apagando) o JPEG para ``_colapsados/`` e
    reindexando os sobreviventes 0..n-1.

    Mover em vez de apagar e um requisito probatorio: o quadro colapsado continua
    disponivel para reexame/contraprova, e o relatorio publica os intervalos em que
    houve colapso — quem le sabe exatamente onde a listagem nao e exaustiva.

    Fail-open: se ``thumbs`` nao casar 1:1 com ``candidates``, devolve tudo intacto.
    """
    if len(thumbs) != len(candidates) or len(candidates) <= 1:
        return candidates, 0, []

    kept = [candidates[0]]
    last = thumbs[0]
    dropped: list[dict] = []
    ranges: list[dict] = []
    open_range = False
    for cand, thumb in zip(candidates[1:], thumbs[1:]):
        if _frame_delta(thumb, last) <= threshold:
            dropped.append(cand)
            ts = cand["timestamp_seconds"]
            if open_range:
                ranges[-1]["end"] = ts
                ranges[-1]["count"] += 1
            else:
                ranges.append({"start": ts, "end": ts, "count": 1})
                open_range = True
        else:
            kept.append(cand)
            last = thumb
            open_range = False

    target = collapsed_dir_for(candidates)
    if dropped and target is not None:
        target.mkdir(parents=True, exist_ok=True)
        # Sobras de uma execucao ANTERIOR no mesmo diretorio de trabalho: extract()
        # ja limpa os frame_*.jpg da pasta principal pelo mesmo motivo. Nenhum quadro
        # da captura atual e removido aqui.
        for stale in target.glob("*.jpg"):
            try:
                stale.unlink()
            except OSError:
                pass
        for cand in dropped:
            src = Path(cand["path"])
            try:
                src.replace(target / src.name)
                cand["path"] = str(target / src.name)
            except OSError:
                pass
    for i, frame in enumerate(kept):
        frame["index"] = i
    return kept, len(dropped), ranges


def extract_scene_or_uniform(
    video_path: str,
    out_dir: Path,
    fps: float,
    target_frames: int,
    resolution: int = 512,
    max_frames: int | None = 100,
    start_seconds: float | None = None,
    end_seconds: float | None = None,
    dedup: bool = True,
) -> tuple[list[dict], dict]:
    """Prefer scene selection, falling back to uniform only when the video is
    effectively static (fewer than ``SCENE_MIN_FRAMES`` detected shots).

    Scene cuts are detected across the *whole* range (uncapped), near-identical
    frames are dropped (:func:`dedupe_perceptual`, unless ``dedup`` is False),
    and the survivors are even-sampled down to ``max_frames`` via
    :func:`_even_sample`, exactly like the keyframe engine. This costs a full
    decode, but it guarantees coverage spans the entire clip — capping detection
    with ``-frames:v`` instead would keep only the first ``max_frames`` cuts and
    drop the tail of long videos (and could even fall below ``SCENE_MIN_FRAMES``
    and misfire the uniform fallback on a cut-heavy clip).
    """
    scene_frames = extract_scene_candidates(
        video_path,
        out_dir,
        resolution=resolution,
        max_frames=None,
        start_seconds=start_seconds,
        end_seconds=end_seconds,
    )
    scene_count = len(scene_frames)
    if scene_count >= SCENE_MIN_FRAMES:
        deduped, n_dropped, collapsed = (
            dedupe_perceptual(scene_frames) if dedup else (scene_frames, 0, [])
        )
        cap = len(deduped) if max_frames is None else max_frames
        selected = _even_sample(deduped, cap)
        return selected, {
            "engine": "scene",
            "candidate_count": scene_count,
            "deduped_count": n_dropped,
            "collapsed_ranges": collapsed,
            "collapsed_dir": str(out_dir / COLLAPSED_DIRNAME) if n_dropped else None,
            "selected_count": len(selected),
            "fallback": False,
        }

    fallback_cap = target_frames if max_frames is None else min(max_frames, target_frames)
    frames = extract(
        video_path,
        out_dir,
        fps=fps,
        resolution=resolution,
        max_frames=fallback_cap,
        start_seconds=start_seconds,
        end_seconds=end_seconds,
    )
    n_dropped = 0
    collapsed: list[dict] = []
    if dedup:
        frames, n_dropped, collapsed = dedupe_perceptual(frames)
    return frames, {
        "engine": "uniform",
        "candidate_count": scene_count,
        "deduped_count": n_dropped,
        "collapsed_ranges": collapsed,
        "collapsed_dir": str(out_dir / COLLAPSED_DIRNAME) if n_dropped else None,
        "selected_count": len(frames),
        "fallback": True,
    }


def extract_keyframes(
    video_path: str,
    out_dir: Path,
    resolution: int = 512,
    max_frames: int | None = 50,
    start_seconds: float | None = None,
    end_seconds: float | None = None,
    dedup: bool = True,
) -> tuple[list[dict], dict]:
    """Decode only keyframes (I-frames) — the cheap, near-instant tier.

    ``-skip_frame nokey`` makes ffmpeg reconstruct only keyframes, skipping all
    P/B frames. Encoders emit keyframes at scene cuts, so these already
    approximate "distinct moments". Near-identical frames are dropped
    (:func:`dedupe_perceptual`, unless ``dedup`` is False); over-cap →
    even-sample first→last; too few keyframes → uniform fallback.
    """
    if shutil.which("ffmpeg") is None:
        raise SystemExit("ffmpeg is not installed. Install with: brew install ffmpeg")

    out_dir.mkdir(parents=True, exist_ok=True)
    for existing in out_dir.glob("frame_*.jpg"):
        existing.unlink()

    output_pattern = str(out_dir / "frame_%04d.jpg")
    cmd: list[str] = [
        "ffmpeg",
        "-hide_banner",
        "-loglevel", "info",
        "-y",
    ]
    if start_seconds is not None:
        cmd += ["-ss", f"{start_seconds:.3f}"]
    if end_seconds is not None:
        cmd += ["-to", f"{end_seconds:.3f}"]
    cmd += [
        "-skip_frame", "nokey",
        "-i", str(Path(video_path).resolve()),
        "-vf", f"{_scale_filter(resolution)},showinfo",
        "-vsync", "vfr",
        "-q:v", "4",
        output_pattern,
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(f"ffmpeg keyframe extraction failed: {result.stderr.strip()}")

    offset = start_seconds or 0.0
    timestamps = [round(offset + float(m.group(1)), 2) for m in SHOWINFO_TS_RE.finditer(result.stderr)]
    files = sorted(out_dir.glob("frame_*.jpg"))
    candidates: list[dict] = []
    for i, path in enumerate(files):
        ts = timestamps[i] if i < len(timestamps) else offset
        candidates.append({
            "index": i,
            "timestamp_seconds": ts,
            "path": str(path),
            "reason": "keyframe",
        })

    # Too few keyframes → uniform fallback over the same range.
    if len(candidates) < KEYFRAME_MIN:
        for cand in candidates:
            try:
                Path(cand["path"]).unlink()
            except OSError:
                pass
        meta = get_metadata(video_path)
        full_duration = meta["duration_seconds"]
        eff_start = start_seconds or 0.0
        eff_end = end_seconds if end_seconds is not None else full_duration
        eff_duration = max(0.0, eff_end - eff_start)
        budget = max_frames if max_frames is not None else 100
        fps, _ = auto_fps(eff_duration, max_frames=budget)
        frames_out = extract(
            video_path,
            out_dir,
            fps=fps,
            resolution=resolution,
            max_frames=budget,
            start_seconds=start_seconds,
            end_seconds=end_seconds,
        )
        n_dropped = 0
        collapsed: list[dict] = []
        if dedup:
            frames_out, n_dropped, collapsed = dedupe_perceptual(frames_out)
        return frames_out, {
            "engine": "uniform",
            "candidate_count": len(candidates),
            "deduped_count": n_dropped,
            "collapsed_ranges": collapsed,
            "collapsed_dir": str(out_dir / COLLAPSED_DIRNAME) if n_dropped else None,
            "selected_count": len(frames_out),
            "fallback": True,
        }

    # Detect-all, drop near-duplicates, then even-sample down to the cap (first +
    # last always kept). ``max_frames is None`` (uncapped) keeps every keyframe.
    candidate_count = len(candidates)
    deduped, n_dropped, collapsed = (
        dedupe_perceptual(candidates) if dedup else (candidates, 0, [])
    )
    cap = len(deduped) if max_frames is None else max_frames
    selected = _even_sample(deduped, cap)
    return selected, {
        "engine": "keyframe",
        "candidate_count": candidate_count,
        "deduped_count": n_dropped,
        "collapsed_ranges": collapsed,
        "collapsed_dir": str(out_dir / COLLAPSED_DIRNAME) if n_dropped else None,
        "selected_count": len(selected),
        "fallback": False,
    }


def _grab_frame_at(video_path: str, out_path: Path, at_seconds: float, resolution: int = 512) -> bool:
    """Grava um unico frame no instante ``at_seconds`` (seek rapido). True se ok.

    Usado para garantir o ultimo ponto da cadencia do frame-a-frame, que o filtro
    fps= as vezes derruba. Nome contiguo (frame_{N+1:04d}) preserva a sequencia que
    o dedup usa.
    """
    cmd = [
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
        "-ss", f"{max(0.0, at_seconds):.3f}",
        "-i", str(Path(video_path).resolve()),
        "-frames:v", "1",
        "-vf", _scale_filter(resolution),
        "-q:v", "4",
        str(out_path),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return result.returncode == 0 and out_path.exists() and out_path.stat().st_size > 0


def extract_uniform(
    video_path: str,
    out_dir: Path,
    interval_seconds: float,
    resolution: int = 512,
    start_seconds: float | None = None,
    end_seconds: float | None = None,
    dedup: bool = False,
) -> tuple[list[dict], dict]:
    """Frame-a-frame FORENSE: um frame a cada ``interval_seconds`` por TODO o
    intervalo, **sem teto** — para CFTV/bodycam/audiencia, onde nao se pode perder
    um momento.

    Diferente dos modos por budget (que fazem even-sample ate um cap), aqui a
    cobertura e a cadencia inteira: fps = 1/interval, limitado a ``MAX_FPS``.
    ``dedup`` e **desligado por padrao**: neste modo o usuario pediu exaustividade,
    e nenhum criterio automatico de semelhanca pode decidir sozinho que um quadro
    do CFTV nao interessa. Quem quiser cortar custo em cena parada liga o colapso
    explicitamente — e ainda assim nada e apagado (vai para ``_colapsados/``).
    Retorna ``(frames, meta)`` no mesmo formato dos outros extratores.
    """
    if interval_seconds <= 0:
        raise SystemExit("--every deve ser > 0 (segundos entre frames)")
    requested_fps = 1.0 / interval_seconds
    fps = min(requested_fps, MAX_FPS)
    clamped = fps < requested_fps
    step = 1.0 / fps  # intervalo efetivo (segundos) apos o clamp

    meta = get_metadata(video_path)
    full_duration = meta["duration_seconds"]
    eff_start = start_seconds or 0.0
    eff_end = end_seconds if end_seconds is not None else full_duration
    eff_duration = max(0.0, eff_end - eff_start)
    count = max(1, int(round(eff_duration * fps)) + 2) if eff_duration > 0 else 1

    frames = extract(
        video_path,
        out_dir,
        fps=fps,
        resolution=resolution,
        max_frames=count,
        start_seconds=start_seconds,
        end_seconds=end_seconds,
    )

    # O filtro fps= do ffmpeg emite round(duracao*fps) frames — pode DERRUBAR o
    # ultimo ponto da cadencia (ate 1 frame), abrindo uma lacuna maior que o passo
    # bem no fim. Frame-a-frame nao pode perder o fim: garante o ultimo ponto
    # k*step <= duracao com uma captura pontual, se faltar.
    if eff_duration > 0 and frames:
        last_k = int(eff_duration / step + 1e-6)
        last_cadence_abs = eff_start + last_k * step
        produced_max = max(f["timestamp_seconds"] for f in frames)
        if last_cadence_abs <= eff_end + 1e-6 and (last_cadence_abs - produced_max) >= step - 1e-6:
            extra = out_dir / f"frame_{len(frames) + 1:04d}.jpg"
            if _grab_frame_at(video_path, extra, last_cadence_abs, resolution):
                frames.append({
                    "index": len(frames),
                    "timestamp_seconds": round(last_cadence_abs, 2),
                    "path": str(extra),
                    "reason": "uniform",
                })

    n_dropped = 0
    collapsed: list[dict] = []
    if dedup:
        frames, n_dropped, collapsed = dedupe_perceptual(frames)
    return frames, {
        "engine": "uniform-interval",
        "collapsed_ranges": collapsed,
        "collapsed_dir": str(out_dir / COLLAPSED_DIRNAME) if n_dropped else None,
        "interval_seconds": round(1.0 / fps, 3) if fps > 0 else interval_seconds,
        "requested_interval": round(interval_seconds, 3),
        "fps": round(fps, 4),
        "clamped": clamped,
        "candidate_count": len(frames) + n_dropped,
        "deduped_count": n_dropped,
        "selected_count": len(frames),
        "fallback": False,
    }


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(
            "usage: frames.py <video-path> <out-dir> [--fps F] [--resolution W] "
            "[--max-frames N] [--start T] [--end T] [--no-dedup]",
            file=sys.stderr,
        )
        raise SystemExit(2)

    video = sys.argv[1]
    out = Path(sys.argv[2])
    args = sys.argv[3:]

    fps_override = None
    resolution = 512
    max_frames = 100
    start_arg = None
    end_arg = None
    dedup = True
    i = 0
    while i < len(args):
        if args[i] == "--fps":
            fps_override = float(args[i + 1]); i += 2
        elif args[i] == "--resolution":
            resolution = int(args[i + 1]); i += 2
        elif args[i] == "--max-frames":
            max_frames = int(args[i + 1]); i += 2
        elif args[i] == "--start":
            start_arg = args[i + 1]; i += 2
        elif args[i] == "--end":
            end_arg = args[i + 1]; i += 2
        elif args[i] == "--no-dedup":
            dedup = False; i += 1
        else:
            i += 1

    meta = get_metadata(video)
    start_sec = parse_time(start_arg)
    end_sec = parse_time(end_arg)
    full_duration = meta["duration_seconds"]

    effective_start = start_sec if start_sec is not None else 0.0
    effective_end = end_sec if end_sec is not None else full_duration
    effective_duration = max(0.0, effective_end - effective_start)

    focused = start_sec is not None or end_sec is not None
    if focused:
        fps, target = auto_fps_focus(effective_duration, max_frames=max_frames)
    else:
        fps, target = auto_fps(effective_duration, max_frames=max_frames)
    if fps_override is not None:
        fps = fps_override
        target = max(1, int(round(fps * effective_duration)))

    frames = extract(
        video, out,
        fps=fps,
        resolution=resolution,
        max_frames=max_frames,
        start_seconds=start_sec,
        end_seconds=end_sec,
    )
    deduped_count = 0
    collapsed_ranges: list[dict] = []
    if dedup:
        frames, deduped_count, collapsed_ranges = dedupe_perceptual(frames)
    print(json.dumps(
        {
            "meta": meta, "fps": fps, "target": target, "focused": focused,
            "deduped_count": deduped_count, "collapsed_ranges": collapsed_ranges,
            "frames": frames,
        },
        indent=2,
    ))
