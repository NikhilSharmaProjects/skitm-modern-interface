import PageTemplate from "@/components/layout/PageTemplate";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

const NaacAGrade = () => {
    const shortDesc =
        "SKITM is recognized among the top NAAC A-grade colleges in Indore, offering high-quality education across engineering, management, pharmacy, and law.";

    return (
        <PageTemplate
            title="Top NAAC A Grade College in Indore"
            subtitle={shortDesc}
            breadcrumb="Accreditations"
            seoTitle="Top NAAC A Grade College in Indore | NAAC A Grade Engineering College Indore"
            seoDescription="SKITM ranks among the Top NAAC A Grade College in Indore and is known as one of the trusted NAAC A Grade Engineering College in Indore, delivering quality education and strong placements."
            seoKeywords={
                "top NAAC A grade college in Indore, NAAC A grade engineering college Indore"
            }
            structuredDataType="breadcrumb"
            structuredDataProps={{
                breadcrumbs: [
                    { name: "Home", url: "/" },
                    {
                        name: "NAAC A Grade",
                        url: "/top-naac-a-grade-college-in-indore",
                    },
                ],
            }}
        >
            <div className="space-y-8">
                <div className="glassmorphism rounded-xl p-8">
                    <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
                        Excellence Recognized by NAAC
                    </h2>
                    <p className="text-skitm-gray leading-relaxed">
                        SKITM is recognized among the top NAAC A-grade colleges
                        in Indore, offering high-quality education across
                        engineering, management, pharmacy, and law. With expert
                        faculty, advanced labs, and a focus on research and
                        innovation, SKITM ensures academic excellence and
                        career-ready graduates.
                    </p>
                </div>

                <div className="glassmorphism rounded-xl p-6">
                    <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                        Why NAAC A Grade Matters
                    </h3>
                    <ul className="list-disc pl-6 text-skitm-gray space-y-2">
                        <li>
                            Assurance of academic quality and continuous
                            improvement
                        </li>
                        <li>
                            Strong research ecosystem and industry
                            collaborations
                        </li>
                        <li>
                            Student-centric initiatives and excellent placement
                            outcomes
                        </li>
                    </ul>
                </div>

                <div className="glassmorphism rounded-xl p-6">
                    <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
                        Read more
                    </h3>
                    <Collapsible>
                        <CollapsibleTrigger className="px-4 py-2 bg-skitm-blue text-white rounded-md">
                            Click here
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-4 text-skitm-gray leading-relaxed">
                            <p className="mb-4">
                                SKITM stands as a leading NAAC A-grade
                                engineering college in Indore, providing
                                industry-focused programs, modern
                                infrastructure, and experienced faculty.
                                Students benefit from practical training,
                                research opportunities, and excellent placement
                                support.
                            </p>
                            <p>
                                Our dedicated teams across departments ensure
                                that quality benchmarks are consistently
                                achieved and surpassed, fostering a culture of
                                excellence and innovation.
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </PageTemplate>
    );
};

export default NaacAGrade;
