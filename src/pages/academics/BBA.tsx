
import PageTemplate from '@/components/layout/PageTemplate';
import SEOHead from '@/components/SEO/SEOHead';
import { programSEO } from '@/lib/seo';

const BBA = () => {
  return (
    <>
      <SEOHead 
        title={programSEO.bba.title}
        description={programSEO.bba.description}
        keywords={programSEO.bba.keywords}
      />
      <PageTemplate
        title="Bachelor of Business Administration (BBA)"
        subtitle="Foundation program for future business professionals and entrepreneurs."
        breadcrumb="Academics"
      >
      <div className="glassmorphism rounded-xl p-8">
        <p className="text-skitm-gray leading-relaxed">
          The BBA program provides fundamental knowledge in business administration, management principles, and entrepreneurship skills essential for modern business environment.
        </p>
      </div>
      </PageTemplate>
    </>
  );
};

export default BBA;
