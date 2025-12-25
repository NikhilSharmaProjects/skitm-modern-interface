import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/CustomButton";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";

const Research = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    const researchAreas = [
        {
            id: 1,
            title: "Artificial Intelligence & Machine Learning",
            description:
                "Our research in AI and ML focuses on developing intelligent systems that can learn from data and make decisions with minimal human intervention.",
            projects: [
                "Deep Learning for Medical Image Analysis",
                "Natural Language Processing for Regional Languages",
                "Reinforcement Learning for Autonomous Vehicles",
            ],
        },
        {
            id: 2,
            title: "Renewable Energy Systems",
            description:
                "Research on sustainable energy solutions including solar, wind, and hybrid systems for efficient power generation and distribution.",
            projects: [
                "Smart Grid Integration with Renewable Resources",
                "High-Efficiency Solar Cell Development",
                "Energy Storage Solutions for Intermittent Sources",
            ],
        },
        {
            id: 3,
            title: "IoT & Embedded Systems",
            description:
                "Development of connected device ecosystems and embedded solutions for smart environments and industrial applications.",
            projects: [
                "Low-Power IoT Networks for Agricultural Monitoring",
                "Smart City Infrastructure Development",
                "Industrial IoT for Manufacturing Optimization",
            ],
        },
        {
            id: 4,
            title: "Advanced Materials & Nanotechnology",
            description:
                "Investigation of novel materials and nanoscale technologies for applications in electronics, medicine, and structural engineering.",
            projects: [
                "Graphene-Based Flexible Electronics",
                "Nanoparticle Drug Delivery Systems",
                "Self-Healing Concrete Composites",
            ],
        },
    ];

    const researchPublications = [
        {
            id: 1,
            title: "Machine Learning Approaches for Predictive Maintenance in Manufacturing",
            authors: "Kumar R., Sharma P., Gupta M.",
            journal: "International Journal of Industrial Engineering",
            year: 2025,
            citation: 12,
        },
        {
            id: 2,
            title: "Sustainable Energy Management Systems for Smart Buildings",
            authors: "Patel S., Verma A., Malhotra V.",
            journal: "Renewable and Sustainable Energy Reviews",
            year: 2024,
            citation: 28,
        },
        {
            id: 3,
            title: "Novel Approaches in IoT Security: A Comprehensive Survey",
            authors: "Singh N., Kumar R., Desai A.",
            journal: "Journal of Network and Computer Applications",
            year: 2025,
            citation: 15,
        },
        {
            id: 4,
            title: "Nanomaterial-Enhanced Concrete for Sustainable Construction",
            authors: "Verma A., Patel S., Gupta M.",
            journal: "Construction and Building Materials",
            year: 2024,
            citation: 32,
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
                            Innovation & Discovery
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Research at SKITM
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Explore our cutting-edge research initiatives that
                            address real-world challenges and advance
                            technological innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {researchAreas.map((area) => (
                            <div
                                key={area.id}
                                className="glassmorphism rounded-xl p-6"
                            >
                                <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
                                    {area.title}
                                </h2>
                                <p className="text-skitm-gray mb-4">
                                    {area.description}
                                </p>
                                <div className="bg-skitm-blue/5 rounded-lg p-4 mb-4">
                                    <h3 className="font-semibold text-skitm-navy mb-2">
                                        Current Projects:
                                    </h3>
                                    <ul className="space-y-2">
                                        {area.projects.map((project, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                                <span className="text-sm text-skitm-gray">
                                                    {project}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button variant="outline" fullWidth>
                                    Learn More
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mb-16">
                        <h2 className="text-3xl font-display font-bold text-skitm-navy mb-6 text-center">
                            Recent Publications
                        </h2>
                        <div className="space-y-4">
                            {researchPublications.map((pub) => (
                                <div
                                    key={pub.id}
                                    className="glassmorphism rounded-xl p-6"
                                >
                                    <h3 className="text-xl font-display font-semibold text-skitm-navy mb-2">
                                        {pub.title}
                                    </h3>
                                    <p className="text-skitm-blue mb-2">
                                        {pub.authors}
                                    </p>
                                    <div className="flex flex-wrap gap-4 mb-3">
                                        <span className="text-sm text-skitm-gray">
                                            {pub.journal}, {pub.year}
                                        </span>
                                        <span className="text-sm text-skitm-gray flex items-center">
                                            <svg
                                                className="w-4 h-4 text-skitm-blue mr-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                />
                                            </svg>
                                            Citations: {pub.citation}
                                        </span>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        View Publication
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glassmorphism rounded-xl p-8 text-center">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
                            Research Opportunities
                        </h2>
                        <p className="text-skitm-gray mb-6 max-w-2xl mx-auto">
                            Interested in joining our research community? We
                            offer opportunities for PhD scholars, postdoctoral
                            researchers, and collaborative industry projects.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary">PhD Admissions</Button>
                            <Button variant="outline">
                                Industry Collaboration
                            </Button>
                            <Button variant="outline">Research Grants</Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Research;
