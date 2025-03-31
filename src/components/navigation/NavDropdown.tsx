
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavDropdownProps {
  title: string;
  items: { name: string; href: string }[];
}

const NavDropdown = ({ title, items }: NavDropdownProps) => {
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
        <div className="absolute left-0 mt-0 w-48 p-2 glassmorphism rounded-lg shadow-lg z-50 transform origin-top-left animate-scale-in">
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

export default NavDropdown;
