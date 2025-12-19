// components/navigation/MobileMenu.tsx

import type { NavigationProps } from "@/types/navigation";
import { MobileNavItem } from "./MobileNavItem";

interface MobileMenuProps extends NavigationProps {
  isOpen: boolean;
  openDropdown: string | null;
  onDropdownToggle: (href: string) => void;
}

export function MobileMenu({
  items,
  pathname,
  isOpen,
  openDropdown,
  onDropdownToggle,
  onLinkClick,
}: MobileMenuProps) {
  if (!isOpen) return null;

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isDropdownActive = (item: (typeof items)[0]) => {
    if (!item.subItems) return false;
    return item.subItems.some((subItem) => pathname.startsWith(subItem.href));
  };

  return (
    <div
      id="mobile-menu"
      className="border-t border-(--deg-gray-light) bg-(--deg-black) px-4 py-6 md:hidden"
    >
      <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
        {items.map((item) => (
          <MobileNavItem
            key={item.href}
            item={item}
            isActive={
              item.subItems ? isDropdownActive(item) : isActive(item.href)
            }
            isOpen={openDropdown === item.href}
            onToggle={() => onDropdownToggle(item.href)}
            onLinkClick={onLinkClick!}
          />
        ))}
        <button
          className="btn-brutal mt-6 w-full py-4 text-sm focus:outline-none focus:ring-2 focus:ring-lime"
          aria-label="Collaborer avec DevEnGalère"
        >
          Collaborer →
        </button>
      </nav>
    </div>
  );
}
