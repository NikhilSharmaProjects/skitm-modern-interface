
import PageTemplate from '@/components/layout/PageTemplate';

const Campus = () => {
  return (
    <PageTemplate
      title="Campus Life"
      subtitle="Vibrant campus environment fostering academic excellence and personal growth."
      breadcrumb="Student Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Campus Environment
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM campus provides a vibrant environment with modern infrastructure, green spaces, and facilities that support both academic and extracurricular activities.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Campus;
