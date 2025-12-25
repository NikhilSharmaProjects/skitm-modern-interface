import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
    const isMobile = useIsMobile();
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation(
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }
    );
    const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
    });

    const backgroundImage = isMobile
        ? "/Background-mobile.png"
        : "/Background.png";

    return (
        <section
            className="hero-section relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            {/* Background overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Background grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.05] z-20"></div>

            {/* Background blur elements - floating shapes */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-skitm-blue/30 rounded-full filter blur-3xl opacity-30 animate-float z-10"></div>
            <div
                className="absolute -bottom-32 -right-32 w-80 h-80 bg-skitm-navy/40 rounded-full filter blur-3xl opacity-30 animate-float z-10"
                style={{ animationDelay: "2s" }}
            ></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                <div className="max-w-3xl mx-auto text-center text-white px-4">
                    <span
                        ref={titleRef as React.RefObject<HTMLHeadingElement>}
                        className={`inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full border border-white/20 ${
                            titleVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        Welcome to SKITM, Indore
                    </span>

                    <h1
                        ref={subtitleRef as React.RefObject<HTMLHeadingElement>}
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight ${
                            subtitleVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                        style={{ transitionDelay: "0.4s" }}
                    >
                        Shivajirao Kadam{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                            Institute
                        </span>{" "}
                        of{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                            Technology and Management
                        </span>
                    </h1>

                    <p
                        className={`text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto ${
                            subtitleVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                        style={{ transitionDelay: "0.6s" }}
                    >
                        A UGC Autonomous - NAAC Accredited "A" Grade Institute
                    </p>

                    <div
                        ref={buttonRef as React.RefObject<HTMLDivElement>}
                        className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 ${
                            buttonVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                        style={{ transitionDelay: "0.8s" }}
                    >
                        <Link to="/admissions" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="bg-white text-skitm-navy hover:bg-blue-50 w-full sm:w-auto"
                            >
                                Apply Now{" "}
                                <ArrowRight className="ml-2" size={18} />
                            </Button>
                        </Link>
                        <Link to="/about-skitm" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white text-white bg-transparent hover:bg-white hover:text-black w-full sm:w-auto"
                            >
                                Discover SKITM
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Wave SVG at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-30">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-12 md:h-16 lg:h-20"
                >
                    <path
                        d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 80C1200 70 1320 50 1380 40L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
