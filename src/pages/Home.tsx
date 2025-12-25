import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import Button from "@/components/ui/CustomButton";
import SEOHead from "@/components/SEO/SEOHead";
import { defaultSEO } from "@/lib/seo";
import {
    HomeIcon,
    RocketIcon,
    GraduationCap,
    Lightbulb,
    Users,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getRandomGalleryImage } from "@/utils/galleryImages";

export default function Home() {
    // Try to use stored CMS content, fallback to original
    const [cms, setCms] = useState<any>(null);

    useEffect(() => {
        const stored = localStorage.getItem("cms-pages");
        setCms(stored ? JSON.parse(stored).home : null);
    }, []);

    // Helper: get first matching section
    const getSection = (idx: number, fallback: string) =>
        cms?.sections?.[idx]?.content || fallback;

    return (
        <div className="min-h-screen flex flex-col">
            <SEOHead
                title={defaultSEO.title}
                description={defaultSEO.description}
                keywords={defaultSEO.keywords}
                ogImage={defaultSEO.ogImage}
            />
            <Navbar />
            <section className="min-h-[70vh] bg-gradient-to-b from-skitm-blue to-skitm-navy flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-5xl font-display font-bold text-white mb-6">
                    {getSection(0, "Welcome to SKITM")}
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                    {getSection(1, "Empowering Minds, Shaping Futures.")}
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                    {(
                        cms?.stats || [
                            { label: "Students", value: "4000+" },
                            { label: "Courses", value: "25+" },
                            { label: "Faculty", value: "150+" },
                            { label: "Years", value: "10+" },
                        ]
                    ).map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white/20 rounded-lg px-6 py-4 shadow text-white min-w-[120px]"
                        >
                            <div className="text-2xl font-bold mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.6}
                className="min-h-[50vh]"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        Explore SKITM
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                        Why Choose Us?
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Discover the reasons why SKITM is the perfect place to
                        achieve your academic and professional goals
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                    <HomeIcon className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                                Campus Life
                            </div>
                            <div className="text-sm md:text-base text-blue-200">
                                Experience a vibrant and supportive campus
                                environment
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                    <RocketIcon className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                                Placement
                            </div>
                            <div className="text-sm md:text-base text-blue-200">
                                Get access to excellent placement opportunities
                                and career guidance
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                    <GraduationCap className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                                Academics
                            </div>
                            <div className="text-sm md:text-base text-blue-200">
                                Benefit from quality education and innovative
                                teaching methodologies
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <section className="section-container bg-white">
                <h2 className="section-title text-center">About SKITM</h2>
                <div className="image-first-block">
                    <div>
                        <img
                            src={getRandomGalleryImage()}
                            alt="About SKITM"
                            className="image-first-image"
                        />
                    </div>
                    <div className="image-first-content">
                        <h3 className="section-title">Our Vision</h3>
                        <p className="text-body-lg text-skitm-gray">
                            To be a leading institution in technical education
                            and research, fostering innovation and
                            entrepreneurship for the betterment of society.
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-skitm-gray">
                            <li>Experienced and dedicated faculty</li>
                            <li>
                                State-of-the-art infrastructure and facilities
                            </li>
                            <li>Industry-oriented curriculum</li>
                            <li>Focus on research and innovation</li>
                        </ul>
                        <Button variant="primary" size="lg" className="mt-6">
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>

            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.7}
                className="min-h-[50vh]"
            >
                <div className="text-center space-y-8">
                    <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                        Our Core Values
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                            Integrity
                        </div>
                        <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                            Excellence
                        </div>
                        <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                            Innovation
                        </div>
                        <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                            Collaboration
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <section className="section-container bg-white">
                <h2 className="section-title text-center">Our Strengths</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-skitm-blue/20 rounded-full">
                                <Lightbulb className="h-6 w-6 text-skitm-blue" />
                            </div>
                            <h3 className="font-semibold text-lg">
                                Innovative Teaching
                            </h3>
                        </div>
                        <p className="text-body-md text-skitm-gray">
                            We employ modern teaching methodologies to enhance
                            learning outcomes.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-skitm-blue/20 rounded-full">
                                <Users className="h-6 w-6 text-skitm-blue" />
                            </div>
                            <h3 className="font-semibold text-lg">
                                Experienced Faculty
                            </h3>
                        </div>
                        <p className="text-body-md text-skitm-gray">
                            Our faculty members are experts in their respective
                            fields.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-skitm-blue/20 rounded-full">
                                <ShieldCheck className="h-6 w-6 text-skitm-blue" />
                            </div>
                            <h3 className="font-semibold text-lg">
                                Safe Environment
                            </h3>
                        </div>
                        <p className="text-body-md text-skitm-gray">
                            We provide a safe and secure environment for our
                            students.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-skitm-blue/20 rounded-full">
                                <TrendingUp className="h-6 w-6 text-skitm-blue" />
                            </div>
                            <h3 className="font-semibold text-lg">
                                Career Guidance
                            </h3>
                        </div>
                        <p className="text-body-md text-skitm-gray">
                            We offer career guidance and placement assistance to
                            our students.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
