import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const VisionSection = () => {
  const [showVision, setShowVision] = useState(false);

  const founders = [
    {
      id: 1,
      name: "Denis Doronin",
      title: "Co-founder & Tech Visionary",
      vision: "Co-founder Zenlore and strong experience CTO focused on the right technology decisions. We design the right architecture, make smart build-vs-buy calls, set clear platform standards, and automate the pipeline with observability and security by design—so you scale faster with lower risk and better unit economics. From AI-augmented processes and zero-touch delivery to cloud-native and microservices patterns (incl. blockchain/web3 where it fits), we turn complex requirements into secure, scalable systems and predictable releases—optimized for performance, reliability, and cost.",
      email: "den.doronin@zenlore.tech",
      linkedin: "https://www.linkedin.com/in/denys-doronin-b0818995/",
      image: "/lovable-uploads/b4d95826-de61-4599-936d-e7227e0beb7e.png"
    },
    {
      id: 2,
      name: "Eugene Guliakin", 
      title: "Co-founder & Managing Partner",
      vision: "Co-founder Zenlore and leader with strong management experience across global, cross-functional teams. We bring together professionals who share our vision: to turn any chaos into clarity—aligning stakeholders, installing lean processes, and driving predictable, high-quality delivery. We help teams of any size — from lean startups to global enterprises — deliver with clarity and confidence.",
      email: "eu.guliakin@zenlore.tech",
      linkedin: "https://www.linkedin.com/in/eugene-g-11a29115a",
      image: "/lovable-uploads/32a2a6b3-816e-409b-b4f0-1b807a657fd4.png"
    }
  ];

  console.log('VisionSection render:', { showVision, foundersLength: founders.length });
  console.log('Founders data:', founders);

  return (
    <div>
      <Button 
        key="vision-button-v2"
        variant="hero" 
        size="lg"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowVision(prev => !prev);
        }}
        className="px-8 py-3"
      >
        EXPLORE OUR VISION {showVision ? '△' : '▽'}
      </Button>
      
      {showVision && (
        <div className="mt-12 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-4 md:p-8 border border-zenlore-gold/20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {founders.map((founder) => (
                <div key={founder.id} className="flex flex-col items-center">
                  {/* Founder Photo - responsive sizing */}
                  <div className="w-48 h-60 md:w-64 md:h-80 mb-6 overflow-hidden rounded-lg bg-zenlore-gray/20 flex-shrink-0">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Founder Info */}
                  <div className="text-center">
                    <h4 className="text-2xl font-semibold text-zenlore-navy mb-2">
                      {founder.name}
                    </h4>
                    <p className="text-zenlore-gold font-medium mb-6 text-lg">
                      {founder.title}
                    </p>
                    <p className="text-zenlore-navy/80 leading-relaxed text-base mb-8">
                      {founder.vision}
                    </p>
                    
                    {/* Contact Links */}
                    <div className="flex justify-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`mailto:${founder.email}`, '_blank')}
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(founder.linkedin, '_blank')}
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisionSection;