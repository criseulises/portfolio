import { useTranslations } from "next-intl";
import BlueBlobImage from "@/components/ui/BlueBlobImage";

export default function HeroSection() {
  const t = useTranslations("home");

  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-wider leading-tight">
              {t("greeting")}
            </h1>
            <p className="text-3xl sm:text-4xl md:text-5xl mt-4 font-medium tracking-wider">
              <span className="text-text-secondary">{t("iam")} </span>
              <span className="text-accent font-bold">{t("name")}</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <BlueBlobImage />
          </div>
        </div>
      </div>
    </section>
  );
}
