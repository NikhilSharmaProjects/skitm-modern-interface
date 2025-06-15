
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import { Linkedin } from "lucide-react";

/** Images for the sections */
const imgCareer = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
const imgIntern = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80";
const imgRecruiters = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80";
const imgReports = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80";

const crdTeam = [
  {
    name: "Prof. Rakesh Pandey",
    designation: "Head Placements & Corporate Relations (Career Development Cell)",
    phone: "9993683013",
    linkedin: "https://www.linkedin.com/in/rakesh-pandey",
    email: "tpo@skitm.in / rkpandeytpo@gmail.com"
  },
  {
    name: "Mr. Sudheer Vaishnav",
    designation: "Office staff CRD",
    phone: "9575101665",
    linkedin: "https://www.linkedin.com/in/sudheer-vaishnav",
    email: "sudheervaishnav@skitm.in"
  },
  {
    name: "Prof. Mayuri Akotiya",
    designation: "Assistant Professor, SKITM Pharmacy",
    phone: "8349296888",
    linkedin: "https://www.linkedin.com/in/mayuri-akotiya/",
    email: "mayuriakotiya@skitm.in"
  },
  {
    name: "Prof. Shailendra Jain",
    designation: "Aptitude Trainer",
    phone: "9893022700",
    linkedin: "https://www.linkedin.com/in/shailendra-jain",
    email: "shailendrajain@skitm.in"
  },
  {
    name: "Prof. Molly Biswas Kundu",
    designation: "Soft Skills Trainer",
    phone: "7710069792",
    linkedin: "https://www.linkedin.com/in/molly-biswas-kundu",
    email: "mollykundu@skitm.in"
  }
];

// Placement data for 2025
const placement2025 = [
  { name: "Harshita Shinde", package: "6.50", company: "Hotwax Systems", branch: "CSE" },
  { name: "Lokesh Punwani", package: "4.50", company: "Webkorps Services India", branch: "CSE" },
  { name: "Saloni Sharma", package: "4.50", company: "Webkorps Services India", branch: "CSE" },
  { name: "Mayur Likhitkar", package: "up to 4.30", company: "VectEd Technologies", branch: "CSE" },
  { name: "Mousam Vishwakarma", package: "up to 4.30", company: "VectEd Technologies", branch: "CSE" },
  { name: "Avani Purohit", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Devansh Kadam", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Rajveer Patel", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Ritik Solanki", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Saloni Sharma", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Vikash Dhakad", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Harshita Shinde", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Devansh Vispute", package: "3.00", company: "Magpie Engineering", branch: "ECE" },
  { name: "Ankit Patel", package: "3.60", company: "Hitech Digital Solutions", branch: "CSE" },
  { name: "Prathmesh Mukati", package: "3.60", company: "Hitech Digital Solutions", branch: "CSE" },
  { name: "Aniket Kumar Sahu", package: "4.32", company: "Venture Fincorp", branch: "CSE" },
  { name: "Divya Nigam", package: "4.32", company: "Venture Fincorp", branch: "CSE" },
  { name: "Harsh Sahu", package: "4.32", company: "Venture Fincorp", branch: "CSE" },
  { name: "Prashant Litoriya", package: "4.32", company: "Venture Fincorp", branch: "CSE" },
  { name: "Prathmesh Mukati", package: "4.32", company: "Venture Fincorp", branch: "CSE" },
  { name: "Tanisha Patidar", package: "4.32", company: "Venture Fincorp", branch: "CSE" },
  { name: "Yash Prajapat", package: "4.32", company: "Venture Fincorp", branch: "CSE" },
  { name: "Kaniram Katare", package: "4.32", company: "Venture Fincorp", branch: "CSE" },
  { name: "Chetan Rathore", package: "3.00", company: "Fleeca India Pvt. Ltd.", branch: "ME" },
  { name: "Shivam Sawle", package: "3.00", company: "Fleeca India Pvt. Ltd.", branch: "ME" },
  { name: "Divyansh Sharma", package: "4.50", company: "Webkorps Services India", branch: "CSE" },
  { name: "Saloni Sharma", package: "3.50", company: "Adixoo Brand Pvt. Ltd.", branch: "CSE" },
  { name: "Priyanshu Choudhary", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Yashwant Mukati", package: "3.00", company: "Magpie Engineering", branch: "CSE" },
  { name: "Rohit Bhure", package: "3.0-6.0", company: "MPSeDC", branch: "CSE" },
  { name: "Atharv Chaudhary", package: "3.25-5.50", company: "Tech Mahindra", branch: "CSE" },
  { name: "Hardik Bakhatriya", package: "3.25-5.50", company: "Tech Mahindra", branch: "CSE" },
  { name: "Lokesh Punwani", package: "3.25-5.50", company: "Tech Mahindra", branch: "CSE" },
  { name: "Divyansh Sharma", package: "3.25-5.50", company: "Tech Mahindra", branch: "CSE" },
  { name: "Shivam Sawle", package: "1.80", company: "ZF Steering Gear (India) Ltd.", branch: "ME" },
  { name: "Ayush Chouhan", package: "up to 5.0", company: "Geek of Gurukul", branch: "CSE" },
  { name: "Akash Dukre", package: "3.00", company: "Map Quality Solutions", branch: "CSE" },
  { name: "Bhavesh Rathore", package: "3.00", company: "Map Quality Solutions", branch: "CSE" },
  { name: "Sagar Patel", package: "3.00", company: "Map Quality Solutions", branch: "CSE" },
  { name: "Om Prakash Hatkar", package: "–", company: "Design Studio", branch: "CE" },
  { name: "Niraj Jaiswal", package: "4.32", company: "Venture Fincorp", branch: "MBA" },
  { name: "Pankaj Kumar Khelwan", package: "4.32", company: "Venture Fincorp", branch: "MBA" },
  { name: "Vandana Anjana", package: "4.32", company: "Venture Fincorp", branch: "MBA" },
  { name: "Batul Bablawala", package: "up to 5.0", company: "Geek of Gurukul", branch: "MBA" },
  { name: "Niraj Jaiswal", package: "up to 5.0", company: "Geek of Gurukul", branch: "MBA" },
  { name: "Pradip Suryavanshi", package: "up to 5.0", company: "Geek of Gurukul", branch: "MBA" },
  { name: "Gaurav Jaiswal", package: "3.50", company: "Bajaj Allianz Life Insurance Co. Ltd.", branch: "MBA" },
  { name: "Mokshita Dangi", package: "3.44", company: "Accenture India", branch: "B.Com" },
  { name: "Mokshita Dangi", package: "8.58", company: "Jaro Education", branch: "B.Com" },
];

const Placement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.7}
        className="min-h-[60vh]"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            SKITM : Career Development Cell
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Launch Your Career With Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The Corporate Relations Division (CRD) at SKITM helps every student secure their first job and build a sustainable career through proactive assessment, grooming, counseling, and placement support services.
          </p>
        </div>
      </ParallaxSection>

      <main className="flex-grow">
        {/* Career Section - with image */}
        <section className="section-container bg-white py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={imgCareer}
              alt="Career Development Cell"
              className="rounded-xl shadow-lg max-w-sm mx-auto"
            />
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-skitm-navy mb-4">
                What is the Career Development Cell?
              </h2>
              <p className="text-skitm-gray mb-4">
                The CRD team at SKITM tirelessly works to develop industry-academia interaction, hosting industry experts and ensuring students get valuable beyond-classroom inputs.
                <br /><br />
                In 2020-21, leading organizations across IT, Manufacturing, Automobile, Banking, and more conducted campus recruitment for SKITM students.
              </p>
            </div>
          </div>
        </section>

        {/* Internship Section */}
        <section className="section-container bg-skitm-offWhite py-12">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-skitm-navy mb-4">
                Internship Opportunities
              </h2>
              <p className="text-skitm-gray mb-4">
                SKITM provides internship opportunities at reputed organizations, allowing students to apply their academic knowledge in real-world industry settings. Some students have received stipends up to Rs. 10,000 depending on their performance.
              </p>
              <ul className="list-disc list-inside text-skitm-gray mb-4">
                <li>Real Time Industry Experience and Exposure</li>
                <li>Professional Networking</li>
                <li>Adds Value, Skills, Experience to CV</li>
              </ul>
              <p className="text-skitm-gray">
                Internships often lead to final year projects or direct job offers, making students industry-ready professionals.
              </p>
            </div>
            <img
              src={imgIntern}
              alt="Internship Opportunities"
              className="rounded-xl shadow-lg max-w-sm mx-auto"
            />
          </div>
        </section>

        {/* CRD Team Section */}
        <section className="section-container bg-white py-12">
          <h2 className="section-title text-center mb-8">CRD Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crdTeam.map((member) => (
              <div key={member.email} className="glassmorphism rounded-xl p-4 flex flex-col gap-2 shadow hover-scale">
                <div className="font-bold text-skitm-navy text-lg">{member.name}</div>
                <div className="text-skitm-gray text-sm">{member.designation}</div>
                <div className="text-skitm-blue text-sm">Phone: {member.phone}</div>
                <div className="flex items-center gap-2">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} className="inline text-blue-500" />
                  </a>
                  <span className="text-xs">{member.email}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="font-semibold text-base">Director CRD &nbsp;|&nbsp; placement@skitm.in</div>
          </div>
        </section>

        {/* Placement Reports Section */}
        <section className="section-container bg-skitm-offWhite py-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
            <img
              src={imgReports}
              alt="Placement Reports"
              className="rounded-xl shadow-lg max-w-sm mx-auto"
            />
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-skitm-navy mb-4">
                SKITM Placement Reports - 2025
              </h2>
              <p className="text-skitm-gray mb-4">
                Detailed data on placements for the 2025 batch including package, company and branch for each student.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full text-left bg-white rounded-xl shadow">
              <thead className="bg-skitm-blue text-white">
                <tr>
                  <th className="px-4 py-2">Name of Student</th>
                  <th className="px-4 py-2">Package (LPA)</th>
                  <th className="px-4 py-2">Company</th>
                  <th className="px-4 py-2">Branch</th>
                </tr>
              </thead>
              <tbody>
                {placement2025.map((student, index) => (
                  <tr key={student.name + student.company + index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.package}</td>
                    <td className="px-4 py-2">{student.company}</td>
                    <td className="px-4 py-2">{student.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Our Recruiters Section */}
        <section className="section-container bg-white py-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <img
              src={imgRecruiters}
              alt="Our Recruiters"
              className="rounded-xl shadow-lg max-w-sm mx-auto"
            />
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-skitm-navy mb-4">
                Our Recruiters
              </h2>
              <p className="text-skitm-gray">
                Leading companies across IT, Manufacturing, Financial Services, Insurance, and FMCG have recruited from SKITM, giving our students exceptional career opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Support Services Parallax */}
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[40vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Beyond Placement: Career Support Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Industry Mentorship</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Soft Skills Training</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Mock Interviews</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Internship Programs</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Alumni Network</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Career Counseling</div>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
};

export default Placement;
