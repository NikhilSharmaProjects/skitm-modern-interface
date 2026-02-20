import PageTemplate from "@/components/layout/PageTemplate";

const AICTE = () => {
    return (
        <PageTemplate title="AICTE Approval" subtitle="Approval documents">
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/EOA.pdf"
                        title="AICTE Approval PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default AICTE;
