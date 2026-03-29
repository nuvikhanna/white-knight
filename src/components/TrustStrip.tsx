import { GraduationCap, ShieldCheck, TreePine, Search, Star } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "Formally Qualified", desc: "Level 4 Diploma in Arboriculture (ABC Awards)" },
  { icon: ShieldCheck, label: "Fully Insured", desc: "Professional indemnity and public liability coverage" },
  { icon: TreePine, label: "AA Member", desc: "Arboricultural Association — Technician membership" },
  { icon: Search, label: "LANTRA-Approved", desc: "Certified professional tree surveyor" },
  { icon: Star, label: "5.0 Star Rated", desc: "Consistently five-star reviewed across every job" },
];

const TrustStrip = () => (
  <section id="trust" className="bg-cream-warm py-12 lg:py-16 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
        {credentials.map((c) => (
          <div key={c.label} className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
              <c.icon size={20} className="text-forest" />
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{c.label}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
