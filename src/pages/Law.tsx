import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/CustomButton";
import ParallaxSection from "@/components/common/ParallaxSection";
import SEOHead from "@/components/SEO/SEOHead";
import { programSEO } from "@/lib/seo";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { Link } from "react-router-dom";
import { Scale, BookOpen, Users, Award } from "lucide-react";

const Law = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    const programs = [
        {
            id: 1,
            name: "B.A. LL.B. (Hons.)",
            description:
                "5-year integrated program combining liberal arts with comprehensive legal education.",
            icon: <Scale className="h-8 w-8 text-skitm-blue" />,
            subjects: [
                "Constitutional Law",
                "Contract Law",
                "Criminal Law",
                "Civil Procedure",
                "Corporate Law",
                "International Law",
            ],
        },
        {
            id: 2,
            name: "B.B.A. LL.B. (Hons.)",
            description:
                "5-year integrated program merging business administration with legal expertise.",
            icon: <BookOpen className="h-8 w-8 text-skitm-blue" />,
            subjects: [
                "Corporate Law",
                "Business Administration",
                "Taxation Law",
                "Competition Law",
                "Banking Law",
                "IPR",
            ],
        },
        {
            id: 3,
            name: "LL.B. (Hons.)",
            description:
                "3-year undergraduate law program for comprehensive legal practice preparation.",
            icon: <Users className="h-8 w-8 text-skitm-blue" />,
            subjects: [
                "Constitutional Law",
                "Criminal Law",
                "Civil Law",
                "Property Law",
                "Administrative Law",
                "Jurisprudence",
            ],
        },
    ];

    const achievements = [
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "98%",
            label: "Bar Exam Pass Rate",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "200+",
            label: "Legal Professionals",
        },
        {
            icon: <BookOpen className="h-8 w-8 text-white" />,
            number: "15+",
            label: "Years of Excellence",
        },
        {
            icon: <Scale className="h-8 w-8 text-white" />,
            number: "95%",
            label: "Graduate Employment",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <SEOHead
                title={programSEO.law.title}
                description={programSEO.law.description}
                keywords={programSEO.law.keywords}
            />
            <Navbar />

            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Gallery/GalleryImage (9).png"
                overlayOpacity={0.6}
                className="min-h-[70vh]"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        SKITM Transnational School of Law
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Excellence in Legal Education
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Shaping tomorrow's legal professionals through
                        analytical thinking, ethical practice, and global
                        perspective
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
                    <div
                        ref={headingRef}
                        className={`${
                            headingVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="image-first-block mb-20">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="/Gallery/GalleryImage (9).png"
                                    alt="Law School Moot Court"
                                    className="image-first-image"
                                />
                            </div>
                            <div className="image-first-content order-1 lg:order-2">
                                <h3 className="section-title">
                                    Why Choose SKITM Law School?
                                </h3>
                                <p className="text-body-lg text-skitm-gray mb-6">
                                    Distinguished faculty of experienced legal
                                    professionals, judges, and academicians
                                    guide students through comprehensive legal
                                    education with practical application.
                                </p>
                                <p className="text-body text-skitm-gray mb-8">
                                    Our state-of-the-art moot court facility and
                                    legal aid clinic provide hands-on
                                    experience, preparing graduates for
                                    successful careers in legal practice,
                                    judiciary, and corporate law.
                                </p>
                                <Link to="/about-skitm">
                                    <Button variant="primary">
                                        Learn More About Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="section-container bg-skitm-offWhite">
                    <h2 className="section-title text-center">
                        Our Legal Programs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                className="glassmorphism rounded-xl p-8 flex flex-col h-full card-hover"
                            >
                                <div className="flex justify-center mb-6">
                                    {program.icon}
                                </div>
                                <h2 className="text-xl font-display font-bold text-skitm-navy mb-4 text-center">
                                    {program.name}
                                </h2>
                                <p className="text-skitm-gray mb-6 flex-grow text-center">
                                    {program.description}
                                </p>
                                <div className="bg-skitm-blue/5 rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-skitm-navy mb-3 text-center">
                                        Key Subjects:
                                    </h3>
                                    <ul className="text-sm text-skitm-gray space-y-2">
                                        {program.subjects.map(
                                            (subject, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center"
                                                >
                                                    <div className="w-2 h-2 bg-skitm-blue rounded-full mr-3 flex-shrink-0"></div>
                                                    <span>{subject}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <Link to={`/courses#law-${program.id}`}>
                                    <Button variant="outline" fullWidth>
                                        View Program Details
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Practical Learning Parallax */}
                <ParallaxSection
                    backgroundImage="/Gallery/GalleryImage (9).png"
                    overlayOpacity={0.7}
                    className="min-h-[60vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Practical Legal Education
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Our curriculum emphasizes hands-on learning through
                            moot courts, internships, and legal aid clinics
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Moot Court Competitions
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Legal Internships
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Legal Aid Services
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Court Visits
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Legal Research
                            </div>
                        </div>
                    </div>
                </ParallaxSection>

                {/* CTA Section */}
                <section className="section-container bg-white">
                    <div className="text-center space-y-8">
                        <h2 className="section-title">
                            Build Your Legal Career
                        </h2>
                        <p className="text-body-lg text-skitm-gray max-w-2xl mx-auto">
                            Join our distinguished law school and become part of
                            a legacy of legal excellence
                        </p>
                        <Link to="/admissions">
                            <Button variant="primary">
                                Apply for Law Programs
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Law;
