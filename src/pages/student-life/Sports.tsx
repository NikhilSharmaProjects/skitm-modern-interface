
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import { Trophy, Users, Target, Award } from 'lucide-react';

const Sports = () => {
  const sportsStats = [
    { icon: <Trophy className="h-8 w-8 text-white" />, number: "15+", label: "Sports Facilities" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "500+", label: "Active Athletes" },
    { icon: <Target className="h-8 w-8 text-white" />, number: "25+", label: "Tournaments" },
    { icon: <Award className="h-8 w-8 text-white" />, number: "100+", label: "Championships" },
  ];

  const sportsActivities = [
    {
      title: "Indoor Sports Complex",
      description: "Modern indoor facilities for badminton, table tennis, chess, and other indoor games with professional equipment",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Outdoor Sports Grounds",
      description: "Well-maintained cricket ground, football field, basketball and volleyball courts for outdoor sports activities",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fitness & Wellness",
      description: "Fully equipped gymnasium and yoga center promoting physical fitness and mental well-being of students",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.6}
        className="min-h-[70vh]"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Athletic Excellence
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Sports & Recreation
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Promoting physical fitness, team spirit, and competitive excellence through diverse sports programs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
            {sportsStats.map((stat, index) => (
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
        {/* Sports Activities Section */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Sports Facilities</h2>
          <div className="space-y-16">
            {sportsActivities.map((activity, index) => (
              <div key={index} className={`image-first-block ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="image-first-image"
                  />
                </div>
                <div className={`image-first-content ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <h3 className="section-title">{activity.title}</h3>
                  <p className="text-body-lg text-skitm-gray">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Championships Parallax */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Championship Spirit
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Inter-College Tournaments</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">State Championships</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">National Competitions</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Professional Coaching</div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
};

export default Sports;
