const PhilosophySection = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-zenlore-navy mb-12 uppercase tracking-wide text-center">
              CONTACT US
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
              Let's shape the future together.<br />
              Whether you're exploring a new idea, scaling a product, or building tech infrastructure — our team is here to help.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-zenlore-navy mb-6">Offices / Locations</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>📍 USA – Charlotte, NC - charlotte@zenlore.tech</div>
                  <div>📍 UK – London - london@zenlore.tech</div>
                  <div>📍 Austria – Vienna - vienna@zenlore.tech</div>
                  <div>📍 Israel – Tel Aviv - telaviv@zenlore.tech</div>
                  <div>📍 Ukraine – Kyiv - kyiv@zenlore.tech</div>
                </div>
                <p className="text-muted-foreground mt-4 italic">
                  Remote-first team. Available across time zones.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zenlore-navy mb-6">Direct Email</h3>
                <div className="space-y-3 text-muted-foreground mb-8">
                  <div>General Inquiries: hello@zenlore.tech</div>
                  <div>Partnerships: partners@zenlore.tech</div>
                  <div>Careers: talent@zenlore.tech</div>
                </div>

                <h3 className="text-xl font-semibold text-zenlore-navy mb-6">Social Media</h3>
                <div className="text-muted-foreground">
                  LinkedIn - linkedin.com/company/zenlore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;