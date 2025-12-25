import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Book,
    User,
    GraduationCap,
    CreditCard,
    Clock,
    Building,
} from "lucide-react";

const Faqs = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

    // FAQ categories with their respective questions and answers
    const faqCategories = [
        {
            id: "admissions",
            title: "Admissions",
            icon: <User className="h-5 w-5 text-skitm-blue" />,
            faqs: [
                {
                    question:
                        "What are the eligibility criteria for admission?",
                    answer: "For undergraduate programs, candidates must have passed 10+2 examination with a minimum of 60% marks in PCM subjects. For postgraduate programs, candidates must have a relevant bachelor's degree with at least 60% marks.",
                },
                {
                    question: "When does the admission process start?",
                    answer: "The admission process typically begins in April and continues until all seats are filled. Early applications are encouraged as admissions are granted on a rolling basis.",
                },
                {
                    question: "Does SKITM accept transfer students?",
                    answer: "Yes, SKITM accepts transfer students subject to seat availability and academic compatibility. Transfer students must provide transcripts from their previous institution and may need to appear for an interview.",
                },
            ],
        },
        {
            id: "academics",
            title: "Academics",
            icon: <Book className="h-5 w-5 text-skitm-blue" />,
            faqs: [
                {
                    question: "What courses does SKITM offer?",
                    answer: "SKITM offers a wide range of undergraduate and postgraduate programs in engineering, management, computer applications, and sciences. Visit our Courses page for a complete list of programs.",
                },
                {
                    question: "What is the academic calendar like?",
                    answer: "The academic year is divided into two semesters: July to December and January to June. Each semester comprises around 16 weeks of classes followed by examinations.",
                },
                {
                    question:
                        "Are there any exchange programs with foreign universities?",
                    answer: "Yes, SKITM has partnerships with several international universities for student exchange programs, summer internships, and collaborative research opportunities.",
                },
            ],
        },
        {
            id: "fees",
            title: "Fees & Scholarships",
            icon: <CreditCard className="h-5 w-5 text-skitm-blue" />,
            faqs: [
                {
                    question: "What is the fee structure for various courses?",
                    answer: "Fee structures vary by program. Please visit our Fees page for detailed information on tuition fees, hostel fees, and other charges for each program.",
                },
                {
                    question: "Are there any scholarships available?",
                    answer: "SKITM offers merit-based scholarships, need-based financial aid, and sports scholarships. Additionally, students can avail of various government scholarships. Visit our Scholarships page for more details.",
                },
                {
                    question:
                        "What payment options are available for tuition fees?",
                    answer: "Tuition fees can be paid in full or in installments. SKITM accepts payments through online transfers, demand drafts, and credit/debit cards.",
                },
            ],
        },
        {
            id: "placements",
            title: "Placements",
            icon: <GraduationCap className="h-5 w-5 text-skitm-blue" />,
            faqs: [
                {
                    question:
                        "What companies visit SKITM for campus placements?",
                    answer: "SKITM has a strong placement record with top companies like Infosys, TCS, and many more visiting for campus recruitments.",
                },
                {
                    question: "What is the placement percentage at SKITM?",
                    answer: "SKITM maintains an impressive placement record with over 90% of eligible students getting placed every year. The highest package offered has been 32 LPA and the average package stands at 8 LPA.",
                },
                {
                    question: "Does SKITM provide placement training?",
                    answer: "Yes, SKITM has a dedicated Training and Placement Cell that conducts regular training sessions on aptitude, technical skills, soft skills, and interview preparation.",
                },
            ],
        },
        {
            id: "campus",
            title: "Campus Life",
            icon: <Building className="h-5 w-5 text-skitm-blue" />,
            faqs: [
                {
                    question: "What hostel facilities are available?",
                    answer: "SKITM provides separate hostels for boys and girls with fully furnished rooms, mess facilities, recreational areas, and 24/7 security. Visit our Hostels page for more details.",
                },
                {
                    question: "What extracurricular activities are available?",
                    answer: "SKITM encourages participation in various extracurricular activities including sports, cultural events, technical fests, clubs, and social service initiatives.",
                },
                {
                    question: "Is there a dress code at SKITM?",
                    answer: "Yes, SKITM follows a formal dress code for all academic activities. Students are expected to dress professionally during classes, labs, and official events.",
                },
            ],
        },
        {
            id: "miscellaneous",
            title: "Miscellaneous",
            icon: <Clock className="h-5 w-5 text-skitm-blue" />,
            faqs: [
                {
                    question: "How can I contact the administration?",
                    answer: "You can contact the administration through email at info@skitm.in, by phone at +91-1234567890, or by visiting the campus during office hours (9 AM to 5 PM, Monday to Friday).",
                },
                {
                    question: "Is there medical support available on campus?",
                    answer: "Yes, SKITM has a medical center with qualified doctors and nurses available during campus hours. For emergencies, we have tie-ups with nearby hospitals.",
                },
                {
                    question: "What about internet connectivity on campus?",
                    answer: "The entire campus is Wi-Fi enabled with high-speed internet access available 24/7 to all students and faculty members.",
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={headingRef}
                        className={`text-center mb-16 ${
                            headingVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Quick Answers
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Find answers to common questions about admissions,
                            academics, campus life, and more.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {faqCategories.map((category) => (
                                <a
                                    key={category.id}
                                    href={`#${category.id}`}
                                    className="glassmorphism rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
                                >
                                    <div className="p-2 bg-skitm-blue/10 rounded-full">
                                        {category.icon}
                                    </div>
                                    <span className="font-display font-medium text-skitm-navy">
                                        {category.title}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {faqCategories.map((category) => (
                        <div
                            key={category.id}
                            id={category.id}
                            className="mb-12 scroll-mt-32"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-skitm-blue/10 rounded-full">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-display font-bold text-skitm-navy">
                                    {category.title}
                                </h2>
                            </div>

                            <div className="glassmorphism rounded-xl p-6">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="space-y-4"
                                >
                                    {category.faqs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`${category.id}-item-${index}`}
                                            className="border-b border-gray-200 last:border-0"
                                        >
                                            <AccordionTrigger className="text-left font-display font-medium text-skitm-navy hover:text-skitm-blue transition-colors">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-skitm-gray pt-2">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    ))}

                    <div className="glassmorphism rounded-xl p-8 text-center">
                        <h2 className="text-xl font-display font-bold text-skitm-navy mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-skitm-gray mb-6">
                            Contact our admissions team for personalized
                            assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center justify-center px-6 py-3 border border-skitm-blue text-skitm-blue font-medium rounded-md hover:bg-skitm-blue/10 transition-colors"
                            >
                                Call Us
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-skitm-blue text-white font-medium rounded-md hover:bg-skitm-lightBlue transition-colors"
                            >
                                Contact Form
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Faqs;
