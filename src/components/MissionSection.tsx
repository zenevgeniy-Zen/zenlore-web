const MissionSection = () => {
  return (
    <section id="mission" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <blockquote className="text-2xl md:text-3xl font-light text-zenlore-navy mb-8 italic leading-relaxed">
              "We believe true innovation is born from deep understanding and harmony with change."
            </blockquote>
            
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Zenlore represents a unique vision where knowledge, technology, and balance converge. It is designed for teams inspired by the power of chaos, who seek growth within the beauty of stability and equilibrium.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              We operate at the intersection of clarity and complexity — helping organizations navigate uncertainty with confidence.
              By blending strategy, engineering, and human insight, we co-create solutions that are both forward-thinking and fundamentally sound.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our mission is to empower thoughtful progress.
              Whether shaping AI roadmaps, building secure infrastructures, or mentoring teams, we do so with care, integrity, and a long-term mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;