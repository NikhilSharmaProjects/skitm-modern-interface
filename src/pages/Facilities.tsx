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
    PenTool,
    Bus,
} from "lucide-react";

const Facilities = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    // Facilities data
    const facilities = [
        {
            icon: <Cpu className="h-10 w-10 text-skitm-blue" />,
            title: "Computer Labs",
            description:
                "State-of-the-art computer labs equipped with the latest hardware and software for practical training and research.",
        },
        {
            icon: <Library className="h-10 w-10 text-skitm-blue" />,
            title: "Library",
            description:
                "Well-stocked library with thousands of books, journals, and digital resources across various disciplines.",
        },
        {
            icon: <Beaker className="h-10 w-10 text-skitm-blue" />,
            title: "Research Labs",
            description:
                "Specialized laboratories for scientific research and experimentation in various engineering disciplines.",
        },
        {
            icon: <Dumbbell className="h-10 w-10 text-skitm-blue" />,
            title: "Sports Complex",
            description:
                "Comprehensive sports facilities including indoor games, outdoor fields, gymnasium, and fitness center.",
        },
        {
            icon: <Utensils className="h-10 w-10 text-skitm-blue" />,
            title: "Cafeteria",
            description:
                "Modern cafeteria serving nutritious and diverse food options in a comfortable dining environment.",
        },
        {
            icon: <Wifi className="h-10 w-10 text-skitm-blue" />,
            title: "Wi-Fi Campus",
            description:
                "High-speed internet connectivity throughout the campus for seamless learning and communication.",
        },
        {
            icon: <PenTool className="h-10 w-10 text-skitm-blue" />,
            title: "Design Studios",
            description:
                "Creative spaces equipped with design software and tools for architecture and design students.",
        },
        {
            icon: <Bus className="h-10 w-10 text-skitm-blue" />,
            title: "Transportation",
            description:
                "Regular shuttle services connecting the campus to major locations in and around the city.",
        },
        {
            icon: <BookOpen className="h-10 w-10 text-skitm-blue" />,
            title: "Seminar Halls",
            description:
                "Spacious seminar and conference halls for academic events, workshops, and guest lectures.",
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
                            Facilities
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Explore the state-of-the-art facilities available to
                            students at SKITM.
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
                                    Virtual tour will be available soon
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
