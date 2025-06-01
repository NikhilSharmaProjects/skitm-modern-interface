
import PageTemplate from '@/components/layout/PageTemplate';

const EntrepreneurshipCell = () => {
  return (
    <PageTemplate
      title="Entrepreneurship Cell"
      subtitle="Fostering innovation and entrepreneurial spirit among students."
      breadcrumb="Cells & Committees"
    >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          About Entrepreneurship Cell
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The Entrepreneurship Cell at SKITM encourages students to develop innovative ideas, start their own ventures, and become job creators rather than job seekers. We provide mentorship, resources, and support for budding entrepreneurs.
        </p>
      </div>
    </PageTemplate>
  );
};

export default EntrepreneurshipCell;
