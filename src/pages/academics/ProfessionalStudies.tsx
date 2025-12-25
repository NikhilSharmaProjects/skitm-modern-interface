
import PageTemplate from '@/components/layout/PageTemplate';
import { Link } from 'react-router-dom';

const ProfessionalStudies = () => {
  return (
    <PageTemplate
      title="Professional Studies"
      subtitle="Comprehensive commerce and business education programs."
      breadcrumb="Academics"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/bba" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            BBA
          </h3>
          <p className="text-skitm-gray">Bachelor of Business Administration</p>
        </Link>

        <Link to="/bcom-ca" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            B.Com Computer Applications
          </h3>
          <p className="text-skitm-gray">Commerce with Computer Applications</p>
        </Link>

        <Link to="/bcom-general" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            B.Com General
          </h3>
          <p className="text-skitm-gray">General Commerce Program</p>
        </Link>

        <Link to="/bcom-honours" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            B.Com Honours
          </h3>
          <p className="text-skitm-gray">Honours in Commerce</p>
        </Link>

        <Link to="/bcom-taxation" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            B.Com Taxation
          </h3>
          <p className="text-skitm-gray">Commerce with Taxation</p>
        </Link>
      </div>
    </PageTemplate>
  );
};

export default ProfessionalStudies;
