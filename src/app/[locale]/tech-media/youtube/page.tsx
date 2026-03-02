import { setRequestLocale, getTranslations } from "next-intl/server";
import { getVideosBySection } from "@/data/videos";
import { SOCIAL_LINKS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import PageShell from "@/components/layout/PageShell";
import VideoSection from "@/components/youtube/VideoSection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "youtube" });
  return { title: t("title") };
}

export default async function YoutubePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "youtube" });
  const tVideos = await getTranslations({ locale, namespace: "videos" });

  const latestVideos = getVideosBySection("latest");
  const countryVideos = getVideosBySection("country");
  const seriesVideos = getVideosBySection("series");

  function getVideoTitle(titleKey: string) {
    return tVideos(titleKey);
  }

  return (
    <PageShell>
      <SectionTitle>{t("title")}</SectionTitle>

      <VideoSection
        title={t("latestVideos")}
        videos={latestVideos}
        getVideoTitle={getVideoTitle}
      />
      <VideoSection
        title={t("countryVideos")}
        videos={countryVideos}
        getVideoTitle={getVideoTitle}
      />
      <VideoSection
        title={t("seriesVideos")}
        videos={seriesVideos}
        getVideoTitle={getVideoTitle}
      />

      <div className="text-center mt-8">
        <a
          href={SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-accent text-accent px-8 py-3 text-sm font-semibold tracking-wider hover:bg-accent hover:text-white transition-colors duration-300"
        >
          {t("viewChannel")}
        </a>
      </div>
    </PageShell>
  );
}
