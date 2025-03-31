
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  if (!isOpen) return null;
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <div className="lg:hidden glassmorphism shadow-lg animate-fade-in overflow-y-auto max-h-[80vh]">
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
        
        {/* Academics Section */}
        <div className="relative">
          <button 
            onClick={() => toggleSection('academics')}
            className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
          >
            <span>Academics</span>
            {expandedSection === 'academics' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSection === 'academics' && (
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
          )}
        </div>
        
        {/* Admissions Section */}
        <div className="relative">
          <button 
            onClick={() => toggleSection('admissions')}
            className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
          >
            <span>Admissions</span>
            {expandedSection === 'admissions' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSection === 'admissions' && (
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
          )}
        </div>
        
        {/* Campus Life Section */}
        <div className="relative">
          <button 
            onClick={() => toggleSection('campusLife')}
            className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
          >
            <span>Campus Life</span>
            {expandedSection === 'campusLife' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSection === 'campusLife' && (
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
          )}
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
          to="/blogs" 
          className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
        >
          Blogs
        </Link>
        <Link 
          to="/library" 
          className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
        >
          Library
        </Link>
        <Link 
          to="/contact" 
          className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
