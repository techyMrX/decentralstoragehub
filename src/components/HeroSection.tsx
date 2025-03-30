
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Shield, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero-gradient">
      <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Decentralized</span>{" "}
            <span className="text-white">Cloud Storage</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
            Secure, scalable, and truly private cloud storage powered by
            blockchain technology. Take control of your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/5 w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl"></div>
            <div className="glass rounded-2xl p-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass rounded-xl p-4 flex flex-col items-center animate-float">
                  <Database className="text-brand-purple mb-2" size={32} />
                  <span className="text-white font-medium">Distributed Storage</span>
                </div>
                <div className="glass rounded-xl p-4 flex flex-col items-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <Shield className="text-brand-teal mb-2" size={32} />
                  <span className="text-white font-medium">Data Integrity</span>
                </div>
                <div className="glass rounded-xl p-4 flex flex-col items-center animate-float" style={{ animationDelay: "1s" }}>
                  <Lock className="text-brand-purple mb-2" size={32} />
                  <span className="text-white font-medium">End-to-end Encryption</span>
                </div>
                <div className="glass rounded-xl p-4 flex flex-col items-center animate-float" style={{ animationDelay: "1.5s" }}>
                  <Cpu className="text-brand-teal mb-2" size={32} />
                  <span className="text-white font-medium">Smart Contracts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
