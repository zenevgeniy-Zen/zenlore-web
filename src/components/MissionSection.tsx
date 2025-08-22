const MissionSection = () => {
  return (
    <section id="mission" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <blockquote className="text-2xl md:text-3xl font-light text-zenlore-navy mb-8 italic leading-relaxed">
              "We believe true innovation is born from deep understanding and harmony with change."
            </blockquote>
            
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Zenlore is a platform that merges knowledge, technology, and balance. It is designed for teams that seek more than just automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;