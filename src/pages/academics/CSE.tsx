
import PageTemplate from '@/components/layout/PageTemplate';

const CSE = () => {
  return (
    <PageTemplate
      title="Computer Science & Engineering"
      subtitle="Pioneering innovation in software development, artificial intelligence, and cutting-edge computing technologies."
      breadcrumb="Academics"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              About the Department
            </h2>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              The Computer Science & Engineering department at SKITM is at the forefront of technological innovation, offering comprehensive programs that prepare students for the rapidly evolving IT industry.
            </p>
            <p className="text-skitm-gray leading-relaxed">
              Our curriculum combines theoretical foundations with practical applications, ensuring graduates are well-equipped to tackle real-world challenges in software development, data science, and emerging technologies.
            </p>
          </div>
          
          <div className="glassmorphism rounded-xl p-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Programs Offered
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-skitm-blue pl-4">
                <h3 className="text-lg font-semibold text-skitm-navy">B.Tech Computer Science & Engineering</h3>
                <p className="text-skitm-gray text-sm">4-year undergraduate program</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="glassmorphism rounded-xl p-6 mb-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Key Features
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">State-of-the-art computer labs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Industry-relevant curriculum</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Expert faculty with industry experience</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Strong placement record</span>
              </li>
            </ul>
          </div>
          
          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Specializations
            </h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Artificial Intelligence
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Machine Learning
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Data Science
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Cloud Computing
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                IoT
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CSE;
