import Image from "next/image";
import CardOutline from "@/components/ui/CardOutline";
import type { Video } from "@/types";

interface VideoSectionProps {
  readonly title: string;
  readonly videos: readonly Video[];
  readonly getVideoTitle: (titleKey: string) => string;
}

export default function VideoSection({ title, videos, getVideoTitle }: VideoSectionProps) {
  if (videos.length === 0) return null;

  return (
    <section className="mb-16">
      <h3 className="text-xl md:text-2xl font-bold tracking-wider mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://youtu.be/${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <CardOutline className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                  alt={getVideoTitle(video.titleKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium tracking-wider text-text-secondary group-hover:text-text-primary transition-colors">
                  {getVideoTitle(video.titleKey)}
                </p>
              </div>
            </CardOutline>
          </a>
        ))}
      </div>
    </section>
  );
}
