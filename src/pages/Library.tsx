import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { Book, Search, Clock, Download } from "lucide-react";
import { Helmet } from "react-helmet-async";

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
                            Library & Resource Center
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            A gateway to knowledge and resources supporting
                            academic excellence and research.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center">
                            <Book className="text-skitm-blue mb-4" size={32} />
                            <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                50,000+ Books
                            </h3>
                            <p className="text-skitm-gray">
                                Extensive collection of textbooks, reference
                                materials, and literature
                            </p>
                        </div>

                        <div className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center">
                            <Search
                                className="text-skitm-blue mb-4"
                                size={32}
                            />
                            <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                Digital Resources
                            </h3>
                            <p className="text-skitm-gray">
                                Access to e-journals, research databases, and
                                digital archives
                            </p>
                        </div>

                        <div className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center">
                            <Clock className="text-skitm-blue mb-4" size={32} />
                            <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                Extended Hours
                            </h3>
                            <p className="text-skitm-gray">
                                Open from 8:00 AM to 10:00 PM to accommodate
                                student schedules
                            </p>
                        </div>

                        <div className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center">
                            <Download
                                className="text-skitm-blue mb-4"
                                size={32}
                            />
                            <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                Online Catalog
                            </h3>
                            <p className="text-skitm-gray">
                                Search, reserve, and renew materials through our
                                online portal
                            </p>
                        </div>
                    </div>

                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
                            Library Facilities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-3">
                                    Study Spaces
                                </h3>
                                <p className="text-skitm-gray mb-4">
                                    Our library offers various study
                                    environments to accommodate different
                                    learning styles:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-skitm-gray">
                                    <li>
                                        Individual study carrels for focused
                                        work
                                    </li>
                                    <li>Group study rooms with whiteboards</li>
                                    <li>Collaborative learning spaces</li>
                                    <li>
                                        Quiet reading areas with comfortable
                                        seating
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-3">
                                    Technology Resources
                                </h3>
                                <p className="text-skitm-gray mb-4">
                                    Access to cutting-edge technology to support
                                    your academic journey:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-skitm-gray">
                                    <li>
                                        Computer workstations with specialized
                                        software
                                    </li>
                                    <li>
                                        High-speed internet and Wi-Fi throughout
                                    </li>
                                    <li>
                                        Printing, scanning, and photocopying
                                        services
                                    </li>
                                    <li>
                                        Media production and editing equipment
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="glassmorphism rounded-xl p-8">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
                            Library Hours & Policies
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-3">
                                    Opening Hours
                                </h3>
                                <div className="space-y-2 text-skitm-gray">
                                    <p className="flex justify-between">
                                        <span>Monday - Friday:</span>{" "}
                                        <span>8:00 AM - 10:00 PM</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Saturday:</span>{" "}
                                        <span>9:00 AM - 6:00 PM</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Sunday:</span>{" "}
                                        <span>10:00 AM - 4:00 PM</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Extended hours during exams</span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-3">
                                    Borrowing Rules
                                </h3>
                                <div className="space-y-2 text-skitm-gray">
                                    <p className="flex justify-between">
                                        <span>Undergraduate Students:</span>{" "}
                                        <span>5 books, 14 days</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Graduate Students:</span>{" "}
                                        <span>8 books, 21 days</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Faculty:</span>{" "}
                                        <span>15 books, 30 days</span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span>Late Fee:</span>{" "}
                                        <span>₹5 per day per item</span>
                                    </p>
                                </div>
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
