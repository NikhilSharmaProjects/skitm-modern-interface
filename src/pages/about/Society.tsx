
import PageTemplate from '@/components/layout/PageTemplate';

const Society = () => {
  return (
    <PageTemplate
      title="Society"
      subtitle="Learn about the society that governs and supports SKITM's mission and vision."
      breadcrumb="About Us"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            About the Society
          </h2>
          <p className="text-skitm-gray mb-4">
            Transnational Knowledge Society was founded in the year 2008. The aim of the society is to elevate the region by providing high-quality education at reasonable costs. Till now, society has catered to over 8000 students, transforming their lives and the lives of their families. Transnational Knowledge Society has been instrumental in improving the educational standards in the city by setting an example of good governance and a student-centric approach. In the past, the society has controlled the Transnational Knowledge Society Group of Institutions and later on the Acropolis Technical Campus. Currently, there are 4 Colleges under its aegis, catering to over 1700 students from across the State. Transnational Knowledge Society through SKITM aims to impart highly impactful education, which helps students build successful careers. High focus on the moral compass, societal transformation, and the good of the industry are the messages which resonate in its teachings.
          </p>
        </div>
        
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Mission
          </h2>
          <p className="text-skitm-gray mb-4">
            To foster an environment of learning and innovation that prepares students for successful careers in technology and management.
          </p>
          <p className="text-skitm-gray">
            We are committed to building character, developing skills, and nurturing talent to contribute to society and the nation.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Society;
