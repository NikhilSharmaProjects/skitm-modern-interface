
import PageTemplate from '@/components/layout/PageTemplate';

const CampusTour = () => {
  return (
    <PageTemplate
      title="Campus Tour"
      subtitle="Take a virtual tour of our beautiful campus and state-of-the-art facilities"
      breadcrumb=""
    >
      <div className="space-y-8">
        <div className="glassmorphism rounded-xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Virtual Campus Tour
          </h2>
          <p className="text-skitm-gray leading-relaxed mb-6">
            Experience our campus from the comfort of your home. Take a 360-degree virtual tour to explore our facilities, laboratories, hostels, and more.
          </p>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Virtual Tour Widget Coming Soon</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glassmorphism rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Academic Blocks</h3>
            <p className="text-skitm-gray text-sm">Modern classrooms and lecture halls with latest technology</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Laboratories</h3>
            <p className="text-skitm-gray text-sm">State-of-the-art labs for practical learning and research</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Campus Facilities</h3>
            <p className="text-skitm-gray text-sm">Sports facilities, library, cafeteria, and recreational areas</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CampusTour;
