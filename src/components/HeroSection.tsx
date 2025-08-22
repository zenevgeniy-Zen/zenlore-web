import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-background py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-zenlore-navy mb-6 leading-tight">
            Wisdom Meets<br />
            Innovation
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Empowering Ideas, Balancing Technology.
          </p>
          
          <div className="animate-slide-up animate-delayed">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('mission')}
              className="px-8 py-3"
            >
              EXPLORE OUR VISION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;