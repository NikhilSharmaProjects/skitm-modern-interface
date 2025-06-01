
import PageTemplate from '@/components/layout/PageTemplate';

const BoardAdvisors = () => {
  const advisors = [
    { 
      name: "Dr. [Name]", 
      position: "Industry Expert", 
      company: "Leading IT Company",
      expertise: "Technology & Innovation" 
    },
    { 
      name: "Prof. [Name]", 
      position: "Academic Expert", 
      company: "Premier Institute",
      expertise: "Engineering Education" 
    },
    { 
      name: "Shri [Name]", 
      position: "Industry Leader", 
      company: "Manufacturing Sector",
      expertise: "Operations & Management" 
    },
    { 
      name: "Dr. [Name]", 
      position: "Research Expert", 
      company: "Research Institute",
      expertise: "R&D and Innovation" 
    },
  ];

  return (
    <PageTemplate
      title="Board of Advisors"
      subtitle="Distinguished experts providing strategic guidance and industry insights."
      breadcrumb="About Us"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {advisors.map((advisor, index) => (
          <div key={index} className="glassmorphism rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-skitm-gray text-xs">Photo</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-display font-bold text-skitm-navy mb-1">
                  {advisor.name}
                </h3>
                <p className="text-skitm-blue font-semibold mb-1">{advisor.position}</p>
                <p className="text-sm text-skitm-gray mb-2">{advisor.company}</p>
                <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full">
                  {advisor.expertise}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Advisory Role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Strategic Guidance</h3>
            <p className="text-skitm-gray text-sm">
              Providing insights on institutional strategy, academic programs, and future directions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Industry Connect</h3>
            <p className="text-skitm-gray text-sm">
              Facilitating partnerships, internships, and placement opportunities with leading organizations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Quality Assurance</h3>
            <p className="text-skitm-gray text-sm">
              Ensuring academic programs meet industry standards and global best practices.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default BoardAdvisors;
