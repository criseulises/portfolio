"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SearchInput from "./SearchInput";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  translationNamespace: string;
  showSearch?: boolean;
}

export default function ProjectGrid({
  projects,
  translationNamespace,
  showSearch = true,
}: ProjectGridProps) {
  const [search, setSearch] = useState("");
  const t = useTranslations("projects");
  const tProjects = useTranslations(translationNamespace);

  const filtered = projects.filter((p) => {
    if (!search) return true;
    const query = search.toLowerCase();
    const title = tProjects(`${p.titleKey}`).toLowerCase();
    return (
      title.includes(query) ||
      p.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div>
      {showSearch && <SearchInput value={search} onChange={setSearch} />}
      {filtered.length === 0 ? (
        <p className="text-text-muted text-center py-12 tracking-wider">
          {t("noResults")}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              title={tProjects(`${project.titleKey}`)}
              description={tProjects(`${project.descriptionKey}`)}
              viewLabel={t("viewProject")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
