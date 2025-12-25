
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactCTA = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-skitm-blue/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-skitm-navy/10 rounded-full filter blur-3xl"></div>

            <div
                ref={sectionRef as React.RefObject<HTMLDivElement>}
                className={`container mx-auto px-4 relative z-10 ${
                    sectionVisible ? "animate-fade-in" : "opacity-1"
                }`}
            >
                <div className="max-w-3xl mx-auto glassmorphism rounded-xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-skitm-navy mb-4">
                            Have Questions? Get in Touch!
                        </h2>
                        <p className="text-lg text-skitm-gray">
                            We're here to help you with any queries regarding
                            admissions, courses, campus life, or anything else.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-6 text-center">
                            <Phone
                                size={28}
                                className="mx-auto mb-4 text-skitm-blue"
                            />
                            <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                Call Us
                            </h3>
                            <p className="text-skitm-gray mb-4">
                                Have a quick question? Give us a call.
                            </p>
                            <a
                                href="tel:+919770907113"
                                className="text-skitm-blue hover:text-skitm-navy transition-colors font-medium block"
                            >
                                +91 9770907113
                            </a>
                            <a
                                href="tel:+919713434971"
                                className="text-skitm-blue hover:text-skitm-navy transition-colors font-medium"
                            >
                                +91 9713434971
                            </a>
                        </div>

                        <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-6 text-center">
                            <Mail
                                size={28}
                                className="mx-auto mb-4 text-skitm-blue"
                            />
                            <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                Email Us
                            </h3>
                            <p className="text-skitm-gray mb-4">
                                Send us your queries or feedback.
                            </p>
                            <a
                                href="mailto:info@skitm.in"
                                className="text-skitm-blue hover:text-skitm-navy transition-colors font-medium"
                            >
                                info@skitm.in
                            </a>
                        </div>
                        
                        <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-6 text-center">
                            <MapPin
                                size={28}
                                className="mx-auto mb-4 text-skitm-blue"
                            />
                            <h3 className="text-xl font-semibold text-skitm-navy mb-2">
                                Visit Us
                            </h3>
                            <p className="text-skitm-gray mb-4">
                                Our campus is located in Indore.
                            </p>
                            <p className="text-skitm-blue hover:text-skitm-navy transition-colors font-medium text-sm">
                                Near Ralamandal Sanctuary, Tillore Khurd, Indore - 452020
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link to="/contact">
                            <Button variant="primary" size="lg">
                                Visit Contact Page
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
