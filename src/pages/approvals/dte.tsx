import PageTemplate from "@/components/layout/PageTemplate";

const DTE = () => {
    return (
        <PageTemplate title="DTE" subtitle="DTE documents">
            <div className="flex items-center justify-center py-10">
                <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-zinc-200 dark:border-zinc-800">

                    <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">
                        DTE Online Counselling Portal
                    </h2>

                    <a
                        href="https://dte.mponline.gov.in/portal/services/onlinecounselling/counshomepage/home.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                    >
                        Visit Official Website →
                    </a>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 break-words">
                        https://dte.mponline.gov.in/portal/services/onlinecounselling/counshomepage/home.aspx
                    </p>

                </div>
            </div>
        </PageTemplate>
    );
};

export default DTE;