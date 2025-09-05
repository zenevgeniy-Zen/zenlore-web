import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const VisionSection = () => {
  const [showVision, setShowVision] = useState(false);

  const founders = [
    {
      id: 1,
      name: "Denis Doronin",
      title: "Co-founder & CTO",
      vision: "Co-founder Zenlore and strong experience CTO focused on the right technology decisions. We design the right architecture, make smart build-vs-buy calls, set clear platform standards, and automate the pipeline with observability and security by design—so you scale faster with lower risk and better unit economics. From AI-augmented processes and zero-touch delivery to cloud-native and microservices patterns (incl. blockchain/web3 where it fits), we turn complex requirements into secure, scalable systems and predictable releases—optimized for performance, reliability, and cost.",
      email: "denis@zenlore.com",
      linkedin: "https://linkedin.com/in/denisdoronin",
      image: "/lovable-uploads/886d4408-bc75-43f1-a56c-de531bb5cbdd.png"
    },
    {
      id: 2,
      name: "Eugene Guliakin", 
      title: "Co-founder & CEO",
      vision: "Co-founder Zenlore and leader with strong management experience across global, cross-functional teams. We bring together professionals who share our vision: to turn any chaos into clarity—aligning stakeholders, installing lean processes, and driving predictable, high-quality delivery. We help teams of any size — from lean startups to global enterprises — deliver with clarity and confidence.",
      email: "eugene@zenlore.com",
      linkedin: "https://linkedin.com/in/eugenegulyakin",
      image: "/lovable-uploads/32a2a6b3-816e-409b-b4f0-1b807a657fd4.png"
    }
  ];

  return (
    <div>
      <Button 
        variant="hero" 
        size="lg"
        onClick={() => setShowVision(prev => !prev)}
        className="px-8 py-3"
      >
        EXPLORE OUR VISION {showVision ? '△' : '▽'}
      </Button>
      
      {showVision && (
        <div className="mt-12 animate-fade-in">
          <div className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-8 border border-zenlore-gold/20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((founder) => (
                <div key={founder.id} className="flex flex-col items-center">
                  {/* Founder Photo - прямоугольное и большое */}
                  <div className="w-64 h-80 mb-6 overflow-hidden rounded-lg bg-zenlore-gray/20">
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
      )}
    </div>
  );
};

export default VisionSection;