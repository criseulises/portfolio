import { setRequestLocale, getTranslations } from "next-intl/server";
import { getProjectsByCategory } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import PageShell from "@/components/layout/PageShell";
import ProjectGrid from "@/components/projects/ProjectGrid";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects.personal" });
  return { title: t("title") };
}

export default async function PersonalProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projects = getProjectsByCategory("personal");

  return (
    <PageShell>
      <SectionTitle>
        {(await getTranslations({ locale, namespace: "projects.personal" }))("title")}
      </SectionTitle>
      <ProjectGrid
        projects={projects}
        translationNamespace="projects"
        showSearch
      />
    </PageShell>
  );
}
