import { Brain, Lightbulb, Users } from "lucide-react";

const ExpertiseSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Research and Development",
      description: "Deep analysis and strategic innovation development with focus on sustainable solutions"
    },
    {
      icon: Lightbulb,
      title: "AI Consulting",
      description: "Intelligent integration of AI technologies balanced with human-centered approaches"
    },
    {
      icon: Users,
      title: "Tech Strategy & Mentoring",
      description: "Guidance for teams seeking harmony between rapid growth and thoughtful implementation"
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-zenlore-navy mb-6">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-subtle hover:shadow-premium transition-all duration-500 hover:transform hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center group-hover:shadow-gold-glow transition-all duration-300">
                <service.icon className="w-8 h-8 text-zenlore-navy" />
              </div>
              
              <h3 className="text-xl font-semibold text-zenlore-navy mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;