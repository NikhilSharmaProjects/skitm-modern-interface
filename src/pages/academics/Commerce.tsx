
import PageTemplate from '@/components/layout/PageTemplate';

const Commerce = () => {
  return (
    <PageTemplate
      title="Commerce Programs"
      subtitle="Comprehensive commerce education preparing students for careers in finance, accounting, and business."
      breadcrumb="Academics"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Programs Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-2">B.Com (General)</h3>
            <p className="text-skitm-gray text-sm">General commerce education</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-2">B.Com (Honours)</h3>
            <p className="text-skitm-gray text-sm">Specialized commerce program</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-2">B.Com (Computer Applications)</h3>
            <p className="text-skitm-gray text-sm">Commerce with IT focus</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-2">B.Com (Taxation)</h3>
            <p className="text-skitm-gray text-sm">Taxation and finance specialization</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Commerce;
