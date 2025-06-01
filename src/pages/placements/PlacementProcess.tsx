
import PageTemplate from '@/components/layout/PageTemplate';

const PlacementProcess = () => {
  return (
    <PageTemplate
      title="Placement Process"
      subtitle="Our comprehensive placement process ensures every student gets the best career opportunities."
      breadcrumb="Placements"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Our Placement Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-skitm-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
            <h3 className="font-semibold text-skitm-navy mb-2">Preparation</h3>
            <p className="text-skitm-gray text-sm">Industry readiness training and skill development</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-skitm-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
            <h3 className="font-semibold text-skitm-navy mb-2">Registration</h3>
            <p className="text-skitm-gray text-sm">Student registration for placement activities</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-skitm-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
            <h3 className="font-semibold text-skitm-navy mb-2">Selection</h3>
            <p className="text-skitm-gray text-sm">Company visits and selection processes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-skitm-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
            <h3 className="font-semibold text-skitm-navy mb-2">Placement</h3>
            <p className="text-skitm-gray text-sm">Final offer and onboarding support</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PlacementProcess;
