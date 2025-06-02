
import PageTemplate from '@/components/layout/PageTemplate';
import { Link } from 'react-router-dom';

const Academics = () => {
  return (
    <PageTemplate
      title="Academics"
      subtitle="Comprehensive academic programs across multiple disciplines"
      breadcrumb=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/engineering" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            Engineering
          </h3>
          <p className="text-skitm-gray">Computer Science, Electronics, Civil, Mechanical Engineering</p>
        </Link>

        <Link to="/management" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            Management
          </h3>
          <p className="text-skitm-gray">MBA, Integrated MBA, MBA Plus programs</p>
        </Link>

        <Link to="/pharmacy" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            Pharmacy
          </h3>
          <p className="text-skitm-gray">B.Pharm and D.Pharm programs</p>
        </Link>

        <Link to="/professional-studies" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            Professional Studies
          </h3>
          <p className="text-skitm-gray">BBA, B.Com programs</p>
        </Link>

        <Link to="/law" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            Transnational School of Law
          </h3>
          <p className="text-skitm-gray">Legal education programs</p>
        </Link>
      </div>
    </PageTemplate>
  );
};

export default Academics;
