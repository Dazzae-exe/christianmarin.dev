import psycloudPoster from "@/assets/psycloud/brag-poster.webp";
import psycloudVideo from "@/assets/psycloud/brag-web.mp4";
import type { VideoPreviewSource } from "@/lib/types/videoPreview";

export const projectPreviews: Partial<Record<string, VideoPreviewSource>> = {
  psycloud: { src: psycloudVideo, poster: psycloudPoster },
};
