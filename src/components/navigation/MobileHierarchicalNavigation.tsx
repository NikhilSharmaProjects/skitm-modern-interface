
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { mainNavigationLinks } from '@/data/navigationLinks';

interface NavigationItem {
  name: string;
  href: string;
  subItems?: NavigationItem[];
}

interface MobileHierarchicalNavigationProps {
  isOpen: boolean;
}

const MobileHierarchicalNavigation = ({ isOpen }: MobileHierarchicalNavigationProps) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  
  if (!isOpen) return null;
  
  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const renderNavigationItems = (items: NavigationItem[], parentKey = '', level = 0) => {
    return items.map((item) => {
      const sectionKey = `${parentKey}-${item.name}`;
      const isExpanded = expandedSections[sectionKey];
      
      return (
        <div key={sectionKey} className={level > 0 ? 'ml-4' : ''}>
          {item.subItems ? (
            <div>
              <button 
                onClick={() => toggleSection(sectionKey)}
                className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
              >
                <span>{item.name}</span>
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {isExpanded && (
                <div className="pl-4">
                  {renderNavigationItems(item.subItems, sectionKey, level + 1)}
                </div>
              )}
            </div>
          ) : (
            <Link 
              to={item.href}
              className="block px-4 py-2 text-sm text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
            >
              {item.name}
            </Link>
          )}
        </div>
      );
    });
  };
  
  return (
    <div className="lg:hidden glassmorphism shadow-lg animate-fade-in overflow-y-auto max-h-[80vh]">
      <div className="px-2 pt-2 pb-4 space-y-1">
        {renderNavigationItems(mainNavigationLinks)}
      </div>
    </div>
  );
};

export default MobileHierarchicalNavigation;
