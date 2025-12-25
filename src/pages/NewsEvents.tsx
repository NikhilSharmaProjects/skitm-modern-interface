import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import { Calendar, Users, Award, BookOpen } from "lucide-react";
import {
    getRandomGalleryImage,
    pickRandomGalleryImages,
} from "@/utils/galleryImages";

const NewsEvents = () => {
    // Get random gallery images for news and events
    const newsImages = pickRandomGalleryImages(7);

    const stats = [
        {
            icon: <Calendar className="h-8 w-8 text-white" />,
            number: "50+",
            label: "Annual Events",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "5000+",
            label: "Participants",
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "25+",
            label: "Competitions",
        },
        {
            icon: <BookOpen className="h-8 w-8 text-white" />,
            number: "100+",
            label: "Workshops",
        },
    ];

    // Updated event data with gallery images
    const latestNews = [
        {
            category: "Hackathon",
            title: "Innothon 2.0 – A National-Level Hackathon!",
            excerpt:
                "Exciting opportunity for innovators, coders, and creators to showcase talent in a 36-hour hackathon on a national stage.",
            date: "May 9, 2025",
            image: newsImages[0] || "/Gallery/GalleryImage (1).png",
        },
        {
            category: "Farewell",
            title: "Farewell Event Ceremony",
            excerpt:
                "A ceremony to bid farewell and celebrate achievements, memories, and gratitude with departing students.",
            date: "May 6, 2025",
            image: newsImages[1] || "/Gallery/GalleryImage (2).png",
        },
        {
            category: "Seminar",
            title: "NEP In Higher Education: Adaption and Challenges",
            excerpt:
                "A seminar on implementing India's National Education Policy 2020 for higher education with discussion panels.",
            date: "April 11, 2025",
            image: newsImages[2] || "/Gallery/GalleryImage (3).png",
        },
        {
            category: "Competition",
            title: "Business Plan Competition",
            excerpt:
                "Student teams compete with innovative business plan presentations; winning entries receive special recognition.",
            date: "April 4, 2025",
            image: newsImages[3] || "/Gallery/GalleryImage (4).png",
        },
        {
            category: "Workshop",
            title: "Introduction to Spatial Thinking, GIS and Remote Sensing",
            excerpt:
                "Hands-on workshop exploring geospatial science fundamentals and their applications.",
            date: "April 4, 2025",
            image: newsImages[4] || "/Gallery/GalleryImage (5).png",
        },
        {
            category: "Celebration",
            title: "Celebrate World Poetry Day",
            excerpt:
                "A cultural evening with poetry recital and vibrant literary performances on campus.",
            date: "March 21, 2025",
            image: newsImages[5] || "/Gallery/GalleryImage (6).png",
        },
        {
            category: "Festival",
            title: "Holi Milan Samaroh",
            excerpt:
                "Colorful celebration of the festival of Holi, with music and traditions at SKITM campus.",
            date: "March 13, 2025",
            image: newsImages[6] || "/Gallery/GalleryImage (7).png",
        },
    ];

    // Upcoming events - detailed, formatted for sidebar
    const upcomingEvents = [
        {
            date: "09",
            month: "May",
            year: "2025",
            title: "Innothon 2.0 – A National-Level Hackathon!",
            description:
                "We are thrilled to announce Innothon 2.0, an exciting opportunity for innovators, coders, and creators. This 36-hour hackathon is designed to bring together passionate minds to solve real-world challenges.",
            time: "09:00 - 16:00 (May 11, 2025)",
            location:
                "Shivajirao Kadam Institute of Technology and Management Indore",
        },
        {
            date: "06",
            month: "May",
            year: "2025",
            title: "Farewell Event Ceremony",
            description:
                "A farewell event is a ceremony to bid farewell to individuals leaving the institution. Celebrate achievements, express gratitude, and cherish memories.",
            time: "02:30 - 04:30",
            location:
                "Shivajirao Kadam Institute of Technology and Management Indore",
        },
        {
            date: "11",
            month: "Apr",
            year: "2025",
            title: "NEP In Higher Education: Adaption and Challenges",
            description:
                "Seminar focused on India's National Education Policy 2020.",
            time: "09:30 - 16:00 (April 12, 2025)",
            location: "SKITM, Indore",
        },
        {
            date: "04",
            month: "Apr",
            year: "2025",
            title: "Business Plan Competition",
            description:
                "Student teams present creative and viable business plans.",
            time: "12:00 - 16:00",
            location: "SKITM, Indore",
        },
        {
            date: "04",
            month: "Apr",
            year: "2025",
            title: "Introduction to Spatial Thinking, GIS and Remote Sensing",
            description: "Hands-on workshop; explore GIS and remote sensing.",
            time: "09:30 - 16:30",
            location: "",
        },
        {
            date: "21",
            month: "Mar",
            year: "2025",
            title: "Celebrate World Poetry Day",
            description: "An evening of poetry, music, and celebrations.",
            time: "01:00 - 04:00",
            location: "",
        },
        {
            date: "13",
            month: "Mar",
            year: "2025",
            title: "Holi Milan Samaroh",
            description: "Traditional Holi festivities on campus.",
            time: "01:00 - 04:00",
            location: "SKITM, Indore",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.6}
                className="min-h-[70vh] pt-24"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        Stay Connected
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        News & Events
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Stay updated with the latest happenings and upcoming
                        events at SKITM
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
                        {stats.map((stat, index) => (
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
                {/* Latest News */}
                <section className="section-container bg-white">
                    <h2 className="section-title text-center">Latest News</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {latestNews.map((news, index) => (
                            <div
                                key={index}
                                className="glassmorphism rounded-xl overflow-hidden card-hover"
                            >
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm mb-3">
                                        {news.category}
                                    </span>
                                    <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                        {news.title}
                                    </h3>
                                    <p className="text-skitm-gray mb-4 text-sm">
                                        {news.excerpt}
                                    </p>
                                    <span className="text-xs text-skitm-gray">
                                        Published: {news.date}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="section-container bg-skitm-offWhite">
                    <div className="image-first-block">
                        <div className="order-2 lg:order-1">
                            <img
                                src={getRandomGalleryImage()}
                                alt="Campus Events"
                                className="image-first-image"
                            />
                        </div>
                        <div className="image-first-content order-1 lg:order-2">
                            <h2 className="section-title">Upcoming Events</h2>
                            <div className="space-y-6">
                                {upcomingEvents.map((event, index) => (
                                    <div
                                        key={index}
                                        className="glassmorphism rounded-xl p-6 card-hover"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-16 h-16 bg-skitm-blue rounded-lg flex flex-col items-center justify-center text-white">
                                                <span className="font-display font-bold text-lg">
                                                    {event.date}
                                                </span>
                                                <span className="text-xs uppercase">
                                                    {event.month}
                                                </span>
                                                <span className="text-xs">
                                                    {event.year}
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-display font-bold text-skitm-navy mb-2">
                                                    {event.title}
                                                </h4>
                                                <p className="text-skitm-gray text-sm">
                                                    {event.description}
                                                </p>
                                                <div className="text-xs text-skitm-navy mt-2 flex flex-col gap-0.5">
                                                    <span>{event.time}</span>
                                                    {event.location && (
                                                        <span>
                                                            <b>Venue:</b>{" "}
                                                            {event.location}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Events Parallax */}
                <ParallaxSection
                    backgroundImage="/Background.png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Join Our Events
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Tech Competitions
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Cultural Festivals
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Industry Workshops
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Sports Tournaments
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            </main>
            <Footer />
        </div>
    );
};

export default NewsEvents;
