import { Star, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Professional arborist working in a mature oak tree"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 gradient-hero" />

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-gold text-gold" />
          ))}
        </div>
        <span className="text-cream/90 text-xs font-medium">
          5.0 Stars — Trusted Arborists in Berkshire, Hampshire & Oxfordshire
        </span>
      </div>

      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Your Trees Deserve Expert Hands.
      </h1>

      <p className="text-cream/80 text-lg sm:text-xl leading-relaxed mb-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        Professional tree surgery and consultancy, carried out safely, cleanly, and with genuine care — by a team that takes pride in every single job.
      </p>

      <p className="text-cream/50 text-sm mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        Serving Reading and the surrounding counties. Fully qualified, fully insured, and always thorough.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <a
          href="#contact"
          className="bg-gold hover:bg-gold-light text-forest-deep font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
        >
          Get Your Free Quote
        </a>
        <a
          href="#services"
          className="text-cream/70 hover:text-cream text-sm font-medium underline underline-offset-4 decoration-cream/30 hover:decoration-cream/60 transition-colors"
        >
          See Our Services →
        </a>
      </div>
    </div>

    <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 animate-chevron-bounce">
      <ChevronDown size={28} />
    </a>
  </section>
);

export default HeroSection;
