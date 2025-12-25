
import PageTemplate from '@/components/layout/PageTemplate';

const RedHatAcademy = () => {
  return (
    <PageTemplate
      title="Red Hat Academy"
      subtitle="Enterprise Linux and open source technology education."
      breadcrumb="Partnerships"
    >
      <div className="glassmorphism rounded-xl p-8">
        <p className="text-skitm-gray leading-relaxed">
          Red Hat Academy partnership provides students with enterprise Linux training and open source technology expertise.
        </p>
      </div>
    </PageTemplate>
  );
};

export default RedHatAcademy;
