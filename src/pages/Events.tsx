import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { Calendar, Clock, MapPin } from "lucide-react";

// Define Event type
interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
}

// Default events if none in localStorage
const defaultEvents = [
    {
        id: "1",
        title: "Orientation Day for New Students",
        description:
            "Welcome ceremony for all new students with campus tour, introduction to faculty and student activities.",
        date: "2025-07-15",
        time: "09:00",
        location: "Main Auditorium",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
    {
        id: "2",
        title: "Annual Technical Symposium",
        description:
            "A platform for students to showcase their technical innovations and compete in various technical events.",
        date: "2025-08-20",
        time: "10:00",
        location: "Engineering Block",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
    },
];

const Events = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        // Check for and remove events older than 15 days
        const checkAndCleanEvents = (eventList: Event[]) => {
            // Get settings to check if auto-delete is enabled
            const settings = localStorage.getItem("skitm-settings");
            const autoDeleteEnabled = settings
                ? JSON.parse(settings).preferences?.autoDeleteOldEvents
                : true;

            if (autoDeleteEnabled) {
                const today = new Date();
                const fifteenDaysAgo = new Date(today);
                fifteenDaysAgo.setDate(today.getDate() - 15);

                return eventList.filter((event) => {
                    const eventDate = new Date(event.date);
                    return eventDate >= fifteenDaysAgo;
                });
            }

            return eventList;
        };

        // Load events from localStorage or use defaults
        const savedEvents = localStorage.getItem("skitm-events");
        if (savedEvents) {
            const parsedEvents = JSON.parse(savedEvents);
            const cleanedEvents = checkAndCleanEvents(parsedEvents);

            // If events were cleaned up, save the cleaned list back to localStorage
            if (cleanedEvents.length < parsedEvents.length) {
                localStorage.setItem(
                    "skitm-events",
                    JSON.stringify(cleanedEvents)
                );
            }

            setEvents(cleanedEvents);
        } else {
            setEvents(defaultEvents);
        }
    }, []);

    // Format date to a more readable format
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    // Format time (e.g., 14:30 to 2:30 PM)
    const formatTime = (timeString: string) => {
        try {
            const [hours, minutes] = timeString.split(":");
            const date = new Date();
            date.setHours(parseInt(hours || "0", 10));
            date.setMinutes(parseInt(minutes || "0", 10));
            return date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });
        } catch (e) {
            return timeString;
        }
    };

    // Sort events by date (upcoming first)
    const sortedEvents = [...events].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Separate events into upcoming and past
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingEvents = sortedEvents.filter(
        (event) => new Date(event.date) >= today
    );

    const pastEvents = sortedEvents.filter(
        (event) => new Date(event.date) < today
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={headingRef as React.RefObject<HTMLDivElement>}
                        className={`text-center mb-16 ${
                            headingVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Campus Activities
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Events
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Stay updated on upcoming and past events at SKITM.
                        </p>
                    </div>

                    {upcomingEvents.length === 0 && pastEvents.length === 0 ? (
                        <div className="glassmorphism rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
                                Upcoming Events
                            </h2>
                            <p className="text-skitm-gray mb-6">
                                No events found. Check back soon for upcoming
                                campus events.
                            </p>
                            <div className="w-16 h-16 mx-auto">
                                <Calendar className="w-full h-full text-skitm-blue/50" />
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {/* Upcoming Events */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-display font-bold text-skitm-navy">
                                    Upcoming Events
                                </h2>

                                {upcomingEvents.length === 0 ? (
                                    <div className="glassmorphism rounded-xl p-8 text-center">
                                        <p className="text-skitm-gray">
                                            No upcoming events at the moment.
                                            Check back soon!
                                        </p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {upcomingEvents.map((event) => (
                                            <div
                                                key={event.id}
                                                className="glassmorphism rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                            >
                                                {event.image && (
                                                    <div className="h-48 overflow-hidden">
                                                        <img
                                                            src={event.image}
                                                            alt={event.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                )}

                                                <div className="p-6">
                                                    <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                                        {event.title}
                                                    </h3>

                                                    <div className="flex flex-col gap-2 mb-4">
                                                        <div className="flex items-center text-sm text-skitm-gray">
                                                            <Calendar
                                                                size={16}
                                                                className="mr-2 text-skitm-blue"
                                                            />
                                                            <span>
                                                                {formatDate(
                                                                    event.date
                                                                )}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center text-sm text-skitm-gray">
                                                            <Clock
                                                                size={16}
                                                                className="mr-2 text-skitm-blue"
                                                            />
                                                            <span>
                                                                {formatTime(
                                                                    event.time
                                                                )}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center text-sm text-skitm-gray">
                                                            <MapPin
                                                                size={16}
                                                                className="mr-2 text-skitm-blue"
                                                            />
                                                            <span>
                                                                {event.location}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <p className="text-skitm-gray mb-4">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Past Events */}
                            {pastEvents.length > 0 && (
                                <div className="space-y-8">
                                    <h2 className="text-2xl font-display font-bold text-skitm-navy">
                                        Past Events
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {pastEvents.map((event) => (
                                            <div
                                                key={event.id}
                                                className="glassmorphism rounded-xl overflow-hidden hover:shadow-md transition-shadow opacity-75"
                                            >
                                                {event.image && (
                                                    <div className="h-48 overflow-hidden">
                                                        <img
                                                            src={event.image}
                                                            alt={event.title}
                                                            className="w-full h-full object-cover grayscale"
                                                        />
                                                    </div>
                                                )}

                                                <div className="p-6">
                                                    <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                                        {event.title}
                                                    </h3>

                                                    <div className="flex flex-col gap-2 mb-4">
                                                        <div className="flex items-center text-sm text-skitm-gray">
                                                            <Calendar
                                                                size={16}
                                                                className="mr-2 text-skitm-blue"
                                                            />
                                                            <span>
                                                                {formatDate(
                                                                    event.date
                                                                )}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center text-sm text-skitm-gray">
                                                            <Clock
                                                                size={16}
                                                                className="mr-2 text-skitm-blue"
                                                            />
                                                            <span>
                                                                {formatTime(
                                                                    event.time
                                                                )}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center text-sm text-skitm-gray">
                                                            <MapPin
                                                                size={16}
                                                                className="mr-2 text-skitm-blue"
                                                            />
                                                            <span>
                                                                {event.location}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <p className="text-skitm-gray mb-4">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Events;
