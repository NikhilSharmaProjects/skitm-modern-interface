
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/CustomButton";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { Link } from "react-router-dom";

const Courses = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    const courses = [
        {
            id: 1,
            name: "B.Tech. in Computer Science Engineering",
            category: "Engineering",
            department: "Computer Science & Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "A comprehensive program covering programming, algorithms, databases, AI, ML and software engineering with industry-aligned projects.",
            highlights: [
                "Industry-aligned curriculum",
                "State-of-the-art computing labs",
                "Internship opportunities",
                "Expert faculty",
            ],
        },
        {
            id: 2,
            name: "B.Tech. in CSE - Artificial Intelligence & ML",
            category: "Engineering",
            department: "Computer Science & Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "Specialized program focusing on AI, machine learning, deep learning, data science, and intelligent systems development.",
            highlights: [
                "AI & ML specialized labs",
                "Industry partnerships with tech companies",
                "Hands-on project work",
                "Research opportunities",
            ],
        },
        {
            id: 3,
            name: "B.Tech. in CSE - IT",
            category: "Engineering",
            department: "Computer Science & Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "Program focused on IT infrastructure, networking, cloud computing, and enterprise systems development.",
            highlights: [
                "Industry-standard IT infrastructure",
                "Network and system administration training",
                "Enterprise software development",
                "IT service management",
            ],
        },
        {
            id: 4,
            name: "B.Tech. in CSE - Data Science",
            category: "Engineering",
            department: "Computer Science & Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "Specialized program in data analytics, big data technologies, statistical modeling, and data-driven decision making.",
            highlights: [
                "Data science laboratories",
                "Statistical and mathematical foundations",
                "Big data ecosystems",
                "Predictive modeling",
            ],
        },
        {
            id: 5,
            name: "B.Tech. in Information Technology",
            category: "Engineering",
            department: "Information Technology",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "Program covering information systems, database management, networking, web technologies and IT infrastructure.",
            highlights: [
                "Full-stack development training",
                "IT project management",
                "Web and mobile technologies",
                "Database management systems",
            ],
        },
        {
            id: 6,
            name: "B.Tech. in Electronics & Communication Engineering",
            category: "Engineering",
            department: "Electronics & Communication",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "Study communication systems, signal processing, embedded systems, and VLSI design with practical lab work and industry projects.",
            highlights: [
                "Hands-on lab work",
                "Industry-sponsored projects",
                "Expert faculty",
                "Research opportunities",
            ],
        },
        {
            id: 7,
            name: "B.Tech. in Civil Engineering",
            category: "Engineering",
            department: "Civil Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "Program covering structural engineering, transportation, environmental systems, and sustainable infrastructure development.",
            highlights: [
                "Structural design laboratories",
                "Civil engineering software training",
                "Field visits and surveys",
                "Industry connections",
            ],
        },
        {
            id: 8,
            name: "B.Tech. in Mechanical Engineering",
            category: "Engineering",
            department: "Mechanical Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "Program focusing on thermodynamics, robotics, manufacturing, and structural analysis with state-of-the-art laboratories.",
            highlights: [
                "Advanced mechanical labs",
                "CAD/CAM training",
                "Industry internships",
                "Manufacturing expertise",
            ],
        },
        {
            id: 9,
            name: "Master of Business Administration (MBA)",
            category: "Management",
            department: "Faculty of Management Studies",
            duration: "2 years",
            eligibility: "Graduation + CAT/MAT/XAT (preferred)",
            description:
                "Industry-specific MBA program with specializations and strong corporate connections for practical business learning.",
            highlights: [
                "Multiple specialization options",
                "Industry mentorship",
                "Case-based learning",
                "Corporate exposure",
            ],
        },
        {
            id: 10,
            name: "Integrated MBA (BBA + MBA)",
            category: "Management",
            department: "Faculty of Management Studies",
            duration: "5 years",
            eligibility: "10+2 from a recognized board",
            description:
                "Comprehensive program combining undergraduate and postgraduate business education for a holistic management perspective.",
            highlights: [
                "Seamless transition from BBA to MBA",
                "Time and cost efficiency",
                "Progressive specialization",
                "Integrated business projects",
            ],
        },
        {
            id: 11,
            name: "Bachelor of Pharmacy (B.Pharm)",
            category: "Pharmacy",
            department: "Pharmaceutical Education & Research",
            duration: "4 years",
            eligibility: "10+2 with PCB",
            description:
                "Comprehensive pharmacy education focusing on pharmaceutical sciences, drug development, and healthcare with well-equipped laboratories.",
            highlights: [
                "Modern pharmacy laboratories",
                "Industry internships",
                "Research projects",
                "Healthcare exposure",
            ],
        },
        {
            id: 12,
            name: "Diploma in Pharmacy (D.Pharm)",
            category: "Pharmacy",
            department: "Pharmaceutical Education & Research",
            duration: "2 years",
            eligibility: "10+2 with PCB or equivalent",
            description:
                "Practical program focusing on pharmacy practice, dispensing, and pharmaceutical operations with hands-on training.",
            highlights: [
                "Practical pharmacy training",
                "Hospital pharmacy exposure",
                "Pharmaceutical operations",
                "Direct career pathways",
            ],
        },
        {
            id: 13,
            name: "Master of Pharmacy (M.Pharm)",
            category: "Pharmacy",
            department: "Pharmaceutical Education & Research",
            duration: "2 years",
            eligibility: "B.Pharm with minimum required percentage",
            description:
                "Advanced pharmaceutical education with specializations in various domains of pharmacy and research opportunities.",
            highlights: [
                "Specialized pharmacy education",
                "Research methodology training",
                "Advanced instrumentation",
                "Industry collaboration",
            ],
        },
        {
            id: 14,
            name: "B.A. LL.B. (Hons.)",
            category: "Law",
            department: "Transnational School of Law",
            duration: "5 years",
            eligibility: "10+2 from a recognized board with minimum 45% marks",
            description:
                "Integrated program combining arts education with comprehensive legal training for holistic legal professionals.",
            highlights: [
                "Integrated liberal arts and law education",
                "Moot court activities",
                "Legal aid clinics",
                "Internships with legal firms",
            ],
        },
        {
            id: 15,
            name: "B.B.A. LL.B. (Hons.)",
            category: "Law",
            department: "Transnational School of Law",
            duration: "5 years",
            eligibility: "10+2 from a recognized board with minimum 45% marks",
            description:
                "Integrated program combining business administration knowledge with legal education for corporate and business law focus.",
            highlights: [
                "Business and commercial law focus",
                "Corporate internships",
                "Legal drafting skills",
                "Management fundamentals",
            ],
        },
        {
            id: 16,
            name: "LL.B. (Hons.)",
            category: "Law",
            department: "Transnational School of Law",
            duration: "3 years",
            eligibility: "Graduate in any discipline with minimum 45% marks",
            description:
                "Professional law program for graduates from any discipline providing comprehensive legal education and practice skills.",
            highlights: [
                "Professional legal training",
                "Legal research methodology",
                "Courtroom procedures",
                "Specialized law electives",
            ],
        },
        {
            id: 17,
            name: "Bachelor of Business Administration (BBA)",
            category: "Commerce & Business",
            department: "College of Professional Studies - ATC",
            duration: "3 years",
            eligibility: "10+2 from a recognized board",
            description:
                "Foundation in business management principles, entrepreneurship, and professional business skills for future business leaders.",
            highlights: [
                "Business case studies",
                "Entrepreneurship projects",
                "Corporate internships",
                "Soft skills development",
            ],
        },
        {
            id: 18,
            name: "Bachelor of Commerce (B.Com)",
            category: "Commerce & Business",
            department: "College of Professional Studies - ATC",
            duration: "3 years",
            eligibility: "10+2 from a recognized board",
            description:
                "Program covering accounting, finance, economics, and business operations with focus on commercial applications.",
            highlights: [
                "Financial accounting expertise",
                "Business economics",
                "Commercial knowledge",
                "Industry exposure",
            ],
        },
        {
            id: 19,
            name: "Bachelor of Commerce (Computer Application)",
            category: "Commerce & Business",
            department: "College of Professional Studies - ATC",
            duration: "3 years",
            eligibility: "10+2 from a recognized board",
            description:
                "Specialized commerce program with computer applications focus for technology-enabled business operations.",
            highlights: [
                "Business software applications",
                "E-commerce fundamentals",
                "Digital accounting systems",
                "Management information systems",
            ],
        },
        {
            id: 20,
            name: "Diploma in Dance & Music",
            category: "Arts",
            department: "Bharati Vidhyapeeth School of Performing Arts",
            duration: "Varies",
            eligibility: "Varies by program",
            description:
                "Specialized training in various dance forms and music disciplines under expert guidance with performance opportunities.",
            highlights: [
                "Expert trainers and artists",
                "Performance opportunities",
                "Cultural exposure",
                "Practical training emphasis",
            ],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={headingRef}
                        className={`text-center mb-16 ${
                            headingVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Academic Programs
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Our Courses
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Discover our diverse range of undergraduate,
                            postgraduate, and professional programs designed to prepare you for success.
                        </p>
                    </div>

                    <div className="mb-12 flex flex-wrap gap-3 justify-center">
                        <button className="px-4 py-2 rounded-full bg-skitm-navy text-white">
                            All Programs
                        </button>
                        <button className="px-4 py-2 rounded-full bg-skitm-blue/10 text-skitm-navy hover:bg-skitm-blue/20 transition-colors">
                            Engineering
                        </button>
                        <button className="px-4 py-2 rounded-full bg-skitm-blue/10 text-skitm-navy hover:bg-skitm-blue/20 transition-colors">
                            Management
                        </button>
                        <button className="px-4 py-2 rounded-full bg-skitm-blue/10 text-skitm-navy hover:bg-skitm-blue/20 transition-colors">
                            Pharmacy
                        </button>
                        <button className="px-4 py-2 rounded-full bg-skitm-blue/10 text-skitm-navy hover:bg-skitm-blue/20 transition-colors">
                            Law
                        </button>
                        <button className="px-4 py-2 rounded-full bg-skitm-blue/10 text-skitm-navy hover:bg-skitm-blue/20 transition-colors">
                            Commerce & Business
                        </button>
                        <button className="px-4 py-2 rounded-full bg-skitm-blue/10 text-skitm-navy hover:bg-skitm-blue/20 transition-colors">
                            Arts
                        </button>
                    </div>

                    <div className="space-y-6 mb-16">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="glassmorphism rounded-xl p-6 flex flex-col md:flex-row"
                            >
                                <div className="md:w-2/3 mb-6 md:mb-0 md:mr-6">
                                    <h2 className="text-2xl font-display font-bold text-skitm-navy mb-3">
                                        {course.name}
                                    </h2>
                                    <div className="flex flex-wrap gap-4 mb-4">
                                        <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">
                                            {course.department}
                                        </span>
                                        <span className="px-3 py-1 bg-skitm-navy/10 text-skitm-navy rounded-full text-sm">
                                            Duration: {course.duration}
                                        </span>
                                        <span className="px-3 py-1 bg-skitm-navy/10 text-skitm-navy rounded-full text-sm">
                                            {course.category}
                                        </span>
                                    </div>
                                    <p className="text-skitm-gray mb-4">
                                        {course.description}
                                    </p>
                                    <div>
                                        <h3 className="font-semibold text-skitm-navy mb-2">
                                            Program Highlights:
                                        </h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                            {course.highlights.map(
                                                (highlight, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2 mt-0.5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                        <span className="text-sm text-skitm-gray">
                                                            {highlight}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:w-1/3 flex flex-col justify-between">
                                    <div className="bg-skitm-blue/5 rounded-lg p-4 mb-4">
                                        <h3 className="font-semibold text-skitm-navy mb-2">
                                            Admission Information
                                        </h3>
                                        <p className="text-sm text-skitm-gray mb-2">
                                            <span className="font-medium">Eligibility:</span> {course.eligibility}
                                        </p>
                                        <p className="text-sm text-skitm-gray mb-4">
                                            Apply online at skitm.in. Limited seats available.
                                        </p>
                                        <Link to="/admissions">
                                            <Button variant="primary" fullWidth>
                                                Apply Now
                                            </Button>
                                        </Link>
                                    </div>
                                    <Link to="/admissions">
                                        <Button variant="outline" fullWidth>
                                            Apply Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Courses;
