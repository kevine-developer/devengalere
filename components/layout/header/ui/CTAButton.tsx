
interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export function CTAButton({
  children,
  onClick,
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn-brutal px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 focus:ring-offset-(--deg-black) ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}