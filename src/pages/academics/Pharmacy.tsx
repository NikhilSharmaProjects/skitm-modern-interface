
import PageTemplate from '@/components/layout/PageTemplate';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
  return (
    <PageTemplate
      title="Pharmacy Programs"
      subtitle="Comprehensive pharmaceutical education preparing students for careers in healthcare and drug development."
      breadcrumb="Academics"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/bpharm" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            B.Pharm
          </h3>
          <p className="text-skitm-gray">Bachelor of Pharmacy - 4 year undergraduate program</p>
        </Link>

        <Link to="/dpharm" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            D.Pharm
          </h3>
          <p className="text-skitm-gray">Diploma in Pharmacy - 2 year diploma program</p>
        </Link>
      </div>
    </PageTemplate>
  );
};

export default Pharmacy;
