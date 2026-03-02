import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-accent" />
      </div>
      <AboutSection />
    </>
  );
}
