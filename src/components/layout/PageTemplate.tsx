
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PageTemplateProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageTemplate = ({ children, title, subtitle, breadcrumb }: PageTemplateProps) => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
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
          </div>

          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PageTemplate;
