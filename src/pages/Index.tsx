
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import AboutSection from '@/components/home/AboutSection';
import NewsEventsSection from '@/components/home/NewsEventsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import PlacementSection from '@/components/home/PlacementSection';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutSection />
        <FeaturedCourses />
        <NewsEventsSection />
        <GalleryPreview />
        <PlacementSection />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
