
import PageTemplate from '@/components/layout/PageTemplate';

const Sports = () => {
  return (
    <PageTemplate
      title="Sports & Recreation"
      subtitle="Comprehensive sports facilities and programs promoting physical fitness and team spirit."
      breadcrumb="Student Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Sports Facilities
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM offers extensive sports facilities including indoor and outdoor games, gymnasium, and various recreational activities to promote physical fitness and overall well-being.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Sports;
