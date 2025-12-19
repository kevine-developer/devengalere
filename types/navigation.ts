export interface SubItem {
  href: string;
  label: string;
  description?: string;
}

export interface NavItem {
  href: string;
  label: string;
  index: number;
  subItems?: SubItem[];
}

export interface NavigationProps {
  items: NavItem[];
  pathname: string;
  onLinkClick?: () => void;
}

export interface DropdownProps {
  item: NavItem;
  isOpen: boolean;
  isActive: boolean;
  onToggle?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onLinkClick?: () => void;
}
