import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import {
    Bed,
    Coffee,
    Shield,
    Users,
    Wifi,
    Utensils,
    BookOpen,
    Dumbbell,
} from "lucide-react";

const Hostels = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    // Hostel features
    const features = [
        {
            icon: <Bed className="h-6 w-6 text-skitm-blue" />,
            title: "Comfortable Rooms",
            description:
                "Well-furnished rooms with beds, desks, wardrobes, and attached/common bathrooms",
        },
        {
            icon: <Wifi className="h-6 w-6 text-skitm-blue" />,
            title: "High-Speed Internet",
            description:
                "24/7 Wi-Fi connectivity throughout all hostel buildings",
        },
        {
            icon: <Utensils className="h-6 w-6 text-skitm-blue" />,
            title: "Mess Facility",
            description:
                "Nutritious meals served three times a day with additional canteen options",
        },
        {
            icon: <Shield className="h-6 w-6 text-skitm-blue" />,
            title: "24/7 Security",
            description:
                "Round-the-clock security with CCTV surveillance for student safety",
        },
        {
            icon: <BookOpen className="h-6 w-6 text-skitm-blue" />,
            title: "Study Areas",
            description:
                "Dedicated quiet zones for focused studying and group discussions",
        },
        {
            icon: <Dumbbell className="h-6 w-6 text-skitm-blue" />,
            title: "Recreational Facilities",
            description:
                "Indoor games, TV rooms, and fitness areas for physical well-being",
        },
        {
            icon: <Coffee className="h-6 w-6 text-skitm-blue" />,
            title: "Common Rooms",
            description:
                "Spacious common areas for socializing and community activities",
        },
        {
            icon: <Users className="h-6 w-6 text-skitm-blue" />,
            title: "Resident Wardens",
            description: "Experienced staff available for support and guidance",
        },
    ];

    // Hostel buildings
    const hostelBuildings = [
        {
            name: "Boys' Hostel",
            capacity: "198 students",
            roomTypes: ["Double Occupancy", "Triple Occupancy"],
            description:
                "Modern residential facility for male students with various room configurations",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            name: "Girls' Hostel",
            capacity: "350 students",
            roomTypes: ["Double Occupancy"],
            description:
                "Secure and comfortable accommodation for female students with enhanced facilities",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
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
                            Residential Facilities
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Hostels
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Experience comfortable and secure residential life
                            at SKITM's on-campus hostels.
                        </p>
                    </div>

                    {/* Hostel Buildings */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
                            Our Hostel Buildings
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {hostelBuildings.map((hostel, index) => (
                                <div
                                    key={index}
                                    className="glassmorphism rounded-xl overflow-hidden"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={hostel.image}
                                            alt={hostel.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-display font-bold text-skitm-navy mb-2">
                                            {hostel.name}
                                        </h3>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-sm text-skitm-gray">
                                                <span className="font-medium">
                                                    Capacity:
                                                </span>{" "}
                                                {hostel.capacity}
                                            </div>

                                            <div className="text-sm text-skitm-gray">
                                                <span className="font-medium">
                                                    Room Types:
                                                </span>{" "}
                                                {hostel.roomTypes.join(", ")}
                                            </div>
                                        </div>

                                        <p className="text-skitm-gray">
                                            {hostel.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hostel Features */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
                            Hostel Features & Amenities
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center"
                                >
                                    <div className="mb-4 p-3 bg-skitm-blue/10 rounded-full">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-skitm-navy mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-skitm-gray">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hostel Rules */}
                    <div className="glassmorphism rounded-xl p-8">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-6">
                            Hostel Rules & Regulations
                        </h2>

                        <div className="max-w-3xl mx-auto">
                            <ul className="list-disc list-inside space-y-3 text-skitm-gray">
                                <li>
                                    Students must maintain discipline and follow
                                    the code of conduct at all times.
                                </li>
                                <li>
                                    Hostel entry and exit are monitored. Gates
                                    close at 10:00 PM for security reasons.
                                </li>
                                <li>
                                    Visitors are allowed only in designated
                                    visitor areas during specified hours.
                                </li>
                                <li>
                                    Consumption of alcohol, tobacco, and
                                    prohibited substances is strictly forbidden.
                                </li>
                                <li>
                                    Students are responsible for keeping their
                                    rooms and common areas clean.
                                </li>
                                <li>
                                    Conservation of electricity and water is
                                    encouraged.
                                </li>
                                <li>
                                    Any damage to hostel property will result in
                                    appropriate penalties.
                                </li>
                                <li>
                                    Ragging in any form is strictly prohibited
                                    and will lead to severe consequences.
                                </li>
                                <li>
                                    Students requiring medical attention should
                                    inform the hostel warden immediately.
                                </li>
                                <li>
                                    Hostel fee must be paid on time as per the
                                    academic calendar.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Hostels;
