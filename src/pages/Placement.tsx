
import PageTemplate from '@/components/layout/PageTemplate';

const Placement = () => {
  return (
    <PageTemplate
      title="Placement"
      subtitle="Exceptional placement opportunities with leading companies across industries"
      breadcrumb=""
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-skitm-blue mb-2">95%</div>
            <p className="text-skitm-gray">Placement Rate</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-skitm-blue mb-2">12 LPA</div>
            <p className="text-skitm-gray">Highest Package</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-skitm-blue mb-2">150+</div>
            <p className="text-skitm-gray">Recruiting Companies</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-skitm-blue mb-2">5000+</div>
            <p className="text-skitm-gray">Alumni Placed</p>
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Our Recruiting Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'Accenture', 'IBM', 'Cognizant', 'HCL', 'Capgemini', 'Mindtree', 'L&T', 'Oracle'].map((company) => (
              <div key={company} className="bg-white rounded-lg p-4 text-center border">
                <span className="text-sm font-medium text-gray-700">{company}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
              Placement Process
            </h3>
            <ul className="space-y-3 text-skitm-gray">
              <li>• Pre-placement training and preparation</li>
              <li>• Resume building and interview skills</li>
              <li>• Company presentations and interactions</li>
              <li>• Written tests and technical rounds</li>
              <li>• Final interviews and selection</li>
              <li>• Offer letter and joining formalities</li>
            </ul>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
              Career Support Services
            </h3>
            <ul className="space-y-3 text-skitm-gray">
              <li>• Dedicated Career Resource Department</li>
              <li>• Industry mentorship programs</li>
              <li>• Soft skills development workshops</li>
              <li>• Mock interviews and group discussions</li>
              <li>• Internship coordination</li>
              <li>• Alumni network support</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Placement;
