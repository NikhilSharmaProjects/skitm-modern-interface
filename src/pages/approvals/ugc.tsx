import PageTemplate from "@/components/layout/PageTemplate";

const UGC = () => {
    return (
        <PageTemplate title="UGC" subtitle="UGC documents">
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/UGC.pdf"
                        title="UGC PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/UGC2.pdf"
                        title="UGC PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default UGC;
