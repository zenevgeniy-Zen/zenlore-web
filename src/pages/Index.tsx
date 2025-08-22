import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PhilosophySection from "@/components/PhilosophySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ExpertiseSection />
        <PhilosophySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
