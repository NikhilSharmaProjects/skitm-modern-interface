import { useState, useEffect } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import { NewsItem, EventItem, newsService, eventsService } from "@/services/dataService";
import { toast } from "sonner";

const NewsEventsSection = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [events, setEvents] = useState<EventItem[]>([]);
    const [combinedItems, setCombinedItems] = useState<
        Array<NewsItem | EventItem & { type?: string }>
    >([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load news and events from Supabase with local storage fallback
        const loadData = async () => {
            setLoading(true);
            try {
                // Load news
                const newsData = await newsService.getAll();
                setNewsItems(newsData);
                
                // Load events
                const eventData = await eventsService.getAll();
                setEvents(eventData);
                
                // Combine and sort by date (newest first)
                const newsWithType = newsData.map(item => ({...item, type: 'news'}));
                const eventsWithType = eventData.map(item => ({...item, type: 'event'}));
                const combined = [...newsWithType, ...eventsWithType];
                
                combined.sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                );
                
                // Take only the most recent 6 items
                setCombinedItems(combined.slice(0, 6));
            } catch (error) {
                console.error("Failed to load news and events:", error);
                toast.error("Failed to load content. Using cached data if available.");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <section className="py-20 bg-skitm-navy text-white">
            <div
                ref={sectionRef as React.RefObject<HTMLDivElement>}
                className={`container mx-auto px-4 ${
                    sectionVisible ? "animate-fade-in" : "opacity-1"
                }`}
            >
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-white/10 rounded-full">
                        Latest Updates
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        News & Events
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Stay updated with the latest happenings, events, and
                        achievements at SKITM.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="col-span-3 text-center py-8">
                            <p>Loading latest updates...</p>
                        </div>
                    ) : combinedItems.length === 0 ? (
                        <div className="col-span-3 text-center py-8">
                            <p>No updates available at the moment.</p>
                        </div>
                    ) : (
                        combinedItems.map((item, index) => {
                            const isEvent = 'time' in item || item.category === "event";
                            const itemImage = isEvent
                                ? (item as EventItem).image
                                : (item as NewsItem).imageUrl;
                            const category = item.category || "uncategorized"; // Provide default category if missing

                            return (
                                <div
                                    key={item.id}
                                    className={`glassmorphism-dark rounded-xl overflow-hidden transition-all duration-500 ${
                                        sectionVisible
                                            ? "animate-fade-in"
                                            : "opacity-1"
                                    }`}
                                    style={{ animationDelay: `${0.1 * index}s` }}
                                >
                                    {itemImage && (
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={itemImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <span
                                                className={`px-2 py-1 text-xs font-medium rounded ${
                                                    category === "event"
                                                        ? "bg-yellow-500/20 text-yellow-200"
                                                        : category === "news"
                                                        ? "bg-blue-500/20 text-blue-200"
                                                        : "bg-green-500/20 text-green-200"
                                                }`}
                                            >
                                                {category.charAt(0).toUpperCase() +
                                                    category.slice(1)}
                                            </span>
                                            <span className="flex items-center text-xs text-blue-200">
                                                <Calendar
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                {formatDate(item.date)}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-display font-semibold mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <Link
                                            to={isEvent ? `/events` : `/news`}
                                            className="text-blue-200 hover:text-white text-sm flex items-center transition-colors"
                                        >
                                            Read More{" "}
                                            <ArrowRight
                                                size={16}
                                                className="ml-1"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/news">
                        <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white/10"
                        >
                            View All News
                        </Button>
                    </Link>

                    <Link to="/events">
                        <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white/10"
                        >
                            View All Events
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsEventsSection;
