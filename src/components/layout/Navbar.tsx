import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { mainNavItems } from "@/data/navigation";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Cristian Sanchez Logo"
              width={80}
              height={80}
              className="w-auto h-16"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) =>
              item.children ? (
                <NavDropdown key={item.labelKey} item={item} />
              ) : (
                <Link
                  key={item.labelKey}
                  href={item.href!}
                  className="text-lg font-semibold tracking-wider text-text-primary hover:text-accent transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/altruism"
              className="border border-accent text-accent px-7 py-3 text-lg font-semibold tracking-wider hover:bg-accent hover:text-white transition-colors duration-300"
            >
              {t("letsConnect")}
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

