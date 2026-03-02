"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { mainNavItems } from "@/data/navigation";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations("nav");

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function toggleDropdown(key: string) {
    setOpenDropdown(openDropdown === key ? null : key);
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text-primary p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-24 bg-bg-end/98 backdrop-blur-md z-40 overflow-y-auto">
          <nav className="flex flex-col p-6 gap-2">
            {mainNavItems.map((item) => (
              <div key={item.labelKey}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.labelKey)}
                      className="flex items-center justify-between w-full py-3 text-lg font-semibold tracking-wider text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {t(item.labelKey)}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.labelKey ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.labelKey && (
                      <div className="pl-4 flex flex-col gap-1 mb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.labelKey}
                            href={child.href!}
                            onClick={closeMenu}
                            className="py-2 text-base text-text-muted hover:text-accent transition-colors"
                          >
                            {t(child.labelKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeMenu}
                    className="block py-3 text-lg font-semibold tracking-wider text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {t(item.labelKey)}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
              <LocaleSwitcher />
              <Link
                href="/altruism"
                onClick={closeMenu}
                className="border border-accent text-accent px-5 py-2 text-sm font-semibold tracking-wider hover:bg-accent hover:text-white transition-colors"
              >
                {t("letsConnect")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
