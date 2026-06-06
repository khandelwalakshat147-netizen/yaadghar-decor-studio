import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

const links = [
  { href: "#products", label: "Products" },
  { href: "#categories", label: "Categories" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-red shadow-soft">
            <span className="font-display text-xl font-bold text-primary-foreground">Y</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-foreground">Yaad Ghar</div>
            <div className="font-hindi text-xs text-primary">यादों का घर</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-smooth hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <a href={waLink("Hi! I want to order a magnet.")} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted">
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-3">
              <a href={waLink("Hi! I want to order a magnet.")} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
