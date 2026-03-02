import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { labelKey: "aboutMe", href: "/#about" },
  {
    labelKey: "projects",
    children: [
      { labelKey: "courses", href: "/projects/courses" },
      { labelKey: "personal", href: "/projects/personal" },
    ],
  },
  {
    labelKey: "techMedia",
    children: [
      { labelKey: "community", href: "/tech-media/community" },
      { labelKey: "youtube", href: "/tech-media/youtube" },
      { labelKey: "github", href: "/tech-media/github" },
    ],
  },
  { labelKey: "altruism", href: "/altruism" },
  { labelKey: "blog", href: "/blog" },
];
