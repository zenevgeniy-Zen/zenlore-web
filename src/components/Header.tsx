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
          <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png" 
              alt="Zenlore Logo" 
              className="w-full h-full object-cover scale-110"
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
          className="bg-zenlore-navy border-zenlore-gold text-zenlore-gold hover:bg-zenlore-gold hover:text-zenlore-navy"
        >
          START THE JOURNEY
        </Button>
      </div>
    </header>
  );
};

export default Header;