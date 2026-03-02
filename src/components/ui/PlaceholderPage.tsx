import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import PageShell from "@/components/layout/PageShell";

interface PlaceholderPageProps {
  titleKey?: string;
}

export default function PlaceholderPage({ titleKey }: PlaceholderPageProps) {
  const t = useTranslations("placeholder");

  return (
    <PageShell>
      {titleKey && <SectionTitle>{titleKey}</SectionTitle>}
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-accent mb-4">
          {t("title")}
        </h2>
        <p className="text-text-secondary text-lg tracking-wide max-w-md">
          {t("description")}
        </p>
      </div>
    </PageShell>
  );
}
