import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/CustomButton";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";

const Placements = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    // Real placement statistics
    const placementStats = [
        { label: "Placement Rate", value: "95%", icon: "📈" },
        { label: "Highest Package", value: "₹12 LPA", icon: "💰" },
        { label: "Average Package", value: "₹6.5-4.5 LPA", icon: "📊" },
        { label: "Companies Visited", value: "200+", icon: "🏢" },
    ];

    // Real top recruiters
    const topRecruiters = [
        "Hotwax Systems",
        "Webkorps Services India",
        "VectEd Technologies",
        "Magpie Engineering",
        "Hitech Digital Solutions",
        "Venture Fincorp",
        "Fleeca India Pvt. Ltd.",
        "MPSeDC Ltd.",
        "Tech Mahindra",
        "ZF Steering Gear (India) Ltd.",
        "Geek of Gurukul",
        "Workpulse Software",
        "Map Quality Solutions",
        "MavenMagnet",
        "Saif Design Studios",
        "Bajaj Allianz Life Insurance Co. Ltd.",
        "Victory Terminal Financial Services",
        "Accenture India",
    ];

    // Real success stories based on the provided student data
    const successStories = [
        {
            name: "Harshita Shinde",
            batch: "CSE 2025",
            company: "Hotwax Systems",
            package: "6.5 LPA",
            quote: "The placement preparation and support at SKITM gave me the confidence to crack interviews at leading tech companies.",
        },
        {
            name: "Saloni Sharma",
            batch: "CSE 2025",
            company: "Webkorps Services",
            package: "4.5 LPA",
            quote: "The mock interviews and technical training sessions were particularly helpful in preparing for the rigorous selection process.",
        },
        {
            name: "Rohit Bhure",
            batch: "CSE 2025",
            company: "MPSeDC Ltd.",
            package: "3.0-6.0 LPA",
            quote: "The industry exposure through industrial visits and guest lectures provided valuable insights for my career.",
        },
    ];

    // Real placement data
    const placementData = [
        {
            id: 1,
            enrollmentNo: "0875CS223D04",
            name: "Harshita Shinde",
            branch: "CSE",
            batch: "2025",
            gender: "Female",
            company: "Hotwax Systems",
            package: "6.50",
            mobile: "9302924181",
        },
        {
            id: 2,
            enrollmentNo: "0875CS211105",
            name: "Saloni Sharma",
            branch: "CSE",
            batch: "2025",
            gender: "Female",
            company: "Webkorps Services India",
            package: "4.50",
            mobile: "9981360159",
        },
        {
            id: 3,
            enrollmentNo: "0875CS211095",
            name: "Rohit Bhure",
            branch: "CSE",
            batch: "2025",
            gender: "Male",
            company: "MPSeDC Ltd.",
            package: "3.0-6.0",
            mobile: "8839178090",
        },
        {
            id: 4,
            enrollmentNo: "0875CS211029",
            name: "Atharv Chaudhary",
            branch: "CSE",
            batch: "2025",
            gender: "Male",
            company: "Tech Mahindra",
            package: "3.25-5.50",
            mobile: "9021524598",
        },
        {
            id: 5,
            enrollmentNo: "0875CS211045",
            name: "Hardik Bakhatriya",
            branch: "CSE",
            batch: "2025",
            gender: "Male",
            company: "Tech Mahindra",
            package: "3.25-5.50",
            mobile: "6263517807",
        },
        {
            id: 6,
            enrollmentNo: "0875CS211064",
            name: "Lokesh Punwani",
            branch: "CSE",
            batch: "2025",
            gender: "Male",
            company: "Tech Mahindra",
            package: "3.25-5.50",
            mobile: "7987433610",
        },
        {
            id: 7,
            enrollmentNo: "DC1603246",
            name: "Gaurav Jaiswal",
            branch: "MBA",
            batch: "2025",
            gender: "Male",
            company: "Bajaj Allianz Life Insurance Co. Ltd.",
            package: "3.50",
            mobile: "9993094222",
        },
        {
            id: 8,
            enrollmentNo: "DC2215458",
            name: "Mokshita Dangi",
            branch: "B.Com",
            batch: "2025",
            gender: "Female",
            company: "Accenture India",
            package: "3.44",
            mobile: "9516716526",
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
                            Career Opportunities
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Placements & Career Services
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Our dedicated placement cell works tirelessly to
                            secure excellent career opportunities for our
                            students and prepare them for professional success.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {placementStats.map((stat, index) => (
                            <div
                                key={index}
                                className="glassmorphism rounded-xl p-6 text-center"
                            >
                                <div className="text-4xl mb-3">{stat.icon}</div>
                                <div className="text-3xl font-display font-bold text-skitm-blue mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                            Placement Process
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Registration
                                </h3>
                                <p className="text-sm text-skitm-gray">
                                    Students register with the placement cell
                                    and complete their profile.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Pre-Placement Training
                                </h3>
                                <p className="text-sm text-skitm-gray">
                                    Intensive training on aptitude, technical
                                    skills, and soft skills.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Company Selection
                                </h3>
                                <p className="text-sm text-skitm-gray">
                                    Students apply to companies based on
                                    eligibility criteria.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Aptitude Tests
                                </h3>
                                <p className="text-sm text-skitm-gray">
                                    Online or offline aptitude and technical
                                    assessments.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">
                                    5
                                </div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Technical & HR Interviews
                                </h3>
                                <p className="text-sm text-skitm-gray">
                                    Multiple rounds of interviews to assess
                                    technical and soft skills.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">
                                    6
                                </div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Offer Letter
                                </h3>
                                <p className="text-sm text-skitm-gray">
                                    Successful candidates receive job offers
                                    with details of position and package.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
                            Recent Placements
                        </h2>
                        <div className="glassmorphism rounded-xl overflow-hidden mb-8">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>S.No.</TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Branch</TableHead>
                                            <TableHead>Batch</TableHead>
                                            <TableHead>Company</TableHead>
                                            <TableHead>Package (LPA)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {placementData.map((student) => (
                                            <TableRow key={student.id}>
                                                <TableCell>
                                                    {student.id}
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    {student.name}
                                                </TableCell>
                                                <TableCell>
                                                    {student.branch}
                                                </TableCell>
                                                <TableCell>
                                                    {student.batch}
                                                </TableCell>
                                                <TableCell>
                                                    {student.company}
                                                </TableCell>
                                                <TableCell>
                                                    ₹{student.package}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
                            Our Top Recruiters
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            {topRecruiters.map((company, index) => (
                                <div
                                    key={index}
                                    className="h-20 glassmorphism rounded-lg flex items-center justify-center p-2"
                                >
                                    <img
                                        src={`/logos/companylogo (${index + 1}).png`} // ← the dynamic part done right
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
                            Success Stories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="glassmorphism rounded-xl p-6"
                                >
                                    <p className="text-skitm-gray text-sm italic mb-4">
                                        "{story.quote}"
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-skitm-blue/20 flex items-center justify-center text-skitm-blue font-bold mr-3">
                                            {story.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-skitm-navy">
                                                {story.name}
                                            </div>
                                            <div className="text-xs text-skitm-gray">
                                                {story.batch}, ₹{story.package}{" "}
                                                at {story.company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glassmorphism rounded-xl p-8 text-center">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
                            Career Development Services
                        </h2>
                        <p className="text-skitm-gray mb-6 max-w-2xl mx-auto">
                            Beyond placements, we offer comprehensive career
                            development services to help students achieve their
                            professional goals.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="p-4 bg-skitm-blue/5 rounded-lg">
                                <h3 className="font-semibold text-skitm-navy mb-2">
                                    Career Counseling
                                </h3>
                                <p className="text-xs text-skitm-gray">
                                    One-on-one guidance for career planning and
                                    development
                                </p>
                            </div>
                            <div className="p-4 bg-skitm-blue/5 rounded-lg">
                                <h3 className="font-semibold text-skitm-navy mb-2">
                                    Resume Building
                                </h3>
                                <p className="text-xs text-skitm-gray">
                                    Professional assistance to create impactful
                                    resumes
                                </p>
                            </div>
                            <div className="p-4 bg-skitm-blue/5 rounded-lg">
                                <h3 className="font-semibold text-skitm-navy mb-2">
                                    Mock Interviews
                                </h3>
                                <p className="text-xs text-skitm-gray">
                                    Practice sessions with industry experts
                                </p>
                            </div>
                            <div className="p-4 bg-skitm-blue/5 rounded-lg">
                                <h3 className="font-semibold text-skitm-navy mb-2">
                                    Soft Skills Training
                                </h3>
                                <p className="text-xs text-skitm-gray">
                                    Communication, leadership, and teamwork
                                    development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Placements;
