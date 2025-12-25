
import PageTemplate from '@/components/layout/PageTemplate';

const WomenDevelopmentCell = () => {
  return (
    <PageTemplate
      title="Women Development Cell"
      subtitle="Empowering women students and promoting gender equality on campus."
      breadcrumb="Cells & Committees"
    >
      <div className="glassmorphism rounded-xl p-8">
        <p className="text-skitm-gray leading-relaxed">
          The Women Development Cell works towards creating a safe and empowering environment for women students, organizing programs for their holistic development and ensuring gender equality.
        </p>
      </div>
    </PageTemplate>
  );
};

export default WomenDevelopmentCell;
