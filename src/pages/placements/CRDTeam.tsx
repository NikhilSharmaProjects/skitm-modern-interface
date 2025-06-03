
import PageTemplate from '@/components/layout/PageTemplate';

const CRDTeam = () => {
  return (
    <PageTemplate
      title="Corporate Relations & Development Team"
      subtitle="Meet our dedicated team working to bridge the gap between academia and industry."
      breadcrumb="Placements"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Our CRD Team
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Corporate Relations & Development team at SKITM works tirelessly to build strong partnerships with industry leaders and ensure our students get the best placement opportunities.
        </p>
      </div>
    </PageTemplate>
  );
};

export default CRDTeam;
