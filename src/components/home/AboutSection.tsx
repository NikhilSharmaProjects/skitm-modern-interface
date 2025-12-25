import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import ParallaxSection from "@/components/common/ParallaxSection";
import { Award, Users, BookOpen, MapPin } from "lucide-react";

const AboutSection = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

    const achievements = [
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "A Grade",
            label: "NAAC Accredited",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "5000+",
            label: "Alumni Worldwide",
        },
        {
            icon: <BookOpen className="h-8 w-8 text-white" />,
            number: "15+",
            label: "Academic Programs",
        },
        {
            icon: <MapPin className="h-8 w-8 text-white" />,
            number: "90%+",
            label: "Placement Rate",
        },
    ];

    return (
        <>
            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.5}
                className="min-h-[70vh]"
            >
                <div className="text-center space-y-8">
                    <h2 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Excellence in Education
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        UGC Autonomous • NAAC Accredited "A" Grade Institute
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

            {/* Image-First Content Section */}
            <section className="section-container bg-white">
                <div
                    ref={sectionRef as React.RefObject<HTMLDivElement>}
                    className={`${
                        sectionVisible ? "animate-fade-in" : "opacity-1"
                    }`}
                >
                    <div className="image-first-block mb-20">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/Gallery/GalleryImage (22).png"
                                alt="SKITM Campus"
                                className="image-first-image"
                            />
                        </div>
                        <div className="image-first-content order-1 lg:order-2">
                            <h3 className="section-title">About SKITM</h3>
                            <p className="text-body-lg text-skitm-gray mb-6">
                                SKITM is a NAAC Grade 'A' Accredited, UGC
                                Autonomous Institute located in Indore, Madhya
                                Pradesh. With a thriving student body of over
                                2,000, SKITM offers diverse academic programs
                                across its Engineering, Pharmacy, Law, Commerce,
                                and Management colleges. In 2025, the institute
                                proudly secured the 88th rank in India the Top
                                175 Engineering Colleges Ranking by Times of
                                India.
                            </p>
                            <p className="text-body text-skitm-gray mb-8">
                                Founded to address the growing demand for
                                high-quality education in Central India, SKITM
                                has distinguished itself through a unique blend
                                of academic rigor and industry relevance. By
                                bridging the gap between industry and academia,
                                the institute is committed to democratizing
                                access to world-class education and fostering
                                future-ready professionals.
                            </p>
                            <Link to="/about-sktim">
                                <Button variant="primary">
                                    Discover Our Story
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="image-first-block">
                        <div className="image-first-content">
                            <h3 className="section-title">Our Mission</h3>
                            <p className="text-body-lg text-skitm-gray mb-6">
                                To provide world-class education that combines
                                theoretical knowledge with practical
                                application, preparing students to become
                                leaders in their chosen fields.
                            </p>
                            <p className="text-body text-skitm-gray mb-8">
                                We foster an environment of innovation,
                                research, and entrepreneurship, encouraging
                                students to think critically and contribute
                                meaningfully to society.
                            </p>
                            <Link to="/vision-mission">
                                <Button variant="outline">Learn More</Button>
                            </Link>
                        </div>
                        <div>
                            <img
                                src="/Gallery/GalleryImage (23).png"
                                alt="Students in Discussion"
                                className="image-first-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;
