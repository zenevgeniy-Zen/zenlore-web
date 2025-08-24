import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-zenlore-navy py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-[103px] h-[103px] bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_16px_-2px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.8)] border-2 border-white/20 transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.4),0_6px_20px_-2px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.9)] hover:scale-105">
            <img 
              src="/lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png" 
              alt="Zenlore Logo" 
              className="w-full h-full object-cover scale-110 transition-transform duration-300 hover:scale-115"
            />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-zenlore-gold transition-colors duration-300"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('expertise')}
            className="text-white hover:text-zenlore-gold transition-colors duration-300"
          >
            Expertise
          </button>
          <button 
            onClick={() => scrollToSection('insights')}
            className="text-white hover:text-zenlore-gold transition-colors duration-300"
          >
            Insights
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-zenlore-gold transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-zenlore-gold transition-colors duration-300"
          >
            Contact
          </button>
        </nav>
        
        {/* CTA Button */}
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => scrollToSection('hero')}
          className="border-zenlore-gold text-zenlore-gold hover:bg-zenlore-gold hover:text-zenlore-navy"
          style={{ backgroundColor: '#0B0C0D' }}
        >
          START THE JOURNEY
        </Button>
      </div>
    </header>
  );
};

export default Header;