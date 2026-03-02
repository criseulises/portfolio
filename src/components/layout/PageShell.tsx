interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      {children}
    </div>
  );
}
