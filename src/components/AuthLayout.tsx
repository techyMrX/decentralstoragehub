
import { ReactNode } from "react";
import { Database } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-brand-purple to-brand-dark-purple p-12 flex-col justify-between">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white rounded-lg p-1">
              <Database size={24} className="text-brand-purple" />
            </div>
            <span className="text-xl font-bold text-white">DecentStore</span>
          </Link>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white">Decentralized Storage for the Future</h1>
          <p className="text-white/80 text-lg">
            Secure, scalable, and truly private. Take control of your data with blockchain-powered 
            storage technology.
          </p>
          <div className="glass p-4 rounded-lg">
            <p className="text-white/90 italic">
              "DecentStore has revolutionized how we think about data security. Our team now has peace 
              of mind knowing our sensitive information is protected by decentralized technology."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20"></div>
              <div>
                <p className="text-white font-medium">Jane Cooper</p>
                <p className="text-white/70 text-sm">CTO, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} DecentStore. All rights reserved.
        </div>
      </div>
      
      {/* Right Side - Auth Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="md:hidden flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-purple rounded-lg p-1">
                <Database size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">DecentStore</span>
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-400">{subtitle}</p>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
