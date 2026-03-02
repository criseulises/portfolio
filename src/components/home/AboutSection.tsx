import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutSection() {
  const t = useTranslations("home");

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>{t("aboutTitle")}</SectionTitle>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed text-center tracking-wide">
          {t("aboutText")}
        </p>
      </div>
    </section>
  );
}
