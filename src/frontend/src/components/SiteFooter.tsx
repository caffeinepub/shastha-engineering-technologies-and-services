import { Link } from "@tanstack/react-router";
import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";

const quickLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "INDUSTRIES", path: "/industries" },
  { name: "PRODUCTS", path: "/products" },
  { name: "SERVICES", path: "/services" },
  { name: "CLIENTS", path: "/clients" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT US", path: "/contact" },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "shastha-engineering";

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/shastha-logo.dim_512x512.png"
                alt="Shastha Engineering Logo"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight text-foreground">
                  SHASTHA ENGINEERING
                </span>
                <span className="text-xs text-muted-foreground">
                  Technologies & Services
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Delivering excellence in engineering solutions and services with
              innovation and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent hover:text-primary"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent hover:text-primary"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent hover:text-primary"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Shastha Engineering Technologies and Services. All
            rights reserved.
          </p>
          <p className="mt-2">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
