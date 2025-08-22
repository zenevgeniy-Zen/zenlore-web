import { Button } from "@/components/ui/button";
import zenlorelogo from "@/assets/zenlore-logo.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={zenlorelogo} 
            alt="Zenlore" 
            className="w-10 h-10 hover:scale-105 transition-transform duration-300"
          />
          <span className="font-semibold text-xl text-zenlore-navy hidden sm:block">
            UA27 <span className="text-zenlore-gold">Zenlore</span>
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-zenlore-navy hover:text-zenlore-gold transition-colors duration-300"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('expertise')}
            className="text-zenlore-navy hover:text-zenlore-gold transition-colors duration-300"
          >
            Expertise
          </button>
          <button 
            onClick={() => scrollToSection('insights')}
            className="text-zenlore-navy hover:text-zenlore-gold transition-colors duration-300"
          >
            Insights
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-zenlore-navy hover:text-zenlore-gold transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-zenlore-navy hover:text-zenlore-gold transition-colors duration-300"
          >
            Contact
          </button>
        </nav>
        
        {/* CTA Button */}
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => scrollToSection('hero')}
        >
          Start the Journey
        </Button>
      </div>
    </header>
  );
};

export default Header;