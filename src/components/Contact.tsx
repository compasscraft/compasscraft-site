import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="font-sans text-sm tracking-[0.2em] uppercase text-gold mb-4 block">
            Contact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
            Begin a Confidential Inquiry
          </h2>
          <p className="font-sans text-lg text-primary-foreground/70 mb-12 leading-relaxed">
            We understand the nuance of legal strategy and operate with absolute discretion. 
            To discuss your case in confidence, please direct your inquiry to our principal.
          </p>
          
          {/* Contact Card */}
          <div className="bg-navy-light/30 border border-navy-light/50 p-8 md:p-12 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center">
                <span className="font-serif text-2xl text-gold">JC</span>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl text-primary-foreground mb-1">
                  Jean Clémant
                </h3>
                <p className="font-sans text-primary-foreground/60 text-sm tracking-wide">
                  Principal Investigator
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4">
                <a 
                  href="mailto:jean.clemant@proton.me"
                  className="flex items-center gap-3 text-gold hover:text-gold-light transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  <span className="font-sans text-sm tracking-wide group-hover:underline underline-offset-4">
                    jean.clemant@proton.me
                  </span>
                </a>
                
                <div className="flex items-center gap-3 text-primary-foreground/50">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  <span className="font-sans text-sm tracking-wide">
                    Europe · Americas · Asia
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-navy-light/30">
            <p className="font-sans text-xs text-primary-foreground/40 tracking-wide uppercase">
              All communications encrypted · Referral-based practice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
