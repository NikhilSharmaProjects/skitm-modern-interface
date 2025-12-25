
import PageTemplate from '@/components/layout/PageTemplate';

const Sports = () => {
  return (
    <PageTemplate
      title="Sports & Recreation"
      subtitle="Excellence in sports and physical fitness for holistic development."
      breadcrumb="Campus Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Sports Facilities
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM promotes sports and physical fitness as an integral part of student development. Our sports facilities include basketball courts, football grounds, volleyball courts, and indoor games facilities.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Sports;
