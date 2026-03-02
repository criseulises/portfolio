import { Link } from "@/i18n/navigation";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function CTAButton({ href, children, external }: CTAButtonProps) {
  const className =
    "border border-accent text-accent px-5 py-2 text-sm font-semibold tracking-wider hover:bg-accent hover:text-white transition-colors duration-300";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
