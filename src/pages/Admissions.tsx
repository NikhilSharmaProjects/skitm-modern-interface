import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Admissions = () => {
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
              Join Our Community
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Admissions
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Begin your journey towards a successful future at SKITM.
            </p>
          </div>
          
          <div className="glassmorphism rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Admissions Process</h2>
            <p className="mb-6">This page is under development. Check back soon for detailed admissions information.</p>
            <Button variant="primary">
              Contact Admissions Office
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admissions;
