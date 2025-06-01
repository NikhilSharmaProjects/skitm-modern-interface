
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNavigation from '../navigation/DesktopNavigation';
import MobileNavigation from '../navigation/MobileNavigation';
import { 
  aboutLinks, 
  academicLinks, 
  admissionLinks, 
  campusLifeLinks,
  placementLinks,
  partnershipsLinks,
  cellsCommitteesLinks
} from '@/data/navigationLinks';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        {/* Navigation breadcrumb schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://skitm.in/"
                },
                ${location.pathname !== "/" ? `
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "${location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2)}",
                  "item": "https://skitm.in${location.pathname}"
                }
                ` : ''}
              ]
            }
          `}
        </script>
        
        {/* Primary navigation schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": [
                "Home", 
                "About", 
                "Academics", 
                "Admissions", 
                "Campus Life",
                "Placements",
                "Partnerships",
                "Cells & Committees",
                "Gallery",
                "News & Events",
                "Blogs",
                "Contact"
              ],
              "url": [
                "https://skitm.in/",
                "https://skitm.in/about",
                "https://skitm.in/departments",
                "https://skitm.in/admissions",
                "https://skitm.in/student-life",
                "https://skitm.in/placements",
                "https://skitm.in/partners",
                "https://skitm.in/entrepreneurship-cell",
                "https://skitm.in/gallery",
                "https://skitm.in/news",
                "https://skitm.in/blogs",
                "https://skitm.in/contact"
              ]
            }
          `}
        </script>
      </Helmet>
    
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 glassmorphism shadow-md' 
            : 'py-5 bg-transparent'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="SKITM Home">
              <img 
                src="/lovable-uploads/1be76fe5-e5d4-4ae1-a6a0-99a3c65c9d60.png" 
                alt="SKITM Logo"
                className="h-12 w-auto" 
                width="48"
                height="48"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <DesktopNavigation 
              aboutLinks={aboutLinks}
              academicLinks={academicLinks}
              admissionLinks={admissionLinks}
              campusLifeLinks={campusLifeLinks}
              placementLinks={placementLinks}
              partnershipsLinks={partnershipsLinks}
              cellsCommitteesLinks={cellsCommitteesLinks}
            />
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-skitm-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div id="mobile-menu">
          <MobileNavigation 
            aboutLinks={aboutLinks}
            academicLinks={academicLinks}
            admissionLinks={admissionLinks}
            campusLifeLinks={campusLifeLinks}
            placementLinks={placementLinks}
            partnershipsLinks={partnershipsLinks}
            cellsCommitteesLinks={cellsCommitteesLinks}
            isOpen={mobileMenuOpen}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
