
import PageTemplate from '@/components/layout/PageTemplate';

const Campus = () => {
  return (
    <PageTemplate
      title="Campus Life"
      subtitle="Experience vibrant campus life with modern facilities and endless opportunities."
      breadcrumb="Campus Life"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Our Beautiful Campus
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM's sprawling campus provides an ideal environment for learning, research, and personal development. With state-of-the-art facilities and green surroundings, our campus offers the perfect blend of academic excellence and comfortable living.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Campus;
