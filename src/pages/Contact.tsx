import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: <Phone className="h-8 w-8 text-white" />,
            label: "Phone",
            value: "+91 9770907100",
        },
        {
            icon: <Mail className="h-8 w-8 text-white" />,
            label: "Email",
            value: "info@skitm.in",
        },
        {
            icon: <MapPin className="h-8 w-8 text-white" />,
            label: "Address",
            value: "Indore, Madhya Pradesh",
        },
        {
            icon: <Clock className="h-8 w-8 text-white" />,
            label: "Office Hours",
            value: "9 AM - 4 PM",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.6}
                className="min-h-[70vh]"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        Get in Touch
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        We're here to help you with your educational journey
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                        {info.icon}
                                    </div>
                                </div>
                                <div className="font-display font-bold text-lg mb-1">
                                    {info.label}
                                </div>
                                <div className="text-sm md:text-base text-blue-200">
                                    {info.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* Contact Form Section */}
                <section className="section-container bg-white">
                    <div className="image-first-block">
                        <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-skitm-blue/10 to-skitm-navy/10 rounded-2xl h-[500px] flex items-center justify-center shadow-2xl">
                                <div className="text-center space-y-4">
                                    <MapPin className="h-16 w-16 text-skitm-blue mx-auto" />
                                    <h3 className="text-2xl font-display font-bold text-skitm-navy">
                                        Visit Our Campus
                                    </h3>
                                    <p className="text-skitm-gray">
                                        Interactive map and directions coming
                                        soon
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="image-first-content order-1 lg:order-2">
                            <h3 className="section-title">Visit SKITM</h3>
                            <p className="text-body-lg text-skitm-gray mb-6">
                                Plan your visit to our beautiful campus and
                                experience the SKITM difference firsthand.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-skitm-blue mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-skitm-gray">
                                        Near Ralamandal Sanctuary, Tillore
                                        Khurd, Indore - 452020, Madhya Pradesh
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 text-skitm-blue mr-3 flex-shrink-0" />
                                    <a
                                        href="tel:+919770907100"
                                        className="text-skitm-gray hover:text-skitm-blue transition-colors"
                                    >
                                        +91 9770907100
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 text-skitm-blue mr-3 flex-shrink-0" />
                                    <a
                                        href="mailto:info@skitm.in"
                                        className="text-skitm-gray hover:text-skitm-blue transition-colors"
                                    >
                                        info@skitm.in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect With Us Parallax */}
                <ParallaxSection
                    backgroundImage="Background.png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Connect With Us
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Campus Tours
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Admission Guidance
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Career Counseling
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                24/7 Support
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
