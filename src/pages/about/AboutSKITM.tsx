
import PageTemplate from '@/components/layout/PageTemplate';

const AboutSKITM = () => {
  return (
    <PageTemplate
      title="About SKITM"
      subtitle="Shivajirao Kadam Institute of Technology and Management - Excellence in Technical Education"
      breadcrumb="About Us"
    >
      <div className="space-y-8">
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Welcome to SKITM
          </h2>
          <p className="text-skitm-gray leading-relaxed mb-4">
            Shivajirao Kadam Institute of Technology and Management (SKITM) is a premier educational institution dedicated to providing quality technical education and fostering innovation. Established with a vision to create industry-ready professionals, SKITM has been at the forefront of technical education in Madhya Pradesh.
          </p>
          <p className="text-skitm-gray leading-relaxed mb-4">
            Our institute offers undergraduate and postgraduate programs in Engineering, Management, Pharmacy, and Professional Studies. With state-of-the-art infrastructure, experienced faculty, and strong industry partnerships, we ensure that our students receive comprehensive education that prepares them for successful careers.
          </p>
          <p className="text-skitm-gray leading-relaxed">
            At SKITM, we believe in nurturing not just academic excellence but also character development, leadership skills, and social responsibility. Our commitment to quality education and holistic development has made us one of the preferred choices for technical education in the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">15+</span>
            </div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-2">Years of Excellence</h3>
            <p className="text-skitm-gray text-sm">Committed to quality education since establishment</p>
          </div>

          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">5000+</span>
            </div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-2">Alumni Network</h3>
            <p className="text-skitm-gray text-sm">Successful graduates working globally</p>
          </div>

          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">100+</span>
            </div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-2">Industry Partners</h3>
            <p className="text-skitm-gray text-sm">Strong industry connections for placements</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AboutSKITM;
