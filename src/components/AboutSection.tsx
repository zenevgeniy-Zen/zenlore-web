const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-zenlore-navy mb-12 uppercase tracking-wide text-center">
              ABOUT
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
              At Zenlore, we are a multidisciplinary team of professionals with deep-rooted expertise in technology, strategy, and innovation.
              Our consultants and engineers have led successful projects for startups, scaleups, and enterprises across the USA, UK, Austria, Israel, and Ukraine.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We bring together diverse cultural and technical perspectives to solve complex challenges with clarity and precision.
              Each member of our team is carefully selected not only for their qualifications, but also for their ability to think critically, act ethically, and deliver with impact.
              Clients choose Zenlore for our strategic insight, engineering rigor, and unwavering commitment to meaningful progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;