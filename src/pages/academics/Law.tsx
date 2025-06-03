
import PageTemplate from '@/components/layout/PageTemplate';

const Law = () => {
  return (
    <PageTemplate
      title="Transnational School of Law"
      subtitle="Comprehensive legal education preparing students for careers in law and judiciary."
      breadcrumb="Academics"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Law Programs
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Transnational School of Law offers comprehensive legal education with focus on contemporary legal practices and international law.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Law;
