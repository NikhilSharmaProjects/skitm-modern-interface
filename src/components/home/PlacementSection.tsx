import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";

const PlacementSection = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

    // Placeholder company logos
    const companyLogos = [
        { id: 1, name: "TCS", color: "#fff" },
        { id: 2, name: "Infosys", color: "#fff" },
        { id: 3, name: "Wipro", color: "#fff" },
        { id: 4, name: "IBM", color: "#fff" },
        { id: 5, name: "Accenture", color: "#fff" },
        { id: 6, name: "Cognizant", color: "#fff" },
        { id: 7, name: "Tech Mahindra", color: "#fff" },
        { id: 8, name: "HCL", color: "#fff" },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div
                ref={sectionRef as React.RefObject<HTMLDivElement>}
                className={`container mx-auto px-4 ${
                    sectionVisible ? "animate-fade-in" : "opacity-1"
                }`}
            >
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                        Career Opportunities
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-skitm-navy mb-4">
                        Placements & Recruiters
                    </h2>
                    <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                        Our dedicated placement cell works tirelessly to secure
                        excellent career opportunities for our students.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="glassmorphism rounded-xl p-8">
                        <h3 className="text-2xl font-display font-semibold text-skitm-navy mb-6">
                            Placement Highlights
                        </h3>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-skitm-blue mb-2">
                                    95%
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    Placement Rate
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-skitm-blue mb-2">
                                    12 LPA
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    Highest Package
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-skitm-blue mb-2">
                                    5.8 LPA
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    Average Package
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-skitm-blue mb-2">
                                    120+
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    Recruiting Companies
                                </p>
                            </div>
                        </div>

                        <div className="bg-skitm-navy/5 rounded-lg p-4 mb-6">
                            <h4 className="text-lg font-semibold text-skitm-navy mb-2">
                                Placement Preparation
                            </h4>
                            <ul className="text-sm text-skitm-gray space-y-2">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>Resume building workshops</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        Mock interviews with industry experts
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        Aptitude and technical test preparation
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        Soft skills and communication training
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <Link to="/placements">
                            <Button variant="primary" fullWidth>
                                View Placement Statistics
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <h3 className="text-2xl font-display font-semibold text-skitm-navy mb-6">
                            Our Recruiters
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            {companyLogos.map((company) => (
                                <div
                                    key={company.id}
                                    className="h-20 glassmorphism rounded-lg flex items-center justify-center"
                                >
                                    <div className="text-xl font-bold text-skitm-navy">
                                        {company.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-skitm-blue/10 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-skitm-navy mb-3">
                                Student Testimonial
                            </h4>
                            <p className="text-skitm-gray text-sm italic mb-4">
                                "The placement cell at SKITM provided excellent
                                guidance and preparation that helped me secure a
                                job at one of the leading tech companies. The
                                mock interviews and technical training sessions
                                were particularly helpful."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-skitm-blue/20 flex items-center justify-center text-skitm-blue font-bold mr-3">
                                    RS
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-skitm-navy">
                                        Rahul Sharma
                                    </div>
                                    <div className="text-xs text-skitm-gray">
                                        CSE Batch of 2022, Software Engineer at
                                        TCS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementSection;
