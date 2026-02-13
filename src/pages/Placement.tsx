import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import { Linkedin } from "lucide-react";

// Section images
const imgCareer = "/Gallery/GalleryImage (${RANDOM_INT}).png";
const imgIntern = "/Gallery/GalleryImage (${RANDOM_INT}).png";
const imgRecruiters = "/Gallery/GalleryImage (${RANDOM_INT}).png";
const imgReports = "/Gallery/GalleryImage (${RANDOM_INT}).png";

// CRD Team data
const crdTeam = [
    {
        name: "Prof. Rakesh Pandey",
        designation: "Head Placements & Corporate Relations",
        phone: "9993683013",
        linkedin: "",
        email: "tpo@skitm.in / rkpandeytpo@gmail.com",
    },
    {
        name: "Prof. Suhel Khan",
        designation: "Manager, Department of Placement and Corporate Relations",
        phone: "7987550922",
        linkedin: "",
        email: "Suhelkhan@skitm.in",
    },
    {
        name: "Prof. Shailendra Jain",
        designation: "Aptitude Trainer",
        phone: "9893022700",
        linkedin: "",
        email: "shailendrajain@skitm.in",
    },
    {
        name: "Prof. Molly Biswas Kundu",
        designation: "Soft Skills Trainer",
        phone: "7710069792",
        linkedin: "",
        email: "mollykundu@skitm.in",
    },
    {
        name: "Prof. Rumana Sheikh",
        designation: "Soft Skills Trainer",
        phone: "+91 97131 28126",
        linkedin: "",
        email: "Rumanasheikh@skitm.in",
    },
    {
        name: "Ms. Prashansha Shah",
        designation: "Office staff CDC",
        phone: "+91 97700 40697",
        linkedin: "",
        email: "careerdevelopment@skitm.in",
    },
];

// Placement data (as provided)
const placement2025 = [
    {
        name: "Harshita Shinde",
        package: "6.50",
        company: "Hotwax Systems",
        branch: "CSE",
    },
    {
        name: "Lokesh Punwani",
        package: "4.50",
        company: "Webkorps Services India",
        branch: "CSE",
    },
    {
        name: "Saloni Sharma",
        package: "4.50",
        company: "Webkorps Services India",
        branch: "CSE",
    },
    {
        name: "Mayur Likhitkar",
        package: "upto 4.30",
        company: "VectEd Technologies",
        branch: "CSE",
    },
    {
        name: "Mousam Vishwakarma",
        package: "upto 4.30",
        company: "VectEd Technologies",
        branch: "CSE",
    },
    {
        name: "Avani Purohit",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Devansh Kadam",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Rajveer Patel",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Ritik Solanki",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Saloni Sharma",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Vikash Dhakad",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Harshita Shinde",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Devansh Vispute",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "ECE",
    },
    {
        name: "Ankit Patel",
        package: "3.60",
        company: "Hitech Digital Solutions",
        branch: "CSE",
    },
    {
        name: "Prathmesh Mukati",
        package: "3.60",
        company: "Hitech Digital Solutions",
        branch: "CSE",
    },
    {
        name: "Aniket Kumar Sahu",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "CSE",
    },
    {
        name: "Divya Nigam",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "CSE",
    },
    {
        name: "Harsh Sahu",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "CSE",
    },
    {
        name: "Prashant Litoriya",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "CSE",
    },
    {
        name: "Prathmesh Mukati",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "CSE",
    },
    {
        name: "Tanisha Patidar",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "CSE",
    },
    {
        name: "Yash Prajapat",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "CSE",
    },
    {
        name: "Kaniram Katare",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "CSE",
    },
    {
        name: "Chetan Rathore",
        package: "3.00",
        company: "Fleeca India Pvt. Ltd.",
        branch: "ME",
    },
    {
        name: "Shivam Sawle",
        package: "3.00",
        company: "Fleeca India Pvt. Ltd.",
        branch: "ME",
    },
    {
        name: "Divyansh Sharma",
        package: "4.50",
        company: "Webkorps Services India",
        branch: "CSE",
    },
    {
        name: "Saloni Sharma",
        package: "3.50",
        company: "Adixoo Brand Pvt. Ltd.",
        branch: "CSE",
    },
    {
        name: "Priyanshu Choudhary",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Yashwant Mukati",
        package: "3.00",
        company: "Magpie Engineering",
        branch: "CSE",
    },
    {
        name: "Rohit Bhure",
        package: "3.0-6.0",
        company: "MPSeDC",
        branch: "CSE",
    },
    {
        name: "Atharv Chaudhary",
        package: "3.25-5.50",
        company: "Tech Mahindra",
        branch: "CSE",
    },
    {
        name: "Hardik Bakhatriya",
        package: "3.25-5.50",
        company: "Tech Mahindra",
        branch: "CSE",
    },
    {
        name: "Lokesh Punwani",
        package: "3.25-5.50",
        company: "Tech Mahindra",
        branch: "CSE",
    },
    {
        name: "Divyansh Sharma",
        package: "3.25-5.50",
        company: "Tech Mahindra",
        branch: "CSE",
    },
    {
        name: "Shivam Sawle",
        package: "1.80",
        company: "ZF Steering Gear (India) Ltd.",
        branch: "ME",
    },
    {
        name: "Ayush Chouhan",
        package: "upto 5.0",
        company: "Geek of Gurukul",
        branch: "CSE",
    },
    {
        name: "Akash Dukre",
        package: "3.00",
        company: "Map Quality Solutions",
        branch: "CSE",
    },
    {
        name: "Bhavesh Rathore",
        package: "3.00",
        company: "Map Quality Solutions",
        branch: "CSE",
    },
    {
        name: "Sagar Patel",
        package: "3.00",
        company: "Map Quality Solutions",
        branch: "CSE",
    },
    {
        name: "Om Prakash Hatkar",
        package: "–",
        company: "Design Studio",
        branch: "CE",
    },
    {
        name: "Niraj Jaiswal",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "MBA",
    },
    {
        name: "Pankaj Kumar Khelwan",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "MBA",
    },
    {
        name: "Vandana Anjana",
        package: "4.32",
        company: "Venture Fincorp",
        branch: "MBA",
    },
    {
        name: "Batul Bablawala",
        package: "upto 5.0",
        company: "Geek of Gurukul",
        branch: "MBA",
    },
    {
        name: "Niraj Jaiswal",
        package: "upto 5.0",
        company: "Geek of Gurukul",
        branch: "MBA",
    },
    {
        name: "Pradip Suryavanshi",
        package: "upto 5.0",
        company: "Geek of Gurukul",
        branch: "MBA",
    },
    {
        name: "Gaurav Jaiswal",
        package: "3.50",
        company: "Bajaj Allianz Life Insurance Co. Ltd.",
        branch: "MBA",
    },
    {
        name: "Mokshita Dangi",
        package: "3.44",
        company: "Accenture India",
        branch: "B.Com",
    },
    {
        name: "Mokshita Dangi",
        package: "8.58",
        company: "Jaro Education",
        branch: "B.Com",
    },
];

const Placement = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.7}
                className="min-h-[100vh]"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        SKITM : Career Development Cell
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Bridging Talent and Opportunity
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        The Corporate Relations Division (CRD) at SKITM works on
                        its mission to help every student to get the first job
                        as well as develop a sustainable career by providing
                        assessment, grooming, counseling, and placement support
                        services. Our team tirelessly works at building
                        industry–academia interaction through planned
                        activities, delivering placement opportunities to every
                        SKITM student.
                    </p>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* Career Section - with image */}
                <section className="section-container bg-white py-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img
                            src={imgCareer}
                            alt="SKITM Career Development"
                            className="rounded-xl shadow-lg max-w-sm mx-auto"
                        />
                        <div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-skitm-navy mb-4">
                                About the Career Development Cell
                            </h2>
                            <p className="text-skitm-gray mb-4">
                                The CRD team at SKITM tirelessly develops
                                Industry–Academia linkages through a
                                well-planned portfolio of activities. We ensure
                                industry experts visit campus to impart
                                practical, real-world inputs to all our
                                students. Eminent personalities from various
                                esteemed organizations regularly share their
                                experience with our graduates and
                                post-graduates.
                                <br />
                                <br />
                                Leading organizations in IT, ITES,
                                Manufacturing, Automobile, Banking & Financial
                                Services, Insurance, and FMCG conducted
                                placement drives for SKITM students in recent
                                years.
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
                                SKITM provides internships at reputed
                                organizations, giving students hands-on industry
                                experience. Internships let students apply
                                theoretical knowledge in real-life business and
                                technical settings, learn how engineering solves
                                real-world problems, and transform from students
                                to industry-ready professionals.
                                <br />
                                Students have received stipends up to Rs.
                                10,000, with many internships seamlessly leading
                                into final year projects and job offers.
                            </p>
                            <ul className="list-disc list-inside text-skitm-gray mb-4">
                                <li>
                                    Real Time Industry Experience and Exposure
                                </li>
                                <li>Helps to develop Professional Network</li>
                                <li>
                                    Add Values, Skills, and Experience to the CV
                                </li>
                            </ul>
                        </div>
                        <img
                            src={imgIntern}
                            alt="Internship at SKITM"
                            className="rounded-xl shadow-lg max-w-sm mx-auto"
                        />
                    </div>
                </section>

                {/* CRD Team Section */}
                <section className="section-container bg-white py-12">
                    <h2 className="section-title text-center mb-8">CRD Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {crdTeam.map((member) => (
                            <div
                                key={member.email}
                                className="glassmorphism rounded-xl p-4 flex flex-col gap-2 shadow hover-scale"
                            >
                                <div className="font-bold text-skitm-navy text-lg">
                                    {member.name}
                                </div>
                                <div className="text-skitm-gray text-sm">
                                    {member.designation}
                                </div>
                                <div className="text-skitm-blue text-sm">
                                    Phone: {member.phone}
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin
                                            size={20}
                                            className="inline text-blue-500"
                                        />
                                    </a>
                                    <span className="text-xs">
                                        {member.email}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <div className="font-semibold text-base">
                            Director CRD &nbsp;|&nbsp; placement@skitm.in
                        </div>
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
                                Our placement report showcases the impressive
                                success stories of SKITM students, their highest
                                packages, and the leading companies they joined.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-[600px] w-full text-left bg-white rounded-xl shadow">
                            <thead className="bg-skitm-blue text-white">
                                <tr>
                                    <th className="px-4 py-2">
                                        Name of Student
                                    </th>
                                    <th className="px-4 py-2">Package (LPA)</th>
                                    <th className="px-4 py-2">Company</th>
                                    <th className="px-4 py-2">Branch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placement2025.map((student, index) => (
                                    <tr
                                        key={
                                            student.name +
                                            student.company +
                                            index
                                        }
                                        className={
                                            index % 2 === 0
                                                ? "bg-white"
                                                : "bg-blue-50"
                                        }
                                    >
                                        <td className="px-4 py-2">
                                            {student.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {student.package}
                                        </td>
                                        <td className="px-4 py-2">
                                            {student.company}
                                        </td>
                                        <td className="px-4 py-2">
                                            {student.branch}
                                        </td>
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
                                SKITM is proud to have industry engagement with
                                leading companies across sectors who actively
                                participate in our placement processes and
                                provide careers for our students.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beyond Placement Section */}
                <ParallaxSection
                    backgroundImage="/Background.png"
                    overlayOpacity={0.7}
                    className="min-h-[40vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Beyond Placement: Career Support Services
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                                <div className="text-sm">
                                    Industry Mentorship
                                </div>
                            </div>
                            <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                                <div className="text-sm">
                                    Soft Skills Training
                                </div>
                            </div>
                            <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                                <div className="text-sm">Mock Interviews</div>
                            </div>
                            <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                                <div className="text-sm">
                                    Internship Programs
                                </div>
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
