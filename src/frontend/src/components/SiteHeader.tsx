import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

type PlainNavItem = {
  name: string;
  path: string;
  dropdown?: never;
};

type DropdownNavItem = {
  name: string;
  path: string;
  dropdown: { label: string; path: string }[];
};

type NavItem = PlainNavItem | DropdownNavItem;

const navItems: NavItem[] = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  {
    name: "INDUSTRIES",
    path: "/industries",
    dropdown: [
      { label: "Pharma Labs", path: "/industries" },
      { label: "Clinical Labs", path: "/industries" },
      { label: "R&D Labs", path: "/industries" },
      { label: "Educational Labs", path: "/industries" },
    ],
  },
  {
    name: "PRODUCTS",
    path: "/products",
    dropdown: [
      { label: "Mechanical Equipment", path: "/products" },
      { label: "Electrical Equipment", path: "/products" },
      { label: "Lab Furniture", path: "/products" },
      { label: "Safety Equipment", path: "/products" },
    ],
  },
  {
    name: "SERVICES",
    path: "/services",
    dropdown: [
      { label: "Installation & Commissioning", path: "/services" },
      { label: "Annual Maintenance", path: "/services" },
      { label: "Calibration Services", path: "/services" },
      { label: "Turnkey Projects", path: "/services" },
    ],
  },
  { name: "CLIENTS", path: "/clients" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT US", path: "/contact" },
];

const ocidMap: Record<string, string> = {
  HOME: "nav.home_link",
  "ABOUT US": "nav.about_link",
  INDUSTRIES: "nav.industries_dropdown",
  PRODUCTS: "nav.products_dropdown",
  SERVICES: "nav.services_dropdown",
  CLIENTS: "nav.clients_link",
  GALLERY: "nav.gallery_link",
  "CONTACT US": "nav.contact_link",
};

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/generated/shastha-logo.dim_512x512.png"
            alt="Shastha Engineering Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-tight text-foreground">
              SHASTHA ENGINEERING
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Technologies &amp; Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {navItems.map((item) => {
            const ocid = ocidMap[item.name];

            if (item.dropdown) {
              const isActive = currentPath === item.path;
              return (
                <DropdownMenu key={item.path}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      data-ocid={ocid}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wide transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="min-w-[200px]"
                    data-ocid={`${ocid}.dropdown_menu`}
                  >
                    {item.dropdown.map((sub) => (
                      <DropdownMenuItem key={sub.label} asChild>
                        <Link
                          to={sub.path}
                          className="w-full cursor-pointer text-sm"
                        >
                          {sub.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                data-ocid={ocid}
                className={`px-3 py-2 text-xs font-semibold tracking-wide transition-colors hover:text-primary ${
                  currentPath === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide transition-colors hover:text-primary rounded-md ${
                      currentPath === item.path
                        ? "bg-accent text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="h-4 w-4 opacity-60" />
                    )}
                  </Link>
                  {item.dropdown && (
                    <div className="flex flex-col gap-1 ml-4 mb-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors rounded-md border-l-2 border-border/50"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
