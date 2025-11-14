import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";

const Academics = () => {
    const stats = [
        {
            icon: <BookOpen className="h-8 w-8 text-white" />,
            number: "15+",
            label: "Academic Programs",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "150+",
            label: "Expert Faculty",
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "95%",
            label: "Graduate Success",
        },
        {
            icon: <TrendingUp className="h-8 w-8 text-white" />,
            number: "90%",
            label: "Placement Rate",
        },
    ];

    const schools = [
        {
            title: "Engineering",
            description:
                "Advanced engineering programs with industry-focused curriculum",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
            link: "/engineering",
            programs: [
                "Computer Science",
                "Electronics",
                "Civil",
                "Mechanical",
                "Applied Science",
            ],
        },
        {
            title: "Management",
            description: "Comprehensive business education for future leaders",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
            link: "/management",
            programs: ["MBA", "Integrated MBA", "MBA Plus"],
        },
        {
            title: "Pharmacy",
            description: "Excellence in pharmaceutical sciences and research",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
            link: "/pharmacy",
            programs: ["B.Pharm", "M.Pharm", "D.Pharm"],
        },
        {
            title: "Professional Studies",
            description:
                "Diverse programs preparing students for professional careers",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
            link: "/professional-studies",
            programs: [
                "BBA",
                "B.Com Computer Applications",
                "B.Com General",
                "B.Com Honours",
            ],
        },
        {
            title: "Transnational School of Law",
            description:
                "Legal education with global perspective and practical training",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
            link: "/law",
            programs: ["LL.B", "B.A. LL.B", "B.B.A. LL.B"],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Gallery/GalleryImage (9).png"
                overlayOpacity={0.6}
                className="min-h-[70vh]"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        Academic Excellence
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        World-Class Education
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive academic programs across multiple
                        disciplines
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
                {/* Schools Section */}
                <section className="section-container bg-white">
                    <h2 className="section-title text-center">Our Schools</h2>
                    <div className="space-y-16">
                        {schools.map((school, index) => (
                            <div
                                key={index}
                                className={`image-first-block ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                <div
                                    className={
                                        index % 2 === 1
                                            ? "order-1 lg:order-2"
                                            : "order-2 lg:order-1"
                                    }
                                >
                                    <img
                                        src={school.image}
                                        alt={school.title}
                                        className="image-first-image"
                                    />
                                </div>
                                <div
                                    className={`image-first-content ${
                                        index % 2 === 1
                                            ? "order-2 lg:order-1"
                                            : "order-1 lg:order-2"
                                    }`}
                                >
                                    <h3 className="section-title">
                                        {school.title}
                                    </h3>
                                    <p className="text-body-lg text-skitm-gray mb-6">
                                        {school.description}
                                    </p>
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-skitm-navy mb-3">
                                            Programs Offered:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {school.programs.map(
                                                (program, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm"
                                                    >
                                                        {program}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <Link
                                        to={school.link}
                                        className="btn-primary inline-block"
                                    >
                                        Explore {school.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Academics;
