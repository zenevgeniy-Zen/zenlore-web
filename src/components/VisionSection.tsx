import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const VisionSection = () => {
  const [showVision, setShowVision] = useState(false);

  console.log("VisionSection rendered, showVision:", showVision);

  const founders = [
    {
      id: 1,
      name: "Denis Doronin",
      title: "Co-founder & CTO",
      vision: "Co-founder Zenlore and strong experience CTO focused on the right technology decisions. We design the right architecture, make smart build-vs-buy calls, set clear platform standards, and automate the pipeline with observability and security by design—so you scale faster with lower risk and better unit economics.",
      email: "denis@zenlore.com",
      linkedin: "https://linkedin.com/in/denisdoronin",
      image: "/lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png"
    },
    {
      id: 2,
      name: "Eugene Guliakin", 
      title: "Co-founder & Managing Partner",
      vision: "Co-founder Zenlore and leader with strong management experience across global, cross-functional teams. We bring together professionals who share our vision: to turn any chaos into clarity—aligning stakeholders, installing lean processes, and driving predictable, high-quality delivery.",
      email: "eugene@zenlore.com",
      linkedin: "https://linkedin.com/in/eugenegulyakin",
      image: "/lovable-uploads/c637d10e-1bee-481c-a5b4-a40dbadc02c3.png"
    }
  ];

  const handleClick = () => {
    console.log("Button clicked! Current state:", showVision);
    setShowVision(!showVision);
    console.log("State should now be:", !showVision);
  };

  return (
    <div>
      <Button 
        variant="hero" 
        size="lg"
        onClick={handleClick}
        className="px-8 py-3"
        type="button"
      >
        EXPLORE OUR VISION {showVision ? '△' : '▽'}
      </Button>
      
      <div style={{marginTop: '20px', padding: '10px', border: '1px solid red'}}>
        Debug: showVision = {showVision ? 'TRUE' : 'FALSE'}
      </div>
      
      {showVision && (
        <div className="mt-12 animate-fade-in" style={{border: '2px solid green', padding: '20px'}}>
          <h2>FOUNDERS SECTION IS VISIBLE!</h2>
          <div className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-8 border border-zenlore-gold/20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((founder) => (
                <div key={founder.id} className="flex flex-col items-center">
                  <div className="w-64 h-80 mb-6 overflow-hidden rounded-lg bg-zenlore-gray/20 border border-zenlore-gold/20">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
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