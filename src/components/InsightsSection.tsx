import { useState } from "react";
import { Brain, Shield, Globe } from "lucide-react";

const InsightsSection = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      icon: Brain,
      title: "AI-Powered LegalTech Assistant",
      shortDesc: "LegalTech startup in Central Europe",
      fullDesc: {
        client: "LegalTech startup in Central Europe",
        challenge: "Lawyers were overwhelmed with case data and needed faster access to relevant information.",
        solution: "Zenlore developed an AI-powered assistant that used NLP to analyze case histories, legal precedents, and court rulings. The system was integrated into their internal document database with secure access controls.",
        results: [
          "Cut legal research time by 60%",
          "Improved accuracy of internal case references", 
          "Enhanced decision-making with real-time insights"
        ],
        impact: "Blending domain-specific AI with thoughtful UX empowered legal teams to work smarter, not harder."
      }
    },
    {
      icon: Shield,
      title: "Cybersecurity Architecture for Fintech",
      shortDesc: "EU-based Fintech startup preparing for PSD2 compliance",
      fullDesc: {
        client: "EU-based Fintech startup preparing for PSD2 compliance",
        challenge: "Scaling the platform while maintaining airtight security and auditability.",
        solution: "Zenlore's team designed a modular, zero-trust cybersecurity architecture with token-based authentication, anomaly detection, and automated risk audits. The solution was compliant with EU regulations and built to scale.",
        results: [
          "Passed 3rd-party security audit with zero critical issues",
          "Reduced attack surface by 45%",
          "Enabled secure API partnerships with banking providers"
        ],
        impact: "Security was not an afterthought—it became a growth enabler for the platform."
      }
    },
    {
      icon: Globe,
      title: "Scaling Web3 Infrastructure for NFT Platform", 
      shortDesc: "NFT infrastructure startup targeting creators and brands",
      fullDesc: {
        client: "NFT infrastructure startup targeting creators and brands",
        challenge: "Platform instability under traffic spikes and expensive gas fees for users.",
        solution: "Zenlore implemented a multi-chain smart contract strategy with Layer-2 integration. Optimized DevOps pipelines enabled auto-scaling infrastructure, real-time gas optimization, and advanced monitoring.",
        results: [
          "3x improvement in transaction throughput",
          "Reduced gas fees by ~30%",
          "Downtime dropped to <0.5% over 6 months"
        ],
        impact: "Tech strategy directly impacted user experience and long-term platform reputation."
      }
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gradient-to-br from-zenlore-navy via-zenlore-navy-light to-zenlore-navy">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            INSIGHTS
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            const isSelected = selectedCase === index;
            const isBlurred = selectedCase !== null && selectedCase !== index;

            return (
              <div key={index} className="text-center">
                {/* Case Item */}
                <div
                  className={`
                    cursor-pointer transition-all duration-500 p-6 rounded-lg
                    ${isBlurred ? 'blur-sm opacity-50 scale-95' : 'hover:scale-105'}
                    ${isSelected ? 'bg-white/10 shadow-gold-glow' : 'hover:bg-white/5'}
                  `}
                  onClick={() => setSelectedCase(index)}
                >
                  <div className="flex flex-col items-center">
                    <div className={`
                      mb-4 p-4 rounded-full transition-all duration-300
                      ${isSelected ? 'bg-gradient-gold text-zenlore-navy' : 'bg-white/10 text-zenlore-gold'}
                    `}>
                      <IconComponent 
                        size={48} 
                        className={isBlurred ? 'text-zenlore-navy' : ''} 
                      />
                    </div>
                    <h3 className={`
                      text-xl font-semibold mb-2 transition-colors duration-300
                      ${isSelected ? 'text-zenlore-gold' : 'text-white'}
                    `}>
                      {caseItem.title}
                    </h3>
                    <p className="text-zenlore-gray text-sm">
                      {caseItem.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Mobile Description */}
                {isSelected && (
                  <div className="md:hidden mt-6 p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-zenlore-gold font-semibold mb-2">Client:</h4>
                        <p className="text-white text-sm">{caseItem.fullDesc.client}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-zenlore-gold font-semibold mb-2">Challenge:</h4>
                        <p className="text-white text-sm">{caseItem.fullDesc.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-zenlore-gold font-semibold mb-2">Solution:</h4>
                        <p className="text-white text-sm">{caseItem.fullDesc.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-zenlore-gold font-semibold mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {caseItem.fullDesc.results.map((result, idx) => (
                            <li key={idx} className="text-white text-sm flex items-start">
                              <span className="text-zenlore-gold mr-2">•</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-zenlore-gold font-semibold mb-2">Why it mattered:</h4>
                        <p className="text-white text-sm">{caseItem.fullDesc.impact}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Description */}
        {selectedCase !== null && (
          <div className="hidden md:block p-8 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="text-zenlore-gold font-semibold mb-2">Client:</h4>
                  <p className="text-white">{cases[selectedCase].fullDesc.client}</p>
                </div>
                
                <div>
                  <h4 className="text-zenlore-gold font-semibold mb-2">Challenge:</h4>
                  <p className="text-white">{cases[selectedCase].fullDesc.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-zenlore-gold font-semibold mb-2">Solution:</h4>
                  <p className="text-white">{cases[selectedCase].fullDesc.solution}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-zenlore-gold font-semibold mb-2">Results:</h4>
                  <ul className="space-y-2">
                    {cases[selectedCase].fullDesc.results.map((result, idx) => (
                      <li key={idx} className="text-white flex items-start">
                        <span className="text-zenlore-gold mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-zenlore-gold font-semibold mb-2">Why it mattered:</h4>
                  <p className="text-white">{cases[selectedCase].fullDesc.impact}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsSection;