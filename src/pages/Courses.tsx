
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
            name: "B.Tech in Computer Science & Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM + JEE Main (preferred)",
            description:
                "A comprehensive program covering programming, algorithms, databases, AI, ML, cybersecurity and software engineering with industry-aligned projects.",
            highlights: [
                "Specializations in AI, ML, and Cybersecurity",
                "Industry-aligned projects",
                "Internship opportunities",
                "State-of-the-art labs",
            ],
        },
        {
            id: 2,
            name: "B.Tech in Electronics & Communication",
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
            id: 3,
            name: "Master of Business Administration (MBA)",
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
            id: 4,
            name: "Bachelor of Pharmacy (B.Pharm)",
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
            id: 5,
            name: "Bachelor of Business Administration (BBA)",
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
                                            Duration: {course.duration}
                                        </span>
                                        <span className="px-3 py-1 bg-skitm-navy/10 text-skitm-navy rounded-full text-sm">
                                            Eligibility: {course.eligibility}
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
                                            Admission Open
                                        </h3>
                                        <p className="text-sm text-skitm-gray mb-4">
                                            Apply online at skitm.in. Limited seats available.
                                        </p>
                                        <Link to="/admissions">
                                            <Button variant="primary" fullWidth>
                                                Apply Now
                                            </Button>
                                        </Link>
                                    </div>
                                    <Link to={`/courses/${course.id}`}>
                                        <Button variant="outline" fullWidth>
                                            Course Details
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
