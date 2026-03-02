"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === "es" ? "en" : "es";

  function handleSwitch() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className="relative flex items-center gap-1 text-sm font-semibold tracking-wider text-text-secondary hover:text-text-primary transition-colors"
      aria-label={`Switch to ${otherLocale.toUpperCase()}`}
    >
      <span className={locale === "es" ? "text-accent" : "text-text-muted"}>ES</span>
      <span className="text-text-muted">/</span>
      <span className={locale === "en" ? "text-accent" : "text-text-muted"}>EN</span>
    </button>
  );
}
