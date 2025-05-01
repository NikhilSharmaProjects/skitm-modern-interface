
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: content1Ref, isVisible: content1Visible } =
        useScrollAnimation();
    const { ref: content2Ref, isVisible: content2Visible } =
        useScrollAnimation();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-16">
                {/* Hero Section */}
                <section className="relative bg-skitm-navy text-white py-20">
                    <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div
                            ref={headerRef as React.RefObject<HTMLDivElement>}
                            className={`max-w-3xl mx-auto text-center ${
                                headerVisible ? "animate-fade-in" : "opacity-1"
                            }`}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                                About SKITM
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                                One of the leading educational institutions in Indore, committed 
                                to excellence in technical education and holistic student development.
                            </p>
                        </div>
                    </div>

                    {/* Wave SVG at bottom */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg
                            viewBox="0 0 1440 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="w-full h-12 md:h-16 lg:h-20"
                        >
                            <path
                                d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 80C1200 70 1320 50 1380 40L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div
                            ref={content1Ref as React.RefObject<HTMLDivElement>}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                                content1Visible
                                    ? "animate-fade-in"
                                    : "opacity-1"
                            }`}
                        >
                            <div>
                                <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                                    Our Vision
                                </div>
                                <h2 className="text-3xl font-display font-bold text-skitm-navy mb-6">
                                    Excellence, Innovation & Development
                                </h2>
                                <p className="text-skitm-gray mb-4">
                                    "To be a center of excellence in education, fostering innovation, 
                                    research, and holistic development of students to contribute 
                                    effectively to society and industry."
                                </p>
                                <p className="text-skitm-gray">
                                    At SKITM, we strive to be recognized for educational excellence, 
                                    cutting-edge research, and producing graduates who are not only 
                                    technically competent but also socially responsible.
                                </p>
                            </div>

                            <div className="glassmorphism rounded-xl p-8 h-full">
                                <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-navy/10 rounded-full text-skitm-navy">
                                    Our Mission
                                </div>
                                <h3 className="text-2xl font-display font-semibold text-skitm-navy mb-4">
                                    What We Strive For
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="mr-3 bg-skitm-blue/10 p-2 rounded-full text-skitm-blue">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 11L12 14L22 4"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-skitm-navy mb-1">
                                                Quality Education
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Provide quality education with a focus on technical 
                                                expertise, professional ethics, and leadership skills.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-3 bg-skitm-blue/10 p-2 rounded-full text-skitm-blue">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 11L12 14L22 4"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-skitm-navy mb-1">
                                                Industry Collaboration
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Promote industry-academia collaboration for 
                                                practical learning and innovation.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-3 bg-skitm-blue/10 p-2 rounded-full text-skitm-blue">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 11L12 14L22 4"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-skitm-navy mb-1">
                                                Entrepreneurship
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Encourage entrepreneurship and research-driven 
                                                development among students.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-3 bg-skitm-blue/10 p-2 rounded-full text-skitm-blue">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 11L12 14L22 4"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-skitm-navy mb-1">
                                                Global Competence
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Develop globally competent graduates equipped with 
                                                problem-solving abilities and ethical values.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History & Management Section */}
                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <div
                            ref={content2Ref as React.RefObject<HTMLDivElement>}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                                content2Visible
                                    ? "animate-fade-in"
                                    : "opacity-1"
                            }`}
                        >
                            <div>
                                <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                                    Our History
                                </div>
                                <h2 className="text-3xl font-display font-bold text-skitm-navy mb-6">
                                    The SKITM Journey
                                </h2>
                                <div className="space-y-6">
                                    <div className="glassmorphism p-6 rounded-xl">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 bg-skitm-blue text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                                                1
                                            </div>
                                            <h3 className="text-xl font-semibold text-skitm-navy">
                                                Establishment
                                            </h3>
                                        </div>
                                        <p className="text-skitm-gray">
                                            SKITM was established with a vision to provide quality technical 
                                            education in Madhya Pradesh, situated near the beautiful Ralamandal Hills.
                                        </p>
                                    </div>

                                    <div className="glassmorphism p-6 rounded-xl">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 bg-skitm-blue text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                                                2
                                            </div>
                                            <h3 className="text-xl font-semibold text-skitm-navy">
                                                Growth & Expansion
                                            </h3>
                                        </div>
                                        <p className="text-skitm-gray">
                                            Over the years, SKITM has expanded its academic programs to include 
                                            engineering, management, pharmacy, and professional studies.
                                        </p>
                                    </div>

                                    <div className="glassmorphism p-6 rounded-xl">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 bg-skitm-blue text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                                                3
                                            </div>
                                            <h3 className="text-xl font-semibold text-skitm-navy">
                                                Recognition & Achievements
                                            </h3>
                                        </div>
                                        <p className="text-skitm-gray">
                                            Today, SKITM is recognized for its innovative approach to 
                                            education, strong industry connections, and excellent placement record.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                                    Our Management
                                </div>
                                <h2 className="text-3xl font-display font-bold text-skitm-navy mb-6">
                                    Leadership Team
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start glassmorphism p-6 rounded-xl">
                                        <div className="w-20 h-20 bg-skitm-navy/10 rounded-lg flex items-center justify-center mr-4">
                                            <span className="text-3xl font-bold text-skitm-navy">
                                                SK
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-skitm-navy mb-1">
                                                Dr. Shivajirao Kadam
                                            </h3>
                                            <p className="text-skitm-blue mb-2 text-sm">
                                                Chairman
                                            </p>
                                            <p className="text-skitm-gray text-sm">
                                                With over 25 years of experience in academia and 
                                                administration, Dr. Kadam provides strategic vision 
                                                and leadership to SKITM.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start glassmorphism p-6 rounded-xl">
                                        <div className="w-20 h-20 bg-skitm-navy/10 rounded-lg flex items-center justify-center mr-4">
                                            <span className="text-3xl font-bold text-skitm-navy">
                                                MJ
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-skitm-navy mb-1">
                                                Dr. Mohan Joshi
                                            </h3>
                                            <p className="text-skitm-blue mb-2 text-sm">
                                                Director
                                            </p>
                                            <p className="text-skitm-gray text-sm">
                                                Dr. Joshi, a Ph.D. in Engineering, oversees the academic 
                                                and administrative operations of the institute with 
                                                a focus on excellence.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start glassmorphism p-6 rounded-xl">
                                        <div className="w-20 h-20 bg-skitm-navy/10 rounded-lg flex items-center justify-center mr-4">
                                            <span className="text-3xl font-bold text-skitm-navy">
                                                AP
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-skitm-navy mb-1">
                                                Prof. Anjali Patel
                                            </h3>
                                            <p className="text-skitm-blue mb-2 text-sm">
                                                Dean of Academics
                                            </p>
                                            <p className="text-skitm-gray text-sm">
                                                Prof. Patel leads the academic initiatives and ensures 
                                                the delivery of quality education and research at SKITM.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;


