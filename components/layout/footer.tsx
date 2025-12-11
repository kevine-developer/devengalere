import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import {
  GithubIcon,
  LinkedinIcon,
  LogoIcon,
  YoutubeIcon,
} from "../icons/iconAll";

const footerLinks = {
  navigation: [{ href: "/", label: "Accueil" }, ...NAV_LINKS],
  social: [
    { href: SITE_CONFIG.social.github, label: "GitHub", icon: GithubIcon },
    { href: SITE_CONFIG.social.youtube, label: "YouTube", icon: YoutubeIcon },
    {
      href: SITE_CONFIG.social.linkedin,
      label: "LinkedIn",
      icon: LinkedinIcon,
    },
  ],
  legal: [
    { href: "/conditions-utilisation", label: "Conditions d'utilisation" },
    {
      href: "/politique-confidentialite",
      label: "Politique de confidentialité",
    },
    { href: "/mentions-legales", label: "Mentions légales" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-(--deg-gray-light) bg-(--deg-black)">
      <div
        className="overflow-hidden border-b border-(--deg-gray-light) bg-(--deg-dark) py-8"
        aria-hidden="true"
      >
        <pre className="text-center font-mono text-xs text-(--deg-muted) leading-none sm:text-sm">
          {`  `}
        </pre>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 bg-lime flex items-center justify-center"
                aria-hidden="true"
              >
                <LogoIcon />
              </div>
              <span className="text-xl font-bold uppercase tracking-tight">
                Dev<span className="text-lime">EnGalère</span>
              </span>
            </div>
            <p className="text-sm text-(--deg-muted) font-mono">
              <span aria-hidden="true">{"// "}</span>
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-labelledby="footer-navigation">
            <h3
              id="footer-navigation"
              className="mb-4 text-xs font-bold uppercase tracking-widest text-lime font-mono"
            >
              <span aria-hidden="true">{"["}</span>Navigation
              <span aria-hidden="true">{"]"}</span>
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover-line inline-block text-sm text-(--deg-muted) transition-colors hover:text-(--deg-white)"
                  >
                    <span
                      className="font-mono text-(--deg-gray-light) mr-2"
                      aria-hidden="true"
                    >
                      0{index + 1}.
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-labelledby="footer-legal">
            <h3
              id="footer-legal"
              className="mb-4 text-xs font-bold uppercase tracking-widest text-lime font-mono"
            >
              <span aria-hidden="true">{"["}</span>Légal
              <span aria-hidden="true">{"]"}</span>
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover-line inline-block text-sm text-(--deg-muted) transition-colors hover:text-(--deg-white)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-lime font-mono">
              <span aria-hidden="true">{"["}</span>Social
              <span aria-hidden="true">{"]"}</span>
            </h3>
            <div className="flex gap-2">
              {footerLinks.social.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-(--deg-gray-light) p-3 text-(--deg-muted) transition-all hover:border-lime hover:text-lime hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-(--deg-gray-light) pt-8 sm:flex-row">
          <p className="font-mono text-xs text-(--deg-muted)">
            © {new Date().getFullYear()} {SITE_CONFIG.name}.{" "}
            <span className="text-lime">Galère avec style.</span>
          </p>
          <p className="font-mono text-xs text-(--deg-gray-light)">v1.0.0</p>
        </div>
      </div>
    </footer>
  );
}
