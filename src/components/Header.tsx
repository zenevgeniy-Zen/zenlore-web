
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-zenlore-navy py-2 md:py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[103px] lg:h-[103px] rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_16px_-2px_rgba(0,0,0,0.2)] border-2 transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.4),0_6px_20px_-2px_rgba(0,0,0,0.3)] hover:scale-105" style={{ backgroundColor: '#0B0C0D', borderColor: '#0B0C0D' }}>
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
        
        {/* Desktop CTA Button */}
        <div className="hidden md:flex flex-shrink-0">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('hero')}
            className="border-zenlore-gold text-zenlore-gold hover:!bg-transparent hover:!text-zenlore-gold px-6 lg:px-8 py-3 text-sm transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#0B0C0D' }}
          >
            START THE JOURNEY
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-zenlore-gold">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zenlore-navy border-l-zenlore-gold w-[300px] sm:w-[350px]">
              <nav className="flex flex-col space-y-6 mt-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left text-lg py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('expertise')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left text-lg py-2"
                >
                  Expertise
                </button>
                <button 
                  onClick={() => scrollToSection('insights')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left text-lg py-2"
                >
                  Insights
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left text-lg py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left text-lg py-2"
                >
                  Contact
                </button>
                
                {/* Mobile CTA Button */}
                <div className="pt-6">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('hero')}
                    className="border-zenlore-gold text-zenlore-gold hover:!bg-transparent hover:!text-zenlore-gold w-full py-3 text-sm transform hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: '#0B0C0D' }}
                  >
                    START THE JOURNEY
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
