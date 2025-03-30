
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Database, Shield, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 glass">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-purple rounded-lg p-1">
            <Database size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white">DecentStore</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-gray-200 hover:text-brand-purple transition-colors">
            Features
          </Link>
          <Link to="/how-it-works" className="text-gray-200 hover:text-brand-purple transition-colors">
            How It Works
          </Link>
          <Link to="/pricing" className="text-gray-200 hover:text-brand-purple transition-colors">
            Pricing
          </Link>
          <Link to="/contact" className="text-gray-200 hover:text-brand-purple transition-colors">
            Contact
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-brand-purple/20">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass p-4 z-50">
          <div className="flex flex-col gap-4">
            <Link
              to="/features"
              className="text-gray-200 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-200 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/pricing"
              className="text-gray-200 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-gray-200 hover:text-white hover:bg-brand-purple/20"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-brand-purple hover:bg-brand-dark-purple text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
