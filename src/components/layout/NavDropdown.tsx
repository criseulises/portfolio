"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { NavItem } from "@/types";

interface NavDropdownProps {
  item: NavItem;
}

export default function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("nav");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-lg font-semibold tracking-wider text-text-primary hover:text-accent transition-colors"
      >
        {t(item.labelKey)}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && item.children && (
        <div className="absolute top-full left-0 mt-3 min-w-55 bg-bg-start/95 backdrop-blur-sm border border-border rounded-lg py-3 z-50">
          {item.children.map((child) => (
            <Link
              key={child.labelKey}
              href={child.href!}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-base font-semibold tracking-wider text-text-secondary hover:text-accent hover:bg-surface transition-colors"
            >
              {t(child.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
