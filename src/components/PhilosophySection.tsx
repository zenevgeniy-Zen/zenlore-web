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
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-left max-w-4xl">
          <div className="space-y-6">
            <div className="text-zenlore-navy font-medium">Balance over haste</div>
            <div className="text-zenlore-navy font-medium">Innovation grounded in wisdom</div>
            <div className="text-zenlore-navy font-medium">Technology with a human touch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;