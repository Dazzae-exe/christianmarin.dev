import { useRef, type PointerEvent, type ReactNode } from "react";
import { X } from "lucide-react";
import type { VideoPreviewSource } from "@/lib/types/videoPreview";

type VideoPreviewProps = VideoPreviewSource & { title: string; children: ReactNode };

const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

const followPointer = (event: PointerEvent<HTMLElement>) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--peek-x", `${event.clientX - rect.left}px`);
  card.style.setProperty("--peek-y", `${event.clientY - rect.top}px`);
};

// Jump straight to the pointer on entry; the eased follow should only apply while hovering.
const snapToPointer = (event: PointerEvent<HTMLElement>) => {
  const card = event.currentTarget;
  card.dataset.peekSnap = "";
  followPointer(event);
  void card.offsetWidth;
  delete card.dataset.peekSnap;
};

export function VideoPreview({ src, poster, title, children }: VideoPreviewProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef(0);

  const morph = (update: () => void) => {
    const dialog = dialogRef.current;
    if (!dialog || !document.startViewTransition || prefersReducedMotion()) return update();
    dialog.dataset.morph = "";
    document.startViewTransition(update).finished.finally(() => delete dialog.dataset.morph);
  };

  const enter = (event: PointerEvent<HTMLDivElement>) => {
    snapToPointer(event);
    if (dialogRef.current?.offsetParent && !prefersReducedMotion()) videoRef.current?.play().catch(() => {});
  };

  const leave = () => {
    if (!dialogRef.current?.open) videoRef.current?.pause();
  };

  const trackProgress = () => {
    cancelAnimationFrame(frameRef.current);
    const video = videoRef.current;
    if (!video || video.paused) return;
    dialogRef.current?.style.setProperty("--progress", String(video.currentTime / (video.duration || 1)));
    frameRef.current = requestAnimationFrame(trackProgress);
  };

  const expand = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    morph(() => {
      dialog.inert = false;
      dialog.showModal();
    });
    videoRef.current?.play().catch(() => {});
  };

  const close = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open) return;
    morph(() => {
      dialog.close();
      dialog.inert = true;
    });
  };

  return (
    <div className="video-card relative" onPointerEnter={enter} onPointerMove={followPointer} onPointerLeave={leave}>
      {children}

      <dialog
        ref={dialogRef}
        inert
        aria-label={title}
        className="peek video-peek"
        onAnimationEnd={(event) => event.animationName === "video-ring-fill" && expand()}
        onClick={(event) => event.target === event.currentTarget && close()}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => prefersReducedMotion() && videoRef.current?.pause()}
      >
        <video ref={videoRef} src={src} poster={poster} muted loop playsInline preload="none" onPlaying={trackProgress} />
        <button type="button" aria-label="Close video" className="video-close" onClick={close}>
          <svg aria-hidden viewBox="0 0 24 24" className="video-ring">
            <circle cx="12" cy="12" r="10" pathLength={1} />
            <circle cx="12" cy="12" r="10" pathLength={1} />
          </svg>
          <X aria-hidden className="video-close-icon" strokeWidth={2.25} />
        </button>
      </dialog>
    </div>
  );
}
