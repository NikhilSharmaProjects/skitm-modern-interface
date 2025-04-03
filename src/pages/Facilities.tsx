
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import {
    BookOpen,
    Cpu,
    Dumbbell,
    Beaker,
    Utensils,
    Wifi,
    Library,
    Home,
    Bus,
} from "lucide-react";

const Facilities = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    // Facilities data
    const facilities = [
        {
            icon: <Cpu className="h-10 w-10 text-skitm-blue" />,
            title: "Smart Classrooms",
            description:
                "Digital learning environment with interactive teaching tools, projectors, and audio-visual systems for enhanced learning experiences.",
        },
        {
            icon: <Library className="h-10 w-10 text-skitm-blue" />,
            title: "Central Library",
            description:
                "Well-stocked library with over 24,615 books, journals, research materials, and digital resources across various disciplines.",
        },
        {
            icon: <Beaker className="h-10 w-10 text-skitm-blue" />,
            title: "Research & Innovation Labs",
            description:
                "Specialized laboratories for research and experimentation in AI, Machine Learning, and Robotics with modern equipment.",
        },
        {
            icon: <Home className="h-10 w-10 text-skitm-blue" />,
            title: "Hostel Accommodation",
            description:
                "Comfortable and secure lodging for students with well-furnished rooms, recreation areas, and necessary amenities.",
        },
        {
            icon: <Dumbbell className="h-10 w-10 text-skitm-blue" />,
            title: "Sports & Recreation",
            description:
                "Comprehensive sports facilities including football ground, basketball court, gymnasium, and indoor games for physical fitness.",
        },
        {
            icon: <Utensils className="h-10 w-10 text-skitm-blue" />,
            title: "Cafeteria & Food Courts",
            description:
                "Hygienic and diverse meal options available in multiple cafeterias and food courts located around the campus.",
        },
        {
            icon: <Wifi className="h-10 w-10 text-skitm-blue" />,
            title: "WiFi & IT Support",
            description:
                "High-speed internet connectivity throughout the campus with dedicated technical infrastructure and IT support.",
        },
        {
            icon: <Bus className="h-10 w-10 text-skitm-blue" />,
            title: "Transportation",
            description:
                "Regular shuttle services connecting the campus to major locations in and around Indore for commuting students.",
        },
        {
            icon: <BookOpen className="h-10 w-10 text-skitm-blue" />,
            title: "Seminar Halls",
            description:
                "Spacious seminar and conference halls for academic events, workshops, guest lectures, and student activities.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={headingRef}
                        className={`text-center mb-16 ${
                            headingVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Campus Infrastructure
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Campus Facilities
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Explore the state-of-the-art facilities available to
                            students at SKITM designed to enhance learning and campus life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className="mb-4">{facility.icon}</div>
                                <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                    {facility.title}
                                </h3>
                                <p className="text-skitm-gray">
                                    {facility.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
                            Campus Tour
                        </h2>

                        <div className="aspect-w-16 aspect-h-9">
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                                <p className="text-skitm-gray">
                                    Virtual tour will be available soon. Visit our campus near Ralamandal Sanctuary to experience our facilities in person.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Facilities;
