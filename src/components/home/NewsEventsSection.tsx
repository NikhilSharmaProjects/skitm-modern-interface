
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const NewsEventsSection = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

    const newsItems = [
        {
            id: 1,
            title: "SKITM Students Win National Tech Competition",
            summary: "Computer Science students secured first place in the National Innovation Challenge",
            date: "2024-01-15",
            category: "Achievement",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "/news"
        },
        {
            id: 2,
            title: "Industry-Academia Partnership Launch",
            summary: "New collaboration with leading tech companies for enhanced curriculum",
            date: "2024-01-10",
            category: "Partnership",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "/news"
        },
        {
            id: 3,
            title: "Research Excellence Award 2024",
            summary: "Faculty receives prestigious research grant for innovative work",
            date: "2024-01-05",
            category: "Research",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "/news"
        }
    ];

    const upcomingEvents = [
        {
            id: 1,
            title: "Annual Technical Symposium 2024",
            date: "2024-02-15",
            time: "09:00 AM",
            location: "Main Auditorium",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "/events"
        },
        {
            id: 2,
            title: "Industry Guest Lecture Series",
            date: "2024-02-20",
            time: "02:00 PM",
            location: "Conference Hall",
            image: "https://images.unsplash.com/photo-1559223607-9bb56a3e0017?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "/events"
        },
        {
            id: 3,
            title: "Career Fair 2024",
            date: "2024-02-25",
            time: "10:00 AM",
            location: "Campus Grounds",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            link: "/events"
        }
    ];

    return (
        <section className="section-container bg-gradient-to-b from-blue-50 to-white">
            <div
                ref={sectionRef as React.RefObject<HTMLDivElement>}
                className={`${sectionVisible ? "animate-fade-in" : "opacity-1"}`}
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title text-center">News & Events</h2>
                    <p className="text-body-lg text-skitm-gray max-w-3xl mx-auto">
                        Stay updated with the latest happenings at SKITM
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Latest News */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-display font-semibold text-2xl text-skitm-navy tracking-wide">
                                Latest News
                            </h3>
                            <Link to="/news" className="text-skitm-blue hover:text-skitm-navy transition-colors">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium">View All</span>
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        </div>

                        <div className="space-y-6">
                            {newsItems.map((item, index) => (
                                <Link 
                                    key={item.id}
                                    to={item.link}
                                    className="group block"
                                >
                                    <div className="glassmorphism rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <img 
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-24 h-24 object-cover"
                                                />
                                            </div>
                                            <div className="p-4 flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-2 py-1 bg-skitm-blue/10 text-skitm-blue text-xs font-medium rounded">
                                                        {item.category}
                                                    </span>
                                                    <div className="flex items-center text-xs text-skitm-gray">
                                                        <Calendar size={12} className="mr-1" />
                                                        {new Date(item.date).toLocaleDateString()}
                                                    </div>
                                                </div>
                                                <h4 className="font-semibold text-skitm-navy mb-2 group-hover:text-skitm-blue transition-colors line-clamp-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-skitm-gray line-clamp-2">
                                                    {item.summary}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-display font-semibold text-2xl text-skitm-navy tracking-wide">
                                Upcoming Events
                            </h3>
                            <Link to="/events" className="text-skitm-blue hover:text-skitm-navy transition-colors">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium">View All</span>
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        </div>

                        <div className="space-y-6">
                            {upcomingEvents.map((event, index) => (
                                <Link 
                                    key={event.id}
                                    to={event.link}
                                    className="group block"
                                >
                                    <div className="glassmorphism rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                                        <div className="relative">
                                            <img 
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-32 object-cover"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                                                <div className="text-xs font-medium text-skitm-blue">
                                                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                                                </div>
                                                <div className="text-lg font-bold text-skitm-navy">
                                                    {new Date(event.date).getDate()}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-semibold text-skitm-navy mb-2 group-hover:text-skitm-blue transition-colors">
                                                {event.title}
                                            </h4>
                                            <div className="space-y-1 text-sm text-skitm-gray">
                                                <div className="flex items-center">
                                                    <Clock size={12} className="mr-2" />
                                                    {event.time}
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar size={12} className="mr-2" />
                                                    {event.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link to="/news-events">
                        <Button variant="primary" size="lg">
                            Explore All Updates
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsEventsSection;
