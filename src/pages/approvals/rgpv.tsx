import PageTemplate from "@/components/layout/PageTemplate";

const RGPV = () => {
    return (
        <PageTemplate title="RGPV" subtitle="RGPV documents">
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/RGPV.PDF"
                        title="RGPV PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/RGPV2.pdf"
                        title="RGPV PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default RGPV;
