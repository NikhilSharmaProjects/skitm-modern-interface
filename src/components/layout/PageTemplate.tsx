
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SEOHead from '@/components/SEO/SEOHead';
import SocialShare from '@/components/SEO/SocialShare';
import { structuredData } from '@/lib/seo';

interface PageTemplateProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  structuredDataType?: 'course' | 'organization' | 'breadcrumb';
  structuredDataProps?: any;
  showSocialShare?: boolean;
}

const PageTemplate = ({ 
  children, 
  title, 
  subtitle, 
  breadcrumb,
  seoTitle,
  seoDescription,
  seoKeywords,
  structuredDataType,
  structuredDataProps,
  showSocialShare = true
}: PageTemplateProps) => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

  // Generate structured data based on type
  const getStructuredData = () => {
    switch (structuredDataType) {
      case 'course':
        return structuredData.course(
          structuredDataProps?.program || 'general',
          structuredDataProps?.courseName || title,
          structuredDataProps?.duration || '4 Years',
          structuredDataProps?.fee
        );
      case 'organization':
        return structuredData.organization;
      case 'breadcrumb':
        return structuredData.breadcrumbList(structuredDataProps?.breadcrumbs || []);
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={seoTitle || title}
        description={seoDescription || subtitle || `Learn more about ${title} at SKITM Indore`}
        keywords={seoKeywords}
        structuredData={getStructuredData()}
        breadcrumbData={structuredDataType === 'breadcrumb' ? getStructuredData() : null}
      />
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div
            ref={headingRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 ${
              headingVisible ? "animate-fade-in" : "opacity-1"
            }`}
          >
            {breadcrumb && (
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                {breadcrumb}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-skitm-gray max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
            
            {showSocialShare && (
              <div className="mt-6">
                <SocialShare 
                  title={title}
                  description={subtitle || `Learn more about ${title} at SKITM Indore`}
                />
              </div>
            )}
          </div>

          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PageTemplate;
