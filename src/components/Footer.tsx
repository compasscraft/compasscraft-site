import { Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-navy-deep border-t border-navy-light/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Compass className="h-5 w-5 text-gold/60" strokeWidth={1.5} />
            <span className="font-serif text-sm text-cream/60">
              Compass Craft Tracings
            </span>
          </div>
          
          <p className="font-sans text-xs text-cream/40 tracking-wide">
            © {new Date().getFullYear()} Compass Craft Tracings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
