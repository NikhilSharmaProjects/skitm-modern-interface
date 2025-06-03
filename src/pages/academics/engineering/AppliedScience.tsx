
import PageTemplate from '@/components/layout/PageTemplate';

const AppliedScience = () => {
  return (
    <PageTemplate
      title="Applied Science Department"
      subtitle="Foundation sciences and humanities education supporting all engineering disciplines."
      breadcrumb="Academics > Engineering"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Department Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Applied Science Department provides foundational courses in mathematics, physics, chemistry, and humanities that support all engineering and management programs at SKITM.
        </p>
      </div>
    </PageTemplate>
  );
};

export default AppliedScience;
