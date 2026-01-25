import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import MagnetXSection from "@/components/MagnetXSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialProofSection from "@/components/SocialProofSection";
import Footer from "@/components/Footer";
import ProofOfWork from "@/components/ProofOfWork";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProofOfWork />
      <MagnetXSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
