
import PageTemplate from '@/components/layout/PageTemplate';

const PlacementReports = () => {
  return (
    <PageTemplate
      title="Placement Reports"
      subtitle="Detailed placement statistics and success stories of our students."
      breadcrumb="Placements"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Annual Placement Reports
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          Our comprehensive placement reports showcase the success of our students across various industries and domains. View detailed statistics, company-wise placement data, and student success stories.
        </p>
      </div>
    </PageTemplate>
  );
};

export default PlacementReports;
