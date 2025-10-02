import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import Button from "@/components/ui/CustomButton";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { Link } from "react-router-dom";
import { Award, Users, BookOpen, Target } from "lucide-react";

const Pharmacy = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    const achievements = [
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "95%",
            label: "Graduate Success",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "200+",
            label: "Industry Partners",
        },
        {
            icon: <BookOpen className="h-8 w-8 text-white" />,
            number: "15+",
            label: "Research Projects",
        },
        {
            icon: <Target className="h-8 w-8 text-white" />,
            number: "100%",
            label: "Placement Rate",
        },
    ];

    const programs = [
        {
            id: 1,
            name: "Bachelor of Pharmacy",
            description:
                "Comprehensive 4-year program covering pharmaceutical sciences, drug development, and healthcare systems.",
            icon: "💊",
            subjects: [
                "Pharmaceutics",
                "Pharmacology",
                "Pharmaceutical Chemistry",
                "Pharmacognosy",
                "Pharmaceutical Analysis",
            ],
        },
        {
            id: 2,
            name: "Diploma in Pharmacy",
            description:
                "2-year diploma providing essential pharmaceutical education for pharmacy assistants and technicians.",
            icon: "🧪",
            subjects: [
                "Pharmaceutical Chemistry",
                "Pharmacology",
                "Pharmaceutics",
                "Drug Store Management",
                "Hospital Pharmacy",
            ],
        },
        {
            id: 3,
            name: "Master of Pharmacy",
            description:
                "Advanced 2-year postgraduate program with specializations for pharmaceutical research.",
            icon: "🔬",
            subjects: [
                "Advanced Pharmaceutics",
                "Clinical Pharmacy",
                "Pharmaceutical Quality Assurance",
                "Regulatory Affairs",
                "Research Methodology",
            ],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Gallery/GalleryImage (9).png"
                overlayOpacity={0.6}
                className="min-h-[70vh]"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        SKITM Institute of Pharmaceutical Education & Research
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Pharmaceutical Excellence
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Nurturing professionals in pharmaceutical sciences
                        through innovation and research
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
                        {achievements.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                                    {item.number}
                                </div>
                                <div className="text-sm md:text-base text-blue-200">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* Image-First About Section */}
                <section className="section-container bg-white">
                    <div className="image-first-block mb-20">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/Gallery/GalleryImage (9).png"
                                alt="Pharmaceutical Laboratory"
                                className="image-first-image"
                            />
                        </div>
                        <div className="image-first-content order-1 lg:order-2">
                            <h3 className="section-title">
                                State-of-the-Art Facilities
                            </h3>
                            <p className="text-body-lg text-skitm-gray mb-6">
                                Our pharmaceutical education combines
                                cutting-edge research with practical training in
                                modern laboratories equipped with the latest
                                instruments.
                            </p>
                            <p className="text-body text-skitm-gray mb-8">
                                From drug development to clinical pharmacy, our
                                comprehensive programs prepare students for
                                successful careers in the pharmaceutical
                                industry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="section-container bg-skitm-offWhite">
                    <h2 className="section-title text-center">Our Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                className="glassmorphism rounded-xl p-8 flex flex-col h-full card-hover"
                            >
                                <div className="text-4xl mb-4">
                                    {program.icon}
                                </div>
                                <h2 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                    {program.name}
                                </h2>
                                <p className="text-skitm-gray mb-4 flex-grow">
                                    {program.description}
                                </p>
                                <div className="bg-skitm-blue/5 rounded-lg p-3 mb-4">
                                    <h3 className="font-semibold text-skitm-navy mb-2">
                                        Key Subjects:
                                    </h3>
                                    <ul className="text-sm text-skitm-gray">
                                        {program.subjects.map(
                                            (subject, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start mb-1"
                                                >
                                                    <svg
                                                        className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2 mt-0.5"
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
                                                    <span>{subject}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <Link to={`/courses#pharmacy-${program.id}`}>
                                    <Button variant="outline" fullWidth>
                                        View Program Details
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Industry Collaboration Parallax */}
                <ParallaxSection
                    backgroundImage="/Gallery/GalleryImage (9).png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Industry Collaborations
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Research Projects
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Industrial Training
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Hospital Internships
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Pharma Conferences
                            </div>
                        </div>
                    </div>
                </ParallaxSection>

                {/* CTA Section */}
                <section className="section-container bg-white">
                    <div className="text-center space-y-8">
                        <h2 className="section-title">
                            Start Your Pharmaceutical Career
                        </h2>
                        <p className="text-body-lg text-skitm-gray max-w-2xl mx-auto">
                            Join our distinguished pharmacy programs and become
                            part of the healthcare revolution
                        </p>
                        <Link to="/admissions">
                            <Button variant="primary">
                                Apply for Pharmacy Programs
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Pharmacy;
