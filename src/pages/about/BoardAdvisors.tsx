
import PageTemplate from '@/components/layout/PageTemplate';

const advisors = [
  { name: "Dr. DP Agrawal", details: "Former Chairman, UPSC" },
  { name: "Shri Sewaram", details: "Retd. IAS, Former Principal Secretary, Govt. of MP" },
  { name: "Shri Sunil Choradia", details: "MD, Raj Ratan Wires" },
  { name: "Dr. DN Reddy", details: "Former Vice Chancellor JNTU Hyderabad" },
  { name: "Dr. Piyush Trivedi", details: "Fmr VC, RGPV, Bhopal | VF at Univ. of Toledo, USA | Distinguished Chair SKITM | Dir. CITR Coll. of Pharmacy BVP, Pune" },
  { name: "Dr. KR Mahadik", details: "Principal, Poona College of Pharmacy" },
  { name: "Dr. Charles R. Ashby, Jr.", details: "Professor, St. John's University, New York (USA)" },
  { name: "Ms. Maria Isabel Veiga", details: "Researcher Academic, University of Minho, Portugal" },
  { name: "Dr. Hoyun Lee", details: "Professor & Sr. Scientist, Northern Ontario School of Medicine" },
  { name: "Dr. Amit Tiwari", details: "Professor & Scientist, University of Toledo (USA)" },
  { name: "Dr. Rakesh Saxena", details: "Director, SGSITS" },
  { name: "Mr. Siddharth Singh", details: "Director, Emerald Heights School, Indore" },
  { name: "Mr. Sanjeev Pendharkar", details: "Managing Director at Vicco Laboratories" },
  { name: "Mr. Manoj Jain", details: "MD & CEO, Shriram Life Insurance" },
  { name: "Mr. Amit Kumat", details: "MD and CEO, Prataap Snacks (Yellow Diamond)" },
  { name: "Mr. Hemant Dande", details: "President & COO, Raptakos, Brett & Co Ltd" },
  { name: "Shri Sanjay Jagdale", details: "Former Secretary, BCCI" },
  { name: "Mr. Amit Rawat", details: "Lead, AWS Institute, Amazon Web Services (AWS), Sydney, Australia" },
  { name: "Mr. Libi Bhaskaran", details: "General Manager, IBM India" },
  { name: "Shri Sushil Doshi", details: "Padamshri Awardee, Indian Cricket Commentator" },
  { name: "Mr. Sandeep Pagere", details: "President – Road, Highways & Bridges, Choice Consultancy Services Ltd." },
  { name: "Mr. Pankaj Khapra", details: "Head, F&D and Clinical Affairs, Alembic Pharmaceuticals" },
  { name: "Mr. Mayank Nagar", details: "Vice President, Dr. Reddys USA" },
  { name: "Ms. Aastha Billore", details: "Executive Director, Arab Media Group (Dubai Holding)" },
  { name: "Dr. Rakesh Taran", details: "Leading Oncologist & Philanthropist" },
  { name: "Ms. Akshata Trivedi", details: "Sr. Program Manager, Salesforce" },
];

const BoardAdvisors = () => {
  return (
    <PageTemplate
      title="Board of Advisors"
      subtitle="Distinguished experts providing strategic guidance and industry insights."
      breadcrumb="About Us"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {advisors.map((advisor, idx) => (
          <div key={idx} className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <img src={`/photos/${advisor.name}.png`} alt="" />
            </div>
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-1">{advisor.name}</h3>
            <p className="text-skitm-gray text-sm">{advisor.details}</p>
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
