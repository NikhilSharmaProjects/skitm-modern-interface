import { Helmet } from 'react-helmet-async';
import { SEOConfig, defaultSEO } from '@/lib/seo';

interface SEOHeadProps extends Partial<SEOConfig> {
  structuredData?: Record<string, any>;
  breadcrumbData?: Record<string, any>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogImage = defaultSEO.ogImage,
  canonical,
  noindex = false,
  structuredData,
  breadcrumbData,
}) => {
  const fullTitle = title.includes('SKITM') ? title : `${title} | SKITM Indore`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const canonicalUrl = canonical || currentUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage?.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`} />
      <meta property="og:site_name" content="SKITM Indore" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage?.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`} />
      <meta name="twitter:site" content="@skitm_indore" />
      <meta name="twitter:creator" content="@skitm_indore" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="SKITM Indore" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#247BA0" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Indore" />
      <meta name="geo.position" content="22.7196;75.8577" />
      <meta name="ICBM" content="22.7196, 75.8577" />
      
      {/* Educational Institution Tags */}
      <meta name="classification" content="Education" />
      <meta name="category" content="Higher Education" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;