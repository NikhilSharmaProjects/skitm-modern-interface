import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Central route index with labels and aliases for fuzzy matching
    const routeIndex = useMemo(
        () => [
            {
                path: "/",
                label: "Home",
                aliases: ["index", "homepage", "start"],
            },
            { path: "/academics", label: "Academics", aliases: [] },
            {
                path: "/engineering",
                label: "Engineering",
                aliases: ["best engineering college in indore"],
            },
            {
                path: "/cse",
                label: "Computer Science Engineering",
                aliases: [
                    "cs",
                    "computer science",
                    "best college for cs",
                    "best-college-for-cs-in-indore",
                ],
            },
            {
                path: "/ece",
                label: "Electronics & Communication",
                aliases: ["electronics", "communication", "ece"],
            },
            {
                path: "/civil-engineering",
                label: "Civil Engineering",
                aliases: ["civil"],
            },
            {
                path: "/mechanical-engineering",
                label: "Mechanical Engineering",
                aliases: ["mechanical", "mech"],
            },
            {
                path: "/applied-science",
                label: "Applied Science",
                aliases: ["science"],
            },
            { path: "/management", label: "Management", aliases: [] },
            { path: "/mba", label: "MBA", aliases: ["management", "business"] },
            {
                path: "/integrated-mba",
                label: "Integrated MBA",
                aliases: ["bba mba"],
            },
            { path: "/mba-plus", label: "MBA Plus", aliases: [] },
            {
                path: "/pharmacy",
                label: "Pharmacy",
                aliases: ["pharmaceuticals", "pharmaceutical"],
            },
            {
                path: "/bpharm",
                label: "B.Pharm",
                aliases: ["bpharm", "b-pharma", "b-pharma-college-in-indore"],
            },
            {
                path: "/mpharm",
                label: "M.Pharm",
                aliases: ["mpharm", "m-pharm"],
            },
            {
                path: "/dpharm",
                label: "D.Pharm",
                aliases: ["dpharm", "d-pharma", "d-pharma-college-in-indore"],
            },
            {
                path: "/professional-studies",
                label: "Professional Studies",
                aliases: [],
            },
            { path: "/bba", label: "BBA", aliases: [] },
            {
                path: "/bcom-ca",
                label: "B.Com Computer Applications",
                aliases: ["bcom ca"],
            },
            {
                path: "/bcom-general",
                label: "B.Com General",
                aliases: ["bcom"],
            },
            {
                path: "/bcom-honours",
                label: "B.Com Honours",
                aliases: ["bcom hons"],
            },
            { path: "/bcom-taxation", label: "B.Com Taxation", aliases: [] },
            {
                path: "/law",
                label: "Law",
                aliases: ["llb", "law-college-in-indore"],
            },
            {
                path: "/best-ba-llb-college-in-indore",
                label: "BA LLB",
                aliases: ["ba llb", "ballb", "ba.llb", "ba-llb"],
            },
            { path: "/faculty", label: "Faculty", aliases: [] },
            { path: "/research", label: "Research", aliases: [] },
            { path: "/library", label: "Library", aliases: [] },
            { path: "/admissions", label: "Admissions", aliases: ["apply"] },
            {
                path: "/apply-to-skitm",
                label: "Apply To SKITM",
                aliases: ["apply", "application"],
            },
            { path: "/scholarships", label: "Scholarships", aliases: [] },
            {
                path: "/download-brochure",
                label: "Download Brochure",
                aliases: ["brochure"],
            },
            { path: "/faqs", label: "FAQs", aliases: ["questions", "help"] },
            { path: "/placement", label: "Placement", aliases: ["placements"] },
            {
                path: "/student-life",
                label: "Student Life",
                aliases: ["campus life"],
            },
            { path: "/hostel", label: "Hostel", aliases: [] },
            {
                path: "/projects-workshops",
                label: "Projects & Workshops",
                aliases: ["projects", "workshops"],
            },
            {
                path: "/student-testimonials",
                label: "Student Testimonials",
                aliases: ["testimonials"],
            },
            { path: "/campus", label: "Campus", aliases: [] },
            { path: "/facilities", label: "Facilities", aliases: [] },
            { path: "/sports", label: "Sports", aliases: [] },
            { path: "/gallery", label: "Gallery", aliases: [] },
            { path: "/blogs", label: "Blogs", aliases: ["blog"] },
            {
                path: "/news-events",
                label: "News & Events",
                aliases: ["news", "events"],
            },
            {
                path: "/top-naac-a-grade-college-in-indore",
                label: "NAAC A Grade",
                aliases: [
                    "naac",
                    "naac a grade",
                    "naac+a",
                    "naac A",
                    "naac-grade",
                ],
            },
            {
                path: "/autonomous-college-in-indore",
                label: "Autonomous",
                aliases: ["autonomous", "ugc autonomous"],
            },
            {
                path: "/best-btech-college-in-indore",
                label: "B.Tech",
                aliases: ["btech", "b-tech", "b tech"],
            },
            {
                path: "/rankings",
                label: "Rankings",
                aliases: ["ranking", "recognitions"],
            },
            {
                path: "/pharmacy-college-in-indore",
                label: "Pharmacy (SEO)",
                aliases: ["pharmacy college in mp"],
            },
            {
                path: "/best-engineering-college-in-indore",
                label: "Engineering (SEO)",
                aliases: [],
            },
            {
                path: "/best-college-for-cs-in-indore",
                label: "CSE (SEO)",
                aliases: ["cs in indore"],
            },
        ],
        []
    );

    const normalize = (s: string) =>
        s
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "")
            .trim();

    const scoredMatches = useMemo(() => {
        const q = normalize(searchQuery);
        if (!q)
            return [] as Array<{
                path: string;
                label: string;
                score: number;
                matchOn: string;
            }>;
        const results = routeIndex
            .map((r) => {
                const haystacks = [r.label, r.path, ...(r.aliases || [])];
                let best = -1;
                let matchOn = "";
                for (const h of haystacks) {
                    const n = normalize(h);
                    if (!n) continue;
                    if (n.includes(q)) {
                        const score =
                            100 - (n.indexOf(q) + (n.length - q.length));
                        if (score > best) {
                            best = score;
                            matchOn = h;
                        }
                    } else {
                        // simple subsequence match as fuzzy fallback
                        let i = 0;
                        for (const ch of n) {
                            if (i < q.length && ch === q[i]) i++;
                        }
                        if (i === q.length) {
                            const score = 50 - (n.length - q.length);
                            if (score > best) {
                                best = score;
                                matchOn = h;
                            }
                        }
                    }
                }
                return best >= 0
                    ? { path: r.path, label: r.label, score: best, matchOn }
                    : null;
            })
            .filter(Boolean) as Array<{
            path: string;
            label: string;
            score: number;
            matchOn: string;
        }>;
        return results.sort((a, b) => b.score - a.score).slice(0, 8);
    }, [searchQuery, routeIndex]);

    useEffect(() => {
        setActiveIndex(scoredMatches.length ? 0 : -1);
    }, [scoredMatches.length]);

    const handleNavigate = (path: string) => {
        setShowSuggestions(false);
        navigate(path);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const q = normalize(searchQuery);
        if (!q) return;
        const exact = scoredMatches[0];
        if (exact) {
            handleNavigate(exact.path);
            return;
        }
        navigate("/");
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            !showSuggestions &&
            (e.key === "ArrowDown" || e.key === "ArrowUp")
        ) {
            setShowSuggestions(true);
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((i) => (i + 1) % Math.max(scoredMatches.length, 1));
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex(
                (i) =>
                    (i - 1 + Math.max(scoredMatches.length, 1)) %
                    Math.max(scoredMatches.length, 1)
            );
        }
        if (e.key === "Enter") {
            if (activeIndex >= 0 && scoredMatches[activeIndex]) {
                handleNavigate(scoredMatches[activeIndex].path);
            }
        }
        if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    const highlight = (text: string) => {
        const q = searchQuery.trim();
        if (!q) return text;
        try {
            const regex = new RegExp(
                `(${q.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
                "ig"
            );
            const parts = text.split(regex);
            return (
                <>
                    {parts.map((part, idx) =>
                        regex.test(part) ? (
                            <span
                                key={idx}
                                className="font-semibold text-skitm-navy"
                            >
                                {part}
                            </span>
                        ) : (
                            <span key={idx}>{part}</span>
                        )
                    )}
                </>
            );
        } catch {
            return text;
        }
    };

    const recommendedLinks = [
        { name: "Admissions", path: "/admissions" },
        { name: "Engineering", path: "/engineering" },
        { name: "Pharmacy", path: "/pharmacy" },
        { name: "Law", path: "/law" },
        { name: "Placement", path: "/placement" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Page Not Found - SKITM</title>
                <meta
                    name="description"
                    content="The page you were looking for could not be found. Explore other resources at Shivajirao Kadam Institute of Technology and Management."
                />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                <div className="text-center max-w-2xl mx-auto">
                    <img
                        src="/logo.png"
                        alt="SKITM Logo"
                        className="mx-auto h-20 w-auto mb-6"
                    />

                    <h1 className="text-6xl font-display font-bold text-skitm-navy mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl font-display font-bold text-skitm-navy mb-3">
                        Page Not Found
                    </h2>
                    <p className="text-skitm-gray mb-6">
                        We couldn’t find that page, but you can search below.
                    </p>

                    <p className="text-skitm-gray mb-8">
                        The page you're looking for doesn't exist or has been
                        moved. Don't worry, you can find plenty of other things
                        on our website.
                    </p>

                    {/* Search Bar */}
                    <form
                        onSubmit={handleSearch}
                        className="mb-8 relative"
                        autoComplete="off"
                    >
                        <div className="relative mx-auto max-w-2xl">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search pages (e.g., naac, btech, law)"
                                className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent bg-white"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowSuggestions(true);
                                }}
                                onFocus={() => setShowSuggestions(true)}
                                onKeyDown={onKeyDown}
                            />
                            <button
                                type="submit"
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-skitm-blue"
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>

                            {showSuggestions && searchQuery && (
                                <div className="absolute z-20 mt-2 w-full rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden animate-fade-in">
                                    {scoredMatches.length > 0 ? (
                                        <ul className="max-h-80 overflow-auto">
                                            {scoredMatches.map((m, idx) => (
                                                <li
                                                    key={m.path}
                                                    className={`px-4 py-3 cursor-pointer text-left ${
                                                        idx === activeIndex
                                                            ? "bg-skitm-blue/10"
                                                            : "hover:bg-gray-50"
                                                    }`}
                                                    onMouseEnter={() =>
                                                        setActiveIndex(idx)
                                                    }
                                                    onClick={() =>
                                                        handleNavigate(m.path)
                                                    }
                                                >
                                                    <div className="text-skitm-navy text-sm font-medium">
                                                        {highlight(m.label)}
                                                    </div>
                                                    <div className="text-xs text-skitm-gray">
                                                        {m.path}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="px-4 py-4 text-sm text-skitm-gray">
                                            No matching pages found. Try again
                                            or go back to the homepage.
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </form>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <Link to="/">
                            <Button
                                variant="default"
                                className="flex items-center"
                            >
                                <Home size={18} className="mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                variant="outline"
                                className="flex items-center"
                            >
                                Contact Support
                            </Button>
                        </Link>
                    </div>

                    {/* Recommended Links */}
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-skitm-navy mb-4">
                            Popular Pages
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {recommendedLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-skitm-navy transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10">
                        <Link
                            to="/"
                            className="inline-flex items-center text-skitm-blue hover:text-skitm-navy"
                        >
                            <ArrowLeft size={16} className="mr-1" /> Back to the
                            homepage
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NotFound;
