
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "DecentStore - Decentralized Cloud Storage";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-bg">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
