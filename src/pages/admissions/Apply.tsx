
import PageTemplate from '@/components/layout/PageTemplate';

const Apply = () => {
  return (
    <PageTemplate
      title="Apply to SKITM"
      subtitle="Start your journey towards excellence - Apply now for admission to SKITM programs."
      breadcrumb="Admissions"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Application Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-skitm-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
            <h3 className="font-semibold text-skitm-navy mb-2">Fill Application</h3>
            <p className="text-skitm-gray text-sm">Complete the online application form with required details</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-skitm-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
            <h3 className="font-semibold text-skitm-navy mb-2">Submit Documents</h3>
            <p className="text-skitm-gray text-sm">Upload all required documents and certificates</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-skitm-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
            <h3 className="font-semibold text-skitm-navy mb-2">Confirmation</h3>
            <p className="text-skitm-gray text-sm">Receive confirmation and further instructions</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Apply;
