import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { Book, BookOpen, Printer, FileScan, Wifi, Cctv, Clock, Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const Library = () => {
    const { ref, isVisible } = useScrollAnimationDiv();

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Library - SKITM</title>
                <meta
                    name="description"
                    content="Explore SKITM's vast library resources, digital collections, and learning spaces. Our state-of-the-art library provides students with access to textbooks, research papers, and online databases."
                />
                <meta
                    name="keywords"
                    content="SKITM library, college library, academic resources, digital library, study space, educational resources"
                />
            </Helmet>

            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={ref}
                        className={`text-center mb-16 ${
                            isVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Knowledge Hub
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Central Library & Resource Center
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            A gateway to knowledge and resources supporting
                            academic excellence and research.
                        </p>
                    </div>

                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
                            Library Collection
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                            <div className="bg-skitm-blue/10 rounded-xl p-6 flex flex-col items-center text-center">
                                <Book className="text-skitm-blue mb-4" size={32} />
                                <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                    26,673
                                </h3>
                                <p className="text-skitm-gray">
                                    Volumes
                                </p>
                            </div>

                            <div className="bg-skitm-blue/10 rounded-xl p-6 flex flex-col items-center text-center">
                                <BookOpen
                                    className="text-skitm-blue mb-4"
                                    size={32}
                                />
                                <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                    4,772
                                </h3>
                                <p className="text-skitm-gray">
                                    Titles
                                </p>
                            </div>

                            <div className="bg-skitm-blue/10 rounded-xl p-6 flex flex-col items-center text-center">
                                <Calendar className="text-skitm-blue mb-4" size={32} />
                                <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                    37
                                </h3>
                                <p className="text-skitm-gray">
                                    Journals
                                </p>
                            </div>

                            <div className="bg-skitm-blue/10 rounded-xl p-6 flex flex-col items-center text-center">
                                <Wifi
                                    className="text-skitm-blue mb-4"
                                    size={32}
                                />
                                <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                    1,167
                                </h3>
                                <p className="text-skitm-gray">
                                    E-Journals
                                </p>
                            </div>

                            <div className="bg-skitm-blue/10 rounded-xl p-6 flex flex-col items-center text-center">
                                <Book
                                    className="text-skitm-blue mb-4"
                                    size={32}
                                />
                                <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                    1,393
                                </h3>
                                <p className="text-skitm-gray">
                                    E-Books
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-skitm-blue/10 rounded-lg text-center">
                            <h3 className="font-semibold text-skitm-navy mb-2">E-Resources</h3>
                            <p className="text-skitm-gray">DELNET (Developing Library Network) - Access to shared resources from multiple institutions</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="glassmorphism rounded-xl p-8">
                            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                                Library Facilities
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <Book className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">Books are issued for 15 days</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <BookOpen className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">Book bank facility</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <Wifi className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">Digital Library</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <Printer className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">Photocopy services</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <Printer className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">Printer facilities</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <FileScan className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">Scanner availability</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <Cctv className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">CCTV monitoring for security</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <Book className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">Wide reading area</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-skitm-blue/10 p-2 rounded-full mr-3">
                                        <Book className="text-skitm-blue" size={20} />
                                    </div>
                                    <span className="text-skitm-gray">Previous year question papers</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glassmorphism rounded-xl p-8">
                            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                                Library Hours
                            </h2>
                            <div className="flex items-center mb-6">
                                <Clock className="text-skitm-blue mr-4" size={32} />
                                <div>
                                    <h3 className="text-xl font-semibold text-skitm-navy">
                                        Opening Hours
                                    </h3>
                                    <p className="text-skitm-gray">
                                        Monday - Saturday: 9:00 AM - 4:20 PM
                                    </p>
                                </div>
                            </div>
                            
                            <div className="bg-skitm-navy/5 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-skitm-navy mb-3">
                                    Borrowing Rules
                                </h3>
                                <div className="space-y-2 text-skitm-gray">
                                    <p className="flex justify-between">
                                        <span>Undergraduate Students:</span>
                                        <span>3 books, 15 days</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Postgraduate Students:</span>
                                        <span>5 books, 15 days</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Faculty:</span>
                                        <span>10 books, 30 days</span>
                                    </p>
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <img
                                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="SKITM Library"
                                    className="w-full h-48 object-cover rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Library;
