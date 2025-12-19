// components/navigation/MobileNavItem.tsx

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/types/navigation";

interface MobileNavItemProps {
  item: NavItem;
  isActive: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}

export function MobileNavItem({
  item,
  isActive,
  isOpen,
  onToggle,
  onLinkClick,
}: MobileNavItemProps) {
  // Avec sous-menu
  if (item.subItems) {
    return (
      <div className="border-b border-(--deg-gray-light)">
        <button
          onClick={onToggle}
          className={`flex w-full items-center justify-between px-2 py-4 text-sm font-medium uppercase tracking-wider transition-all
            ${
              isActive
                ? "text-lime bg-lime/5 border-lime"
                : "hover:text-lime hover:bg-lime/5"
            }`}
          aria-expanded={isOpen}
        >
          <span>
            <span
              className="font-mono text-(--deg-muted) mr-2"
              aria-hidden="true"
            >
              0{item.index}/
            </span>
            {item.label}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-(--deg-dark) pl-8">
            {item.subItems.map((subItem, idx) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                onClick={onLinkClick}
                className={`block px-2 py-3 text-xs uppercase tracking-wider text-(--deg-muted) hover:text-lime
                  ${
                    idx < item.subItems!.length - 1
                      ? "border-b border-(--deg-gray-light)/50"
                      : ""
                  }`}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Sans sous-menu
  return (
    <Link
      href={item.href}
      onClick={onLinkClick}
      className={`border-b border-(--deg-gray-light) px-2 py-4 text-sm font-medium uppercase tracking-wider transition-all
        ${
          isActive
            ? "text-lime bg-lime/5 border-lime"
            : "hover:text-lime hover:bg-lime/5"
        }`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="font-mono text-(--deg-muted) mr-2" aria-hidden="true">
        0{item.index}/
      </span>
      {item.label}
      {isActive && (
        <span className="ml-2 text-lime" aria-hidden="true">
          ●
        </span>
      )}
    </Link>
  );
}