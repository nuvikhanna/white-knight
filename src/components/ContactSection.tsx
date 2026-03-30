import { useState } from "react";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name,
      phone: form.phone || null,
      email: form.email,
      location: form.location || null,
      message: form.message,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label">Get in Touch</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-3">
            Let's Talk About Your Trees.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every quote is free, bespoke, and comes with absolutely no obligation. Just tell us a little about your tree and your situation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            {submitted ? (
              <div className="bg-card rounded-xl p-8 text-center border border-border">
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-forest" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Enquiry Sent!</h3>
                <p className="text-muted-foreground text-sm">We aim to respond within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/30"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/30"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/30"
                />
                <input
                  type="text"
                  placeholder="Location / Postcode"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/30"
                />
                <textarea
                  placeholder="Tell us about your tree and what you're looking to do"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/30 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-forest-light text-primary-foreground font-semibold py-3.5 rounded-lg transition-colors text-sm"
                >
                  Send My Enquiry
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  We aim to respond to all enquiries within one working day.
                </p>
              </form>
            )}
          </div>

          <div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Not ready to fill in a form? That's fine. Pick up the phone and have a chat with David directly. There's no sales script here — just an honest conversation about what your trees need and how we can help.
            </p>

            <div className="space-y-5">
              <a href="tel:07434644434" className="flex items-center gap-3 text-foreground hover:text-forest transition-colors">
                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-forest" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-semibold text-sm">07434 644434</p>
                </div>
              </a>

              <a href="mailto:contact@whiteknighttreecare.co.uk" className="flex items-center gap-3 text-foreground hover:text-forest transition-colors">
                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-forest" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold text-sm">contact@whiteknighttreecare.co.uk</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-forest" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="font-semibold text-sm text-foreground">5 Cressingham Road, Reading, RG2 7RS</p>
                </div>
              </div>

              <a href="https://facebook.com/whiteknighttreecare" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-forest transition-colors">
                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                  <Facebook size={18} className="text-forest" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Facebook</p>
                  <p className="font-semibold text-sm">facebook.com/whiteknighttreecare</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
