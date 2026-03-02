export interface Project {
  id: string;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  image?: string;
  tags: string[];
  category: "personal" | "course";
  liveUrl?: string;
  repoUrl?: string;
}

export interface Video {
  id: string;
  youtubeId: string;
  titleKey: string;
  section: "latest" | "country" | "series";
}

export interface NavItem {
  labelKey: string;
  href?: string;
  children?: NavItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
