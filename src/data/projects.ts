import type { Project } from "@/types";

export const projects: Project[] = [
  // Add projects here as needed
  // {
  //   id: "1",
  //   slug: "project-name",
  //   titleKey: "projectName.title",
  //   descriptionKey: "projectName.description",
  //   image: "/images/projects/project-name.png",
  //   tags: ["React", "TypeScript"],
  //   category: "personal",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com/crisandev/project-name",
  // },
];

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}
