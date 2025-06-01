
import PageTemplate from '@/components/layout/PageTemplate';

const OracleAcademy = () => {
  return (
    <PageTemplate
      title="Oracle Academy"
      subtitle="Partnership with Oracle Academy for database and enterprise technology education."
      breadcrumb="Partnerships"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Oracle Academy Partnership
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          Through our partnership with Oracle Academy, students gain access to cutting-edge database technologies, enterprise software, and certification programs that enhance their career prospects in the IT industry.
        </p>
      </div>
    </PageTemplate>
  );
};

export default OracleAcademy;
