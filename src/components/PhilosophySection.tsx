import { Scale, Lightbulb, Heart, Target } from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    {
      icon: Scale,
      title: "Balance over haste",
      description: "Thoughtful progression leads to lasting innovation"
    },
    {
      icon: Lightbulb,
      title: "Innovation grounded in wisdom",
      description: "New ideas built on deep understanding and experience"
    },
    {
      icon: Heart,
      title: "Technology with a human touch",
      description: "Solutions that enhance rather than replace human capability"
    },
    {
      icon: Target,
      title: "Purpose-driven excellence",
      description: "Every solution serves a meaningful goal"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Philosophy
          </h2>
          <div className="w-24 h-1 bg-zenlore-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="text-center p-6 animate-slide-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 text-zenlore-gold group-hover:scale-110 transition-transform duration-300">
                <principle.icon className="w-full h-full" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-zenlore-gold">
                {principle.title}
              </h3>
              
              <p className="text-white/80 text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;