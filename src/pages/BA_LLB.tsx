import PageTemplate from "@/components/layout/PageTemplate";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

const BALLB = () => {
    const desc =
        "SKITM is ranked among the best BA LLB colleges in Indore offering a 5-year integrated program with strong practical exposure.";

    return (
        <PageTemplate
            title="Best BA LLB College in Indore"
            subtitle={desc}
            breadcrumb="Law"
            seoTitle="Best BA LLB College in Indore | Top BA LLB College in Indore | SKITM"
            seoDescription="SKITM is ranked among the Best BA LLB College in Indore and recognized as a Top BA LLB College in Indore, providing quality legal education with expert faculty and strong career support."
            seoKeywords={
                "ba llb best college in indore, best ba llb college in indore, top ba llb college in indore"
            }
            structuredDataType="breadcrumb"
            structuredDataProps={{
                breadcrumbs: [
                    { name: "Home", url: "/" },
                    { name: "Law", url: "/law" },
                    { name: "BA LLB", url: "/best-ba-llb-college-in-indore" },
                ],
            }}
        >
            <div className="space-y-8">
                <div className="glassmorphism rounded-xl p-8">
                    <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
                        Program Overview
                    </h2>
                    <p className="text-skitm-gray leading-relaxed">
                        Our 5-year integrated BA LL.B. program blends liberal
                        arts with rigorous legal education. Students learn
                        through moot courts, legal drafting, internships and
                        research projects.
                    </p>
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
                                Recognized among the best colleges for BA LLB in
                                Indore, SKITM emphasizes experiential learning
                                through moot court sessions, legal aid clinics,
                                and internships with reputed law firms.
                            </p>
                            <p>
                                Our curriculum builds strong analytical,
                                advocacy, and research skills to prepare
                                students for litigation, judiciary, corporate
                                law, and public policy careers.
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </PageTemplate>
    );
};

export default BALLB;
