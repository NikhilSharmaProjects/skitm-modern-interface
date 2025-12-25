
import PageTemplate from '@/components/layout/PageTemplate';

const leaders = [
  { name: "Dr. Shivajirao Kadam", position: "Chairman, BOG and Chancellor", department: "Bharti Vidyapeeth University, Pune" },
  { name: "Dr. Rahul Kadam", position: "Chairman", department: "Transnational Knowledge Society and MD, Udagiri Sugar Limited" },
  { name: "Dr. DP Agrawal", position: "Chairman Advisory Board", department: "Former Chairman UPSC Board" },
  { name: "Dr. Ashok Kumat", position: "Vice Chairman", department: "SKITM" },
  { name: "Dr. Sanjay Purkar", position: "Director", department: "SKITM" },
  { name: "Prof. Satish B. Purohit", position: "Dean Innovations", department: "Former Professor Mechanical Engineering, SGSITS" },
  { name: "Shri Sanjay Jagdale", position: "Director, Sports", department: "Former BCCI Secretary" },
  { name: "Dr. Rizwan Khan", position: "Principal", department: "SKIPER" },
  { name: "Dr. Sumeet Khurana", position: "Director", department: "Faculty of Management Studies" },
  { name: "Dr. Vishal Mehta", position: "Principal", department: "College of Professional Studies" },
  { name: "AVM Praveen Kumar (Retd.) AVSM, VSM", position: "Dean Student Affairs", department: "" },
  { name: "Dr. Preetesh Purohit", position: "Professor and Dean", department: "Engineering" },
  { name: "Dr. Amit Udawat", position: "Head", department: "Electronics & Communication" },
  { name: "Prof. Girish Patidar", position: "Head", department: "Civil Engineering" },
  { name: "Dr. Mamta Punjabi Anand", position: "Head", department: "CSE & AIML" },
  { name: "Dr. Ratnalata Gupta", position: "Head", department: "IT & CSIT" },
  { name: "Dr. Dharmendra Chouksey", position: "Head", department: "Data Science & ASH" },
];

const LeadershipTeam = () => {
  return (
    <PageTemplate
      title="Leadership Team"
      subtitle="Dedicated leaders driving academic excellence and institutional growth."
      breadcrumb="About Us"
    >
      <div className="mb-8">
        <p className="text-skitm-gray mb-6">
          The leadership team at SKITM is committed to upholding and promoting the mission of the School: educate and develop innovative, entrepreneurial and responsible business leaders.
        </p>
        <p className="text-skitm-gray mb-10">
          With their diverse backgrounds and perspectives, the Board of Governors, the Advisory Body and the Director work together to take the institute forward, supporting the faculty and staff, spearheading a host of new academic projects and initiatives across its campuses and around the globe, and building and sustaining the collaborative, inclusive environment for students that encourages learning and invention.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {leaders.map((leader, index) => (
          <div key={index} className="glassmorphism rounded-xl p-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src={`/photos/${leader.name}.png`} alt="" />
            </div>
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-2 text-center">
              {leader.name}
            </h3>
            <p className="text-skitm-blue font-semibold mb-1 text-center text-sm">
              {leader.position}
            </p>
            {leader.department && (
              <p className="text-xs text-skitm-gray text-center">{leader.department}</p>
            )}
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
