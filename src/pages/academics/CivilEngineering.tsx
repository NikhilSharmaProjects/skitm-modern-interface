
import PageTemplate from '@/components/layout/PageTemplate';

const CivilEngineering = () => {
  return (
    <PageTemplate
      title="Civil Engineering"
      subtitle="Shaping infrastructure and sustainable development for tomorrow's world."
      breadcrumb="Academics"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Department Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Civil Engineering department focuses on infrastructure development, structural design, environmental engineering, and sustainable construction practices. Our curriculum emphasizes both traditional and modern construction techniques.
        </p>
      </div>
    </PageTemplate>
  );
};

export default CivilEngineering;
