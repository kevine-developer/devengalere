"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { scrollToTop } from "@/lib/utils/navigation";
import { DesktopNavigation } from "./header/Navigation/DesktopNavigation";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileMenu } from "./header/Navigation/MobileMenu";
import LogoHeader from "./header/ui/LogoHeader";
import Banner from "./header/ui/Banner";
import { CTAButton } from "./header/ui/CTAButton";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    scrollToTop();
  };

  const handleDropdownToggle = (itemHref: string) => {
    setOpenDropdown(openDropdown === itemHref ? null : itemHref);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-(--deg-gray-light) bg-(--deg-black)/95 backdrop-blur-sm">
      <Banner />
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <LogoHeader onClick={scrollToTop} />

        <DesktopNavigation
          items={NAV_ITEMS}
          pathname={pathname}
          openDropdown={openDropdown}
          onDropdownChange={setOpenDropdown}
        />

        <CTAButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Collaborer avec DevEnGalère"
          className="hidden md:block"
        >
          Collaborer →
        </CTAButton>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="border border-(--deg-gray-light) p-2 text-(--deg-white) hover:border-lime hover:text-lime hover:bg-lime/5 transition-all md:hidden focus:outline-none focus:ring-2 focus:ring-lime"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      <MobileMenu
        items={NAV_ITEMS}
        pathname={pathname}
        isOpen={isMobileMenuOpen}
        openDropdown={openDropdown}
        onDropdownToggle={handleDropdownToggle}
        onLinkClick={handleLinkClick}
      />
    </header>
  );
}
