
import PageTemplate from '@/components/layout/PageTemplate';

const MBA = () => {
  return (
    <PageTemplate
      title="Master of Business Administration (MBA)"
      subtitle="Comprehensive management education for future business leaders."
      breadcrumb="Academics > Management"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Program Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The MBA program at SKITM provides comprehensive business education with focus on leadership, strategy, and innovation. The curriculum is designed to prepare students for senior management roles in various industries.
        </p>
      </div>
    </PageTemplate>
  );
};

export default MBA;
