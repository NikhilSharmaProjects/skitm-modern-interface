import PageTemplate from "@/components/layout/PageTemplate";
import { useState } from "react";

const MBA = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <PageTemplate
            title="Master of Business Administration (MBA)"
            subtitle="Comprehensive management education for future business leaders."
            breadcrumb="Academics > Management"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* LEFT SIDE */}
                <div className="lg:col-span-2">
                    {/* Program Overview */}
                    <div className="glassmorphism rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                            Program Overview
                        </h2>
                        <p className="text-skitm-gray mb-4 leading-relaxed">
                            The MBA program at SKITM provides comprehensive
                            business education with focus on leadership,
                            strategy, and innovation.
                        </p>
                        <p className="text-skitm-gray mb-4 leading-relaxed">
                            Our two-year full-time MBA program combines rigorous
                            academic curriculum with practical business
                            applications.
                        </p>
                        <p className="text-skitm-gray leading-relaxed">
                            The program emphasizes developing analytical
                            thinking, decision-making, and global business
                            perspective.
                        </p>
                    </div>

                    {/* Program Details */}
                    <div className="glassmorphism rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                            Program Details
                        </h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-skitm-blue pl-6">
                                <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                    MBA General Management
                                </h3>
                                <p className="text-skitm-gray mb-3">
                                    2-year full-time program
                                </p>
                                <div className="text-sm text-skitm-gray space-y-1">
                                    <p>
                                        <strong>Duration:</strong> 4 Semesters
                                    </p>
                                    <p>
                                        <strong>Intake:</strong> 240 Students
                                    </p>
                                    <p>
                                        <strong>Affiliation:</strong> DAVV
                                        (Devi Ahilya Vishwavidyalaya,
                                        Indore)
                                    </p>
                                    <p>
                                        <strong>Approval:</strong> AICTE
                                    </p>
                                    <p>
                                        <strong>Eligibility:</strong> Graduate
                                        in any discipline with 50% marks
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Curriculum Structure */}
                    <div className="glassmorphism rounded-xl p-8">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                            Curriculum Structure
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-skitm-navy mb-3">
                                    Core Subjects
                                </h4>
                                <ul className="space-y-2 text-sm text-skitm-gray">
                                    <li>• Organizational Behavior</li>
                                    <li>• Financial Management</li>
                                    <li>• Marketing Management</li>
                                    <li>• Operations Management</li>
                                    <li>• Human Resource Management</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-skitm-navy mb-3">
                                    Specialized Areas
                                </h4>
                                <ul className="space-y-2 text-sm text-skitm-gray">
                                    <li>• Digital Marketing & E-commerce</li>
                                    <li>• International Business</li>
                                    <li>• Entrepreneurship</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    {/* Key Features */}
                    <div className="glassmorphism rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
                            Key Features
                        </h3>
                        <ul className="space-y-3 text-sm text-skitm-gray">
                            <li>Industry-relevant curriculum</li>
                            <li>Case study based learning</li>
                            <li>Industry partnerships</li>
                        </ul>
                    </div>

                    {/* Specializations */}
                    <div className="glassmorphism rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
                            Specializations
                        </h3>
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                                Finance
                            </span>
                            <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                                Marketing
                            </span>
                        </div>
                    </div>

                    {/* Career Opportunities */}
                    <div className="glassmorphism rounded-xl p-6">
                        <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
                            Career Opportunities
                        </h3>
                        <div className="space-y-3 text-sm text-skitm-gray">
                            <p>Corporate Sector</p>
                            <p>Banking & Finance</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facilities */}
            <div className="glassmorphism rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                    Facilities & Infrastructure
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-skitm-navy mb-3">
                            Academic Facilities
                        </h4>
                        <ul className="space-y-2 text-sm text-skitm-gray">
                            <li>• Smart classrooms</li>
                            <li>• Computer labs</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* READ MORE SECTION ADDED  */}
            <div className="mt-16 w-full">
                {!showMore && (
                    <div className="text-left">
                        <button
                            onClick={() => setShowMore(true)}
                            className="inline-flex items-center gap-2 bg-skitm-navy text-white font-semibold px-6 py-2.5 rounded-lg text-lg shadow-md"
                        >
                            Read More
                            <span className="text-white text-xl">▼</span>
                        </button>
                    </div>
                )}

                {showMore && (
                    <div className="mt-8 w-full bg-slate-50 rounded-2xl p-8 shadow-lg space-y-10 animate-fadeInUp">
                        {/*  Block 1 */}
                        <div className="pb-6">
                            <h1 className="text-2xl font-semibold text-skitm-navy mb-3">
                                Build Leadership Skills at Private MBA College
                                in Indore
                            </h1>
                            <p className="text-skitm-gray leading-relaxed">
                                SKITM stands out among private MBA colleges in
                                Indore by offering affordable, high-quality
                                education with modern infrastructure and
                                industry-integrated programs. Students receive
                                hands-on experience, mentorship from experts,
                                and placement support with reputed
                                organizations. Our dynamic learning environment
                                ensures every student excels academically and
                                professionally in the competitive business
                                world.
                            </p>
                        </div>

                        {/*  Block 2 */}
                        <div className="pb-6">
                            <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
                                Excel Your Career with Best MBA College in
                                Indore
                            </h2>
                            <p className="text-skitm-gray leading-relaxed">
                                Choosing SKITM among the best MBA colleges in
                                Indore ensures academic excellence, industry
                                exposure, and global career opportunities. With
                                specialized programs, experienced faculty, and
                                strong corporate connections, we prepare
                                students to become future-ready leaders. Build
                                your managerial skills and achieve career
                                success with Indore’s top-ranked MBA college.
                            </p>
                        </div>

                        {/*  Block 3 */}
                        <div className="pb-6">
                            <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
                                Shape Your Future at MBA College MP
                            </h2>
                            <p className="text-skitm-gray leading-relaxed">
                                As one of the leading MBA colleges in MP, SKITM
                                offers world-class education tailored to
                                industry demands. Our programs focus on
                                practical learning, case studies, and corporate
                                training. Students gain holistic growth, strong
                                leadership abilities, and placements with top
                                companies, making us a preferred choice in
                                Madhya Pradesh.
                            </p>
                        </div>

                        {/*  Block 4 */}
                        <div className="pb-6">
                            <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
                                Advance Your Career with Management Colleges in
                                Madhya Pradesh
                            </h2>
                            <p className="text-skitm-gray leading-relaxed">
                                Ranked among the best management colleges in
                                Madhya Pradesh, SKITM empowers students with
                                advanced business knowledge, critical thinking,
                                and entrepreneurial skills. With innovative
                                teaching methods, live projects, and global
                                exposure, we prepare professionals to thrive in
                                leadership roles across industries. Unlock your
                                true potential with our career-driven MBA
                                programs.
                            </p>
                        </div>

                        {/*  Block 5 */}
                        <div className="pb-6">
                            <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
                                Secure Your Future with Best Placement MBA
                                College in Indore
                            </h2>
                            <p className="text-skitm-gray leading-relaxed">
                                SKITM is recognized among the best placement MBA
                                colleges in Indore, offering outstanding career
                                opportunities with top recruiters. Our dedicated
                                placement cell ensures internships, training,
                                and high-paying jobs. With a strong alumni
                                network and corporate tie-ups, students secure
                                excellent placements, making SKITM the first
                                choice for MBA aspirants.
                            </p>
                        </div>

                        {/*  Block 6 */}
                        <div>
                            <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
                                Grow Professionally with Best Management College
                                in Indore
                            </h2>
                            <p className="text-skitm-gray leading-relaxed">
                                SKITM ranks among the best management colleges
                                in Indore, known for its academic excellence,
                                practical learning, and global exposure. With
                                modern infrastructure, experienced faculty, and
                                strong industry connections, we prepare students
                                to excel in leadership roles. Join SKITM to
                                enhance your managerial skills and build a
                                successful career path.
                            </p>
                        </div>

                        {/*  Read Less Button */}
                        <div className="text-left pt-4">
                            <button
                                onClick={() => setShowMore(false)}
                                className="inline-flex items-center gap-2 bg-skitm-navy text-white font-semibold px-6 py-2.5 rounded-lg text-lg shadow-md"
                            >
                                Read Less
                                <span className="text-white text-xl">▲</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeInUp { animation: fadeInUp 0.5s ease-out; }
`}</style>

            {/* READ MORE SECTION End here  */}
        </PageTemplate>
    );
};

export default MBA;
