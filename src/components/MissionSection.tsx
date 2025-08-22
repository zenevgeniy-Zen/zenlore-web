const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-zenlore-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <blockquote className="text-3xl md:text-4xl font-light text-zenlore-navy mb-8 italic leading-relaxed">
              "We believe true innovation is born from deep understanding and harmony with change."
            </blockquote>
            
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              UA27 Zenlore поєднує глибоке знання, технології та баланс у сучасних рішеннях. 
              Ми створюємо мости між мудрістю і майбутнім, допомагаючи командам знаходити 
              гармонію між інноваціями та стабільністю.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;