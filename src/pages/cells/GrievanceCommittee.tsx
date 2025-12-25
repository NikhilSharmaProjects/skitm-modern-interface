
import PageTemplate from '@/components/layout/PageTemplate';

const GrievanceCommittee = () => {
  return (
    <PageTemplate
      title="Grievance Redressal Committee"
      subtitle="Addressing student concerns and ensuring fair resolution of issues."
      breadcrumb="Cells & Committees"
    >
      <div className="glassmorphism rounded-xl p-8">
        <p className="text-skitm-gray leading-relaxed">
          The Grievance Redressal Committee provides a platform for students to voice their concerns and ensures prompt and fair resolution of academic and administrative issues.
        </p>
      </div>
    </PageTemplate>
  );
};

export default GrievanceCommittee;
