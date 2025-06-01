
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* About Column with Logo */}
                    <div className="lg:col-span-2">
                        <div className="mb-4">
                            <img 
                                src="/lovable-uploads/1be76fe5-e5d4-4ae1-a6a0-99a3c65c9d60.png" 
                                alt="SKITM Logo" 
                                className="h-16 w-auto mb-4"
                            />
                        </div>
                        <p className="text-gray-300 mb-4">
                            ShivajiRao Kadam Institute of Technology and
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
                                    to="/departments"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Departments
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
                                    to="/cse"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Computer Science
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ece"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/me"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Mechanical
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ce"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Civil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/mba"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    MBA
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/bpharma"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Pharmacy
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
                                    href="tel:+9770907100"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    + 9770907100
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Phone
                                    size={20}
                                    className="text-skitm-blue mr-3 flex-shrink-0"
                                />
                                <a
                                    href="tel:+9770907103"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    + 9770907103
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
                        © SKITM, Indore. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
