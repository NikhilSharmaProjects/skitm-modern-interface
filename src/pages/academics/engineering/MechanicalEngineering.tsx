
import PageTemplate from '@/components/layout/PageTemplate';

const MechanicalEngineering = () => {
  return (
    <PageTemplate
      title="Mechanical Engineering"
      subtitle="Engineering excellence in design, manufacturing, and automation technologies."
      breadcrumb="Academics > Engineering"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Department Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Mechanical Engineering department offers comprehensive education in design, manufacturing, thermal sciences, and automation technologies.
        </p>
      </div>
    </PageTemplate>
  );
};

export default MechanicalEngineering;
