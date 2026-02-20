import PageTemplate from "@/components/layout/PageTemplate";

const AntiRagging = () => {
    return (
        <PageTemplate
            title="Anti Ragging Committee"
            subtitle="Committee documents"
        >
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/anti-ragging.pdf"
                        title="Anti Ragging Committee PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default AntiRagging;
