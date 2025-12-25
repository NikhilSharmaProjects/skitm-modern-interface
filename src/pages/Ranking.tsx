import PageTemplate from "@/components/layout/PageTemplate";

const Ranking = () => {
    return (
        <PageTemplate
            title="SKITM Rankings & Recognitions"
            subtitle="Institutional accolades, accreditations, and recognitions that reflect our commitment to excellence."
            breadcrumb="About SKITM"
            seoTitle="SKITM Rankings & Recognitions | NAAC A Grade College Indore"
            seoDescription="Explore SKITM rankings, NAAC A grade accreditation, and institutional recognitions that highlight our academic excellence and outcomes."
            seoKeywords={
                "skitm ranking, naac a grade indore, best engineering college ranking indore"
            }
            structuredDataType="breadcrumb"
            structuredDataProps={{
                breadcrumbs: [
                    { name: "Home", url: "/" },
                    { name: "Rankings", url: "/rankings" },
                ],
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glassmorphism rounded-xl p-6">
                    <h3 className="font-display font-bold text-skitm-navy mb-2">
                        NAAC A Grade
                    </h3>
                    <p className="text-sm text-skitm-gray">
                        Quality assurance through rigorous evaluation and
                        continuous improvement.
                    </p>
                </div>
                <div className="glassmorphism rounded-xl p-6">
                    <h3 className="font-display font-bold text-skitm-navy mb-2">
                        Strong Placements
                    </h3>
                    <p className="text-sm text-skitm-gray">
                        Consistent placement record across engineering,
                        management, and pharmacy.
                    </p>
                </div>
                <div className="glassmorphism rounded-xl p-6">
                    <h3 className="font-display font-bold text-skitm-navy mb-2">
                        Industry Partnerships
                    </h3>
                    <p className="text-sm text-skitm-gray">
                        MoUs and collaborations that enrich learning and
                        research.
                    </p>
                </div>
            </div>
        </PageTemplate>
    );
};

export default Ranking;
