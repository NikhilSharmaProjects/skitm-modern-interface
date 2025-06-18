
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import ParallaxSection from "@/components/common/ParallaxSection";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";
import { getRandomGalleryImage } from "@/utils/galleryImages";

const PlacementSection = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

    const stats = [
        {
            icon: <TrendingUp className="h-8 w-8 text-white" />,
            number: "85%+",
            label: "Placement Rate",
        },
        {
            icon: <Building2 className="h-8 w-8 text-white" />,
            number: "200+",
            label: "Partner Companies",
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "₹12 LPA",
            label: "Highest Package",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "500+",
            label: "Students Placed",
        },
    ];

    const topRecruiters = [
        "/logos/companylogo (1).png",
        "/logos/companylogo (2).png", 
        "/logos/companylogo (3).png",
        "/logos/companylogo (4).png",
        "/logos/companylogo (5).png",
        "/logos/companylogo (6).png",
        "/logos/companylogo (7).png",
        "/logos/companylogo (8).png",
    ];

    return (
        <>
            {/* Parallax Stats Section */}
            <ParallaxSection 
                backgroundImage={getRandomGalleryImage()}
                overlayOpacity={0.7}
                className="min-h-[60vh]"
            >
                <div className="text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Exceptional Placement Record
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Our students are recruited by leading companies worldwide
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="font-display font-bold text-3xl md:text-4xl mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-base text-blue-200">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            {/* Recruiters Section */}
            <section className="section-container bg-white">
                <div
                    ref={sectionRef as React.RefObject<HTMLDivElement>}
                    className={`${sectionVisible ? "animate-fade-in" : "opacity-1"}`}
                >
                    <div className="image-first-block mb-16">
                        <div className="image-first-content">
                            <h3 className="section-title">Industry Partnerships</h3>
                            <p className="text-body-lg text-skitm-gray mb-6">
                                Strong industry connections ensure our students have access to the best career opportunities. We maintain partnerships with over 200 companies across various sectors.
                            </p>
                            <p className="text-body text-skitm-gray mb-8">
                                Our dedicated Career Resource and Development team works tirelessly to bridge the gap between academia and industry, ensuring our graduates are industry-ready.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="/placements">
                                    <Button variant="primary">
                                        Placement Details
                                    </Button>
                                </Link>
                                <Link to="/placements/recruiters">
                                    <Button variant="outline">
                                        Our Recruiters
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img 
                                src={getRandomGalleryImage()}
                                alt="Job Interview"
                                className="image-first-image"
                            />
                        </div>
                    </div>

                    {/* Company Logos */}
                    <div className="text-center">
                        <h4 className="font-display font-semibold text-2xl text-skitm-navy mb-8 tracking-wide">
                            Our Top Recruiters
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
                            {topRecruiters.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center p-4 glassmorphism rounded-lg hover:shadow-lg transition-all duration-300"
                                >
                                    <img
                                        src={logo}
                                        alt={`Company ${index + 1}`}
                                        className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlacementSection;
