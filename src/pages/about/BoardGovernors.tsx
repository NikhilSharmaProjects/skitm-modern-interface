
import PageTemplate from '@/components/layout/PageTemplate';

const BoardGovernors = () => {
  const governors = [
    { name: "Shri [Name]", position: "Chairman", qualification: "B.Tech, MBA" },
    { name: "Dr. [Name]", position: "Member", qualification: "Ph.D. Engineering" },
    { name: "Prof. [Name]", position: "Member", qualification: "M.Tech, Ph.D." },
    { name: "Shri [Name]", position: "Secretary", qualification: "B.Com, LLB" },
  ];

  return (
    <PageTemplate
      title="Board of Governors"
      subtitle="Distinguished members who guide our institution's strategic direction and governance."
      breadcrumb="About Us"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {governors.map((governor, index) => (
          <div key={index} className="glassmorphism rounded-xl p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-skitm-gray text-sm">Photo</span>
            </div>
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-2">
              {governor.name}
            </h3>
            <p className="text-skitm-blue font-semibold mb-2">{governor.position}</p>
            <p className="text-sm text-skitm-gray">{governor.qualification}</p>
          </div>
        ))}
      </div>
      
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Role and Responsibilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Governance</h3>
            <ul className="space-y-2 text-skitm-gray">
              <li>• Strategic planning and policy formulation</li>
              <li>• Academic quality assurance</li>
              <li>• Financial oversight and management</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Development</h3>
            <ul className="space-y-2 text-skitm-gray">
              <li>• Infrastructure development planning</li>
              <li>• Industry partnerships and collaborations</li>
              <li>• Student welfare and development</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default BoardGovernors;
