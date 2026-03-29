import { Facebook } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Coverage Area", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-forest-deep text-cream">
    <div className="container mx-auto px-4 py-14">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-3">White Knight Tree Care & Consultancy</h3>
          <p className="text-cream/50 text-sm leading-relaxed mb-4">
            Professional arboricultural services across Berkshire, Hampshire, and Oxfordshire. Fully qualified. Fully insured. Five-star rated.
          </p>
          <a href="https://facebook.com/whiteknighttreecare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream/50 hover:text-cream text-sm transition-colors">
            <Facebook size={16} />
            Facebook
          </a>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4 text-cream/80">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream/50 hover:text-cream text-sm transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4 text-cream/80">Contact Us</h4>
          <div className="space-y-2 text-cream/50 text-sm">
            <p><a href="tel:07434644434" className="hover:text-cream transition-colors">07434 644434</a></p>
            <p><a href="mailto:contact@whiteknighttreecare.co.uk" className="hover:text-cream transition-colors">contact@whiteknighttreecare.co.uk</a></p>
            <p>5 Cressingham Road, Reading, RG2 7RS</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-forest-light/20">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-cream/30">
        <span>© White Knight Services Ltd 2026. All rights reserved.</span>
        <span>Registered in England and Wales — Company No. 12694619 · Privacy Policy</span>
      </div>
    </div>
  </footer>
);

export default Footer;
