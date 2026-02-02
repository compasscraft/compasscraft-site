import heroImage from "@/assets/hero-compass.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
            <div className="h-px w-24 bg-gold/60" />
            <div className="w-2 h-2 rotate-45 border border-gold/60" />
            <div className="h-px w-24 bg-gold/60" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6 animate-fade-up-delay-1">
            Cross-Border Recovery
            <span className="block">&amp; Tracing</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up-delay-2">
            We specialize in complex, multi-jurisdictional inquiries focused on alimony, paternity, and estate recovery. Operating where others cannot, across three continents.
          </p>
          
          <a 
            href="#contact"
            className="inline-block font-sans text-sm tracking-widest uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-navy-deep transition-all duration-300 animate-fade-up-delay-3"
          >
            Confidential Inquiry
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
