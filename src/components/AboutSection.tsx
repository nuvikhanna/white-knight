import { PortableText, type PortableTextBlock } from "@portabletext/react";
import teamPhoto from "@/assets/team-photo.jpg";
import { useHomepage } from "@/hooks/useHomepage";

const fallbackBody = (
  <>
    <p>
      David White built White Knight Tree Care & Consultancy on a single conviction: that every tree, and every client, deserves a proper job done right.
    </p>
    <p>
      Before founding White Knight, David spent years with the Forestry Commission and went on to work with private tree surgery firms and local authorities across Berkshire. He holds a BTEC Level 3 in Arboriculture and Forestry, a Level 4 Diploma in Arboriculture (ABC Awards), and is a Technician Member of the Arboricultural Association.
    </p>
    <p>
      He is a LANTRA-approved Professional Tree Inspector and regularly undertakes further training to remain at the forefront of best practice.
    </p>
    <p>
      What sets White Knight apart is the way the team approaches every single job. They communicate clearly before work begins, consult with you on the day, check in to make sure you are happy, and leave your garden cleaner than they found it. Every time.
    </p>
  </>
);

const AboutSection = () => {
  const { data } = useHomepage();
  const heading = data?.aboutHeading ?? "Led by Expertise. Driven by Genuine Care.";
  const subheading =
    data?.aboutSubheading ??
    "Founded by David White — arborist, surveyor, and lifelong professional in forestry and tree care.";
  const body = data?.aboutBody as PortableTextBlock[] | undefined;

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={teamPhoto}
              alt="White Knight Tree Care team"
              className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="section-label">About Us</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-2">
              {heading}
            </h2>
            <p className="text-forest-light font-medium mb-6">{subheading}</p>

            <div className="space-y-4 text-charcoal-light text-[15px] leading-relaxed">
              {body && body.length > 0 ? <PortableText value={body} /> : fallbackBody}
            </div>

            <a href="#contact" className="inline-block mt-8 bg-primary hover:bg-forest-light text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              Meet the Full Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
