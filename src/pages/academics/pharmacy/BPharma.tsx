
import PageTemplate from '@/components/layout/PageTemplate';

const BPharma = () => {
  return (
    <PageTemplate
      title="Bachelor of Pharmacy (B.Pharm)"
      subtitle="Comprehensive pharmaceutical education preparing students for careers in healthcare and drug development."
      breadcrumb="Academics > Pharmacy"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Program Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The B.Pharm program offers in-depth knowledge of pharmaceutical sciences, drug development, and healthcare systems, preparing students for diverse career opportunities in the pharmaceutical industry.
        </p>
      </div>
    </PageTemplate>
  );
};

export default BPharma;
