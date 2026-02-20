
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { mainNavigationLinks } from '@/data/navigationLinks';

interface NavigationItem {
  name: string;
  href: string;
  subItems?: NavigationItem[];
}

interface DropdownProps {
  items: NavigationItem[];
  isOpen: boolean;
  level?: number;
}

const Dropdown = ({ items, isOpen, level = 0 }: DropdownProps) => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

  // Removed toggleSubmenu and only open via hover from parent logic
  if (!isOpen) return null;

  return (
    <div
      className={`absolute ${
        level === 0 ? 'top-full left-0' : 'top-0 left-full'
      } min-w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50`}
    >
      {items.map((item) => (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() =>
            setOpenSubmenus((prev) => ({ ...prev, [item.name]: true }))
          }
          onMouseLeave={() =>
            setOpenSubmenus((prev) => ({ ...prev, [item.name]: false }))
          }
        >
          {item.subItems ? (
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-sm text-skitm-navy hover:bg-skitm-blue/10 transition-colors"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <Dropdown
                items={item.subItems}
                isOpen={!!openSubmenus[item.name]}
                level={level + 1}
              />
            </div>
          ) : (
            <Link
              to={item.href}
              className="block px-4 py-2 text-sm text-skitm-navy hover:bg-skitm-blue/10 transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

const HierarchicalNavigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {mainNavigationLinks.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          {item.subItems ? (
            <div>
              <button className="flex items-center px-2 py-2 text-sm font-medium text-skitm-navy hover:text-skitm-blue transition-colors">
                <span>{item.name}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <Dropdown
                items={item.subItems}
                isOpen={openDropdown === item.name}
              />
            </div>
          ) : (
            <Link
              to={item.href}
              className="flex items-center px-2 py-2 text-sm font-medium text-skitm-navy hover:text-skitm-blue transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HierarchicalNavigation;
