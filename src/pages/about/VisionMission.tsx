
import PageTemplate from '@/components/layout/PageTemplate';

const VisionMission = () => {
  return (
    <PageTemplate
      title="Vision & Mission"
      subtitle="Our guiding principles and aspirations that drive excellence in technical education."
      breadcrumb="About Us"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 flex items-center">
            <span className="w-8 h-8 bg-skitm-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">V</span>
            Vision
          </h2>
          <p className="text-skitm-gray leading-relaxed">
            To be a premier technical institution recognized globally for excellence in engineering education, research, and innovation, producing competent professionals who contribute significantly to society and industry.
          </p>
        </div>
        
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 flex items-center">
            <span className="w-8 h-8 bg-skitm-orange rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">M</span>
            Mission
          </h2>
          <ul className="text-skitm-gray space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
              To provide quality technical education with emphasis on practical learning and industry exposure.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
              To foster research, innovation, and entrepreneurship among students and faculty.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
              To develop ethical, responsible, and globally competent engineers and managers.
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
};

export default VisionMission;
