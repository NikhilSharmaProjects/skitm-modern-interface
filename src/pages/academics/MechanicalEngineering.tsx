
import PageTemplate from '@/components/layout/PageTemplate';

const MechanicalEngineering = () => {
  return (
    <PageTemplate
      title="Mechanical Engineering"
      subtitle="Building the future through mechanical design, manufacturing, and automation technologies."
      breadcrumb="Academics"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Department Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Mechanical Engineering department provides comprehensive education in design, manufacturing, thermal sciences, and automation. Our state-of-the-art laboratories and industry partnerships ensure practical learning experience.
        </p>
      </div>
    </PageTemplate>
  );
};

export default MechanicalEngineering;
