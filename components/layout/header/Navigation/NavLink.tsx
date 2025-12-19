

import Link from "next/link";
import type { NavItem } from "@/types/navigation";

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
}

export function NavLink({ item, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`group relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200
        ${
          isActive
            ? "text-lime"
            : "text-(--deg-white) hover:text-lime"
        }`}
      aria-current={isActive ? "page" : undefined}
    >
      <span
        className="font-mono text-(--deg-muted) mr-1 group-hover:text-lime transition-colors"
        aria-hidden="true"
      >
        0{item.index}/
      </span>
      {item.label}
      {isActive && (
        <span
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime"
          aria-hidden="true"
        />
      )}
      <span
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
        aria-hidden="true"
      />
    </Link>
  );
}