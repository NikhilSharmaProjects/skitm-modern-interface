
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Faculty = () => {
    const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

    const facultyMembers = [
        {
            id: 1,
            name: "Dr. Dharmendra Choukse",
            position: "Professor & Head, ASH and CS",
            education: "Ph.D, Network Security, ICS, Vikram University Ujjain",
            experience: "16+ years",
            image: "/photos/Dr. Dharmendra Chouskey.png",
            publications: 16,
        },
        {
            id: 2,
            name: "Prof.(Dr.) Preetesh Purohit",
            position: "Professor CSE and Dean Academics",
            education: "Ph.D. Computer Engineering, IET DAVV Indore",
            specialization: "Software Engineering, Artificial Intelligence",
            image: "https://placehold.co/200x200",
            publications: 10,
            experience: "27+ years",
        },
        {
            id: 3,
            name: "Dr. Ankur Geete",
            position: "Associate Professor, Mechanical Engineering",
            education: "Ph.D in Thermal Engineering, Bhagwant University",
            specialization: "Thermal Engineering",
            image: "https://placehold.co/200x200",
            publications: 60,
            experience: "14+ years",
        },
        {
            id: 4,
            name: "Dr. Amit Udawat",
            position: "Associate Professor, Electronics and Communication",
            education: "PhD in Smart Antenna Systems, DAVV",
            specialization: "Wireless Communication, Neuromorphic Computing",
            image: "https://placehold.co/200x200",
            publications: 19,
            experience: "24+ years",
        },
        {
            id: 5,
            name: "Dr. Mamta Punjabi Anand",
            position: "Associate Professor, CSE and AI & ML",
            education: "PhD in Machine Learning & DBMS, IET DAVV Indore",
            specialization: "Machine Learning, Classification, Feature Selection",
            image: "https://placehold.co/200x200",
            publications: 5,
            experience: "15+ years",
        },
        {
            id: 6,
            name: "Dr. Moumita Das",
            position: "Associate Professor, ECE",
            education: "PhD in AstroParticle Physics, Physical Research Laboratory",
            specialization: "AI, Machine Learning, High Energy Physics",
            image: "https://placehold.co/200x200",
            publications: 8,
            experience: "7+ years",
        },
        {
            id: 7,
            name: "Dr. Ratnalata Gupta",
            position: "HOD, CSIT and IT",
            education: "Ph.D in Computer Science, Oriental University Indore",
            specialization: "Image Preprocessing, AI, Machine Learning",
            image: "https://placehold.co/200x200",
            publications: 35,
            experience: "18+ years",
        },
        {
            id: 8,
            name: "Dr. Mohammad Rizwan Khan",
            position: "Principal, Pharmacy",
            education: "PhD in Pharmaceutical Chemistry, D.A.V.V. Indore",
            specialization: "Pharmaceutical Chemistry",
            image: "https://placehold.co/200x200",
            publications: 30,
            experience: "20+ years",
        },
        {
            id: 9,
            name: "Dr. Shikha Agrawal",
            position: "Professor, Pharmacy",
            education: "PhD in Pharmaceutics, Dr. H.S. Gour University Sagar",
            specialization: "Pharmaceutics",
            image: "https://placehold.co/200x200",
            publications: 50,
            experience: "22+ years",
        },
        {
            id: 10,
            name: "Vishal Mehta",
            position: "Principal, College of Professional Studies - ATC",
            education: "Ph.D in Accounts and Taxation, DAVV Indore",
            specialization: "Varied fields",
            image: "https://placehold.co/200x200",
            publications: 50,
            experience: "26+ years",
        },
        {
            id: 11,
            name: "Prof. Ritu Birla",
            position: "Assistant Professor, ECE",
            education: "MTech in Mobile Computing, DAVV",
            specialization: "Neuromorphic Computing, Wireless Communication",
            image: "https://placehold.co/200x200",
            publications: 5,
            experience: "9+ years",
        },
        {
            id: 12,
            name: "Vishal Pawar",
            position: "Assistant Professor, ECE",
            education: "M.E. in Embedded System & VLSI Design, RGPV",
            specialization: "WSN",
            image: "https://placehold.co/200x200",
            publications: 0,
            experience: "20+ years",
        },
        {
            id: 13,
            name: "Khushboo Nagar",
            position: "Assistant Professor, CSE",
            education: "M.Tech in Computer Science, RGPV",
            specialization: "Artificial Intelligence, Image Processing",
            image: "https://placehold.co/200x200",
            publications: 3,
            experience: "5+ years",
        },
        {
            id: 14,
            name: "Ayesha Mandloi",
            position: "Assistant Professor, CSE",
            education: "M.Tech, RGPV/Mahakal Institute of Technology Ujjain",
            specialization: "Software Engineering, AI, Machine Learning",
            image: "https://placehold.co/200x200",
            publications: 0,
            experience: "4+ years",
        },
        {
            id: 15,
            name: "Mrs. Madhuri Hardia",
            position: "Assistant Professor, Law",
            education: "LLM in Criminology, Renaissance University Indore",
            specialization: "Criminal Law",
            image: "https://placehold.co/200x200",
            publications: 2,
            experience: "2+ years",
        },
        {
            id: 16,
            name: "Ms. Shradha Borwal",
            position: "Assistant Professor, Pharmacy",
            education: "M.Pharm in Medicinal & Pharmaceutical Chemistry, SGSITS",
            specialization: "Synthesis & Computational Added Drug Design",
            image: "https://placehold.co/200x200",
            publications: 1,
            experience: "5+ years",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={headingRef as React.RefObject<HTMLDivElement>}
                        className={`text-center mb-16 ${
                            headingVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Our Educators
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Faculty Members
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Meet our distinguished faculty members who bring
                            their expertise, research, and industry experience
                            to the classroom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                        {facultyMembers.map((faculty) => (
                            <div
                                key={faculty.id}
                                className="glassmorphism rounded-xl p-6 flex flex-col h-full"
                            >
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src={faculty.image}
                                        alt={faculty.name}
                                        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                                        loading="lazy"
                                    />
                                </div>
                                <h2 className="text-xl font-display font-bold text-skitm-navy mb-1 text-center">
                                    {faculty.name}
                                </h2>
                                <p className="text-skitm-blue mb-3 text-center">
                                    {faculty.position}
                                </p>
                                <div className="bg-skitm-navy/5 rounded-lg p-4 mb-4">
                                    <div className="flex items-center mb-2">
                                        <svg
                                            className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            />
                                        </svg>
                                        <span className="text-sm text-skitm-gray">
                                            {faculty.education}
                                        </span>
                                    </div>
                                    {faculty.specialization && (
                                        <div className="flex items-center mb-2">
                                            <svg
                                                className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                />
                                            </svg>
                                            <span className="text-sm text-skitm-gray">
                                                {faculty.specialization}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center mb-2">
                                        <svg
                                            className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-sm text-skitm-gray">
                                            Experience: {faculty.experience}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        <span className="text-sm text-skitm-gray">
                                            Publications: {faculty.publications}
                                        </span>
                                    </div>
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

export default Faculty;
