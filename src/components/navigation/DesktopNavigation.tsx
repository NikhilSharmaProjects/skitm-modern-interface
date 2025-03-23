
import { Link } from 'react-router-dom';
import NavButton from './NavButton';
import NavDropdown from './NavDropdown';

interface DesktopNavigationProps {
  academicLinks: { name: string; href: string }[];
  admissionLinks: { name: string; href: string }[];
  campusLifeLinks: { name: string; href: string }[];
}

const DesktopNavigation = ({ 
  academicLinks, 
  admissionLinks, 
  campusLifeLinks 
}: DesktopNavigationProps) => {
  return (
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
  );
};

export default DesktopNavigation;
