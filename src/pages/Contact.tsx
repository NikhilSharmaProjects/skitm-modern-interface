import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/CustomButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
    const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={headingRef as React.RefObject<HTMLDivElement>}
                        className={`text-center mb-16 ${
                            headingVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Get in Touch
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Contact Us
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Have questions or need more information? We're here
                            to help. Reach out to us through any of the channels
                            below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="glassmorphism rounded-xl p-8">
                            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                                Send us a Message
                            </h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-skitm-navy mb-1"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-skitm-navy mb-1"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-skitm-navy mb-1"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                                        placeholder="Your subject"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-skitm-navy mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <Button variant="primary" fullWidth>
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        <div>
                            <div className="glassmorphism rounded-xl p-8 mb-8">
                                <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
                                    Contact Information
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue mr-4">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-skitm-navy mb-1">
                                                Address
                                            </h3>
                                            <p className="text-skitm-gray">
                                                SKITM Campus, NH-48,
                                                Indore-Jaipur Highway
                                                <br />
                                                Gurugram, Haryana - 122001,
                                                India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue mr-4">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-skitm-navy mb-1">
                                                Phone
                                            </h3>
                                            <p className="text-skitm-gray">
                                                Admission Helpline: +91 98765
                                                43210
                                                <br />
                                                Main Office: +91 12345 67890
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue mr-4">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-skitm-navy mb-1">
                                                Email
                                            </h3>
                                            <p className="text-skitm-gray">
                                                Admissions: admissions@skitm.edu
                                                <br />
                                                General Inquiries:
                                                info@skitm.edu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glassmorphism rounded-xl p-8">
                                <h2 className="text-lg font-display font-bold text-skitm-navy mb-4">
                                    Campus Map
                                </h2>
                                <div className="h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                                    <p className="text-skitm-gray">
                                        Map Placeholder
                                    </p>
                                </div>
                                <p className="text-sm text-skitm-gray mb-2">
                                    Our campus is conveniently located just off
                                    NH-48, approximately 30 minutes from Indira
                                    Gandhi International Airport.
                                </p>
                                <Button variant="outline" size="sm" fullWidth>
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
