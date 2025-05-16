import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsItem, newsService } from '@/services/dataService';
import { toast } from 'sonner';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl?: string;
}

const News = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      try {
        const items = await newsService.getAll();
        // Sort news by date (newest first)
        const sortedNews = [...items].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setNewsItems(sortedNews);
      } catch (error) {
        console.error("Failed to load news:", error);
        toast.error("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadNews();
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
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>News & Events - SKITM</title>
        <meta name="description" content="Stay updated with the latest news, events, achievements, and announcements from SKITM. Find information about upcoming workshops, seminars, cultural events, and more." />
        <meta name="keywords" content="SKITM news, college events, campus updates, academic news, engineering events, technical fest, cultural events" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className="text-center mb-16 animate-fade-in"
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              News & Announcements
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Stay up to date with the latest happenings at SKITM.
            </p>
          </div>
          
          {/* News & Announcements Section */}
          <div className="mb-16">
            {loading ? (
              <div className="flex justify-center">
                <p>Loading news...</p>
              </div>
            ) : newsItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-skitm-navy mb-2">No news items found</h3>
                <p className="text-skitm-gray">Check back later for updates.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map(item => (
                  <div key={item.id} className="glassmorphism rounded-xl overflow-hidden h-full flex flex-col">
                    {item.imageUrl && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center mb-3">
                        <Calendar size={16} className="text-skitm-blue mr-2" />
                        <span className="text-sm text-skitm-gray">{formatDate(item.date)}</span>
                      </div>
                      <div className="mb-2">
                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
                          item.category === 'news' 
                            ? 'bg-blue-100 text-blue-800' 
                            : item.category === 'achievement'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-skitm-navy mb-3">
                        {item.title}
                      </h3>
                      <p className="text-skitm-gray mb-4 flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Call to Action */}
          <div className="bg-skitm-blue/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
              Want to Stay Updated?
            </h2>
            <p className="text-skitm-gray mb-6 max-w-xl mx-auto">
              Follow us on social media and subscribe to our newsletter to receive the latest updates about events, achievements, and announcements at SKITM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-lightBlue transition-colors"
              >
                Subscribe to Newsletter
              </Link>
              <Link 
                to="/events"
                className="border border-skitm-blue text-skitm-blue px-6 py-3 rounded-md hover:bg-skitm-blue/5 transition-colors"
              >
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
