
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Button from '@/components/ui/CustomButton';

interface NewsEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  category: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  image?: string;
  category?: string; // Added category property to Event interface
}

const NewsEventsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const [newsItems, setNewsItems] = useState<NewsEvent[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [combinedItems, setCombinedItems] = useState<Array<NewsEvent | Event>>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Load news and events from localStorage
    const loadData = () => {
      // Load news
      const savedNews = localStorage.getItem('skitm-news');
      const newsData = savedNews 
        ? JSON.parse(savedNews) 
        : [
          {
            id: '1',
            title: 'Annual Tech Fest "Innovision 2023" Announced',
            date: '2023-05-15',
            description: 'SKITM announces its annual technical festival "Innovision 2023" scheduled for next month with exciting competitions and workshops.',
            imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
            category: 'event'
          },
          {
            id: '2',
            title: 'SKITM Signs MoU with Microsoft for Student Training',
            date: '2023-04-28',
            description: 'SKITM has partnered with Microsoft to provide specialized training and certification opportunities for students.',
            imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
            category: 'news'
          },
          {
            id: '3',
            title: 'SKITM Student Wins National Coding Competition',
            date: '2023-04-10',
            description: 'Aman Sharma, a third-year CSE student, secured first place in the national-level coding competition organized by TechElevate.',
            imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
            category: 'achievement'
          },
        ];
      
      // Load events
      const savedEvents = localStorage.getItem('skitm-events');
      const eventData = savedEvents ? JSON.parse(savedEvents) : [];
      
      // Convert events to compatible format for display
      const formattedEvents = eventData.map((event: Event) => ({
        ...event,
        imageUrl: event.image,
        category: event.category || 'event' // Set default category for events if not present
      }));
      
      setNewsItems(newsData);
      setEvents(eventData);
      
      // Combine and sort by date (newest first)
      const combined = [...newsData, ...formattedEvents];
      combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      // Take only the most recent 6 items
      setCombinedItems(combined.slice(0, 6));
      setLoading(false);
    };
    
    loadData();
  }, []);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return (
    <section className="py-20 bg-skitm-navy text-white">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 ${sectionVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-white/10 rounded-full">
            Latest Updates
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            News & Events
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Stay updated with the latest happenings, events, and achievements at SKITM.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combinedItems.map((item, index) => {
            const isEvent = 'location' in item || (item.category === 'event');
            const itemImage = isEvent ? (item as Event).image : (item as NewsEvent).imageUrl;
            const category = item.category || 'uncategorized'; // Provide default category if missing
            
            return (
              <div 
                key={item.id}
                className={`glassmorphism-dark rounded-xl overflow-hidden transition-all duration-500 ${
                  sectionVisible ? 'animate-fade-in' : 'opacity-0'
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
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      category === 'event' 
                        ? 'bg-yellow-500/20 text-yellow-200' 
                        : category === 'news' 
                          ? 'bg-blue-500/20 text-blue-200' 
                          : 'bg-green-500/20 text-green-200'
                    }`}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                    <span className="flex items-center text-xs text-blue-200">
                      <Calendar size={14} className="mr-1" />
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
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
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
