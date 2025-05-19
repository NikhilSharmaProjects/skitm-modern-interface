
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNavigation from '../navigation/DesktopNavigation';
import MobileNavigation from '../navigation/MobileNavigation';
import { academicLinks, admissionLinks, campusLifeLinks } from '@/data/navigationLinks';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 glassmorphism shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b26f37d3-55cb-448a-ad13-c5921427affe.png" 
              alt="SKITM Logo"
              className="h-12 w-auto" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <DesktopNavigation 
            academicLinks={academicLinks}
            admissionLinks={admissionLinks}
            campusLifeLinks={campusLifeLinks}
          />
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-skitm-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavigation 
        academicLinks={academicLinks}
        admissionLinks={admissionLinks}
        campusLifeLinks={campusLifeLinks}
        isOpen={mobileMenuOpen}
      />
    </header>
  );
};

export default Navbar;
