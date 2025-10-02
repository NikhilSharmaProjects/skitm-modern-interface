import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import { Book, FileText, Printer } from "lucide-react";

const LIBRARIAN = {
    name: "Anmaika Patel",
    designation: "Head Librarian",
    email: "centrallibrary@skitm.in",
};

const FACILITIES = [
    {
        icon: <Book className="h-10 w-10 text-skitm-blue mb-3" />,
        title: "Reference Books",
        description: "Issued for 4 days to students for in-depth study.",
    },
    {
        icon: <FileText className="h-10 w-10 text-skitm-blue mb-3" />,
        title: "Text Books",
        description: "Issued for 15 days to support curriculum learning.",
    },
    {
        icon: <Printer className="h-10 w-10 text-skitm-blue mb-3" />,
        title: "Printing & Reprography",
        description:
            "On-demand printing and photocopying for students and faculty.",
    },
    {
        icon: <Book className="h-10 w-10 text-skitm-blue mb-3" />,
        title: "Book Bank Scheme",
        description:
            "Access multiple books for a full semester under book bank.",
    },
];

const COLLECTIONS = [
    { label: "Reference Books", value: "4,772" },
    { label: "Text Books", value: "21,301" },
    { label: "Magazines", value: "9" },
    { label: "CD’s", value: "815" },
    { label: "Newspapers", value: "10" },
];

const IMAGE_URL = "/Gallery/GalleryImage (${RANDOM_INT}).png";

const Library = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage={IMAGE_URL}
                overlayOpacity={0.6}
                className="min-h-[70vh]"
            >
                <div className="flex flex-col items-center text-center space-y-7">
                    <div className="bg-white/20 px-6 py-2 rounded-full font-medium text-white text-sm backdrop-blur-sm mb-2 inline-block">
                        Knowledge Hub
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide drop-shadow-lg">
                        Central Library
                    </h1>
                    <div className="text-blue-100 max-w-2xl text-lg md:text-2xl mx-auto mb-4 leading-relaxed">
                        The Library provides important support to the
                        institute’s mission of outstanding research and
                        education at SKITM. It is a lively place providing
                        secure, convenient, and healthy environment that
                        promotes student learning.
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex items-center gap-2 text-white text-base font-medium">
                            <span className="font-semibold">
                                {LIBRARIAN.name}
                            </span>
                            <span className="text-blue-200">
                                | {LIBRARIAN.designation}
                            </span>
                        </div>
                        <a
                            href={`mailto:${LIBRARIAN.email}`}
                            className="text-blue-100 underline mt-1 text-sm hover:text-blue-50 duration-200"
                        >
                            {LIBRARIAN.email}
                        </a>
                    </div>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* About the Library */}
                <section className="section-container bg-white rounded-xl shadow-lg max-w-4xl mx-auto -mt-16 mb-14 p-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold text-skitm-blue font-display mb-3">
                        Welcome to the Central Library
                    </h2>
                    <p className="text-lg text-skitm-navy mb-3">
                        Established in 2009, the SKITM Central Library began
                        with a collection of rare books and now offers a vast
                        and diverse range of materials for students and faculty.
                    </p>
                    <p className="text-skitm-gray mb-2">
                        Our library is fully automated, utilizing ERP (IFW v2.0
                        web) for circulations and catalogue access. All books
                        are bar-coded to ease borrowing, and every member of
                        SKITM—students, faculty, staff—may enjoy the library’s
                        facilities.
                    </p>
                    <p className="text-skitm-gray">
                        There are currently <b>26,676 volumes</b> in the
                        collection and ongoing additions across all fields of
                        study.
                    </p>
                </section>

                {/* Facilities & Services */}
                <section className="section-container bg-skitm-blue/5">
                    <h2 className="section-title text-center">
                        Facilities &amp; Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {FACILITIES.map((fac, i) => (
                            <div
                                key={i}
                                className="glassmorphism rounded-xl p-8 text-center card-hover flex flex-col items-center shadow-md bg-white animate-fade-in"
                            >
                                {fac.icon}
                                <h3 className="text-xl font-display font-semibold text-skitm-blue mb-2">
                                    {fac.title}
                                </h3>
                                <p className="text-skitm-gray">
                                    {fac.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Collections Section (Image-driven Cards) */}
                <section className="section-container bg-white my-14">
                    <h2 className="section-title text-center">
                        Library Collections
                    </h2>
                    <p className="text-center text-skitm-gray mb-6">
                        Our holdings span every major discipline: Computer
                        Science, Electrical & Electronics Engineering,
                        Mechanical Engineering, Civil Engineering, Applied
                        Sciences, and Management.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                        {COLLECTIONS.map((c) => (
                            <div
                                key={c.label}
                                className="rounded-xl px-2 py-8 flex flex-col items-center justify-center shadow-xl bg-skitm-blue/5 hover:scale-105 transition-transform duration-200"
                            >
                                <Book className="text-skitm-blue w-9 h-9 mb-2" />
                                <span className="font-bold text-skitm-blue text-2xl font-display">
                                    {c.value}
                                </span>
                                <span className="text-skitm-gray text-base">
                                    {c.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Parallax Collection Image */}
                <ParallaxSection
                    backgroundImage="/Gallery/GalleryImage (9).png"
                    overlayOpacity={0.7}
                    className="min-h-[40vh]"
                >
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight text-white">
                            Building a Culture of Knowledge
                        </h2>
                        <p className="text-blue-100 text-lg">
                            All students, faculty, and employees are welcome to
                            explore, discover, and learn.
                        </p>
                    </div>
                </ParallaxSection>
            </main>

            <Footer />
        </div>
    );
};

export default Library;
