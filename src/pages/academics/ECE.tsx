
import PageTemplate from '@/components/layout/PageTemplate';

const ECE = () => {
  return (
    <PageTemplate
      title="Electronics & Communication Engineering"
      subtitle="Advancing innovation in electronics, telecommunications, and communication systems."
      breadcrumb="Academics"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Department Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Electronics & Communication Engineering department focuses on developing expertise in electronics design, signal processing, wireless communication, and embedded systems. Our students gain comprehensive knowledge in both analog and digital electronics.
        </p>
      </div>
    </PageTemplate>
  );
};

export default ECE;
