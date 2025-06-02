
import PageTemplate from '@/components/layout/PageTemplate';

const IntegratedMBA = () => {
  return (
    <PageTemplate
      title="Integrated MBA"
      subtitle="5-year integrated program combining undergraduate and postgraduate management education."
      breadcrumb="Academics > Management"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Program Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Integrated MBA program offers a seamless transition from school to management education, providing students with comprehensive business knowledge over five years.
        </p>
      </div>
    </PageTemplate>
  );
};

export default IntegratedMBA;
