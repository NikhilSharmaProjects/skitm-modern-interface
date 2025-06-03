
import PageTemplate from '@/components/layout/PageTemplate';

const DownloadBrochure = () => {
  return (
    <PageTemplate
      title="Download Brochure"
      subtitle="Get detailed information about our programs, facilities, and admission process."
      breadcrumb="Admissions"
    >
      <div className="glassmorphism rounded-xl p-8 text-center">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          SKITM Brochure
        </h2>
        <p className="text-skitm-gray mb-6">
          Download our comprehensive brochure to learn more about SKITM's programs, facilities, faculty, and admission procedures.
        </p>
        <button className="bg-skitm-blue text-white px-6 py-3 rounded-lg hover:bg-skitm-blue/90 transition-colors">
          Download Brochure (PDF)
        </button>
      </div>
    </PageTemplate>
  );
};

export default DownloadBrochure;
