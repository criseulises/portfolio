interface CardOutlineProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardOutline({ children, className = "" }: CardOutlineProps) {
  return (
    <div
      className={`border border-border-strong rounded-2xl bg-surface hover:bg-surface-hover transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
