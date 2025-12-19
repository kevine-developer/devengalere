// components/navigation/Dropdown.tsx

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { DropdownProps } from "@/types/navigation";

export function Dropdown({
  item,
  isOpen,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onLinkClick,
}: DropdownProps) {
  if (!item.subItems) return null;

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`group relative flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200
          ${
            isActive ? "text-lime" : "text-(--deg-white) hover:text-lime"
          }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span
          className="font-mono text-(--deg-muted) mr-1 group-hover:text-lime transition-colors"
          aria-hidden="true"
        >
          0{item.index}/
        </span>
        {item.label}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {isActive && (
          <span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime "
            aria-hidden="true"
          />
        )}
        <span
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-56">
          <div className="border border-(--deg-gray-light) bg-(--deg-black) shadow-lg overflow-hidden">
            {item.subItems.map((subItem, idx) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                onClick={onLinkClick}
                className={`group/item relative block px-4 py-3 text-sm font-medium text-(--deg-white) transition-all duration-200
                  ${
                    idx < item.subItems!.length - 1
                      ? "border-b border-(--deg-gray-light)"
                      : ""
                  }`}
              >
                {/* Effet de fond au hover */}
                <span className="absolute inset-0 bg-lime/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                
                {/* Bordure gauche animée */}
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-lime scale-y-0 group-hover/item:scale-y-100 transition-transform duration-200 origin-top" />
                
                <div className="relative">
                  {subItem.description && (
                    <span className="font-mono text-xs text-(--deg-muted) group-hover/item:text-lime/80 block mb-1 transition-colors duration-200">
                      {subItem.description}
                    </span>
                  )}
                  <span className="group-hover/item:text-lime group-hover/item:translate-x-1 inline-block transition-all duration-200">
                    {subItem.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}