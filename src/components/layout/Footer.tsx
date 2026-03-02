import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Linkedin, Youtube, Instagram, Mail, Github } from "lucide-react";
import { SOCIAL_LINKS, SITE_HANDLE } from "@/lib/constants";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";

const socialIcons = [
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: "Email" },
];

const footerLinks = [
  { labelKey: "about" as const, href: "/#about" },
  { labelKey: "skills" as const, href: "/#about" },
  { labelKey: "education" as const, href: "/#about" },
  { labelKey: "projects" as const, href: "/projects/personal" },
  { labelKey: "experience" as const, href: "/about/experience" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex flex-wrap justify-center gap-8 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.labelKey}
              href={link.href}
              className="text-sm font-semibold tracking-wider text-text-secondary hover:text-accent transition-colors underline underline-offset-4"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center gap-6 mb-8">
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center space-y-1">
          <p className="text-sm text-text-secondary tracking-wider">{SITE_HANDLE}</p>
          <p className="text-sm text-text-secondary tracking-wider">{SOCIAL_LINKS.email}</p>
          <p className="text-sm text-text-muted tracking-wider">
            &copy; 2023 Cristian S&aacute;nchez.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  );
}
