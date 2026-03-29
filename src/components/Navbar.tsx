import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-deep/95 backdrop-blur-md border-b border-forest-light/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="font-heading text-lg text-cream font-semibold tracking-tight">
          White Knight <span className="hidden sm:inline">Tree Care & Consultancy</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-cream/70 hover:text-cream transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:07434644434"
            className="inline-flex items-center gap-2 bg-gold/90 hover:bg-gold text-forest-deep text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">07434 644434</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-forest-deep border-t border-forest-light/20 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-cream/80 hover:text-cream text-sm font-medium border-b border-forest-light/10 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
