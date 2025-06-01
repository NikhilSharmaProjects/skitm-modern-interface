
import PageTemplate from '@/components/layout/PageTemplate';

const LeadershipTeam = () => {
  const leaders = [
    { name: "Dr. [Name]", position: "Director", department: "Administration" },
    { name: "Dr. [Name]", position: "Dean Academics", department: "Academic Affairs" },
    { name: "Dr. [Name]", position: "Dean Student Affairs", department: "Student Welfare" },
    { name: "Prof. [Name]", position: "Registrar", department: "Administration" },
    { name: "Dr. [Name]", position: "Head - CSE", department: "Computer Science" },
    { name: "Dr. [Name]", position: "Head - ECE", department: "Electronics" },
    { name: "Dr. [Name]", position: "Head - ME", department: "Mechanical" },
    { name: "Dr. [Name]", position: "Head - CE", department: "Civil" },
  ];

  return (
    <PageTemplate
      title="Leadership Team"
      subtitle="Dedicated leaders driving academic excellence and institutional growth."
      breadcrumb="About Us"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {leaders.map((leader, index) => (
          <div key={index} className="glassmorphism rounded-xl p-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-skitm-gray text-xs">Photo</span>
            </div>
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-2 text-center">
              {leader.name}
            </h3>
            <p className="text-skitm-blue font-semibold mb-1 text-center text-sm">
              {leader.position}
            </p>
            <p className="text-xs text-skitm-gray text-center">{leader.department}</p>
          </div>
        ))}
      </div>
      
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Leadership Philosophy
        </h2>
        <p className="text-skitm-gray leading-relaxed mb-4">
          Our leadership team is committed to fostering an environment of academic excellence, innovation, and holistic development. With diverse expertise and extensive experience in education and industry, our leaders guide the institution towards achieving its vision of becoming a premier technical institute.
        </p>
        <p className="text-skitm-gray leading-relaxed">
          Together, they ensure that SKITM maintains the highest standards of education while adapting to the evolving needs of industry and society.
        </p>
      </div>
    </PageTemplate>
  );
};

export default LeadershipTeam;
