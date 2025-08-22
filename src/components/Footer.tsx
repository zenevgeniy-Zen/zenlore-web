import zenlorelogo from "@/assets/zenlore-logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 bg-zenlore-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img 
              src={zenlorelogo} 
              alt="Zenlore" 
              className="w-12 h-12"
            />
            <span className="font-semibold text-2xl">
              UA27 <span className="text-zenlore-gold">Zenlore</span>
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white/80 hover:text-zenlore-gold transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('expertise')}
              className="text-white/80 hover:text-zenlore-gold transition-colors duration-300"
            >
              Expertise
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-white/80 hover:text-zenlore-gold transition-colors duration-300"
            >
              Insights
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-zenlore-gold transition-colors duration-300"
            >
              About
            </button>
          </nav>
          
          {/* Tagline */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-zenlore-gold font-medium text-lg mb-2">
              "UA27 Zenlore — The Art of Balanced Innovation."
            </p>
            <p className="text-white/60 text-sm">
              Глибокі відповіді. Елегантна простота. Справжня інновація.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;