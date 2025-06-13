
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import { Home, Users, Shield, Wifi } from 'lucide-react';

const Hostel = () => {
  const hostelStats = [
    { icon: <Home className="h-8 w-8 text-white" />, number: "500+", label: "Bed Capacity" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "24/7", label: "Security" },
    { icon: <Shield className="h-8 w-8 text-white" />, number: "100%", label: "Safety" },
    { icon: <Wifi className="h-8 w-8 text-white" />, number: "High Speed", label: "WiFi" },
  ];

  const facilities = [
    {
      title: "Comfortable Accommodation",
      description: "Well-furnished rooms with modern amenities and comfortable living spaces",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dining Facilities",
      description: "Hygienic mess with nutritious meals and variety of cuisines",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Recreation Areas",
      description: "Common rooms, indoor games, and recreational facilities for relaxation",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.6}
        className="min-h-[70vh]"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Student Accommodation
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Hostel Facilities
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A home away from home with modern amenities and comfortable living
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
            {hostelStats.map((stat, index) => (
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
        {/* Facilities Section */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Hostel Amenities</h2>
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
                  <h3 className="section-title">{facility.title}</h3>
                  <p className="text-body-lg text-skitm-gray">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Life at Hostel Parallax */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Life at SKITM Hostels
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Study Rooms</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">24/7 Security</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Medical Facility</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Laundry Service</div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
};

export default Hostel;
