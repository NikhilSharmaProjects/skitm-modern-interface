import ParallaxSection from "@/components/common/ParallaxSection";
import Button from "@/components/ui/CustomButton";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import { Link } from "react-router-dom";
import { Code, Cpu, Cog, Building, Heart, Scale } from "lucide-react";

const Departments = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    const stats = [
        {
            icon: <Code className="h-8 w-8 text-white" />,
            number: "6",
            label: "Departments",
        },
        {
            icon: <Cpu className="h-8 w-8 text-white" />,
            number: "25+",
            label: "Programs",
        },
        {
            icon: <Cog className="h-8 w-8 text-white" />,
            number: "150+",
            label: "Faculty Members",
        },
        {
            icon: <Building className="h-8 w-8 text-white" />,
            number: "95%",
            label: "Placement Rate",
        },
    ];

    const departments = [
        {
            id: 1,
            name: "Computer Science & Engineering",
            description:
                "Cutting-edge education in algorithms, programming, AI, ML with industry-focused curriculum.",
            icon: <Code className="h-8 w-8 text-skitm-blue" />,
            courses: [
                "B.Tech in CSE",
                "B.Tech in CSE (AI & ML)",
            ],
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            id: 2,
            name: "Electronics & Communication",
            description:
                "Comprehensive knowledge in communication systems, embedded systems, and signal processing applications.",
            icon: <Cpu className="h-8 w-8 text-skitm-blue" />,
            courses: ["B.Tech in ECE"],
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            id: 3,
            name: "Mechanical Engineering",
            description:
                "Advanced studies in thermodynamics, robotics, manufacturing, and structural analysis with modern laboratories.",
            icon: <Cog className="h-8 w-8 text-skitm-blue" />,
            courses: ["B.Tech in ME"],
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            id: 4,
            name: "Civil Engineering",
            description:
                "Sustainable infrastructure development, construction technology, and environmental engineering solutions.",
            icon: <Building className="h-8 w-8 text-skitm-blue" />,
            courses: ["B.Tech in CE"],
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            id: 5,
            name: "Pharmacy",
            description:
                "Excellence in pharmaceutical sciences, drug development, and healthcare system management.",
            icon: <Heart className="h-8 w-8 text-skitm-blue" />,
            courses: ["B.Pharm", "M.Pharm", "D.Pharm"],
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            id: 6,
            name: "Law",
            description:
                "Comprehensive legal education with global perspective, practical training, and ethical foundation.",
            icon: <Scale className="h-8 w-8 text-skitm-blue" />,
            courses: ["LL.B", "B.A. LL.B", "B.B.A. LL.B"],
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Gallery/GalleryImage (9).png"
                overlayOpacity={0.6}
                className="min-h-[70vh] pt-24"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        Academic Excellence
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Our Departments
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Diverse academic departments offering world-class
                        education and research opportunities
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
                {/* Departments Grid */}
                <section className="section-container bg-white">
                    <h2 className="section-title text-center">
                        Academic Departments
                    </h2>
                    <div className="space-y-16">
                        {departments.map((department, index) => (
                            <div
                                key={department.id}
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
                                        src={department.image}
                                        alt={department.name}
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
                                    <div className="flex items-center mb-6">
                                        {department.icon}
                                        <h3 className="text-2xl font-display font-bold text-skitm-navy ml-4">
                                            {department.name}
                                        </h3>
                                    </div>
                                    <p className="text-body-lg text-skitm-gray mb-6">
                                        {department.description}
                                    </p>
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-skitm-navy mb-3">
                                            Programs Offered:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {department.courses.map(
                                                (course, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm"
                                                    >
                                                        {course}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <Link
                                        to={`/departments/${department.name
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`}
                                    >
                                        <Button variant="primary">
                                            Explore {department.name}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Research Excellence Parallax */}
                <ParallaxSection
                    backgroundImage="/Gallery/GalleryImage (9).png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Research Excellence
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Cutting-edge Research
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Industry Collaboration
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Innovation Centers
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Patent Publications
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            </main>
        </div>
    );
};

export default Departments;
