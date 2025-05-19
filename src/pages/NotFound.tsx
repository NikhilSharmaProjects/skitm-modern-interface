
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Home, Search, Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real implementation, this would search the site
        // For now, just navigate to the home page
        if (searchQuery.trim()) {
            navigate("/");
        }
    };

    const recommendedLinks = [
        { name: "Admissions", path: "/admissions" },
        { name: "Courses", path: "/courses" },
        { name: "Departments", path: "/departments" },
        { name: "Contact Us", path: "/contact" },
        { name: "Student Life", path: "/student-life" },
        { name: "Placements", path: "/placements" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Page Not Found - SKITM</title>
                <meta name="description" content="The page you were looking for could not be found. Explore other resources at Shivajirao Kadam Institute of Technology and Management." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                <div className="text-center max-w-2xl mx-auto">
                    <img 
                        src="/lovable-uploads/b26f37d3-55cb-448a-ad13-c5921427affe.png" 
                        alt="SKITM Logo" 
                        className="mx-auto h-20 w-auto mb-6"
                    />

                    <h1 className="text-6xl font-display font-bold text-skitm-navy mb-4">404</h1>
                    <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                        Page Not Found
                    </h2>

                    <p className="text-skitm-gray mb-8">
                        The page you're looking for doesn't exist or has been moved. 
                        Don't worry, you can find plenty of other things on our website.
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="mb-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search our website..."
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-3 text-gray-400 hover:text-skitm-blue"
                            >
                                <Search size={20} />
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <Link to="/">
                            <Button variant="default" className="flex items-center">
                                <Home size={18} className="mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" className="flex items-center">
                                <Phone size={18} className="mr-2" />
                                Contact Support
                            </Button>
                        </Link>
                    </div>

                    {/* Recommended Links */}
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-skitm-navy mb-4">
                            Popular Pages
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {recommendedLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-skitm-navy transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10">
                        <Link
                            to="/"
                            className="inline-flex items-center text-skitm-blue hover:text-skitm-navy"
                        >
                            <ArrowLeft size={16} className="mr-1" /> Back to the homepage
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NotFound;
