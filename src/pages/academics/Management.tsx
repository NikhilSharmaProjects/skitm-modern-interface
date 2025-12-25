
import PageTemplate from '@/components/layout/PageTemplate';
import { Link } from 'react-router-dom';

const Management = () => {
  return (
    <PageTemplate
      title="Management Programs"
      subtitle="Comprehensive management education preparing future business leaders and entrepreneurs."
      breadcrumb="Academics"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/mba" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            MBA
          </h3>
          <p className="text-skitm-gray">Master of Business Administration program</p>
        </Link>

        <Link to="/integrated-mba" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            Integrated MBA
          </h3>
          <p className="text-skitm-gray">5-year integrated management program</p>
        </Link>

        <Link to="/mba-plus" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            MBA Plus
          </h3>
          <p className="text-skitm-gray">Enhanced MBA program with additional certifications</p>
        </Link>
      </div>
    </PageTemplate>
  );
};

export default Management;
