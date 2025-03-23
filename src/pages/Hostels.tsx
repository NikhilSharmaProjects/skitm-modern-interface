
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';

const Hostels = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  
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
              Residential Facilities
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Hostels
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Learn about on-campus housing options for students at SKITM.
            </p>
          </div>
          
          {/* Hostels content would go here */}
          <div className="glassmorphism rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Hostels Content</h2>
            <p>This page is under development. Check back soon for information about campus hostels.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hostels;
