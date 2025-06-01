
import PageTemplate from '@/components/layout/PageTemplate';

const Recruiters = () => {
  const recruiters = [
    "TCS", "Infosys", "Wipro", "Accenture", "IBM", "Microsoft", "Amazon", "Google",
    "Tech Mahindra", "HCL", "Cognizant", "Capgemini", "Oracle", "SAP", "Adobe", "Flipkart"
  ];

  return (
    <PageTemplate
      title="Our Recruiters"
      subtitle="Leading companies trust SKITM graduates for their talent and skills."
      breadcrumb="Placements"
    >
      <div className="glassmorphism rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Top Recruiting Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {recruiters.map((company, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
              <div className="h-12 bg-gray-100 rounded mb-2 flex items-center justify-center">
                <span className="text-xs text-gray-500">Logo</span>
              </div>
              <p className="text-sm font-medium text-skitm-navy">{company}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Placement Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-skitm-blue mb-2">95%</div>
            <p className="text-skitm-gray">Placement Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-skitm-blue mb-2">500+</div>
            <p className="text-skitm-gray">Companies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-skitm-blue mb-2">12 LPA</div>
            <p className="text-skitm-gray">Highest Package</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-skitm-blue mb-2">5.5 LPA</div>
            <p className="text-skitm-gray">Average Package</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Recruiters;
