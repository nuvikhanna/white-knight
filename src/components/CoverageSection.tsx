import { MapPin } from "lucide-react";

const CoverageSection = () => (
  <section id="coverage" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="section-label">Coverage Area</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
            Based in Reading. Serving the South of England.
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            White Knight Tree Care & Consultancy is headquartered in Reading, Berkshire, and primarily covers:
          </p>

          <ul className="space-y-2 mb-6">
            {["Berkshire", "Hampshire", "Oxfordshire"].map((c) => (
              <li key={c} className="flex items-center gap-2 text-foreground font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                {c}
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Based outside these areas? We'd still love to hear from you. Get in touch and we'll discuss what we can arrange.
          </p>

          <div className="flex items-start gap-3 text-sm text-muted-foreground mb-8">
            <MapPin size={18} className="text-forest mt-0.5 shrink-0" />
            <span>5 Cressingham Road, Reading, RG2 7RS, United Kingdom</span>
          </div>

          <a href="#contact" className="inline-block bg-primary hover:bg-forest-light text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            Get in Touch
          </a>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-border">
          <iframe
            title="White Knight Tree Care location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.5!2d-0.9716!3d51.4344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769b1e0b2f1f1d%3A0x1234567890abcdef!2s5+Cressingham+Rd%2C+Reading+RG2+7RS!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CoverageSection;
