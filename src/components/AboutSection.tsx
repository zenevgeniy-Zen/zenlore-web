const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-zenlore-navy mb-8">
              About Us
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a team of more than 20 Zenlore vision enthusiasts who work on many multinational projects around the world. 
              Our global presence spans across the USA, Britain, Austria, Israel, and Ukraine, bringing diverse perspectives and 
              expertise to every challenge we tackle. This international foundation allows us to understand and serve clients 
              across different cultures, markets, and technological landscapes with unparalleled insight and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;