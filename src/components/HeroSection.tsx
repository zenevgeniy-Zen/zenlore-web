import VisionSection from "@/components/VisionSection";

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
            Wisdom Multiplies<br />
            Innovation
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Empowering Ideas, Balancing Technology.
          </p>
        </div>
      </div>
      {/* Vision section full-width below the intro */}
      <div className="mt-6" key="vision-container-v2">
        <VisionSection key="vision-section-v2" />
      </div>
    </section>
  );
};

export default HeroSection;