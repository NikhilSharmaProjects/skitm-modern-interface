
import PageTemplate from '@/components/layout/PageTemplate';
import { Link } from 'react-router-dom';

const Leadership = () => {
  return (
    <PageTemplate
      title="Leadership of SKITM"
      subtitle="Meet the visionary leaders who guide our institution towards excellence"
      breadcrumb="About Us"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/chairman" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <div className="text-center">
            <div className="w-20 h-20 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
              <span className="text-xl font-bold text-white">AC</span>
            </div>
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-2">About our Chairman</h3>
            <p className="text-skitm-gray">Learn about our visionary chairman and his leadership philosophy</p>
          </div>
        </Link>

        <Link to="/board-governors" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <div className="text-center">
            <div className="w-20 h-20 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
              <span className="text-xl font-bold text-white">BG</span>
            </div>
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-2">Board of Governors</h3>
            <p className="text-skitm-gray">Meet the governing body that oversees our strategic direction</p>
          </div>
        </Link>

        <Link to="/board-advisors" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <div className="text-center">
            <div className="w-20 h-20 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
              <span className="text-xl font-bold text-white">BA</span>
            </div>
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-2">Board of Advisors</h3>
            <p className="text-skitm-gray">Industry experts who guide our academic and strategic initiatives</p>
          </div>
        </Link>

        <Link to="/leadership-team" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <div className="text-center">
            <div className="w-20 h-20 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
              <span className="text-xl font-bold text-white">LT</span>
            </div>
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-2">Leadership Team</h3>
            <p className="text-skitm-gray">Our dedicated leadership team driving academic excellence</p>
          </div>
        </Link>
      </div>
    </PageTemplate>
  );
};

export default Leadership;
