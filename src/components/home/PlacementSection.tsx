import { Link } from "react-router-dom";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import ParallaxSection from "@/components/common/ParallaxSection";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";
import { getRandomGalleryImage } from "@/utils/galleryImages";

const PlacementSection = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
    const [showMore, setShowMore] = useState(false);

    const stats = [
        {
            icon: <TrendingUp className="h-8 w-8 text-white" />,
            number: "90%+",
            label: "Placement Rate",
        },
        {
            icon: <Building2 className="h-8 w-8 text-white" />,
            number: "200+",
            label: "Partner Companies",
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "₹12 LPA",
            label: "Highest Package",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "500+",
            label: "Students Placed",
        },
    ];

    const topRecruiters = ["/logos/allLogo1.png", "/logos/allLogo2.png"];

    return (
        <>
            {/* Parallax Stats Section */}
            <ParallaxSection
                backgroundImage={"/Background.png"}
                overlayOpacity={0.7}
                className="min-h-[60vh]"
            >
                <div className="text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Exceptional Placement Record
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Our students are recruited by leading companies
                            worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="font-display font-bold text-3xl md:text-4xl mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-base text-blue-200">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            {/* Recruiters Section */}
            <section className="section-container bg-white">
                <div
                    ref={sectionRef as React.RefObject<HTMLDivElement>}
                    className={`${
                        sectionVisible ? "animate-fade-in" : "opacity-1"
                    }`}
                >
                    <div className="image-first-block mb-16">
                        <div className="image-first-content">
                            <h3 className="section-title">
                                Industry Partnerships
                            </h3>

                            <p className="text-body-lg text-skitm-gray mb-6">
                                Strong industry connections ensure our students
                                have access to the best career opportunities. We
                                maintain partnerships with over 200 companies
                                across various sectors.
                            </p>

                            <p className="text-body text-skitm-gray mb-8">
                                Our dedicated Career Resource and Development
                                team works tirelessly to bridge the gap between
                                academia and industry, ensuring our graduates
                                are industry-ready.
                            </p>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="/placement">
                                    <Button variant="primary">
                                        Placement Details
                                    </Button>
                                </Link>
                                <Link to="/recruiters">
                                    <Button variant="outline">
                                        Our Recruiters
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <img
                                src={"/Gallery/GalleryImage (24).png"}
                                alt="Job Interview"
                                className="image-first-image"
                            />
                        </div>
                    </div>

                    {/* Company Logos */}
                    <div className="text-center">
                        <h4 className="font-display font-semibold text-2xl text-skitm-navy mb-8 tracking-wide">
                            Our Top Recruiters
                        </h4>

                        <img src="/logos/allLogo1.png" alt="Company Logos" />

                        {/*<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
                             {topRecruiters.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center p-4 glassmorphism rounded-lg hover:shadow-lg transition-all duration-300"
                                >
                                    <img
                                        src={logo}
                                        alt={`Company ${index + 1}`}
                                        className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))} 
                        </div>*/}
                    </div>

                    {/* Read More Section add here */}

                    <div className="mt-16 w-full">
                        {!showMore && (
                            <div className="text-left">
                                <button
                                    onClick={() => setShowMore(true)}
                                    className="inline-flex items-center gap-2 bg-skitm-navy text-white font-semibold px-6 py-2.5 rounded-lg transition-all text-lg shadow-md"
                                >
                                    Read More
                                    <span className="text-white text-xl">
                                        ▼
                                    </span>
                                </button>
                            </div>
                        )}

                        {showMore && (
                            <div className="mt-8 w-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg space-y-10 animate-fadeInUp">
                                {/* Block 1 */}
                                <div className="pb-6">
                                    <h1 className="text-2xl font-semibold text-skitm-navy mb-3">
                                        Explore the Best Private Engineering
                                        College in India at SKITM
                                    </h1>
                                    <p className="text-skitm-gray text-body leading-relaxed">
                                        SKITM stands among the best private
                                        engineering colleges in India, offering
                                        cutting-edge programs in engineering,
                                        IT, and computer science. With expert
                                        faculty, modern labs, and
                                        industry-focused curriculum, SKITM
                                        ensures top-notch education, excellent
                                        placements, and holistic development,
                                        making it the preferred choice for
                                        ambitious students in Indore and beyond.
                                    </p>
                                </div>

                                {/* Block 2 */}
                                <div className="pb-6">
                                    <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
                                        Choose the Best College in Indore –
                                        SKITM
                                    </h2>
                                    <p className="text-skitm-gray text-body leading-relaxed">
                                        SKITM is counted among the best colleges
                                        in Indore, offering innovative programs,
                                        practical learning experiences, and
                                        expert guidance. With a focus on skill
                                        development, cutting-edge laboratories,
                                        and strong placement records, SKITM
                                        provides students a platform to excel
                                        academically and professionally, making
                                        it a top choice for ambitious learners.
                                    </p>
                                </div>

                                {/* Block 3 */}
                                <div className="pb-6">
                                    <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
                                        Study at Private College in Indore –
                                        SKITM Advantage
                                    </h2>
                                    <p className="text-skitm-gray text-body leading-relaxed">
                                        SKITM ranks among top private colleges
                                        in Indore, offering a diverse range of
                                        programs in engineering, management,
                                        pharmacy, and law. With modern labs,
                                        experienced faculty, and a strong
                                        placement network, SKITM ensures
                                        students gain practical skills and
                                        industry exposure, making it one of the
                                        most sought-after private colleges in
                                        Indore.
                                    </p>
                                </div>

                                {/* Block 4 */}
                                <div>
                                    <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
                                        Learn at the Best Private Engineering
                                        College in India – SKITM
                                    </h2>
                                    <p className="text-skitm-gray text-body leading-relaxed">
                                        SKITM is recognized as one of the best
                                        private engineering colleges in India,
                                        offering specialized courses in computer
                                        science, IT, and civil engineering. With
                                        cutting-edge infrastructure,
                                        industry-relevant curriculum, and
                                        excellent placement records, SKITM
                                        provides students with unmatched
                                        learning experiences and career
                                        opportunities in engineering and
                                        technology.
                                    </p>
                                </div>

                                {/* Read Less button */}
                                <div className="text-left pt-4">
                                    <button
                                        onClick={() => setShowMore(false)}
                                        className="inline-flex items-center gap-2 bg-skitm-navy text-white font-semibold px-6 py-2.5 rounded-lg transition-all text-lg shadow-md"
                                    >
                                        Read Less
                                        <span className="text-white text-xl">
                                            ▲
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <style>
                        {`
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out;
}
`}
                    </style>

                    {/* -------end readmore-content---------------- */}
                </div>
            </section>
        </>
    );
};

export default PlacementSection;
