import PageTemplate from "@/components/layout/PageTemplate";

const governors = [
    {
        name: "Dr. Shivajirao Kadam",
        role: "Chairman, BOG and Chancellor",
        details: "Bharti Vidyapeeth University, Pune",
    },
    {
        name: "Dr. DP Agrawal",
        role: "Chairman Advisory Board",
        details: "Former Chairman, UPSC Board",
    },
    {
        name: "Mr. Siddharth Singh",
        role: "Director",
        details: "Emerald Heights School, Indore",
    },
    {
        name: "Dr. Piyush Trivedi",
        role: "Former VC, RGPV, Bhopal",
        details:
            "Visiting Faculty, Univ. of Toledo, USA • Director, CITR College of Pharmacy, BVP, Pune",
    },
    { name: "Dr. Rakesh Saxena", role: "Director", details: "SGSITS" },
    {
        name: "Dr. KR Mahadik",
        role: "Principal",
        details: "Poona College of Pharmacy",
    },
    { name: "Dr. DK Jain", role: "Principal", details: "IPS Pharmacy" },
    {
        name: "Dr. DY Patil",
        role: "Former Principal",
        details: "IMSR-BVP, Navi Mumbai",
    },
    { name: "Nominee of RGPV", role: "", details: "" },
    { name: "Nominee of DTE", role: "", details: "" },
    { name: "Nominee of Government of MP", role: "", details: "" },
    { name: "Nominee of DAVV", role: "", details: "" },
    { name: "Nominee of AICTE", role: "", details: "" },
];

const BoardGovernors = () => {
    return (
        <PageTemplate
            title="Board of Governors"
            subtitle="Meet the leaders and distinguished members who guide our institution’s strategic direction and governance."
            breadcrumb="About Us"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {governors.map((gov, idx) => (
                    <div
                        key={idx}
                        className="glassmorphism rounded-xl p-6 text-center"
                    >
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <img src={`/photos/${gov.name}.png`} alt="" />
                        </div>
                        <h3 className="text-lg font-display font-bold text-skitm-navy mb-2">
                            {gov.name}
                        </h3>
                        {gov.role && (
                            <p className="text-skitm-blue font-semibold mb-1">
                                {gov.role}
                            </p>
                        )}
                        {gov.details && (
                            <p className="text-sm text-skitm-gray">
                                {gov.details}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/gov-body.PDF"
                        title="Board of Governors PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>

            <div className="glassmorphism rounded-xl p-8">
                <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                    Role and Responsibilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-skitm-navy mb-3">
                            Governance
                        </h3>
                        <ul className="space-y-2 text-skitm-gray">
                            <li>• Strategic planning and policy formulation</li>
                            <li>• Academic quality assurance</li>
                            <li>• Financial oversight and management</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-skitm-navy mb-3">
                            Development
                        </h3>
                        <ul className="space-y-2 text-skitm-gray">
                            <li>• Infrastructure development planning</li>
                            <li>• Industry partnerships and collaborations</li>
                            <li>• Student welfare and development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default BoardGovernors;
