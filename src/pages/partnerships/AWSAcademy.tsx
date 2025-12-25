
import PageTemplate from '@/components/layout/PageTemplate';

const AWSAcademy = () => {
  return (
    <PageTemplate
      title="AWS Academy"
      subtitle="Cloud computing education through Amazon Web Services Academy partnership."
      breadcrumb="Partnerships"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          AWS Academy Program
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          Our AWS Academy partnership provides students with comprehensive cloud computing education, hands-on experience with AWS services, and preparation for AWS certification exams.
        </p>
      </div>
    </PageTemplate>
  );
};

export default AWSAcademy;
