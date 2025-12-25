import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface MobileNavigationProps {
    aboutLinks: { name: string; href: string }[];
    academicLinks: { name: string; href: string }[];
    admissionLinks: { name: string; href: string }[];
    campusLifeLinks: { name: string; href: string }[];
    placementLinks: { name: string; href: string }[];
    partnershipsLinks: { name: string; href: string }[];
    cellsCommitteesLinks: { name: string; href: string }[];
    isOpen: boolean;
}

const MobileNavigation = ({
    aboutLinks,
    academicLinks,
    admissionLinks,
    campusLifeLinks,
    placementLinks,
    partnershipsLinks,
    cellsCommitteesLinks,
    isOpen,
}: MobileNavigationProps) => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    if (!isOpen) return null;

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const renderSection = (
        title: string,
        links: { name: string; href: string }[],
        sectionKey: string
    ) => (
        <div className="relative">
            <button
                onClick={() => toggleSection(sectionKey)}
                className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
            >
                <span>{title}</span>
                {expandedSection === sectionKey ? (
                    <ChevronUp size={18} />
                ) : (
                    <ChevronDown size={18} />
                )}
            </button>

            {expandedSection === sectionKey && (
                <div className="pl-4 max-h-48 overflow-y-auto">
                    {links.map((item) => (
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
    );

    return (
        <div className="lg:hidden glassmorphism shadow-lg animate-fade-in overflow-y-auto max-h-[80vh]">
            <div className="px-2 pt-2 pb-4 space-y-1">
                <Link
                    to="/"
                    className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
                >
                    Home
                </Link>

                {renderSection("About", aboutLinks, "about")}
                {renderSection("Academics", academicLinks, "academics")}
                {renderSection("Admissions", admissionLinks, "admissions")}
                {renderSection("Campus Life", campusLifeLinks, "campusLife")}
                {renderSection("Placements", placementLinks, "placements")}
                {renderSection(
                    "Partnerships",
                    partnershipsLinks,
                    "partnerships"
                )}
                {renderSection(
                    "Cells & Committees",
                    cellsCommitteesLinks,
                    "cells"
                )}

                <Link
                    to="/gallery"
                    className="block px-4 py-2 text-base font-medium text-skitm-navy hover:bg-skitm-blue/10 rounded-md"
                >
                    Gallery
                </Link>
                <Link
                    to="/news-events"
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
