import { Brain, Lightbulb, Users, Server, Shield, Coins } from "lucide-react";

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
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Streamlined deployment pipelines and infrastructure automation for scalable systems"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security assessment and protection strategies for digital assets"
    },
    {
      icon: Coins,
      title: "Blockchain/Web3",
      description: "Decentralized technology integration and smart contract development solutions"
    }
  ];

  return (
    <section id="expertise" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-zenlore-navy mb-12 uppercase tracking-wide">
            EXPERTISE
          </h2>
        </div>
        
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <service.icon className="w-full h-full text-zenlore-navy" />
              </div>
              
              <h3 className="text-lg font-semibold text-zenlore-navy mb-3">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;