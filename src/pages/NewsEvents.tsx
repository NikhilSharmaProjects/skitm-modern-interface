
import ParallaxSection from '@/components/common/ParallaxSection';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';

const NewsEvents = () => {
  const stats = [
    { icon: <Calendar className="h-8 w-8 text-white" />, number: "50+", label: "Annual Events" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "5000+", label: "Participants" },
    { icon: <Award className="h-8 w-8 text-white" />, number: "25+", label: "Competitions" },
    { icon: <BookOpen className="h-8 w-8 text-white" />, number: "100+", label: "Workshops" },
  ];

  const latestNews = [
    {
      category: "Academic",
      title: "New Academic Session 2024-25 Begins",
      excerpt: "SKITM welcomes new batch of students with comprehensive orientation programs and induction activities.",
      date: "June 15, 2024",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Placements",
      title: "Record Breaking Placement Season 2024",
      excerpt: "SKITM achieves 95% placement rate with highest package of 12 LPA from leading companies.",
      date: "May 20, 2024",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "Research",
      title: "Innovation in Pharmaceutical Research",
      excerpt: "Our pharmacy department receives recognition for groundbreaking research in drug development.",
      date: "April 10, 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const upcomingEvents = [
    {
      date: "25",
      month: "Dec",
      title: "Annual Tech Fest 2024",
      description: "Three-day technology festival featuring competitions, workshops, and industry exhibitions."
    },
    {
      date: "30",
      month: "Nov",
      title: "Industry Expert Lecture Series",
      description: "Guest lectures by leading industry professionals and thought leaders."
    },
    {
      date: "15",
      month: "Jan",
      title: "National Sports Tournament",
      description: "Inter-collegiate sports competition with participants from across the region."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
            Stay updated with the latest happenings and upcoming events at SKITM
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
              <div key={index} className="glassmorphism rounded-xl overflow-hidden card-hover">
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
                  <span className="text-xs text-skitm-gray">Published: {news.date}</span>
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
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Campus Events"
                className="image-first-image"
              />
            </div>
            <div className="image-first-content order-1 lg:order-2">
              <h2 className="section-title">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-6 card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-skitm-blue rounded-lg flex flex-col items-center justify-center text-white">
                        <span className="font-display font-bold text-lg">{event.date}</span>
                        <span className="text-xs uppercase">{event.month}</span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-display font-bold text-skitm-navy mb-2">{event.title}</h4>
                        <p className="text-skitm-gray text-sm">{event.description}</p>
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
          backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Join Our Events
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Tech Competitions</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Cultural Festivals</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Industry Workshops</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Sports Tournaments</div>
            </div>
          </div>
        </ParallaxSection>
      </main>
    </div>
  );
};

export default NewsEvents;
