import { Brain, Lightbulb, Users, Server, Shield, Coins } from "lucide-react";
import { useState, useRef } from "react";
import { useScrollGlow } from "@/hooks/useScrollGlow";

const ExpertiseSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  // Create refs for each service
  const serviceRefs = useRef(Array.from({ length: 6 }, () => useRef<HTMLDivElement>(null)));
  const glowingElements = useScrollGlow(serviceRefs.current);

  const services = [
    {
      icon: Brain,
      title: "Research and Development",
      shortDescription: "Deep analysis and strategic innovation development with focus on sustainable solutions",
      fullDescription: "We specialize in turning bold ideas into tangible innovations. Our R&D team combines scientific rigor with technical excellence to create future-ready solutions."
    },
    {
      icon: Lightbulb,
      title: "AI Consulting",
      shortDescription: "Intelligent integration of AI technologies balanced with human-centered approaches",
      fullDescription: "Our experts bring years of experience in applying machine learning and data science to real-world problems. From AI strategy to full-scale implementation — we help you harness AI wisely and responsibly."
    },
    {
      icon: Users,
      title: "Tech Strategy & Mentoring",
      shortDescription: "Guidance for teams seeking harmony between rapid growth and thoughtful implementation",
      fullDescription: "We guide organizations through complex technological decisions with clarity and confidence. Our senior consultants mentor teams and shape tech roadmaps aligned with your vision and growth."
    },
    {
      icon: Server,
      title: "DevOps",
      shortDescription: "Streamlined deployment pipelines and infrastructure automation for scalable systems",
      fullDescription: "Seamless integration, automation, and delivery — that's our DevOps DNA. We've helped scale engineering teams and CI/CD pipelines for fast-moving startups and enterprise systems alike."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      shortDescription: "Comprehensive security assessment and protection strategies for digital assets",
      fullDescription: "Our security experts are trusted by fintechs, startups, and critical infrastructure clients. We deliver secure-by-design architecture, threat modeling, and incident response expertise."
    },
    {
      icon: Coins,
      title: "Blockchain/Web3",
      shortDescription: "Decentralized technology integration and smart contract development solutions",
      fullDescription: "From tokenomics to smart contract audits, we bring proven experience in decentralized systems. We work with blockchain protocols, dApps, and Web3 infrastructure at production scale."
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
          {services.slice(0, 3).map((service, index) => (
            <div key={index}>
                <div 
                ref={serviceRefs.current[index]}
                className={`animate-slide-up cursor-pointer transition-all duration-500 group ${
                  selectedService !== null && selectedService !== index 
                    ? 'blur-sm opacity-60 scale-95' 
                    : 'blur-none opacity-100 scale-100 hover:scale-105 active:scale-110'
                } ${glowingElements.has(index) ? 'shadow-[0_0_30px_rgba(212,175,55,0.6)] scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 transition-all duration-300 ${
                  selectedService === index ? 'transform scale-110' : ''
                }`}>
                  <service.icon className={`w-full h-full transition-colors duration-300 ${
                    selectedService === index 
                      ? 'text-zenlore-gold' 
                      : selectedService !== null && selectedService !== index
                      ? 'text-zenlore-navy'
                      : 'text-zenlore-navy group-hover:text-zenlore-gold group-active:text-zenlore-gold'
                  }`} />
                </div>
                
                <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                  selectedService === index 
                    ? 'text-zenlore-gold' 
                    : selectedService !== null && selectedService !== index
                    ? 'text-zenlore-navy'
                    : 'text-zenlore-navy group-hover:text-zenlore-gold group-active:text-zenlore-gold'
                }`}>
                  {service.title}
                </h3>
              </div>
              
              {/* Mobile description - shows under each icon */}
              {selectedService === index && (
                <div className="mt-6 md:hidden animate-fade-in">
                  <div className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-6 border border-zenlore-gold/20">
                    <p className="text-zenlore-navy/80 leading-relaxed text-sm">
                      {services[selectedService].fullDescription}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop description - shows under the row */}
        {selectedService !== null && selectedService < 3 && (
          <div className="mt-12 max-w-3xl mx-auto text-center animate-fade-in hidden md:block">
            <div className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-8 border border-zenlore-gold/20">
              <h4 className="text-xl font-semibold text-zenlore-navy mb-4">
                {services[selectedService].title}
              </h4>
              <p className="text-zenlore-navy/80 leading-relaxed">
                {services[selectedService].fullDescription}
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center mt-16">
          {services.slice(3, 6).map((service, index) => {
            const actualIndex = index + 3;
            return (
              <div key={actualIndex}>
                <div 
                  ref={serviceRefs.current[actualIndex]}
                  className={`animate-slide-up cursor-pointer transition-all duration-500 group ${
                    selectedService !== null && selectedService !== actualIndex 
                      ? 'blur-sm opacity-60 scale-95' 
                      : 'blur-none opacity-100 scale-100 hover:scale-105 active:scale-110'
                  } ${glowingElements.has(actualIndex) ? 'shadow-[0_0_30px_rgba(212,175,55,0.6)] scale-105' : ''}`}
                  style={{ animationDelay: `${actualIndex * 0.2}s` }}
                  onClick={() => setSelectedService(selectedService === actualIndex ? null : actualIndex)}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 transition-all duration-300 ${
                    selectedService === actualIndex ? 'transform scale-110' : ''
                  }`}>
                    <service.icon className={`w-full h-full transition-colors duration-300 ${
                      selectedService === actualIndex 
                        ? 'text-zenlore-gold' 
                        : selectedService !== null && selectedService !== actualIndex
                        ? 'text-zenlore-navy'
                        : 'text-zenlore-navy group-hover:text-zenlore-gold group-active:text-zenlore-gold'
                    }`} />
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                    selectedService === actualIndex 
                      ? 'text-zenlore-gold' 
                      : selectedService !== null && selectedService !== actualIndex
                      ? 'text-zenlore-navy'
                      : 'text-zenlore-navy group-hover:text-zenlore-gold group-active:text-zenlore-gold'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                
                {/* Mobile description - shows under each icon */}
                {selectedService === actualIndex && (
                  <div className="mt-6 md:hidden animate-fade-in">
                    <div className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-6 border border-zenlore-gold/20">
                      <p className="text-zenlore-navy/80 leading-relaxed text-sm">
                        {services[selectedService].fullDescription}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop description - shows under the row */}
        {selectedService !== null && selectedService >= 3 && (
          <div className="mt-12 max-w-3xl mx-auto text-center animate-fade-in hidden md:block">
            <div className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-8 border border-zenlore-gold/20">
              <h4 className="text-xl font-semibold text-zenlore-navy mb-4">
                {services[selectedService].title}
              </h4>
              <p className="text-zenlore-navy/80 leading-relaxed">
                {services[selectedService].fullDescription}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpertiseSection;