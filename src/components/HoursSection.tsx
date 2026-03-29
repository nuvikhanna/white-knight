import { Clock } from "lucide-react";

const hours = [
  { day: "Monday", time: "7:30 am – 8:00 pm" },
  { day: "Tuesday", time: "7:30 am – 8:00 pm" },
  { day: "Wednesday", time: "7:30 am – 8:00 pm" },
  { day: "Thursday", time: "7:30 am – 8:00 pm" },
  { day: "Friday", time: "7:30 am – 8:00 pm" },
  { day: "Saturday", time: "9:00 am – 4:00 pm" },
  { day: "Sunday", time: "Closed" },
];

const HoursSection = () => (
  <section className="py-20 lg:py-28 gradient-dark-section">
    <div className="container mx-auto px-4 max-w-lg">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-3">
          <Clock size={16} className="text-gold" />
          <span className="section-label-light">Opening Hours</span>
        </div>
        <h2 className="font-heading text-3xl font-bold text-cream">
          When We're Available.
        </h2>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-lg">
        {hours.map((h, i) => (
          <div
            key={h.day}
            className={`flex justify-between py-3 text-sm ${
              i < hours.length - 1 ? "border-b border-border" : ""
            } ${h.time === "Closed" ? "text-muted-foreground" : "text-foreground"}`}
          >
            <span className="font-medium">{h.day}</span>
            <span>{h.time}</span>
          </div>
        ))}
      </div>

      <p className="text-cream/40 text-xs text-center mt-6 leading-relaxed">
        Hours may vary on public holidays. For urgent or out-of-hours enquiries, call us directly or send a message.
      </p>
    </div>
  </section>
);

export default HoursSection;
