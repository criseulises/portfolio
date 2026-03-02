interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-text-primary inline-block">
        {children}
        <div className="mt-2 h-0.5 bg-accent" />
      </h2>
    </div>
  );
}
