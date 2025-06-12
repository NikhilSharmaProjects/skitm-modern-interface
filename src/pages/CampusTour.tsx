
import ParallaxSection from '@/components/common/ParallaxSection';
import { MapPin, Camera, Clock, Users } from 'lucide-react';

const CampusTour = () => {
  const tourHighlights = [
    { icon: <MapPin className="h-8 w-8 text-white" />, number: "25+", label: "Campus Locations" },
    { icon: <Camera className="h-8 w-8 text-white" />, number: "360°", label: "Virtual Views" },
    { icon: <Clock className="h-8 w-8 text-white" />, number: "24/7", label: "Tour Access" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "100%", label: "Interactive" },
  ];

  const campusAreas = [
    {
      title: "Academic Blocks",
      description: "Modern classrooms equipped with latest technology and comfortable learning environments",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Research Laboratories",
      description: "State-of-the-art labs for engineering, pharmacy, and computer science research",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Central Library",
      description: "Comprehensive collection of books, journals, and digital resources for all disciplines",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Student Facilities",
      description: "Cafeterias, recreational areas, sports facilities, and comfortable hostel accommodations",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.5}
        className="min-h-[70vh] pt-24"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Explore SKITM Campus
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Virtual Campus Tour
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover our beautiful campus and world-class facilities from anywhere
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
            {tourHighlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                    {item.icon}
                  </div>
                </div>
                <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                  {item.number}
                </div>
                <div className="text-sm md:text-base text-blue-200">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <main className="flex-grow">
        {/* Virtual Tour Section */}
        <section className="section-container bg-white">
          <div className="image-first-block mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-skitm-blue/10 to-skitm-navy/10 rounded-2xl h-[500px] flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <Camera className="h-16 w-16 text-skitm-blue mx-auto" />
                  <h3 className="text-2xl font-display font-bold text-skitm-navy">360° Virtual Tour</h3>
                  <p className="text-skitm-gray">Interactive campus exploration coming soon</p>
                </div>
              </div>
            </div>
            <div className="image-first-content order-1 lg:order-2">
              <h3 className="section-title">Experience Our Campus</h3>
              <p className="text-body-lg text-skitm-gray mb-6">
                Take a comprehensive virtual tour of our campus facilities, academic buildings, and student amenities.
              </p>
              <p className="text-body text-skitm-gray mb-8">
                Explore every corner of SKITM through our interactive 360-degree virtual tour platform.
              </p>
            </div>
          </div>
        </section>

        {/* Campus Areas */}
        <section className="section-container bg-skitm-offWhite">
          <h2 className="section-title text-center">Campus Highlights</h2>
          <div className="space-y-16">
            {campusAreas.map((area, index) => (
              <div key={index} className={`image-first-block ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="image-first-image"
                  />
                </div>
                <div className={`image-first-content ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <h3 className="section-title">{area.title}</h3>
                  <p className="text-body-lg text-skitm-gray">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Parallax */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Visit Our Campus
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Schedule a personal campus visit or take our virtual tour to experience SKITM
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Virtual Reality Tour</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Guided Campus Walks</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Department Visits</div>
            </div>
          </div>
        </ParallaxSection>
      </main>
    </div>
  );
};

export default CampusTour;
