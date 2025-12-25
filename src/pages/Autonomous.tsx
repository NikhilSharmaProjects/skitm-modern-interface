import PageTemplate from "@/components/layout/PageTemplate";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Autonomous = () => {
    const desc =
        "SKITM is a reputed autonomous college in Indore, delivering academic freedom with innovative teaching methods and strong industry alignment.";

    return (
        <PageTemplate
            title="Autonomous College in Indore"
            subtitle={desc}
            breadcrumb="Autonomous"
            seoTitle="Autonomous College in Indore | UGC Autonomous Engineering & MBA"
            seoDescription="SKITM is a reputed autonomous college in Indore offering engineering and management programs with flexible, industry-driven curriculum and strong placements."
            seoKeywords={
                "autonomous college in indore, ugc autonomous engineering college indore, autonomous mba college indore"
            }
            structuredDataType="breadcrumb"
            structuredDataProps={{
                breadcrumbs: [
                    { name: "Home", url: "/" },
                    {
                        name: "Autonomous",
                        url: "/autonomous-college-in-indore",
                    },
                ],
            }}
        >
            <div className="space-y-8">
                <div className="glassmorphism rounded-xl p-8">
                    <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
                        UGC Autonomous Advantage
                    </h2>
                    <p className="text-skitm-gray leading-relaxed">
                        Autonomy enables SKITM to regularly update curriculum,
                        integrate new-age technologies, and craft outcome-based
                        education that aligns with industry needs. Students gain
                        hands-on experience, certifications, and enhanced
                        employability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glassmorphism rounded-xl p-6">
                        <h3 className="font-semibold text-skitm-navy mb-2">
                            Industry-Aligned Curriculum
                        </h3>
                        <p className="text-sm text-skitm-gray">
                            Rapid syllabus updates to reflect current trends
                        </p>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                        <h3 className="font-semibold text-skitm-navy mb-2">
                            Outcome-Based Learning
                        </h3>
                        <p className="text-sm text-skitm-gray">
                            Projects, internships, and skill certifications
                        </p>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                        <h3 className="font-semibold text-skitm-navy mb-2">
                            Stronger Placements
                        </h3>
                        <p className="text-sm text-skitm-gray">
                            Enhanced employability through practical exposure
                        </p>
                    </div>
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
                                As a UGC autonomous engineering and MBA college
                                in Indore, SKITM offers flexibility to introduce
                                contemporary courses, multi-disciplinary
                                electives, and industry co-taught modules.
                            </p>
                            <p>
                                Students benefit from modern labs, research
                                orientation, and continuous evaluation that
                                nurtures innovation and career readiness.
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </PageTemplate>
    );
};

export default Autonomous;
