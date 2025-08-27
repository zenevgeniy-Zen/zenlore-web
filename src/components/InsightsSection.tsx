import { useState, useRef } from "react";
import { Brain, Shield, Globe } from "lucide-react";
import { useScrollGlow } from "@/hooks/useScrollGlow";

const InsightsSection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  
  // Create refs for each case
  const caseRefs = useRef(Array.from({ length: 3 }, () => useRef<HTMLDivElement>(null)));
  const glowingElements = useScrollGlow(caseRefs.current);

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
        solution: "Zenlore's team designed a modular cybersecurity architecture with token-based authentication, anomaly detection, and automated risk audits. The solution was compliant with EU regulations and built to scale.",
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
    <section id="insights" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-zenlore-navy mb-12 uppercase tracking-wide">
            INSIGHTS
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Zenlore, we believe that true expertise is measured not just by what we know — but by how we apply it.
              Our work spans across industries and technologies, guided by a philosophy of balanced innovation and deep understanding.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Below are a few recent case studies that demonstrate how we help our clients turn complexity into clarity, and vision into reality.
            </p>
          </div>
        </div>

        {/* Cases - One under another */}
        <div className="max-w-4xl mx-auto space-y-8">
          {cases.map((caseItem, index) => {
            const isSelected = selectedCase === index;
            const isBlurred = selectedCase !== null && selectedCase !== index;

            return (
              <div key={index} className="space-y-4">
                {/* Case Title */}
                <div
                  ref={caseRefs.current[index]}
                  className={`
                    cursor-pointer transition-all duration-500 group text-center
                    ${isBlurred ? 'blur-sm opacity-60 scale-95' : 'blur-none opacity-100 scale-100 active:scale-105'}
                  `}
                  onClick={() => setSelectedCase(selectedCase === index ? null : index)}
                >
                  <div className="flex items-center justify-center gap-4">
                    <caseItem.icon 
                      className={`
                        w-8 h-8 md:w-10 md:h-10 transition-colors duration-300
                        ${isSelected 
                          ? 'text-zenlore-gold' 
                          : glowingElements.has(index)
                          ? 'text-zenlore-gold'
                          : 'text-zenlore-navy group-hover:text-zenlore-gold group-active:text-zenlore-gold'
                        }
                      `}
                    />
                    <h3 className={`
                      text-2xl md:text-3xl font-light italic leading-relaxed transition-colors duration-300
                      ${isSelected 
                        ? 'text-zenlore-gold' 
                        : glowingElements.has(index)
                        ? 'text-zenlore-gold'
                        : 'text-zenlore-navy group-hover:text-zenlore-gold group-active:text-zenlore-gold'
                      }
                    `}>
                      {caseItem.title}
                    </h3>
                  </div>
                </div>

                {/* Case Description */}
                {isSelected && (
                  <div className="animate-fade-in pl-0 md:pl-6">
                    <div className="bg-gradient-to-r from-zenlore-gray/10 to-zenlore-gold/10 rounded-lg p-6 md:p-8 border border-zenlore-gold/20 text-left">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-zenlore-gold font-semibold mb-2">Client:</h4>
                            <p className="text-zenlore-navy/80 text-sm md:text-base">{caseItem.fullDesc.client}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-zenlore-gold font-semibold mb-2">Challenge:</h4>
                            <p className="text-zenlore-navy/80 text-sm md:text-base">{caseItem.fullDesc.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-zenlore-gold font-semibold mb-2">Solution:</h4>
                            <p className="text-zenlore-navy/80 text-sm md:text-base">{caseItem.fullDesc.solution}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-zenlore-gold font-semibold mb-2">Results:</h4>
                            <ul className="space-y-2">
                              {caseItem.fullDesc.results.map((result, idx) => (
                                <li key={idx} className="text-zenlore-navy/80 text-sm md:text-base flex items-start">
                                  <span className="text-zenlore-gold mr-2">•</span>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-zenlore-gold font-semibold mb-2">Why it mattered:</h4>
                            <p className="text-zenlore-navy/80 text-sm md:text-base">{caseItem.fullDesc.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;