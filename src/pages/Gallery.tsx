
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import { Camera, Image, Video, Award } from 'lucide-react';

const Gallery = () => {
  const galleryStats = [
    { icon: <Camera className="h-8 w-8 text-white" />, number: "1000+", label: "Photos" },
    { icon: <Video className="h-8 w-8 text-white" />, number: "50+", label: "Videos" },
    { icon: <Image className="h-8 w-8 text-white" />, number: "20+", label: "Events" },
    { icon: <Award className="h-8 w-8 text-white" />, number: "5+", label: "Years Documented" },
  ];

  const galleryCategories = [
    {
      title: "Campus Life",
      description: "Daily life, activities, and vibrant moments captured across our beautiful campus",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Academic Events",
      description: "Conferences, seminars, workshops, and academic celebrations throughout the year",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sports & Recreation",
      description: "Athletic achievements, sports events, and recreational activities of our students",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.6}
        className="min-h-[70vh]"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Visual Journey
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Capturing memories and moments that define the SKITM experience
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
            {galleryStats.map((stat, index) => (
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
        {/* Gallery Categories Section */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Our Memories</h2>
          <div className="space-y-16">
            {galleryCategories.map((category, index) => (
              <div key={index} className={`image-first-block ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="image-first-image"
                  />
                </div>
                <div className={`image-first-content ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <h3 className="section-title">{category.title}</h3>
                  <p className="text-body-lg text-skitm-gray">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Moments & Achievements Parallax */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Moments & Achievements
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Graduation Ceremonies</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Cultural Festivals</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Research Presentations</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Industry Visits</div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
