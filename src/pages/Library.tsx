
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import { BookOpen, Users, Clock, Wifi, Database, Search } from 'lucide-react';

const Library = () => {
  const stats = [
    { icon: <BookOpen className="h-8 w-8 text-white" />, number: "50,000+", label: "Books & Journals" },
    { icon: <Database className="h-8 w-8 text-white" />, number: "100+", label: "Digital Databases" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "500+", label: "Reading Capacity" },
    { icon: <Clock className="h-8 w-8 text-white" />, number: "14 hrs", label: "Daily Access" },
  ];

  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-skitm-blue" />,
      title: "Digital Library",
      description: "Access to thousands of e-books, journals, and research papers"
    },
    {
      icon: <Search className="h-12 w-12 text-skitm-blue" />,
      title: "Research Support",
      description: "Dedicated research assistance and reference services"
    },
    {
      icon: <Wifi className="h-12 w-12 text-skitm-blue" />,
      title: "Online Access",
      description: "24/7 online access to digital resources and databases"
    },
    {
      icon: <Users className="h-12 w-12 text-skitm-blue" />,
      title: "Study Spaces",
      description: "Quiet study areas, group discussion rooms, and collaborative spaces"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.6}
        className="min-h-[70vh]"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Knowledge Hub
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Central Library
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your gateway to unlimited knowledge and research resources
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
        {/* Image-First About Section */}
        <section className="section-container bg-white">
          <div className="image-first-block mb-20">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Library Interior"
                className="image-first-image"
              />
            </div>
            <div className="image-first-content order-1 lg:order-2">
              <h3 className="section-title">Modern Learning Environment</h3>
              <p className="text-body-lg text-skitm-gray mb-6">
                Our state-of-the-art library serves as the intellectual heart of the campus, providing students and faculty with comprehensive resources for learning and research.
              </p>
              <p className="text-body text-skitm-gray mb-8">
                With a vast collection of books, journals, digital databases, and modern study spaces, the library supports academic excellence and lifelong learning.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-container bg-skitm-offWhite">
          <h2 className="section-title text-center">Library Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glassmorphism rounded-xl p-8 text-center card-hover">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-skitm-gray">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Collections Parallax */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Extensive Collections
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Engineering Books</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Management Resources</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Legal Journals</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Research Papers</div>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
};

export default Library;
