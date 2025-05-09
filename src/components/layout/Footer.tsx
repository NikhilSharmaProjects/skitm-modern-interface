import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-skitm-navy text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">
                            SKITM
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Shivaji Rao Kadam Institute of Technology and
                            Management, established with the vision of providing
                            quality technical education to empower students with
                            knowledge, skills, and values.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://facebook.com"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://youtube.com"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-display font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    About SKITM
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Courses Offered
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/admissions"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/placements"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Placements
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/gallery"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    News & Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Academics */}
                    <div>
                        <h3 className="text-xl font-display font-semibold mb-4">
                            Academics
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/departments"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Departments
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faculty"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Faculty
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/research"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/facilities"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Facilities
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/library"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Library
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/scholarships"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Scholarships
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/student-life"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Student Life
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-display font-semibold mb-4">
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin
                                    size={20}
                                    className="text-skitm-blue mt-1 mr-3 flex-shrink-0"
                                />
                                <p className="text-gray-300">
                                    Near Ralamandal Sanctuary, Tillore Khurd,
                                    Indore - 452020
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Phone
                                    size={20}
                                    className="text-skitm-blue mr-3 flex-shrink-0"
                                />
                                <a
                                    href="tel:+917314013344"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    +91 731 401 3344
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail
                                    size={20}
                                    className="text-skitm-blue mr-3 flex-shrink-0"
                                />
                                <a
                                    href="mailto:info@skitm.in"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    info@skitm.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} SKITM, Indore. All Rights
                        Reserved.
                    </p>
                    <div className="mt-2 flex justify-center space-x-4 text-sm">
                        <Link
                            to="/privacy-policy"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Terms of Use
                        </Link>
                        <Link
                            to="/sitemap"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
