
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import { Building2, Wifi, Car, Users, Utensils, Heart, BookOpen, Monitor } from 'lucide-react';

const Facilities = () => {
  const stats = [
    { icon: <Building2 className="h-8 w-8 text-white" />, number: "50+", label: "Modern Classrooms" },
    { icon: <BookOpen className="h-8 w-8 text-white" />, number: "20+", label: "State-of-art Labs" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "5000+", label: "Students Capacity" },
    { icon: <Wifi className="h-8 w-8 text-white" />, number: "100%", label: "WiFi Coverage" },
  ];

  const facilities = [
    {
      icon: <Building2 className="h-12 w-12 text-skitm-blue" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art buildings with contemporary architecture and eco-friendly design",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Monitor className="h-12 w-12 text-skitm-blue" />,
      title: "Advanced Laboratories",
      description: "Cutting-edge labs equipped with latest technology for hands-on learning",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-skitm-blue" />,
      title: "Central Library",
      description: "Extensive collection of books, journals, and digital resources",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Utensils className="h-12 w-12 text-skitm-blue" />,
      title: "Dining Facilities",
      description: "Hygienic cafeterias serving nutritious meals and diverse cuisines",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Heart className="h-12 w-12 text-skitm-blue" />,
      title: "Health Center",
      description: "24/7 medical facility with qualified doctors and emergency care",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Car className="h-12 w-12 text-skitm-blue" />,
      title: "Transportation",
      description: "Comprehensive bus service covering major routes in the city",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.5}
        className="min-h-[70vh]"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            World-Class Infrastructure
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            State-of-the-Art Facilities
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Modern infrastructure designed to enhance learning and student life
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
        {/* Facilities Grid */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Our Facilities</h2>
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div key={index} className={`image-first-block ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                  <img 
                    src={facility.image}
                    alt={facility.title}
                    className="image-first-image"
                  />
                </div>
                <div className={`image-first-content ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="flex items-center mb-6">
                    {facility.icon}
                    <h3 className="text-2xl font-display font-bold text-skitm-navy ml-4">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-body-lg text-skitm-gray">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Amenities */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Additional Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">ATM Services</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Security Systems</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Sports Complex</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Student Lounges</div>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
};

export default Facilities;
