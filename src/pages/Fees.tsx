import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";

const Fees = () => {
    const { ref: headingRef, isVisible: headingVisible } =
        useScrollAnimationDiv();

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
                            Financial Information
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Fee Structure
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Transparent information about tuition and other fees
                            for all programs at SKITM.
                        </p>
                    </div>

                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                            Undergraduate Programs
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-skitm-blue/10">
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Program
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Tuition Fee (Per Year)
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Development Fee
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Other Charges
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Total (First Year)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-3">
                                            B.Tech (CSE)
                                        </td>
                                        <td className="px-4 py-3">₹1,20,000</td>
                                        <td className="px-4 py-3">₹15,000</td>
                                        <td className="px-4 py-3">₹25,000</td>
                                        <td className="px-4 py-3 font-semibold">
                                            ₹1,60,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3">
                                            B.Tech (ME)
                                        </td>
                                        <td className="px-4 py-3">₹1,10,000</td>
                                        <td className="px-4 py-3">₹15,000</td>
                                        <td className="px-4 py-3">₹25,000</td>
                                        <td className="px-4 py-3 font-semibold">
                                            ₹1,50,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3">
                                            B.Tech (ECE)
                                        </td>
                                        <td className="px-4 py-3">₹1,15,000</td>
                                        <td className="px-4 py-3">₹15,000</td>
                                        <td className="px-4 py-3">₹25,000</td>
                                        <td className="px-4 py-3 font-semibold">
                                            ₹1,55,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3">
                                            B.Tech (CE)
                                        </td>
                                        <td className="px-4 py-3">₹1,05,000</td>
                                        <td className="px-4 py-3">₹15,000</td>
                                        <td className="px-4 py-3">₹25,000</td>
                                        <td className="px-4 py-3 font-semibold">
                                            ₹1,45,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3">
                                            B.Tech (EE)
                                        </td>
                                        <td className="px-4 py-3">₹1,10,000</td>
                                        <td className="px-4 py-3">₹15,000</td>
                                        <td className="px-4 py-3">₹25,000</td>
                                        <td className="px-4 py-3 font-semibold">
                                            ₹1,50,000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                            Postgraduate Programs
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-skitm-blue/10">
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Program
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Tuition Fee (Per Year)
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Development Fee
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Other Charges
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-skitm-navy">
                                            Total (First Year)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-3">MBA</td>
                                        <td className="px-4 py-3">₹1,50,000</td>
                                        <td className="px-4 py-3">₹25,000</td>
                                        <td className="px-4 py-3">₹35,000</td>
                                        <td className="px-4 py-3 font-semibold">
                                            ₹2,10,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3">PhD</td>
                                        <td className="px-4 py-3">₹75,000</td>
                                        <td className="px-4 py-3">₹15,000</td>
                                        <td className="px-4 py-3">₹20,000</td>
                                        <td className="px-4 py-3 font-semibold">
                                            ₹1,10,000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                            Additional Information
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Payment Schedule
                                </h3>
                                <p className="text-skitm-gray mb-4">
                                    Fees can be paid in two equal installments
                                    per academic year.
                                </p>
                                <ul className="text-sm text-skitm-gray space-y-2">
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>
                                            First installment: At the time of
                                            admission/beginning of academic year
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>
                                            Second installment: Before the
                                            commencement of the second semester
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Payment Methods
                                </h3>
                                <ul className="text-sm text-skitm-gray space-y-2">
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>
                                            Online payment through the student
                                            portal
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>
                                            Demand Draft in favor of "SKITM"
                                            payable at Indore
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-skitm-blue flex-shrink-0 mr-2 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>
                                            NEFT/RTGS transfer to the
                                            institute's bank account
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                    Refund Policy
                                </h3>
                                <p className="text-skitm-gray mb-2">
                                    Refund of fees in case of withdrawal is as
                                    per the guidelines of the regulatory
                                    authorities.
                                </p>
                                <p className="text-skitm-gray mb-2">
                                    Please contact the accounts department for
                                    specific details regarding refunds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Fees;
