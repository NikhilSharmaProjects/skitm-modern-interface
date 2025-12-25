import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import NavDropdown from "./NavDropdown";

interface DesktopNavigationProps {
    aboutLinks: { name: string; href: string }[];
    academicLinks: { name: string; href: string }[];
    admissionLinks: { name: string; href: string }[];
    campusLifeLinks: { name: string; href: string }[];
    placementLinks: { name: string; href: string }[];
    partnershipsLinks: { name: string; href: string }[];
    cellsCommitteesLinks: { name: string; href: string }[];
}

const DesktopNavigation = ({
    aboutLinks,
    academicLinks,
    admissionLinks,
    campusLifeLinks,
    placementLinks,
    partnershipsLinks,
    cellsCommitteesLinks,
}: DesktopNavigationProps) => {
    return (
        <nav className="hidden lg:flex items-center space-x-1">
            <NavButton href="/">Home</NavButton>
            <NavDropdown title="About" items={aboutLinks} />
            <NavDropdown title="Academics" items={academicLinks} />
            <NavDropdown title="Admissions" items={admissionLinks} />
            <NavDropdown title="Campus Life" items={campusLifeLinks} />
            <NavDropdown title="Placements" items={placementLinks} />
            <NavDropdown title="Partnerships" items={partnershipsLinks} />
            <NavDropdown
                title="Cells & Committees"
                items={cellsCommitteesLinks}
            />
            <NavButton href="/gallery">Gallery</NavButton>
            <NavButton href="/news-events">News & Events</NavButton>
            <NavButton href="/blogs">Blogs</NavButton>
            <NavButton href="/contact">Contact</NavButton>
        </nav>
    );
};

export default DesktopNavigation;
