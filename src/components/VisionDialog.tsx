import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

interface VisionDialogProps {
  children: React.ReactNode;
}

const VisionDialog = ({ children }: VisionDialogProps) => {
  const [open, setOpen] = useState(false);

  const founders = [
    {
      id: 1,
      name: "Co-Founder Name 1",
      title: "CEO & Technical Vision",
      vision: "Vision statement placeholder text for the first co-founder. This will be replaced with actual content later.",
      email: "founder1@zenlore.com",
      linkedin: "https://linkedin.com/in/founder1",
      image: "/placeholder.svg" // placeholder image
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-zenlore-navy text-center mb-8">
            OUR VISION
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
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
                <h3 className="text-xl font-semibold text-zenlore-navy mb-2">
                  {founder.name}
                </h3>
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
      </DialogContent>
    </Dialog>
  );
};

export default VisionDialog;