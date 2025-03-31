
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Calendar, Clock, MapPin } from 'lucide-react';

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

const Events = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  const [events, setEvents] = useState<Event[]>([]);
  
  useEffect(() => {
    // Load events from localStorage
    const savedEvents = localStorage.getItem('skitm-events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);
  
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className={`text-center mb-16 ${headingVisible ? 'animate-fade-in' : 'opacity-0'}`}
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
          
          {events.length === 0 ? (
            <div className="glassmorphism rounded-xl p-8 text-center">
              <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Upcoming Events</h2>
              <p className="text-skitm-gray mb-6">No events found. Check back soon for upcoming campus events.</p>
              <div className="w-16 h-16 mx-auto">
                <Calendar className="w-full h-full text-skitm-blue/50" />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-skitm-navy">Upcoming Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="glassmorphism rounded-xl overflow-hidden hover:shadow-md transition-shadow">
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
                          <Calendar size={16} className="mr-2 text-skitm-blue" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-skitm-gray">
                          <Clock size={16} className="mr-2 text-skitm-blue" />
                          <span>{event.time}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-skitm-gray">
                          <MapPin size={16} className="mr-2 text-skitm-blue" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-skitm-gray mb-4">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
