import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const VisionSection = () => {
  const [showVision, setShowVision] = useState(false);
  
  console.log("VisionSection render, showVision:", showVision);

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
      name: "Co-Founder Name 2", 
      title: "CTO & Strategic Innovation",
      vision: "Vision statement placeholder text for the second co-founder. This will be replaced with actual content later.",
      email: "founder2@zenlore.com",
      linkedin: "https://linkedin.com/in/founder2",
      image: "/placeholder.svg" // placeholder image
    }
  ];

  return (
    <div>
      <Button 
        variant="hero" 
        size="lg"
        onClick={() => {
          console.log("Button clicked, current showVision:", showVision);
          setShowVision(!showVision);
          console.log("Setting showVision to:", !showVision);
        }}
        className="px-8 py-3"
      >
        EXPLORE OUR VISION
      </Button>
      
      {showVision && (
        <div className="mt-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-zenlore-navy text-center mb-8 uppercase tracking-wide">
            OUR VISION
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.id} className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-6 border border-zenlore-gold/20">
                {/* Founder Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-zenlore-gray/20">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Founder Info */}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-zenlore-navy mb-2">
                    {founder.name}
                  </h4>
                  <p className="text-zenlore-gold font-medium mb-4">
                    {founder.title}
                  </p>
                  <p className="text-zenlore-navy/80 leading-relaxed text-sm">
                    {founder.vision}
                  </p>
                </div>
                
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VisionSection;