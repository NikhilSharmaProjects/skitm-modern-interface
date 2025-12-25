
import PageTemplate from '@/components/layout/PageTemplate';

const Partners = () => {
  return (
    <PageTemplate
      title="Our Partners"
      subtitle="Strategic partnerships with leading organizations for enhanced learning opportunities."
      breadcrumb="Partnerships"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Industry & Academic Partners
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM has established strong partnerships with leading technology companies, academic institutions, and certification bodies to provide our students with enhanced learning opportunities and industry exposure.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Partners;
