
import PageTemplate from '@/components/layout/PageTemplate';

const BBA = () => {
  return (
    <PageTemplate
      title="Bachelor of Business Administration (BBA)"
      subtitle="Foundation program for future business professionals and entrepreneurs."
      breadcrumb="Academics > Professional Studies"
    >
      <div className="glassmorphism rounded-xl p-8">
        <p className="text-skitm-gray leading-relaxed">
          The BBA program provides fundamental knowledge in business administration, management principles, and entrepreneurship skills essential for modern business environment.
        </p>
      </div>
    </PageTemplate>
  );
};

export default BBA;
