
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ContactDialog from "./ContactDialog";

const Header = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openContactDialog = () => {
    setIsContactDialogOpen(true);
  };

  return (
    <header className="bg-zenlore-navy py-2 md:py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <div className="w-[124px] h-[124px] rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_16px_-2px_rgba(0,0,0,0.2)] border-2 transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.4),0_6px_20px_-2px_rgba(0,0,0,0.3)] hover:scale-105" style={{ backgroundColor: '#0B0C0D', borderColor: '#0B0C0D' }}>
            <img 
              src="/lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png" 
              alt="Zenlore Logo" 
              className="w-full h-full object-cover scale-110 transition-transform duration-300 hover:scale-115"
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
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
            onClick={openContactDialog}
            className="border-zenlore-gold text-zenlore-gold hover:!bg-transparent hover:!text-zenlore-gold px-6 lg:px-8 py-3 text-sm transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#0B0C0D' }}
          >
            START THE JOURNEY
          </Button>
        </div>

        {/* Mobile Logo з dropdown */}
        <div className="md:hidden flex items-center justify-center w-full">
          <HoverCard openDelay={200} closeDelay={300}>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
                <div className="w-[115px] h-[115px] rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_16px_-2px_rgba(0,0,0,0.2)] border-2 transition-all duration-300 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.4),0_6px_20px_-2px_rgba(0,0,0,0.3)] hover:scale-105" style={{ backgroundColor: '#0B0C0D', borderColor: '#0B0C0D' }}>
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
                    onClick={openContactDialog}
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
      
      <ContactDialog 
        open={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />
    </header>
  );
};

export default Header;
