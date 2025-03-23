import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto glassmorphism rounded-xl p-8 text-center">
            <div className="text-8xl font-display font-bold text-skitm-blue mb-6">404</div>
            <h1 className="text-3xl font-display font-bold text-skitm-navy mb-4">Page Not Found</h1>
            <p className="text-skitm-gray mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button variant="primary" size="lg">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
