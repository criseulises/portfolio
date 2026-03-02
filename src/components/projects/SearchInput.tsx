"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  const t = useTranslations("projects");

  return (
    <div className="relative max-w-md mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("searchPlaceholder")}
        className="w-full bg-surface border border-border-strong rounded-full px-5 py-3 pl-12 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors tracking-wider"
      />
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
      />
    </div>
  );
}
