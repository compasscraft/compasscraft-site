import { Compass } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <Compass className="h-6 w-6 text-gold" strokeWidth={1.5} />
          <span className="font-serif text-xl font-semibold tracking-wide text-primary-foreground">
            Compass Craft Tracings
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
