import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HierarchicalNavigation from "../navigation/HierarchicalNavigation";
import MobileHierarchicalNavigation from "../navigation/MobileHierarchicalNavigation";
import { Helmet } from "react-helmet-async";

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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
                ${
                    location.pathname !== "/"
                        ? `
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "${
                      location.pathname.substring(1).charAt(0).toUpperCase() +
                      location.pathname.substring(2)
                  }",
                  "item": "https://skitm.in${location.pathname}"
                }
                `
                        : ""
                }
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
                "About Us", 
                "Academics", 
                "Admissions", 
                "Placement",
                "Student Life",
                "News & Events",
                "Gallery",
                "Campus Tour",
                "Contact Us"
              ],
              "url": [
                "https://skitm.in/",
                "https://skitm.in/about-skitm",
                "https://skitm.in/academics",
                "https://skitm.in/admissions",
                "https://skitm.in/placement",
                "https://skitm.in/student-life",
                "https://skitm.in/news-events",
                "https://skitm.in/gallery",
                "https://skitm.in/campus-tour",
                "https://skitm.in/contact"
              ]
            }
          `}
                </script>
            </Helmet>

            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-white/50 to-transparent "py-3 glassmorphism shadow-md"`}
                role="banner"
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center"
                            aria-label="SKITM Home"
                        >
                            <img
                                src="/SkitmLogo.png"
                                alt="SKITM Logo"
                                className="h-16 w-auto"
                                width="64"
                                height="64"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <HierarchicalNavigation />

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-skitm-navy"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={
                                mobileMenuOpen ? "Close menu" : "Open menu"
                            }
                        >
                            {mobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div id="mobile-menu">
                    <MobileHierarchicalNavigation isOpen={mobileMenuOpen} />
                </div>
            </header>
        </>
    );
};

export default Navbar;
