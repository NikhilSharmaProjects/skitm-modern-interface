
import PageTemplate from '@/components/layout/PageTemplate';

const CSE = () => {
  return (
    <PageTemplate
      title="Computer Science & Engineering"
      subtitle="Pioneering innovation in software development, artificial intelligence, and cutting-edge computing technologies."
      breadcrumb="Academics > Engineering"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Department Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Computer Science & Engineering department at SKITM is at the forefront of technological innovation, offering comprehensive programs that prepare students for the rapidly evolving IT industry.
        </p>
      </div>
    </PageTemplate>
  );
};

export default CSE;
