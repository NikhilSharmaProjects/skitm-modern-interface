
import PageTemplate from '@/components/layout/PageTemplate';

const ClubsSocieties = () => {
  return (
    <PageTemplate
      title="Clubs & Societies"
      subtitle="Join various clubs and societies to explore your interests and develop new skills."
      breadcrumb="Campus Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Student Clubs & Societies
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM offers various clubs and societies where students can pursue their interests, develop leadership skills, and contribute to the college community through various activities and initiatives.
        </p>
      </div>
    </PageTemplate>
  );
};

export default ClubsSocieties;
