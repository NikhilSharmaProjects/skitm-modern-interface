
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
            Our Society
          </h2>
          <p className="text-skitm-gray mb-4">
            The Shivajirao Kadam Institute of Technology and Management is established under the aegis of a dedicated society committed to providing quality technical education.
          </p>
          <p className="text-skitm-gray mb-4">
            Our society comprises experienced educationists, industry experts, and philanthropists who work together to ensure the institute maintains the highest standards of academic excellence.
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
