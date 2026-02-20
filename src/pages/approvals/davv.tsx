import PageTemplate from "@/components/layout/PageTemplate";

const DAVV = () => {
    return (
        <PageTemplate title="DAVV" subtitle="DAVV documents">
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/DAVV.pdf"
                        title="DAVV PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default DAVV;
