import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("github") };
}

export default async function GithubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PlaceholderPage />;
}
