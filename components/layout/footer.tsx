import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const footerLinks = {
  navigation: [{ href: "/", label: "Accueil" }, ...NAV_LINKS],
  social: [
    { href: SITE_CONFIG.social.github, label: "GitHub", icon: GithubIcon },
    {
      href: SITE_CONFIG.social.twitter,
      label: "X (Twitter)",
      icon: TwitterIcon,
    },
    { href: SITE_CONFIG.social.youtube, label: "YouTube", icon: YoutubeIcon },
    {
      href: SITE_CONFIG.social.linkedin,
      label: "LinkedIn",
      icon: LinkedinIcon,
    },
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
          {`
  ____             _____       ____       _           
 |  _ \\  _____   _| ____|_ __ / ___| __ _| | ___ _ __ ___ 
 | | | \\ |_ _ \\ \\ / /  _| | '_ \\ |  _ / _\` | |/ _ \\ '__/ _ \\
 | |_| ||  __/\\ V /| |___| | | | |_| | (_| | |  __/ | |  __/
 |____/ \\___| \\_/ |_____|_| |_| \\____|\\__,_|_|\\___|_|  \\___|
`}
        </pre>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 bg-lime flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-mono font-bold text-(--deg-black) text-lg">
                  {">"}_
                </span>
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
          <p className="font-mono text-xs text-(--deg-gray-light)">
            v1.0.0 • made with <span aria-hidden="true">{"<"}3</span>
            <span className="sr-only">amour</span> & bugs
          </p>
        </div>
      </div>
    </footer>
  );
}
