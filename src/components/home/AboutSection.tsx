
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
    const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
    const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({
        threshold: 0.2,
    });

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image/Video Side */}
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                                alt="SKITM Campus"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                        {/* Floating stats card */}
                        <div
                            ref={statsRef as React.RefObject<HTMLDivElement>}
                            className={`absolute -bottom-10 -right-10 glassmorphism rounded-xl p-6 shadow-xl w-64 ${
                                statsVisible ? "animate-fade-in" : "opacity-1"
                            }`}
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <h4 className="text-3xl font-display font-bold text-skitm-navy">
                                        15+
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        Years of Excellence
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-3xl font-display font-bold text-skitm-navy">
                                        50+
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        Faculty Members
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-3xl font-display font-bold text-skitm-navy">
                                        2000+
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        Students
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-3xl font-display font-bold text-skitm-navy">
                                        95%
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        Placement Rate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div
                        ref={textRef as React.RefObject<HTMLDivElement>}
                        className={
                            textVisible ? "animate-fade-in" : "opacity-1"
                        }
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            About SKITM
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-skitm-navy mb-6">
                            Dedicated to Academic Excellence & Innovation
                        </h2>
                        <p className="text-skitm-gray mb-4">
                            Shivajirao Kadam Institute of Technology and Management (SKITM) is one of the leading 
                            educational institutions in Indore, Madhya Pradesh. The institute is known for 
                            its innovative academic programs, industry-focused training, and strong placement support.
                        </p>
                        <p className="text-skitm-gray mb-6">
                            With state-of-the-art infrastructure, experienced faculty, and strong 
                            industry connections, we offer engineering, management, and pharmacy programs 
                            designed to foster innovation, critical thinking, and leadership among students.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start">
                                <div className="mr-3 bg-skitm-blue/10 p-2 rounded-full text-skitm-blue">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 11L12 14L22 4"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-skitm-navy mb-1">
                                        Qualified Faculty
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        Experienced and dedicated teaching staff
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mr-3 bg-skitm-blue/10 p-2 rounded-full text-skitm-blue">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 11L12 14L22 4"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-skitm-navy mb-1">
                                        Modern Infrastructure
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        Smart classrooms and research labs
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mr-3 bg-skitm-blue/10 p-2 rounded-full text-skitm-blue">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 11L12 14L22 4"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-skitm-navy mb-1">
                                        Industry Connections
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        Strong ties with leading companies
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mr-3 bg-skitm-blue/10 p-2 rounded-full text-skitm-blue">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 11L12 14L22 4"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-skitm-navy mb-1">
                                        Holistic Development
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        Focus on technical expertise and ethics
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link to="/about">
                            <Button
                                variant="default"
                                className="text-white bg-skitm-blue hover:bg-skitm-lightBlue"
                            >
                                Learn More About SKITM
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
