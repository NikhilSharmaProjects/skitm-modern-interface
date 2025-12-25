import ParallaxSection from "@/components/common/ParallaxSection";
import {
    TrendingUp,
    Users,
    Award,
    Building2,
    Target,
    CheckCircle,
} from "lucide-react";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";

const Placements = () => {
    const stats = [
        {
            icon: <TrendingUp className="h-8 w-8 text-white" />,
            number: "95%",
            label: "Placement Rate",
        },
        {
            icon: <Building2 className="h-8 w-8 text-white" />,
            number: "150+",
            label: "Recruiting Companies",
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "₹12 LPA",
            label: "Highest Package",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "5000+",
            label: "Alumni Placed",
        },
    ];

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

    const placementStats = [
        { label: "Placement Rate", value: "95%", icon: "📈" },
        { label: "Highest Package", value: "₹12 LPA", icon: "💰" },
        { label: "Average Package", value: "₹6.5-4.5 LPA", icon: "📊" },
        { label: "Companies Visited", value: "200+", icon: "🏢" },
    ];

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

    return (
        <div className="min-h-screen flex flex-col">
            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Gallery/GalleryImage (9).png"
                overlayOpacity={0.7}
                className="min-h-[70vh] pt-24"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        Career Excellence
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Exceptional Placements
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Leading companies across industries recruit our talented
                        graduates
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-blue-200">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* Image-First Process Section */}
                <section className="section-container bg-white">
                    <div className="image-first-block mb-20">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/Gallery/GalleryImage (9).png"
                                alt="Job Interview"
                                className="image-first-image"
                            />
                        </div>
                        <div className="image-first-content order-1 lg:order-2">
                            <h3 className="section-title">
                                Industry Partnerships
                            </h3>
                            <p className="text-body-lg text-skitm-gray mb-6">
                                Strong industry connections ensure our students
                                have access to the best career opportunities
                                with over 150 partner companies.
                            </p>
                            <p className="text-body text-skitm-gray mb-8">
                                Our dedicated Career Resource and Development
                                team bridges the gap between academia and
                                industry.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section-container bg-skitm-offWhite">
                    <h2 className="section-title text-center">
                        Placement Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="glassmorphism rounded-xl p-8 text-center card-hover">
                            <div className="flex justify-center mb-6">
                                <Target className="h-8 w-8 text-skitm-blue" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
                                Pre-placement Training
                            </h3>
                            <p className="text-skitm-gray">
                                Comprehensive training and preparation programs
                            </p>
                        </div>
                        <div className="glassmorphism rounded-xl p-8 text-center card-hover">
                            <div className="flex justify-center mb-6">
                                <Users className="h-8 w-8 text-skitm-blue" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
                                Resume Building
                            </h3>
                            <p className="text-skitm-gray">
                                Professional resume building and interview
                                skills
                            </p>
                        </div>
                        <div className="glassmorphism rounded-xl p-8 text-center card-hover">
                            <div className="flex justify-center mb-6">
                                <Building2 className="h-8 w-8 text-skitm-blue" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
                                Company Presentations
                            </h3>
                            <p className="text-skitm-gray">
                                Interactive sessions with industry
                                representatives
                            </p>
                        </div>
                        <div className="glassmorphism rounded-xl p-8 text-center card-hover">
                            <div className="flex justify-center mb-6">
                                <CheckCircle className="h-8 w-8 text-skitm-blue" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
                                Selection Process
                            </h3>
                            <p className="text-skitm-gray">
                                Written tests, technical rounds, and final
                                interviews
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section-container bg-white">
                    <h2 className="section-title text-center">
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
                                            <TableCell>{student.id}</TableCell>
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
                </section>

                <section className="section-container bg-white">
                    <h2 className="section-title text-center">
                        Our Top Recruiters
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {topRecruiters.map((company, index) => (
                            <div
                                key={index}
                                className="glassmorphism rounded-lg p-4 text-center card-hover"
                            >
                                <span className="text-sm font-medium text-skitm-navy">
                                    {company}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section-container bg-skitm-offWhite">
                    <h2 className="section-title text-center">
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
                                            {story.batch}, ₹{story.package} at{" "}
                                            {story.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Support Services Parallax */}
                <ParallaxSection
                    backgroundImage="/Gallery/GalleryImage (9).png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Career Support Services
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
        </div>
    );
};

export default Placements;
