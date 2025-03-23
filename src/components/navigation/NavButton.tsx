
import { Link } from 'react-router-dom';

interface NavButtonProps {
  children: React.ReactNode;
  href: string;
}

const NavButton = ({ children, href }: NavButtonProps) => {
  return (
    <Link
      to={href}
      className="px-4 py-2 text-sm font-medium text-skitm-navy hover:text-skitm-blue transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default NavButton;
