
import PageTemplate from '@/components/layout/PageTemplate';

const Career = () => {
  return (
    <PageTemplate
      title="Career Services"
      subtitle="Comprehensive career guidance and support for our students."
      breadcrumb="Placements"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Career Development Services
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          Our career services team provides comprehensive support to students including resume building, interview preparation, career counseling, and job search assistance.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Career;
