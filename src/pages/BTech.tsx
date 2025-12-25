import PageTemplate from "@/components/layout/PageTemplate";
import { Link } from "react-router-dom";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

const BTech = () => {
    const desc =
        "SKITM offers B.Tech with specializations in Computer Science, AI, Data Science, IT, and core branches with strong placements.";

    return (
        <PageTemplate
            title="Best B.Tech College in Indore"
            subtitle={desc}
            breadcrumb="Engineering"
            seoTitle="Best B.Tech College in Indore | Best College for B.Tech CSE in Indore"
            seoDescription="SKITM is ranked among the Best B.Tech College in Indore and recognized as one of the Best College for B.Tech CSE in Indore, with AI, IT and Data Science specializations."
            seoKeywords={
                "B.Tech Computer Science admission Indore, B.Tech AI & ML college in Indore, B.Tech Data Science college Indore, B.Tech IT college in Indore"
            }
            structuredDataType="breadcrumb"
            structuredDataProps={{
                breadcrumbs: [
                    { name: "Home", url: "/" },
                    { name: "B.Tech", url: "/best-btech-college-in-indore" },
                ],
            }}
        >
            <div className="space-y-8">
                <div className="glassmorphism rounded-xl p-8">
                    <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
                        B.Tech at SKITM
                    </h2>
                    <p className="text-skitm-gray leading-relaxed">
                        Our B.Tech programs combine strong fundamentals with
                        specialization tracks and project-based learning.
                        Explore modern labs, mentorship, and excellent career
                        outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link
                        to="/cse"
                        className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group"
                    >
                        <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue mb-2">
                            Computer Science Engineering
                        </h3>
                        <p className="text-sm text-skitm-gray">
                            Software, Cloud
                        </p>
                    </Link>
                    <Link
                        to="/ai"
                        className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group"
                    >
                        <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue mb-2">
                            Artificial Intelligence
                        </h3>
                        <p className="text-sm text-skitm-gray">
                            ML, DL, Neural Networks
                        </p>
                    </Link>
                    <Link
                        to="/data-science"
                        className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group"
                    >
                        <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue mb-2">
                            Data Science
                        </h3>
                        <p className="text-sm text-skitm-gray">
                            Analytics, Big Data, MLOps
                        </p>
                    </Link>
                    <Link
                        to="/it"
                        className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all group"
                    >
                        <h3 className="text-xl font-display font-bold text-skitm-navy group-hover:text-skitm-blue mb-2">
                            Information Technology
                        </h3>
                        <p className="text-sm text-skitm-gray">
                            Networks, Cloud, DevOps
                        </p>
                    </Link>
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
                                SKITM offers a seamless B.Tech Computer Science
                                admission in Indore with guidance and
                                counseling. Programs include AI & ML, Data
                                Science, IT, ECE, Mechanical and Civil
                                engineering.
                            </p>
                            <p>
                                Students gain exposure via internships,
                                hackathons, research, and industry workshops,
                                enabling strong placements across leading tech
                                firms.
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </PageTemplate>
    );
};

export default BTech;
