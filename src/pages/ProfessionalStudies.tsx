import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import Button from "@/components/ui/CustomButton";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { Link } from "react-router-dom";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const ProfessionalStudies = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    const achievements = [
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "90%",
            label: "Placement Rate",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "50+",
            label: "Industry Partners",
        },
        {
            icon: <TrendingUp className="h-8 w-8 text-white" />,
            number: "₹8 LPA",
            label: "Highest Package",
        },
        {
            icon: <Target className="h-8 w-8 text-white" />,
            number: "100%",
            label: "Industry Exposure",
        },
    ];

    const programs = [
        {
            id: 1,
            name: "Bachelor of Business Administration",
            description:
                "3-year program providing strong foundation in business management principles and leadership skills.",
            icon: "💼",
            subjects: [
                "Principles of Management",
                "Marketing Management",
                "Financial Accounting",
                "Human Resource Management",
                "Business Economics",
            ],
        },
        {
            id: 2,
            name: "Bachelor of Commerce",
            description:
                "3-year program focusing on commerce, economics, and business principles for finance careers.",
            icon: "📈",
            subjects: [
                "Financial Accounting",
                "Business Law",
                "Economics",
                "Corporate Accounting",
                "Taxation",
            ],
        },
        {
            id: 3,
            name: "Bachelor of Commerce (Computer Application)",
            description:
                "Specialized B.Com program with focus on computer applications and information technology.",
            icon: "💻",
            subjects: [
                "Financial Accounting",
                "Economics",
                "Computer Applications",
                "Database Management",
                "E-Commerce",
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
                        SKITM College of Professional Studies
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Professional Excellence
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Building career-ready professionals through
                        industry-aligned education
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
                                alt="Business Meeting"
                                className="image-first-image"
                            />
                        </div>
                        <div className="image-first-content order-1 lg:order-2">
                            <h3 className="section-title">
                                Why Choose Professional Studies?
                            </h3>
                            <p className="text-body-lg text-skitm-gray mb-6">
                                Our programs are designed with direct input from
                                industry professionals, ensuring graduates are
                                job-ready from day one.
                            </p>
                            <p className="text-body text-skitm-gray mb-8">
                                Technology-enhanced learning combined with
                                digital business skills prepares students for
                                the modern workplace.
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
                                <Link
                                    to={`/courses#professional-${program.id}`}
                                >
                                    <Button variant="outline" fullWidth>
                                        View Program Details
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Career Opportunities Parallax */}
                <ParallaxSection
                    backgroundImage="/Gallery/GalleryImage (9).png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Career Opportunities
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Banking Sector
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Financial Services
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Corporate Management
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Entrepreneurship
                            </div>
                        </div>
                    </div>
                </ParallaxSection>

                {/* CTA Section */}
                <section className="section-container bg-white">
                    <div className="text-center space-y-8">
                        <h2 className="section-title">
                            Start Your Professional Journey
                        </h2>
                        <p className="text-body-lg text-skitm-gray max-w-2xl mx-auto">
                            Join our professional studies programs and build a
                            successful career in business
                        </p>
                        <Link to="/admissions">
                            <Button variant="primary">
                                Apply for Professional Programs
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProfessionalStudies;
