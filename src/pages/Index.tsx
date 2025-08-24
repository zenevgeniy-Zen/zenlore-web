import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import InsightsSection from "@/components/InsightsSection";
import PhilosophySection from "@/components/PhilosophySection";
import Footer from "@/components/Footer";
import FloatingLogo from "@/components/FloatingLogo";

const Index = () => {
  return (
    <div>
      <Header />
      <FloatingLogo />
      <main>
        <HeroSection />
        <MissionSection />
        <ExpertiseSection />
        <InsightsSection />
        <AboutSection />
        <PhilosophySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
