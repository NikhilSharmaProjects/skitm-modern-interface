
import PageTemplate from '@/components/layout/PageTemplate';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
  return (
    <PageTemplate
      title="Pharmacy Programs"
      subtitle="Comprehensive pharmaceutical education preparing students for careers in healthcare and drug development."
      breadcrumb="Academics"
    >
      <div className="glassmorphism rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Department Overview
        </h2>
        <p className="text-skitm-gray mb-4 leading-relaxed">
          The Department of Pharmacy at SKITM is dedicated to providing quality pharmaceutical education and research opportunities. Our programs are designed to meet the growing demands of the healthcare industry and pharmaceutical sector.
        </p>
        <p className="text-skitm-gray leading-relaxed">
          With state-of-the-art laboratories, experienced faculty, and strong industry connections, we prepare students for diverse career opportunities in pharmacy practice, pharmaceutical industry, research, and healthcare services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/bpharm" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            B.Pharm
          </h3>
          <p className="text-skitm-gray mb-3">Bachelor of Pharmacy - 4 year undergraduate program</p>
          <div className="text-sm text-skitm-gray">
            <p><strong>Duration:</strong> 8 Semesters</p>
            <p><strong>Intake:</strong> 100 Students</p>
          </div>
        </Link>

        <Link to="/mpharm" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            M.Pharm
          </h3>
          <p className="text-skitm-gray mb-3">Master of Pharmacy - 2 year postgraduate program</p>
          <div className="text-sm text-skitm-gray">
            <p><strong>Duration:</strong> 4 Semesters</p>
            <p><strong>Intake:</strong> 18 Students</p>
          </div>
        </Link>

        <Link to="/dpharm" className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-shadow group">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-3 group-hover:text-skitm-blue">
            D.Pharm
          </h3>
          <p className="text-skitm-gray mb-3">Diploma in Pharmacy - 2 year diploma program</p>
          <div className="text-sm text-skitm-gray">
            <p><strong>Duration:</strong> 4 Semesters</p>
            <p><strong>Intake:</strong> 60 Students</p>
          </div>
        </Link>
      </div>

      <div className="glassmorphism rounded-xl p-8 mt-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Department Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Pharmaceutical Chemistry Lab</h4>
            <p className="text-sm text-skitm-gray">Modern equipment for drug analysis and synthesis</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Pharmacology Lab</h4>
            <p className="text-sm text-skitm-gray">Facilities for drug testing and research</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Pharmaceutics Lab</h4>
            <p className="text-sm text-skitm-gray">Drug formulation and dosage form development</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Microbiology Lab</h4>
            <p className="text-sm text-skitm-gray">Sterile techniques and microbial testing</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Hospital Pharmacy</h4>
            <p className="text-sm text-skitm-gray">Clinical pharmacy practice and patient care</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Research Center</h4>
            <p className="text-sm text-skitm-gray">Advanced research in pharmaceutical sciences</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Pharmacy;
