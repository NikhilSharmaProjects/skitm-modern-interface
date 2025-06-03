
import PageTemplate from '@/components/layout/PageTemplate';

const MBA = () => {
  return (
    <PageTemplate
      title="Master of Business Administration (MBA)"
      subtitle="Developing future business leaders with strategic thinking and management excellence."
      breadcrumb="Academics"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Program Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed mb-4">
          Our MBA program is designed to develop competent managers and leaders who can excel in the dynamic business environment. The curriculum combines theoretical knowledge with practical applications through case studies, internships, and industry projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Specializations</h3>
            <ul className="space-y-2 text-skitm-gray">
              <li>• Marketing Management</li>
              <li>• Human Resource Management</li>
              <li>• Finance Management</li>
              <li>• Operations Management</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Duration</h3>
            <p className="text-skitm-gray">2 Years (4 Semesters)</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default MBA;
