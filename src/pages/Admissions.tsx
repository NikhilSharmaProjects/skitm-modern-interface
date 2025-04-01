import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import {
    GraduationCap,
    FileText,
    CalendarCheck,
    CheckCircle,
    XCircle,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Admissions = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();
    const { ref: processRef, isVisible: processVisible } =
        useScrollAnimationDiv();
    const { ref: eligibilityRef, isVisible: eligibilityVisible } =
        useScrollAnimationDiv();

    // Admission process steps
    const admissionSteps = [
        {
            icon: <FileText className="h-8 w-8 text-white" />,
            title: "Submit Application",
            description:
                "Fill out the online application form with all required personal and academic details.",
        },
        {
            icon: <CalendarCheck className="h-8 w-8 text-white" />,
            title: "Entrance Examination",
            description:
                "Appear for the university entrance exam or submit valid GATE/CAT/MAT scores.",
        },
        {
            icon: <GraduationCap className="h-8 w-8 text-white" />,
            title: "Document Verification",
            description:
                "Submit original documents for verification as per the checklist provided.",
        },
        {
            icon: <CheckCircle className="h-8 w-8 text-white" />,
            title: "Admission Confirmation",
            description:
                "Pay the admission fee and complete the enrollment process to secure your seat.",
        },
    ];

    // Eligibility criteria
    const eligibilityCriteria = {
        undergraduate: [
            "Completed 10+2 or equivalent with minimum 60% aggregate in PCM subjects",
            "Valid score in JEE Main/State level entrance examination",
            "Age not more than 23 years as of 1st July of the admission year",
        ],
        postgraduate: [
            "Bachelor's degree in relevant discipline with minimum 60% aggregate",
            "Valid GATE/CAT/MAT/university entrance test score",
            "Minimum 2 years of work experience (for certain programs)",
        ],
        phd: [
            "Master's degree in relevant discipline with minimum 65% aggregate",
            "Qualified UGC-NET/CSIR/university research entrance test",
            "Research proposal aligned with institute's research areas",
        ],
    };

    // Required documents
    const requiredDocuments = [
        "Completed application form with recent photograph",
        "10th and 12th mark sheets and certificates",
        "Undergraduate/graduate degree certificates and mark sheets (for PG/PhD)",
        "Valid entrance examination score card",
        "Transfer certificate from last attended institution",
        "Migration certificate (if applicable)",
        "Character certificate from last attended institution",
        "Four passport size photographs",
        "Valid ID proof (Aadhar/Passport/Driving License)",
        "Caste/Category certificate (if applicable)",
        "Income certificate (if applying for need-based scholarship)",
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
                            Join Our Institution
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Admission Process
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Take the first step towards a successful career by
                            applying to SKITM's prestigious programs.
                        </p>
                    </div>

                    {/* Admission Steps */}
                    <div
                        ref={processRef}
                        className={`mb-16 ${
                            processVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-10">
                            How to Apply
                        </h2>

                        <div className="relative">
                            {/* Steps Connector */}
                            <div className="hidden md:block absolute top-0 left-1/2 h-full w-1 bg-skitm-blue/20 -translate-x-1/2 z-0"></div>

                            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 gap-8">
                                {admissionSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`flex md:items-center gap-6 ${
                                            index % 2 === 0
                                                ? "md:flex-row md:justify-end md:text-right"
                                                : "md:flex-row-reverse md:justify-end"
                                        }`}
                                    >
                                        <div className="flex-1 glassmorphism rounded-xl p-6 hover:shadow-md transition-shadow">
                                            <h3 className="text-xl font-display font-bold text-skitm-navy mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-skitm-gray">
                                                {step.description}
                                            </p>
                                        </div>

                                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-skitm-blue flex items-center justify-center z-10 shadow-md">
                                            {step.icon}
                                            <span className="sr-only">
                                                Step {index + 1}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Eligibility Criteria */}
                    <div
                        ref={eligibilityRef}
                        className={`mb-16 ${
                            eligibilityVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-10">
                            Eligibility Criteria
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glassmorphism rounded-xl overflow-hidden">
                                <div className="bg-skitm-navy py-3 px-6">
                                    <h3 className="text-xl font-display font-bold text-white">
                                        Undergraduate Programs
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {eligibilityCriteria.undergraduate.map(
                                            (criterion, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-skitm-gray">
                                                        {criterion}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="glassmorphism rounded-xl overflow-hidden">
                                <div className="bg-skitm-navy py-3 px-6">
                                    <h3 className="text-xl font-display font-bold text-white">
                                        Postgraduate Programs
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {eligibilityCriteria.postgraduate.map(
                                            (criterion, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-skitm-gray">
                                                        {criterion}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="glassmorphism rounded-xl overflow-hidden">
                                <div className="bg-skitm-navy py-3 px-6">
                                    <h3 className="text-xl font-display font-bold text-white">
                                        PhD Programs
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {eligibilityCriteria.phd.map(
                                            (criterion, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-skitm-gray">
                                                        {criterion}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Required Documents */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-10">
                            Required Documents
                        </h2>

                        <div className="glassmorphism rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                {requiredDocuments.map((document, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <FileText className="h-5 w-5 text-skitm-blue flex-shrink-0 mt-0.5" />
                                        <span className="text-skitm-gray">
                                            {document}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Important Dates */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-10">
                            Important Dates
                        </h2>

                        <div className="glassmorphism rounded-xl p-8">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-skitm-navy">
                                        <tr>
                                            <th className="px-6 py-3 font-display">
                                                Event
                                            </th>
                                            <th className="px-6 py-3 font-display">
                                                Undergraduate
                                            </th>
                                            <th className="px-6 py-3 font-display">
                                                Postgraduate
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 font-medium">
                                                Application Start Date
                                            </td>
                                            <td className="px-6 py-4">
                                                15th January 2023
                                            </td>
                                            <td className="px-6 py-4">
                                                1st February 2023
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-6 py-4 font-medium">
                                                Application Deadline
                                            </td>
                                            <td className="px-6 py-4">
                                                30th April 2023
                                            </td>
                                            <td className="px-6 py-4">
                                                15th May 2023
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 font-medium">
                                                Entrance Examination
                                            </td>
                                            <td className="px-6 py-4">
                                                15th May 2023
                                            </td>
                                            <td className="px-6 py-4">
                                                1st June 2023
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-6 py-4 font-medium">
                                                Result Declaration
                                            </td>
                                            <td className="px-6 py-4">
                                                10th June 2023
                                            </td>
                                            <td className="px-6 py-4">
                                                20th June 2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-medium">
                                                Commencement of Classes
                                            </td>
                                            <td className="px-6 py-4">
                                                1st August 2023
                                            </td>
                                            <td className="px-6 py-4">
                                                15th August 2023
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Application Fee */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-10">
                            Application Fee
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glassmorphism rounded-xl p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                    Undergraduate
                                </h3>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹1,200
                                </div>
                                <p className="text-sm text-skitm-gray mb-4">
                                    General/OBC Category
                                </p>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹800
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    SC/ST/PwD Category
                                </p>
                            </div>

                            <div className="glassmorphism rounded-xl p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                    Postgraduate
                                </h3>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹1,500
                                </div>
                                <p className="text-sm text-skitm-gray mb-4">
                                    General/OBC Category
                                </p>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹1,000
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    SC/ST/PwD Category
                                </p>
                            </div>

                            <div className="glassmorphism rounded-xl p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-skitm-navy mb-3">
                                    PhD
                                </h3>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹2,000
                                </div>
                                <p className="text-sm text-skitm-gray mb-4">
                                    General/OBC Category
                                </p>
                                <div className="text-3xl font-bold text-skitm-blue mb-3">
                                    ₹1,500
                                </div>
                                <p className="text-sm text-skitm-gray">
                                    SC/ST/PwD Category
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="glassmorphism rounded-xl p-8 bg-gradient-to-r from-skitm-navy to-skitm-blue text-white">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-display font-bold mb-4">
                                Ready to Begin Your Journey?
                            </h2>
                            <p className="mb-8">
                                Take the first step towards your future career
                                by applying today or contact our admissions team
                                for guidance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="px-6 py-3 bg-white text-skitm-navy font-medium rounded-md hover:bg-opacity-90 transition-colors"
                                >
                                    Contact Admissions
                                </Link>
                                <Link
                                    to="/fees"
                                    className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                                >
                                    View Fee Structure
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Admissions;
