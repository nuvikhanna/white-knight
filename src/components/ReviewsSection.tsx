import { Star } from "lucide-react";

const reviews = [
  {
    name: "Simone Illger",
    attr: "Local Guide · Google Review",
    text: "The whole experience with White Knight Tree Care was excellent, from the very first contact through to the work being completed. We have a very large oak tree that had been neglected for many years and needed some fairly severe pruning. The prices quoted were reasonable, communication was clear and consistent throughout, and the team did an outstanding job. Everything was left incredibly clean and tidy once the work was finished. We wouldn't hesitate to recommend them.",
  },
  {
    name: "Caroline Davies",
    attr: "Google Review",
    text: "We continue to be very impressed by the expertise of David and his team and their professional approach. They are knowledgeable, provide good advice and take great pride and care in their work. They always clear up afterwards and leave the garden tidy, even raking up leaves that we had left ourselves! They are extremely reliable, punctual and efficient and friendly. I would highly recommend his business.",
  },
  {
    name: "Jacky Rees",
    attr: "Google Review",
    text: "We were recommended White Knight Tree Care by a friend and cannot fault them. The entire process from providing an estimate to carrying out the work has been exceptional. The team working on the tree on the day did an excellent job. They checked with us several times to ensure we were happy with the pruning and shaping. They cleared everything up and left the garden and our driveway very clean and tidy.",
  },
  {
    name: "Lisa Ovenden",
    attr: "Google Review",
    text: "These guys deserve more than 5 stars! Having had a few tree surgeons come out to quote and never hearing back, White Knight Tree Care were professional, knowledgeable and just all around lovely guys. They came to quote, which was returned promptly, then arranged a suitable date for the work. The guys turned up when they said they would and did an absolutely brilliant job.",
  },
  {
    name: "Matin Mesghali",
    attr: "Google Review",
    text: "The team did a great job trimming the conifers, which had not been touched in years. They consulted with me on the day about the best approach, giving the trees a cut but also allowing for new growth. They removed all the cuts, chipped on-site and cleaned the garden and patio areas after they were done. Dave and the team were great and easy to work with.",
  },
];

const Stars5 = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className="fill-gold text-gold" />
    ))}
  </div>
);

const ReviewsSection = () => (
  <section id="reviews" className="py-20 lg:py-28 gradient-dark-section">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="section-label-light">Client Reviews</span>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cream mt-3 mb-4">
          What Our Clients Say.
        </h2>
        <div className="flex items-center justify-center gap-3">
          <Stars5 />
          <span className="text-cream/60 text-sm">5.0 — Rated Across Every Job We've Completed</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, 3).map((r) => (
          <div key={r.name} className="bg-card rounded-xl p-6 shadow-lg flex flex-col">
            <Stars5 />
            <p className="text-charcoal-light text-sm leading-relaxed mt-4 flex-1">"{r.text}"</p>
            <div className="mt-5 pt-4 border-t border-border">
              <p className="font-semibold text-sm text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.attr}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
        {reviews.slice(3).map((r) => (
          <div key={r.name} className="bg-card rounded-xl p-6 shadow-lg flex flex-col">
            <Stars5 />
            <p className="text-charcoal-light text-sm leading-relaxed mt-4 flex-1">"{r.text}"</p>
            <div className="mt-5 pt-4 border-t border-border">
              <p className="font-semibold text-sm text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.attr}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-cream/40 text-xs text-center mt-8">
        All reviews verified on Google. White Knight Tree Care & Consultancy holds a 5.0-star rating.
      </p>

      <div className="text-center mt-8">
        <a href="#contact" className="inline-block bg-gold hover:bg-gold-light text-forest-deep font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm">
          Book Your Free Quote Today
        </a>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
