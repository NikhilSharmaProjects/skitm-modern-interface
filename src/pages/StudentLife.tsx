
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const StudentLife = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  
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
              Campus Experience
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Student Life
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Discover the vibrant student community, clubs, activities, and events at SKITM.
            </p>
          </div>
          
          {/* Student Life content would go here */}
          <div className="glassmorphism rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Student Life Content</h2>
            <p>This page is under development. Check back soon for information about campus activities and student life.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentLife;
