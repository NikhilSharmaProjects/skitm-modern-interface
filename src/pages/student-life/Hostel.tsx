import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import {
    Wifi,
    Dumbbell,
    Tv,
    Table2,
    Goal,
    Droplets,
    TreePalm,
    Utensils,
    Circle,
} from "lucide-react";

// Placeholder/stock images relevant for hostels
const IMG_ROOM = "/Gallery/GalleryImage (${RANDOM_INT}).png"; // white building
const IMG_GARDEN = "/Gallery/GalleryImage (${RANDOM_INT}).png"; // garden
const IMG_LOUNGE = "/Gallery/GalleryImage (${RANDOM_INT}).png"; // lounge
const IMG_POND = "/Gallery/GalleryImage (${RANDOM_INT}).png"; // water pond

const features = [
    {
        icon: <Wifi className="h-7 w-7 text-skitm-blue" />,
        title: "24x7 Internet Connectivity",
        description: "High-speed 100MBPS WiFi access in all rooms and campus.",
        image: IMG_ROOM,
    },
    {
        icon: <Circle className="h-7 w-7 text-skitm-blue" />,
        title: "Computer Labs",
        description: "Accessible computer centers for all residents.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        icon: <Dumbbell className="h-7 w-7 text-skitm-blue" />,
        title: "Gymnasium",
        description: "State-of-the-art gym facilities for fitness and health.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        icon: <Tv className="h-7 w-7 text-skitm-blue" />,
        title: "TV Room",
        description:
            "Spacious lounge with TV for relaxation and entertainment.",
        image: IMG_LOUNGE,
    },
    {
        icon: <Table2 className="h-7 w-7 text-skitm-blue" />,
        title: "Table Tennis",
        description: "Enjoy hours of indoor fun with table tennis.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        icon: <Goal className="h-7 w-7 text-skitm-blue" />,
        title: "Basketball Ground",
        description: "Outdoor court for basketball enthusiasts.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        icon: <Goal className="h-7 w-7 text-skitm-blue" />,
        title: "Volleyball, Kho Kho, Football, Badminton",
        description: "Enjoy various outdoor sports on campus.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        icon: <Circle className="h-7 w-7 text-skitm-blue" />,
        title: "Indoor & Outdoor Games",
        description: "Wide range of games for recreation and fitness.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        icon: <Droplets className="h-7 w-7 text-skitm-blue" />,
        title: "Water Pond",
        description: "Serene water pond for peace and relaxation.",
        image: IMG_POND,
    },
    {
        icon: <TreePalm className="h-7 w-7 text-skitm-blue" />,
        title: "Garden",
        description: "Beautiful garden and greenery throughout campus.",
        image: IMG_GARDEN,
    },
    {
        icon: <Utensils className="h-7 w-7 text-skitm-blue" />,
        title: "Mess – Canteen",
        description:
            "Nutritious and hygienic vegetarian meals in a lively mess.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        icon: <Droplets className="h-7 w-7 text-skitm-blue" />,
        title: "Hot & RO Drinking Water",
        description: "24x7 supply of hot water and RO purified drinking water.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        icon: <Circle className="h-7 w-7 text-skitm-blue" />,
        title: "Weekly Tour",
        description: "Exciting weekly tours for fun and learning.",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
];

const rules = [
    "To provide congenial atmosphere and discipline, hostel accommodation is provisional subject to satisfactory academic performance and discipline.",
    "No refund/claim for Hostel Money if leaving mid-session.",
    "Admission made for one academic year; payment on a quarterly basis.",
    "All residents must follow hostel rules and regulations.",
    "Residents solely responsible for actions inside or outside the campus.",
    "Rooms can be inspected by Warden/Management at any time.",
    "No electronic devices allowed without prior permission.",
    "Regular and punctual attendance in classes is expected.",
    "Application for hostel admission on prescribed form to the Warden.",
    "Only vegetarian meals are served.",
    "Meals to be taken in the Dining Hall; includes morning tea, breakfast, lunch, and dinner.",
    "Meals served only during prescribed timings displayed on the notice board.",
    "Common menu for all residents.",
    "Maintain decorum and no nuisance/disturbance.",
    "Switch off room lights/fans when leaving the room.",
    "Report illness/injury to Warden; charges borne by residents.",
    "Visitors/parents only allowed in hostel rooms with prior permission.",
    "Obey Wardens' directions and instructions on all matters.",
    "No involvement in illegal activities, gambling, or making noise at night.",
    "Smoking strictly prohibited on campus.",
    "No intoxicants (alcohol, gutkha, etc.) allowed in hostel or institute premises. No students should come to hostel in inebriated condition.",
    "Residents responsible for rooms and institute property. Damage/breakage/theft must be reported immediately; guilty students will bear the cost.",
];

const Hostel = () => (
    <div className="min-h-screen flex flex-col bg-skitm-offWhite">
        <Navbar />
        {/* Parallax Hero Section */}
        <ParallaxSection
            backgroundImage={IMG_ROOM}
            overlayOpacity={0.55}
            className="min-h-[50vh]"
        >
            <div className="parallax-content space-y-6">
                <div className="inline-block px-6 py-2 mb-5 rounded-full bg-white/30 text-white text-sm font-semibold shadow-md backdrop-blur">
                    SKITM, Indore — Hostel Facilities
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-2 leading-tight">
                    Hostel : Home Away from Home
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-2 drop-shadow">
                    Air-cooled rooms, beautiful green campus, lively mess,
                    gymnasium, sports and the best environment to grow
                    personally and academically.
                </p>
            </div>
        </ParallaxSection>

        {/* Hostel Features : Cards with Images */}
        <main className="flex-grow">
            <section className="section-container bg-white/90 rounded-b-3xl pb-8">
                <h2 className="section-title text-center mb-0">
                    Hostel Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="rounded-2xl shadow-xl group overflow-hidden glassmorphism card-hover flex flex-col h-full"
                        >
                            <div className="h-52 sm:h-60 w-full overflow-hidden mb-0">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between bg-white bg-opacity-80">
                                <div className="flex items-center gap-3 mb-3">
                                    {feature.icon}
                                    <span className="font-display font-bold text-xl md:text-2xl text-skitm-navy grow">
                                        {feature.title}
                                    </span>
                                </div>
                                <div className="text-skitm-gray text-base font-medium">
                                    {feature.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <span className="inline-block px-5 py-2 bg-skitm-blue text-white font-medium rounded-lg shadow hover-scale transition">
                        Weekly tours, sports & much more make Hostel life
                        unforgettable!
                    </span>
                </div>
            </section>

            {/* Hostel Rules & Regulations */}
            <section className="section-container pt-8 pb-12 max-w-4xl mx-auto">
                <h2 className="section-title text-center mb-4">
                    Hostel Rules & Regulations
                </h2>
                <div className="glassmorphism rounded-xl shadow-xl p-6 md:p-10 max-h-[620px] overflow-y-auto">
                    <div className="prose prose-skitm text-skitm-gray text-lg space-y-4">
                        <p className="text-skitm-navy font-extrabold text-2xl mb-2">
                            The aim of our Hostel is to make it a{" "}
                            <span className="text-skitm-blue">
                                Home Away from Home
                            </span>
                            .
                        </p>
                        <p>
                            The air-cooled hostel offers an ambience focused on
                            studies, sports, cultural activities and
                            interpersonal development.
                        </p>
                        <ul className="list-decimal pl-5 space-y-2 text-base marker:text-skitm-blue">
                            {rules.map((rule, idx) => (
                                <li key={idx} className="leading-snug">
                                    {rule}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-base text-skitm-gray font-medium text-right italic">
                            SKITM, Indore
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default Hostel;
