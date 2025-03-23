
import { Link } from 'react-router-dom';

interface MobileNavigationProps {
  academicLinks: { name: string; href: string }[];
  admissionLinks: { name: string; href: string }[];
  campusLifeLinks: { name: string; href: string }[];
  isOpen: boolean;
}

const MobileNavigation = ({ 
  academicLinks, 
  admissionLinks, 
  campusLifeLinks,
  isOpen 
}: MobileNavigationProps) => {
  if (!isOpen) return null;
  
  return (
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
  );
};

export default MobileNavigation;
