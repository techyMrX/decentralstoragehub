
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark-bg text-white p-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-brand-purple rounded-lg p-1">
          <Database size={24} className="text-white" />
        </div>
        <span className="text-xl font-bold">DecentStore</span>
      </div>
      
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-gray-300 mb-8">
          Oops! This page seems to have disappeared into the decentralized void.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-brand-purple hover:bg-brand-dark-purple w-full sm:w-auto">
              Go to Homepage
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="border-white/20 hover:bg-white/5 w-full sm:w-auto">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
