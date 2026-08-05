#!/usr/bin/env python3
"""/watch entry point: download video, extract frames, parse transcript.

Prints a markdown report to stdout listing frame paths + transcript. Claude
then Reads each frame path to see the video.
"""
from __future__ import annotations

import argparse
import sys
import tempfile
from pathlib import Path


SCRIPT_DIR = Path(__file__).parent.resolve()
sys.path.insert(0, str(SCRIPT_DIR))

from config import frame_cap, get_config  # noqa: E402
from download import download, fetch_captions, is_url  # noqa: E402
from frames import MAX_FPS, auto_fps, auto_fps_focus, extract_at_timestamps, extract_keyframes, extract_scene_or_uniform, extract_uniform, format_time, get_metadata, merge_frames, parse_time, parse_timestamps  # noqa: E402
from transcribe import filter_range, format_transcript, parse_vtt  # noqa: E402
from providers import transcribe_video  # noqa: E402


def main() -> int:
    ap = argparse.ArgumentParser(
        prog="watch",
        description="Download a video, extract auto-scaled frames, and surface the transcript.",
    )
    ap.add_argument("source", help="Video URL or local file path")
    ap.add_argument("--max-frames", type=int, default=None, help="Override frame cap")
    ap.add_argument("--resolution", type=int, default=512, help="Frame width in pixels (default 512)")
    ap.add_argument("--fps", type=float, default=None, help="Override auto-fps")
    ap.add_argument(
        "--detail",
        choices=["transcript", "efficient", "balanced", "token-burner"],
        default=None,
        help="Fidelity/speed dial: transcript (no frames), efficient (fast keyframes, cap 50), "
             "balanced (scene, cap 100), token-burner (scene, uncapped).",
    )
    ap.add_argument(
        "--timestamps",
        type=str,
        default=None,
        help="Comma-separated absolute timestamps (SS, MM:SS, HH:MM:SS) to grab a frame at, "
             "e.g. transcript-flagged 'look here' moments. Added on top of the detail frames "
             "(reserved against the cap); with --detail transcript these become the only frames.",
    )
    ap.add_argument("--start", type=str, default=None, help="Range start (SS, MM:SS, or HH:MM:SS)")
    ap.add_argument("--end", type=str, default=None, help="Range end (SS, MM:SS, or HH:MM:SS)")
    ap.add_argument("--out-dir", type=str, default=None, help="Working directory (default: tmp)")
    ap.add_argument(
        "--no-transcribe",
        action="store_true",
        help="Nao transcrever. So frames, se houver video.",
    )
    ap.add_argument(
        "--transcribe",
        choices=["local", "openrouter"],
        default="local",
        help="Backend de transcricao. local (faster-whisper, na maquina — PADRAO e obrigatorio "
             "para material sigiloso) ou openrouter (nuvem via OpenRouter — SO para midia publica).",
    )
    ap.add_argument(
        "--sigiloso",
        action="store_true",
        help="Material em segredo de justica: forca transcricao LOCAL e bloqueia qualquer nuvem.",
    )
    ap.add_argument(
        "--publico",
        action="store_true",
        help="Afirma que a midia e PUBLICA (ja divulgada). So com esta afirmacao o backend "
             "openrouter (nuvem) e liberado; sem ela, a nuvem e bloqueada e cai para LOCAL.",
    )
    ap.add_argument(
        "--no-dedup",
        action="store_true",
        help="Desliga o colapso de quadros parecidos nos modos por budget (--detail). Mantem "
             "todos os quadros selecionados, mesmo os visualmente iguais.",
    )
    ap.add_argument(
        "--dedup",
        action="store_true",
        help="So no frame-a-frame (--every): colapsa quadros muito parecidos com o anterior, "
             "para baratear cena parada. E OPT-IN — por padrao o modo forense nao colapsa nada. "
             "Nenhum arquivo e apagado: os quadros colapsados vao para a subpasta _colapsados/ e "
             "os intervalos afetados saem no relatorio.",
    )
    ap.add_argument(
        "--every",
        type=float,
        default=None,
        metavar="SEG",
        help="Frame-a-frame FORENSE: um frame a cada SEG segundos por TODO o video, SEM teto "
             "(CFTV/bodycam/audiencia — nao perder momento). Ex.: --every 1 = 1 frame/seg; "
             "--every 2 = a cada 2s. Ignora o cap de --detail; respeita --start/--end. Por "
             "padrao NENHUM quadro e colapsado; use --dedup se quiser colapsar cena parada.",
    )
    args = ap.parse_args()
    if args.every is not None and args.every <= 0:
        raise SystemExit("--every deve ser maior que zero (segundos entre frames)")

    config = get_config()
    detail = args.detail or str(config["detail"])
    configured_cap = frame_cap(detail)
    if args.max_frames is not None:
        max_frames = args.max_frames
    else:
        max_frames = configured_cap
    if max_frames is not None and max_frames < 1:
        raise SystemExit("--max-frames must be greater than zero")
    budget_cap = max_frames if max_frames is not None else 100
    cue_timestamps = parse_timestamps(args.timestamps)

    if args.out_dir:
        work = Path(args.out_dir).expanduser().resolve()
    else:
        work = Path(tempfile.mkdtemp(prefix="watch-"))
    work.mkdir(parents=True, exist_ok=True)
    print(f"[watch] working dir: {work}", file=sys.stderr)

    url_source = is_url(args.source)
    dl: dict = {"subtitle_path": None, "info": {}, "downloaded": False}
    transcript_segments: list[dict] = []
    transcript_text: str | None = None
    transcript_source: str | None = None
    video_path: str | None = None
    # Transcricao pedida, tentada e falhada: vira aviso no topo do relatorio e
    # codigo de saida != 0, para que a falha nunca passe por "nada a transcrever".
    transcricao_falhou = False
    transcricao_erro: str | None = None
    # Transcricao rodou SEM erro mas o audio nao tem fala (musica, ruido, silencio).
    # E sucesso com resultado vazio — nao pode ser lido como falha nem como "nao rodou".
    transcricao_vazia = False

    if url_source:
        print("[watch] checking metadata/captions via yt-dlp…", file=sys.stderr)
        dl = fetch_captions(args.source, work / "download")
        if dl.get("subtitle_path"):
            try:
                transcript_segments = parse_vtt(dl["subtitle_path"])
                transcript_text = format_transcript(transcript_segments)
                transcript_source = "captions"
            except Exception as exc:
                print(f"[watch] subtitle parse failed: {exc}", file=sys.stderr)
                transcript_segments = []

    # --timestamps needs the video for frame grabs, so it overrides the
    # transcript-mode download skip (and forces a full, not audio-only, fetch).
    audio_only = detail == "transcript" and not cue_timestamps
    if detail == "transcript" and transcript_segments and not cue_timestamps:
        video_path = None
    else:
        if url_source:
            print(
                "[watch] downloading audio via yt-dlp…" if audio_only
                else "[watch] downloading video via yt-dlp…",
                file=sys.stderr,
            )
            dl = download(
                args.source,
                work / "download",
                audio_only=audio_only,
            )
        else:
            print("[watch] using local file…", file=sys.stderr)
            dl = download(args.source, work / "download")
        video_path = dl["video_path"]

    meta = get_metadata(video_path) if video_path else {
        "duration_seconds": float((dl.get("info") or {}).get("duration") or 0),
        "width": None,
        "height": None,
        "codec": None,
        "has_audio": False,
        "has_video": False,
    }
    full_duration = meta["duration_seconds"]

    # Arquivo so de audio (mp3/m4a/ogg/opus/wav dos autos): nao ha imagem para
    # extrair. Sem este desvio o motor chamava o extrator de frames e abortava com
    # erro cru do ffmpeg ANTES de chegar na transcricao — justamente o que o
    # advogado queria. Espelha o tratamento simetrico da midia sem audio, adiante.
    somente_audio = bool(video_path) and not meta.get("has_video")
    if somente_audio:
        print("[captura] arquivo so de audio (sem faixa de video) — seguindo direto para a transcricao", file=sys.stderr)
        detail = "transcript"
        if args.every is not None:
            print("[captura] --every ignorado: nao ha video de onde extrair frames", file=sys.stderr)
            args.every = None
        if cue_timestamps:
            print("[captura] --timestamps ignorado: nao ha video de onde extrair frames", file=sys.stderr)
            cue_timestamps = []

    start_sec = parse_time(args.start)
    end_sec = parse_time(args.end)

    if start_sec is not None and start_sec < 0:
        raise SystemExit("--start must be non-negative")
    if end_sec is not None and start_sec is not None and end_sec <= start_sec:
        raise SystemExit("--end must be greater than --start")
    if full_duration > 0 and start_sec is not None and start_sec >= full_duration:
        raise SystemExit(f"--start {start_sec:.1f}s is past end of video ({full_duration:.1f}s)")
    # --end alem do fim: ajusta ao fim real para o relatorio nao anunciar uma
    # janela maior que o video (a cobertura seria enganosa num contexto forense).
    if end_sec is not None and full_duration > 0 and end_sec > full_duration:
        print(f"[watch] --end {end_sec:.1f}s passa do fim ({full_duration:.1f}s) — ajustado para o fim do video.", file=sys.stderr)
        end_sec = full_duration

    effective_start = start_sec if start_sec is not None else 0.0
    effective_end = end_sec if end_sec is not None else full_duration
    effective_duration = max(0.0, effective_end - effective_start)
    focused = start_sec is not None or end_sec is not None

    if focused:
        fps, target = auto_fps_focus(effective_duration, max_frames=budget_cap)
    else:
        fps, target = auto_fps(effective_duration, max_frames=budget_cap)
    if args.fps is not None:
        fps = min(args.fps, MAX_FPS)
        target = max(1, int(round(fps * effective_duration)))

    if transcript_segments and focused:
        transcript_segments = filter_range(transcript_segments, start_sec, end_sec)
        transcript_text = format_transcript(transcript_segments)

    scope = (
        f"{format_time(effective_start)}-{format_time(effective_end)} ({effective_duration:.1f}s)"
        if focused else f"full {effective_duration:.1f}s"
    )
    frames: list[dict] = []
    frame_meta: dict = {"engine": "none", "candidate_count": 0, "selected_count": 0, "fallback": False}
    cue_frames: list[dict] = []
    cue_meta: dict = {}

    # Transcript cues are pinned: extracted first and counted against the cap so
    # the detail engine never evicts the moments the user explicitly asked for.
    if cue_timestamps and video_path:
        cue_frames, cue_meta = extract_at_timestamps(
            video_path,
            work / "frames",
            cue_timestamps,
            resolution=args.resolution,
            max_frames=max_frames,
            start_seconds=start_sec,
            end_seconds=end_sec,
        )
        if cue_meta.get("dropped_out_of_window"):
            print(
                f"[watch] {cue_meta['dropped_out_of_window']} cue timestamp(s) outside the "
                "focus range — dropped",
                file=sys.stderr,
            )

    detail_budget = max_frames if max_frames is None else max(0, max_frames - len(cue_frames))
    if args.every is not None and video_path:
        # Frame-a-frame forense: cadencia fixa por todo o intervalo, sem teto.
        print(f"[watch] frame-a-frame: 1 frame a cada {args.every:g}s sobre {scope} (sem teto)…", file=sys.stderr)
        frames, frame_meta = extract_uniform(
            video_path,
            work / "frames",
            interval_seconds=args.every,
            resolution=args.resolution,
            start_seconds=start_sec,
            end_seconds=end_sec,
            # Colapso so quando pedido: no modo forense a exaustividade e o produto.
            dedup=args.dedup,
        )
        if frame_meta.get("clamped"):
            print(
                f"[watch] --every {args.every:g}s abaixo do minimo — limitado a "
                f"{frame_meta['interval_seconds']:g}s (fps maximo {MAX_FPS:g}).",
                file=sys.stderr,
            )
    elif detail != "transcript" and video_path and detail_budget != 0:
        cap_label = "unlimited" if detail_budget is None else str(detail_budget)
        engine_label = "keyframes" if detail == "efficient" else "scene-aware frames"
        print(
            f"[watch] extracting {engine_label} over {scope} "
            f"(target {target}, cap {cap_label})…",
            file=sys.stderr,
        )
        if detail == "efficient":
            frames, frame_meta = extract_keyframes(
                video_path,
                work / "frames",
                resolution=args.resolution,
                max_frames=detail_budget,
                start_seconds=start_sec,
                end_seconds=end_sec,
                dedup=not args.no_dedup,
            )
        else:  # balanced, token-burner
            frames, frame_meta = extract_scene_or_uniform(
                video_path,
                work / "frames",
                fps=fps,
                target_frames=target,
                resolution=args.resolution,
                max_frames=detail_budget,
                start_seconds=start_sec,
                end_seconds=end_sec,
                dedup=not args.no_dedup,
            )

    if cue_frames:
        frames = merge_frames(frames, cue_frames)

    if not transcript_segments and dl.get("subtitle_path"):
        try:
            all_segments = parse_vtt(dl["subtitle_path"])
            transcript_segments = filter_range(all_segments, start_sec, end_sec) if focused else all_segments
            transcript_text = format_transcript(transcript_segments)
            transcript_source = "captions"
        except Exception as exc:
            print(f"[watch] subtitle parse failed: {exc}", file=sys.stderr)

    if not transcript_segments and not args.no_transcribe and video_path and meta.get("has_audio"):
        provider = args.transcribe
        # Segredo de justica: a nuvem e proibida. Forca local, mesmo se pedirem openrouter.
        if args.sigiloso and provider != "local":
            print("[captura] --sigiloso: forcando transcricao LOCAL (nuvem bloqueada)", file=sys.stderr)
            provider = "local"
        # Fail-closed: a nuvem so roda com afirmacao explicita de midia publica (--publico).
        # Assim, esquecer --sigiloso num material secreto degrada para LOCAL, nunca vaza.
        if provider == "openrouter" and not args.publico:
            print("[captura] nuvem NAO liberada (sem --publico): usando LOCAL. Para enviar a "
                  "nuvem, confirme que a midia e publica com --publico.", file=sys.stderr)
            provider = "local"
        try:
            all_segments, used = transcribe_video(
                video_path, work / "audio.mp3", provider=provider, allow_cloud=(provider == "openrouter"),
            )
            transcript_segments = filter_range(all_segments, start_sec, end_sec) if focused else all_segments
            transcript_text = format_transcript(transcript_segments)
            transcript_source = f"transcricao ({used})"
            # Rodou sem erro e nao veio fala: sucesso vazio, nao falha nem "nao rodou".
            transcricao_vazia = not transcript_segments
        # SystemExit nao herda de Exception: capturar so ela deixava passar um erro
        # comum (ex.: OSError do huggingface_hub no 1o uso sem rede), que matava o
        # processo com traceback e levava junto o relatorio dos frames — que e
        # exatamente o que o agente le depois.
        except (SystemExit, Exception) as exc:  # noqa: B014
            transcricao_falhou = True
            transcricao_erro = str(exc).strip() or exc.__class__.__name__
            setup_py = SCRIPT_DIR / "setup.py"
            print(f"[captura] transcricao falhou: {transcricao_erro}", file=sys.stderr)
            print(f"[captura] deps no uso: `python3 {setup_py}` (instala ffmpeg/yt-dlp/faster-whisper).", file=sys.stderr)
    elif not transcript_segments and video_path and not meta.get("has_audio"):
        print("[captura] sem faixa de audio — seguindo sem transcricao", file=sys.stderr)

    info = dl.get("info") or {}

    print()
    print("# watch: video report")
    print()
    # Aviso no TOPO: quem le o relatorio precisa saber, antes de qualquer frame, que
    # o que foi dito NAO esta aqui. Enterrado no fim, viraria uma transcricao
    # ausente lida como "nada relevante foi falado".
    if transcricao_falhou:
        setup_py = SCRIPT_DIR / "setup.py"
        print("> ## ⚠️ A TRANSCRIÇÃO NÃO FOI OBTIDA")
        print("> ")
        print(f"> **Motivo:** {transcricao_erro}")
        print("> ")
        print(
            "> Este relatório **não cobre o que foi dito** na mídia. Os frames abaixo mostram "
            "apenas o que a câmera registrou — não afirme, a partir deles, o conteúdo de "
            "falas, perguntas ou respostas."
        )
        print("> ")
        print(
            f"> **O que fazer:** rode `python3 {setup_py}` (instala ffmpeg/yt-dlp/faster-whisper) "
            "e repita o mesmo comando. Se o material está em segredo de justiça, mantenha "
            "`--sigiloso` — a transcrição roda na sua máquina e nada sobe para a nuvem."
        )
        print()
    print(f"- **Source:** {args.source}")
    if info.get("title"):
        print(f"- **Title:** {info['title']}")
    if info.get("uploader"):
        print(f"- **Uploader:** {info['uploader']}")
    print(f"- **Duration:** {format_time(full_duration)} ({full_duration:.1f}s)")
    if focused:
        print(
            f"- **Focus range:** {format_time(effective_start)} → {format_time(effective_end)} "
            f"({effective_duration:.1f}s)"
        )
    if meta.get("width") and meta.get("height"):
        print(f"- **Resolution:** {meta['width']}x{meta['height']} ({meta.get('codec') or 'unknown codec'})")
    range_mode = "focused" if focused else "full"
    print(f"- **Detail:** {'frame-a-frame' if args.every is not None else detail}")
    detail_count = frame_meta.get("selected_count", 0)
    if args.every is not None:
        interval = frame_meta.get("interval_seconds", args.every)
        print(
            f"- **Frames:** {detail_count} em cadência fixa de {interval:g}s "
            f"(frame-a-frame, {range_mode} range, sem teto)"
        )
    elif detail != "transcript":
        cap_label = "unlimited" if detail_budget is None else str(detail_budget)
        engine = frame_meta.get("engine", "scene")
        fallback = " with uniform fallback" if frame_meta.get("fallback") else ""
        print(
            f"- **Frames:** {detail_count} selected from {frame_meta.get('candidate_count', detail_count)} "
            f"candidates ({engine}{fallback}, {range_mode} range, budget {target}, cap {cap_label})"
        )
    elif somente_audio:
        print("- **Frames:** nenhum — o arquivo tem só faixa de áudio (não há imagem para extrair)")
    elif not cue_frames:
        print("- **Frames:** skipped (transcript detail)")

    # Colapso e perda de cobertura: declara-se como tal, com os intervalos exatos.
    # O texto NAO afirma que os quadros eram "idênticos" — isso é uma conclusão
    # sobre a prova que a heurística não tem como sustentar.
    colapsados = frame_meta.get("deduped_count", 0)
    if colapsados:
        destino = frame_meta.get("collapsed_dir")
        onde = f" em `{destino}`" if destino else ""
        print(
            f"- **Colapsados:** {colapsados} quadro(s) fora da lista abaixo por semelhança com o "
            "último quadro mantido — **a listagem não é exaustiva** neste trecho. Nada foi "
            f"apagado: os arquivos estão preservados{onde}."
        )
        intervalos = frame_meta.get("collapsed_ranges") or []
        if intervalos:
            mostrados = intervalos[:12]
            texto = "; ".join(
                f"{format_time(r['start'])}→{format_time(r['end'])} ({r['count']})"
                for r in mostrados
            )
            resto = f" … +{len(intervalos) - len(mostrados)} intervalo(s)" if len(intervalos) > len(mostrados) else ""
            print(f"- **Intervalos colapsados:** {texto}{resto}")
    if cue_frames:
        dropped = cue_meta.get("dropped_out_of_window", 0)
        drop_note = f", {dropped} dropped outside range" if dropped else ""
        print(
            f"- **Cue frames:** {len(cue_frames)} at transcript-flagged timestamps "
            f"(transcript-cue{drop_note})"
        )
    if frames:
        print(f"- **Frame size:** max {args.resolution}px wide, max 1998px tall")
    transcript_covered_end = 0.0
    transcript_span_end = effective_end if focused else full_duration
    if transcript_segments:
        in_range = " in range" if focused else ""
        gaps = sum(
            1 for s in transcript_segments
            if str(s.get("text", "")).startswith("[TRECHO NAO TRANSCRITO")
        )
        # Cobertura conta so segmentos REAIS: um marcador de lacuna no fim nao pode
        # inflar 'cobre ate' e fingir completude.
        transcript_covered_end = max(
            (
                float(s.get("end") or s.get("start") or 0.0)
                for s in transcript_segments
                if not str(s.get("text", "")).startswith("[TRECHO NAO TRANSCRITO")
            ),
            default=0.0,
        )
        span_end = transcript_span_end
        cov_note = f", cobre até {format_time(transcript_covered_end)} de {format_time(span_end)}" if span_end and span_end > 0 else ""
        gap_note = f", ⚠ {gaps} lacuna(s) não transcrita(s)" if gaps else ""
        print(
            f"- **Transcript:** {len(transcript_segments)} segments{in_range} "
            f"(via {transcript_source or 'captions'}{cov_note}{gap_note})"
        )
    else:
        print("- **Transcript:** none available")

    # Incompletude no fim: transcricao para bem antes do fim do audio. Sinaliza
    # mesmo sem marcador (o caminho local nao marca), com tolerancia p/ silencio final.
    if transcript_segments and transcript_span_end and transcript_span_end > 0:
        shortfall = transcript_span_end - transcript_covered_end
        if shortfall > max(15.0, 0.05 * transcript_span_end):
            print()
            print(
                f"> **Aviso:** a transcrição vai só até {format_time(transcript_covered_end)} de "
                f"{format_time(transcript_span_end)} — faltam ~{format_time(shortfall)} ao fim. "
                "Confira o áudio: pode haver fala não captada (ou é só silêncio final)."
            )

    if args.every is not None and len(frames) > 250:
        print()
        print(
            f"> **Aviso:** frame-a-frame selecionou {len(frames)} frames. Ler todos custa "
            "MUITOS tokens de imagem — considere `--start/--end` para focar um trecho, ou um "
            "`--every` maior."
        )

    if detail == "token-burner" and len(frames) > 250:
        print()
        print(
            f"> **Warning:** token-burner detail selected {len(frames)} frames. "
            "This may use a large number of image tokens."
        )

    if args.every is None and not focused and full_duration > 600 and detail not in ("transcript", "token-burner"):
        mins = int(full_duration // 60)
        print()
        print(
            f"> **Warning:** This is a {mins}-minute video. Frame coverage is sparse at this length "
            f"under `{detail}` detail — its cap spreads thin across the full clip. For better results, "
            "re-run with `--start HH:MM:SS --end HH:MM:SS` to zoom into a section, use "
            "`--detail token-burner` to keep every scene-change frame, or `--every SEG` for "
            "frame-a-frame em cadência fixa."
        )

    print()
    print("## Frames")
    print()
    if frames:
        print(f"Frames live at: `{work / 'frames'}`")
        print()
        print(
            "**Read each frame path below with the Read tool to view the image.** "
            "Frames are in chronological order; `t=MM:SS` is the absolute timestamp in the source video."
        )
        print()
        for frame in frames:
            print(
                f"- `{frame['path']}` "
                f"(t={format_time(frame['timestamp_seconds'])}, reason={frame.get('reason', 'selected')})"
            )
    else:
        print("_No frames extracted._")

    print()
    print("## Transcript")
    print()
    if transcript_text:
        label = transcript_source or "captions"
        if focused:
            print(f"_Source: {label}. Filtered to {format_time(effective_start)} → {format_time(effective_end)}:_")
        else:
            print(f"_Source: {label}._")
        print()
        print("```")
        print(transcript_text)
        print("```")
    elif transcricao_vazia:
        # Sucesso vazio: o audio foi processado e nao ha fala. NAO mandar reinstalar
        # deps (elas funcionaram) — isso confundiria o advogado com um falso alarme.
        label = transcript_source or "transcricao"
        print(
            f"_Nenhuma fala detectada. O áudio foi processado com sucesso ({label}), mas não há "
            "fala a transcrever — pode ser música, ruído ambiente ou silêncio. Isto **não** é erro._"
        )
    elif somente_audio:
        # Nao sugerir "--detail balanced para frames": num arquivo so de audio isso
        # nao existe e mandaria o usuario repetir um comando que nao pode dar certo.
        setup_py = SCRIPT_DIR / "setup.py"
        print(
            "_Sem transcricao. Este arquivo tem so audio (nao ha frames a extrair), entao a "
            "transcricao era a unica saida possivel — e ela nao foi obtida. Rode "
            f"`python3 {setup_py}` para instalar as dependencias (ffmpeg/yt-dlp/faster-whisper) "
            "e repita; se o material e sigiloso, mantenha `--sigiloso`._"
        )
    elif detail == "transcript":
        print(
            "_Sem transcricao no modo transcript. Nao havia legenda e a transcricao falhou ou "
            "estava indisponivel. Rode com `--detail balanced` para frames._"
        )
    elif focused and dl.get("subtitle_path"):
        print(f"_Nenhuma linha de transcricao caiu em {format_time(effective_start)} → {format_time(effective_end)}._")
    else:
        setup_py = SCRIPT_DIR / "setup.py"
        print(
            "_Sem transcricao — siga com os frames. Nao havia legenda e a transcricao nao rodou "
            "(deps ausentes, `--no-transcribe`, ou falha). "
            f"Rode `python3 {setup_py}` para instalar as dependencias no uso (ffmpeg/yt-dlp/faster-whisper)._"
        )

    print()
    print("---")
    print(f"_Work dir: `{work}` — delete when done._")

    # Saida != 0 quando a transcricao foi pedida, tentada e falhou: quem chama o
    # comando num script/pipeline precisa distinguir "nao havia audio" de
    # "o audio existia e nao conseguimos transcrever".
    return 1 if transcricao_falhou else 0


if __name__ == "__main__":
    raise SystemExit(main())
