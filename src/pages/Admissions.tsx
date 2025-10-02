import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import { FileText, Calendar, Award, Users } from "lucide-react";

const Admissions = () => {
    const admissionStats = [
        {
            icon: <FileText className="h-8 w-8 text-white" />,
            number: "5000+",
            label: "Applications",
        },
        {
            icon: <Calendar className="h-8 w-8 text-white" />,
            number: "3",
            label: "Admission Rounds",
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "Merit Based",
            label: "Selection",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "95%",
            label: "Success Rate",
        },
    ];

    const admissionProcess = [
        {
            title: "Application Submission",
            description:
                "Submit your online application with required documents and application fee",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            title: "Entrance Examination",
            description:
                "Appear for entrance test based on your chosen program and category",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            title: "Merit List & Counseling",
            description:
                "Check merit list and participate in counseling process for seat allocation",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
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
                        Join SKITM Family
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Admissions Open
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Begin your journey towards academic excellence and
                        professional success
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
                        {admissionStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-blue-200">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* Admission Process Section */}
                <section className="section-container bg-white">
                    <h2 className="section-title text-center">
                        Admission Process
                    </h2>
                    <div className="space-y-16">
                        {admissionProcess.map((step, index) => (
                            <div
                                key={index}
                                className={`image-first-block ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                <div
                                    className={
                                        index % 2 === 1
                                            ? "order-1 lg:order-2"
                                            : "order-2 lg:order-1"
                                    }
                                >
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="image-first-image"
                                    />
                                </div>
                                <div
                                    className={`image-first-content ${
                                        index % 2 === 1
                                            ? "order-2 lg:order-1"
                                            : "order-1 lg:order-2"
                                    }`}
                                >
                                    <h3 className="section-title">
                                        {step.title}
                                    </h3>
                                    <p className="text-body-lg text-skitm-gray">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Important Dates Parallax */}
                <ParallaxSection
                    backgroundImage="/Gallery/GalleryImage (9).png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Important Dates
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Application: March 2024
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Entrance Test: May 2024
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Results: June 2024
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Admission: July 2024
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            </main>

            <Footer />
        </div>
    );
};

export default Admissions;
