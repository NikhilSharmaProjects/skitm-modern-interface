
import PageTemplate from '@/components/layout/PageTemplate';

const DPharma = () => {
  return (
    <PageTemplate
      title="Diploma in Pharmacy (D.Pharm)"
      subtitle="Professional diploma program for pharmaceutical technicians and healthcare support professionals."
      breadcrumb="Academics > Pharmacy"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Program Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The D.Pharm program provides essential pharmaceutical knowledge and practical skills for students aspiring to work as pharmaceutical technicians and healthcare support professionals.
        </p>
      </div>
    </PageTemplate>
  );
};

export default DPharma;
