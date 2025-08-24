
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Menu } from "lucide-react";
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
          <div className="w-[124px] h-[124px] rounded-full flex items-center justify-center overflow-hidden border-2 transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#0B0C0D', borderColor: '#0B0C0D' }}>
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

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Hamburger Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-zenlore-gold">
                <Menu className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-56 bg-zenlore-navy border-zenlore-gold p-4 mt-2"
              side="bottom"
              align="start"
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
                
                {/* Mobile START THE JOURNEY кнопка */}
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
            </PopoverContent>
          </Popover>

          {/* Mobile Logo (centered) */}
          <div className="flex items-center justify-center flex-1">
            <div className="w-[115px] h-[115px] rounded-full flex items-center justify-center overflow-hidden border-2 transition-all duration-300" style={{ backgroundColor: '#0B0C0D', borderColor: '#0B0C0D' }}>
              <img 
                src="/lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png" 
                alt="Zenlore Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
          
          {/* Spacer for balance */}
          <div className="w-10"></div>
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
