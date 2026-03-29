import { Shield, MessageSquare, Sparkles, Lightbulb, PoundSterling, Clock } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Safe. Always.", desc: "Every operation is planned and executed with methodical, professional safety standards. You will never see corners cut." },
  { icon: MessageSquare, title: "Clear Communication from Day One", desc: "You will always know what is happening, when, and why. The team keeps you informed before, during, and after every job." },
  { icon: Sparkles, title: "We Leave It Spotless", desc: "The team clears every piece of debris, chips material on-site where possible, and restores your garden to a pristine condition." },
  { icon: Lightbulb, title: "Honest Expertise — Not Sales Pressure", desc: "Every job begins with a thorough assessment. We explain options clearly and give you our honest professional recommendation." },
  { icon: PoundSterling, title: "Bespoke, Transparent Pricing", desc: "No guesswork. No hidden costs. Every quote is tailored to your tree and your situation — with zero obligation to proceed." },
  { icon: Clock, title: "Reliable and Punctual — Every Time", desc: "When we say we'll be there, we're there. Clients repeatedly highlight the team's punctuality and reliability." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 lg:py-28 bg-cream-warm">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="section-label">Why White Knight</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-3">
          What Makes the Difference.
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Five-star work isn't an accident. It's the result of doing the same things right, every single time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center mb-4">
              <b.icon size={20} className="text-forest" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
