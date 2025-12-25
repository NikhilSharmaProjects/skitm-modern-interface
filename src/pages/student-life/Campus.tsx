import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import { MapPin, TreePine, Building2, Heart } from "lucide-react";
import { getRandomGalleryImage } from "@/utils/galleryImages";

const Campus = () => {
    const campusStats = [
        {
            icon: <MapPin className="h-8 w-8 text-white" />,
            number: "100+",
            label: "Acres Campus",
        },
        {
            icon: <Building2 className="h-8 w-8 text-white" />,
            number: "15+",
            label: "Academic Buildings",
        },
        {
            icon: <TreePine className="h-8 w-8 text-white" />,
            number: "70%",
            label: "Green Coverage",
        },
        {
            icon: <Heart className="h-8 w-8 text-white" />,
            number: "5000+",
            label: "Happy Students",
        },
    ];

    const campusAreas = [
        {
            title: "Academic Complex",
            description:
                "Modern classrooms, laboratories, and lecture halls equipped with latest technology for enhanced learning experience",
            image: getRandomGalleryImage(),
        },
        {
            title: "Green Spaces",
            description:
                "Beautiful landscaped gardens, open spaces, and recreational areas that provide a serene environment for study and relaxation",
            image: getRandomGalleryImage(),
        },
        {
            title: "Student Hub",
            description:
                "Central area with cafeterias, student lounges, and recreational facilities where students gather and socialize",
            image: getRandomGalleryImage(),
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.5}
                className="min-h-[70vh]"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        Beautiful Campus
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Campus Life
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Experience vibrant campus life in our beautiful, modern,
                        and sustainable environment
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
                        {campusStats.map((stat, index) => (
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
                {/* Campus Areas Section */}
                <section className="section-container bg-white">
                    <h2 className="section-title text-center">Campus Areas</h2>
                    <div className="space-y-16">
                        {campusAreas.map((area, index) => (
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
                                        src={area.image}
                                        alt={area.title}
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
                                        {area.title}
                                    </h3>
                                    <p className="text-body-lg text-skitm-gray">
                                        {area.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sustainability Parallax */}
                <ParallaxSection
                    backgroundImage="/Background.png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Sustainable Campus
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Solar Energy
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Rain Water Harvesting
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Waste Management
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Green Buildings
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            </main>

            <Footer />
        </div>
    );
};

export default Campus;
