
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-zenlore-navy py-2 md:py-4 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Desktop Layout (lg+) */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-[103px] h-[103px] rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_16px_-2px_rgba(0,0,0,0.2)] border-2 transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.4),0_6px_20px_-2px_rgba(0,0,0,0.3)] hover:scale-105" style={{ backgroundColor: '#0B0C0D', borderColor: '#0B0C0D' }}>
              <img 
                src="/lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png" 
                alt="Zenlore Logo" 
                className="w-full h-full object-cover scale-110 transition-transform duration-300 hover:scale-115"
              />
            </div>
          </div>
          
          <nav className="flex items-center space-x-8">
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
          
          <div className="flex-shrink-0">
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
        </div>

        {/* Tablet Layout (md only) */}
        <div className="hidden md:flex lg:hidden flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-full">
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-zenlore-gold transition-colors duration-300 text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('expertise')}
                className="text-white hover:text-zenlore-gold transition-colors duration-300 text-sm"
              >
                Expertise
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="text-white hover:text-zenlore-gold transition-colors duration-300 text-sm"
              >
                Insights
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-zenlore-gold transition-colors duration-300 text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-zenlore-gold transition-colors duration-300 text-sm"
              >
                Contact
              </button>
            </nav>
          </div>
          
          <div className="flex justify-center w-full">
            <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_16px_-2px_rgba(0,0,0,0.2)] border-2 transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.4),0_6px_20px_-2px_rgba(0,0,0,0.3)] hover:scale-105" style={{ backgroundColor: '#0B0C0D', borderColor: '#0B0C0D' }}>
              <img 
                src="/lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png" 
                alt="Zenlore Logo" 
                className="w-full h-full object-cover scale-110 transition-transform duration-300 hover:scale-115"
              />
            </div>
          </div>
          
          <div className="flex justify-center w-full">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('hero')}
              className="border-zenlore-gold text-zenlore-gold hover:!bg-transparent hover:!text-zenlore-gold px-6 py-3 text-sm transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#0B0C0D' }}
            >
              START THE JOURNEY
            </Button>
          </div>
        </div>

        {/* Mobile Logo з dropdown */}
        <div className="md:hidden flex items-center justify-center w-full">
          <HoverCard openDelay={200} closeDelay={300}>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
                <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_16px_-2px_rgba(0,0,0,0.2)] border-2 transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.4),0_6px_20px_-2px_rgba(0,0,0,0.3)] hover:scale-105" style={{ backgroundColor: '#0B0C0D', borderColor: '#0B0C0D' }}>
                  <img 
                    src="/lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png" 
                    alt="Zenlore Logo" 
                    className="w-full h-full object-cover scale-110 transition-transform duration-300 hover:scale-115"
                  />
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent 
              className="w-56 bg-zenlore-navy border-zenlore-gold p-4 mt-2"
              side="bottom"
            >
              <nav className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left py-2 hover:bg-white/10 rounded px-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('expertise')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left py-2 hover:bg-white/10 rounded px-2"
                >
                  Expertise
                </button>
                <button 
                  onClick={() => scrollToSection('insights')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left py-2 hover:bg-white/10 rounded px-2"
                >
                  Insights
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left py-2 hover:bg-white/10 rounded px-2"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-zenlore-gold transition-colors duration-300 text-left py-2 hover:bg-white/10 rounded px-2"
                >
                  Contact
                </button>
                
                {/* Mobile START THE JOURNEY кнопка в dropdown */}
                <div className="pt-3 border-t border-zenlore-gold/30">
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
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </header>
  );
};

export default Header;
