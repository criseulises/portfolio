import type { Video } from "@/types";

export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "ubikgn4dgug",
    titleKey: "firstVideo",
    section: "latest",
  },
  {
    id: "2",
    youtubeId: "ubikgn4dgug",
    titleKey: "firstVideo",
    section: "country",
  },
  {
    id: "3",
    youtubeId: "ubikgn4dgug",
    titleKey: "firstVideo",
    section: "series",
  },
];

export function getVideosBySection(section: Video["section"]): Video[] {
  return videos.filter((v) => v.section === section);
}
