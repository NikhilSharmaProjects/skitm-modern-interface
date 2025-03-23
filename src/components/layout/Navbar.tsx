
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// Create a custom button component for the navbar
const NavButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
  return (
    <Link
      to={href}
      className="px-4 py-2 text-sm font-medium text-skitm-navy hover:text-skitm-blue transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

// Create a dropdown component for navbar dropdowns
const NavDropdown = ({ 
  title, 
  items 
}: { 
  title: string; 
  items: { name: string; href: string }[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center px-4 py-2 text-sm font-medium text-skitm-navy hover:text-skitm-blue transition-colors duration-200"
      >
        {title}
        <ChevronDown size={16} className="ml-1" />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 p-2 glassmorphism rounded-lg shadow-lg z-50 transform origin-top-left animate-scale-in">
          <div className="py-1 flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 text-sm text-skitm-navy hover:bg-skitm-blue/10 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
  
  // Navbar links configuration
  const academicLinks = [
    { name: "Departments", href: "/departments" },
    { name: "Courses", href: "/courses" },
    { name: "Faculty", href: "/faculty" },
    { name: "Research", href: "/research" },
  ];
  
  const admissionLinks = [
    { name: "Admission Process", href: "/admissions" },
    { name: "Fees Structure", href: "/fees" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "FAQs", href: "/faqs" },
  ];
  
  const campusLifeLinks = [
    { name: "Clubs & Activities", href: "/student-life" },
    { name: "Events", href: "/events" },
    { name: "Facilities", href: "/facilities" },
    { name: "Hostels", href: "/hostels" },
  ];
  
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
            <span className="text-xl font-display font-bold text-skitm-navy">SKITM</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavButton href="/">Home</NavButton>
            <NavButton href="/about">About</NavButton>
            <NavDropdown title="Academics" items={academicLinks} />
            <NavDropdown title="Admissions" items={admissionLinks} />
            <NavDropdown title="Campus Life" items={campusLifeLinks} />
            <NavButton href="/placements">Placements</NavButton>
            <NavButton href="/gallery">Gallery</NavButton>
            <NavButton href="/news">News & Events</NavButton>
            <NavButton href="/contact">Contact</NavButton>
            
            <Link 
              to="/login" 
              className="ml-4 px-5 py-2 text-sm font-medium text-white bg-skitm-blue rounded-md hover:bg-skitm-lightBlue transition-colors duration-200"
            >
              Admin Login
            </Link>
          </nav>
          
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
      {mobileMenuOpen && (
        <div className="lg:hidden glassmorphism shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link 
              to="/" 
              className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
            >
              About
            </Link>
            <div className="relative">
              <div className="block px-4 py-2 text-base font-medium text-skitm-navy">
                Academics
              </div>
              <div className="pl-4">
                {academicLinks.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="block px-4 py-2 text-base font-medium text-skitm-navy">
                Admissions
              </div>
              <div className="pl-4">
                {admissionLinks.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="block px-4 py-2 text-base font-medium text-skitm-navy">
                Campus Life
              </div>
              <div className="pl-4">
                {campusLifeLinks.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/placements" 
              className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
            >
              Placements
            </Link>
            <Link 
              to="/gallery" 
              className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
            >
              Gallery
            </Link>
            <Link 
              to="/news" 
              className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
            >
              News & Events
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className="block px-4 py-2 text-base font-medium text-white bg-skitm-blue rounded-md"
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
