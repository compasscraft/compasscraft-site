import crossBorderImg from "@/assets/cross-border.jpg";
import precisionImg from "@/assets/precision.jpg";
import counselImg from "@/assets/counsel.jpg";
import engagementImg from "@/assets/engagement.jpg";

const services = [
  {
    title: "Cross-Border Recovery",
    description: "We operate where others cannot, navigating three continents and challenging legal environments to deliver results in high-stakes personal matters.",
    image: crossBorderImg,
  },
  {
    title: "Boutique Precision",
    description: "We are a focused agency, prioritizing specific client requirements over volume. Our practice relies on decades of field experience and deep-rooted networks in difficult locations.",
    image: precisionImg,
  },
  {
    title: "Trusted Counsel",
    description: "The majority of our mandates originate from long-standing partnerships with legal counsel, many of whom we have supported for over two decades.",
    image: counselImg,
  },
  {
    title: "Engagement",
    description: "Beyond an initial retainer, we work primarily on a success-fee basis. We only accept cases where we see a viable path to resolution. Mutual trust is the prerequisite for our work.",
    image: engagementImg,
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Decades of Discreet Service
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-card border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
