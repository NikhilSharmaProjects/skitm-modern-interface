import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import ParallaxSection from "@/components/common/ParallaxSection";

interface Course {
    id: string;
    name: string;
    code: string;
    duration: string;
    description: string;
    image: string;
    link: string;
}

const FeaturedCourses = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

    const courses: Course[] = [
        {
            id: "1",
            name: "Computer Science & Engineering",
            code: "B.Tech",
            duration: "4 Years",
            description: "AI, ML, Data Science with cutting-edge curriculum",
            image: "/Gallery/GalleryImage (40).png",
            link: "/cse",
        },
        {
            id: "2",
            name: "Electronics & Communication",
            code: "B.Tech",
            duration: "4 Years",
            description: "Communication systems, VLSI, embedded systems",
            image: "/Gallery/GalleryImage (4).png",
            link: "/ece",
        },
        {
            id: "3",
            name: "Master of Business Administration",
            code: "MBA",
            duration: "2 Years",
            description: "Industry-focused MBA with global perspective",
            image: "/Gallery/GalleryImage (19).png",
            link: "/mba",
        },
        {
            id: "4",
            name: "Bachelor of Pharmacy",
            code: "B.Pharm",
            duration: "4 Years",
            description: "Pharmaceutical sciences and healthcare innovation",
            image: "/Gallery/GalleryImage (21).png",
            link: "/bpharm",
        },
        {
            id: "5",
            name: "Law Programs",
            code: "B.A./B.B.A. LL.B",
            duration: "5 Years",
            description:
                "Comprehensive legal education with practical training",
            image: "/Gallery/GalleryImage (12).png",
            link: "/law",
        },
        {
            id: "6",
            name: "Bachelor of Business Administration",
            code: "BBA",
            duration: "3 Years",
            description: "Business fundamentals with entrepreneurial focus",
            image: "/Gallery/GalleryImage (15).png",
            link: "/bba",
        },
    ];

    return (
        <>
            {/* Parallax Header */}
            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.6}
                className="min-h-[50vh]"
            >
                <div className="text-center space-y-6">
                    <div className="flex justify-center mb-6">
                        <img
                            src="/logo.png"
                            alt="SKITM Logo"
                            className="h-16 w-auto opacity-90"
                        />
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                        Our Academic Programs
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Diverse programs designed to prepare you for tomorrow's
                        challenges
                    </p>
                </div>
            </ParallaxSection>

            {/* Courses Grid */}
            <section className="section-container bg-gradient-to-b from-white to-blue-50">
                <div
                    ref={sectionRef as React.RefObject<HTMLDivElement>}
                    className={`${
                        sectionVisible ? "animate-fade-in" : "opacity-1"
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <Link
                                key={course.id}
                                to={course.link}
                                className="group"
                            >
                                <div
                                    className={`glassmorphism rounded-2xl overflow-hidden transition-all duration-500 card-hover ${
                                        sectionVisible
                                            ? "animate-fade-in"
                                            : "opacity-1"
                                    }`}
                                    style={{
                                        animationDelay: `${0.1 * index}s`,
                                    }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute top-4 left-4 flex space-x-2">
                                            <span className="px-3 py-1 bg-white/90 text-skitm-blue text-xs font-semibold rounded-full">
                                                {course.code}
                                            </span>
                                            <span className="px-3 py-1 bg-skitm-blue/90 text-white text-xs font-semibold rounded-full">
                                                {course.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-display font-semibold text-xl text-skitm-navy mb-3 leading-tight">
                                            {course.name}
                                        </h3>
                                        <p className="text-body text-skitm-gray mb-4">
                                            {course.description}
                                        </p>
                                        <div className="flex items-center text-skitm-blue font-medium group-hover:text-skitm-navy transition-colors">
                                            <span className="text-sm tracking-wide">
                                                Learn More
                                            </span>
                                            <svg
                                                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/academics">
                            <Button variant="primary" size="lg">
                                View All Programs
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedCourses;
