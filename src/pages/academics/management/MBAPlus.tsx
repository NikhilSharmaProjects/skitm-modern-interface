
import PageTemplate from '@/components/layout/PageTemplate';

const MBAPlus = () => {
  return (
    <PageTemplate
      title="MBA Plus"
      subtitle="Enhanced MBA program with additional industry certifications and specializations."
      breadcrumb="Academics > Management"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Program Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          MBA Plus offers enhanced learning with additional industry certifications, international exposure, and specialized training modules to give students a competitive edge.
        </p>
      </div>
    </PageTemplate>
  );
};

export default MBAPlus;
