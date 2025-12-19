// components/navigation/DesktopNavigation.tsx

import type { NavigationProps } from "@/types/navigation";
import { Dropdown } from "./Dropdown";
import { NavLink } from "./NavLink";

interface DesktopNavigationProps extends NavigationProps {
  openDropdown: string | null;
  onDropdownChange: (href: string | null) => void;
}

export function DesktopNavigation({
  items,
  pathname,
  openDropdown,
  onDropdownChange,
}: DesktopNavigationProps) {
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
    <div className="hidden items-center gap-1 md:flex">
      {items.map((item) => {
        if (item.subItems) {
          return (
            <Dropdown
              key={item.href}
              item={item}
              isOpen={openDropdown === item.href}
              isActive={isDropdownActive(item)}
              onMouseEnter={() => onDropdownChange(item.href)}
              onMouseLeave={() => onDropdownChange(null)}
            />
          );
        }

        return (
          <NavLink key={item.href} item={item} isActive={isActive(item.href)} />
        );
      })}
    </div>
  );
}
