import PageTemplate from "@/components/layout/PageTemplate";

const MandatoryDisclosure = () => {
    return (
        <PageTemplate
            title="Mandatory Disclosure"
            subtitle="Committee documents"
        >
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-[80vh]">
                    <iframe
                        src="/pdfs/mand-disc.pdf"
                        title="Mandatory Disclosure PDF"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default MandatoryDisclosure;
