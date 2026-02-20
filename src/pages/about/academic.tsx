import PageTemplate from "@/components/layout/PageTemplate";

const SCST = () => {
    return (
        <PageTemplate title="Academic Council" subtitle="Committee documents">
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/academic-council.PDF"
                        title="Academic Council PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/academic2.pdf"
                        title="Academic Council PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/academic3.PDF"
                        title="Academic Council PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default SCST;
