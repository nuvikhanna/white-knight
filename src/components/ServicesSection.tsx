const surgeryServices = [
  { name: "Crown Raising & Lifting", desc: "Removing lower limbs to increase clearance, improve light, and open sight lines." },
  { name: "Crown Reduction", desc: "Reducing overall height and spread while retaining the tree's natural form." },
  { name: "Pollarding", desc: "Removing all but the main skeletal branches for controlled, cyclical regrowth." },
  { name: "Coppicing", desc: "A traditional technique cutting to near ground level, encouraging multiple new stems." },
  { name: "Deadwood Removal", desc: "Safely removing dead branches that pose a falling hazard." },
  { name: "Felling", desc: "Full removal with precision roping, wedges, and controlled directional techniques." },
  { name: "Stump Grinding", desc: "Breaking down stumps with specialist machinery, leaving ground clear for replanting." },
  { name: "Rigging", desc: "Using ropes and pulleys to carefully lower sections in confined spaces." },
  { name: "Monolithing", desc: "Retaining a standing pole from a dead tree as natural wildlife habitat." },
  { name: "Veteranising", desc: "Encouraging ancient-tree habitat features to benefit local wildlife." },
];

const consultancyServices = [
  { name: "Tree Safety Surveys", desc: "Professional safety inspections with written evidence of your duty of care as a landowner." },
  { name: "Written Survey Reports", desc: "Detailed written reports for legal, insurance, or planning purposes." },
  { name: "Tree Planting Advice", desc: "Species selection guidance and soil testing to give new trees the best possible start." },
  { name: "TPO Applications", desc: "We manage the entire Tree Preservation Order application process with your local planning authority." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 gradient-dark-section">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="section-label-light">Our Services</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cream mt-3 mb-4">
          Everything Your Trees Need. All in One Place.
        </h2>
        <p className="text-cream/60 max-w-2xl mx-auto leading-relaxed">
          From routine pruning to complex rigging operations, from safety surveys to Tree Preservation Order applications — we handle it all. Every job is scoped carefully, priced fairly, and carried out to the highest standard.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <h3 className="font-heading text-xl font-semibold text-gold mb-6 border-b border-gold/20 pb-3">
            Tree Surgery
          </h3>
          <div className="space-y-5">
            {surgeryServices.map((s) => (
              <div key={s.name}>
                <h4 className="font-semibold text-cream text-[15px]">{s.name}</h4>
                <p className="text-cream/50 text-sm mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-gold mb-6 border-b border-gold/20 pb-3">
            Tree Surveying & Consultancy
          </h3>
          <div className="space-y-5">
            {consultancyServices.map((s) => (
              <div key={s.name}>
                <h4 className="font-semibold text-cream text-[15px]">{s.name}</h4>
                <p className="text-cream/50 text-sm mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-14">
        <a
          href="#contact"
          className="inline-block bg-gold hover:bg-gold-light text-forest-deep font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
        >
          Request a Free No-Obligation Quote
        </a>
        <p className="text-cream/40 text-xs mt-3">
          Because every tree is different, all quotes are bespoke. There is no standard price list — and no obligation whatsoever.
        </p>
      </div>
    </div>
  </section>
);

export default ServicesSection;
