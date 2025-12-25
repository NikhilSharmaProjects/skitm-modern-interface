
import PageTemplate from '@/components/layout/PageTemplate';

const CampusRecruitment = () => {
  return (
    <PageTemplate
      title="Campus Recruitment"
      subtitle="Information for companies interested in recruiting from SKITM."
      breadcrumb="Placements"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Recruit from SKITM
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          Partner with SKITM to recruit top talent from our diverse pool of engineering, management, and pharmacy graduates. Our students are industry-ready and equipped with the latest skills and knowledge.
        </p>
      </div>
    </PageTemplate>
  );
};

export default CampusRecruitment;
