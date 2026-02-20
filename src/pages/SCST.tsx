import PageTemplate from "@/components/layout/PageTemplate";

const SCST = () => {
    return (
        <PageTemplate title="SC/ST Committee" subtitle="Committee documents">
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/scst.pdf"
                        title="SC/ST Committee PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default SCST;
