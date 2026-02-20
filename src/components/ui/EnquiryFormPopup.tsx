import React, { useState } from "react";
import { X, Send, MessageCircle, Minimize2, Maximize2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface EnquiryFormPopupProps {
    className?: string;
}

export const EnquiryFormPopup: React.FC<EnquiryFormPopupProps> = ({
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "general",
        message: "",
    });

    const categories = [
        { value: "general", label: "General Inquiry" },
        { value: "admission", label: "Admission" },
        { value: "course", label: "Course Information" },
        { value: "campus", label: "Campus Tour" },
        { value: "placement", label: "Placement" },
        { value: "other", label: "Other" },
    ];

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Form Data:", formData);


            // ================ Backend =====================

            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast({
                title: "Enquiry Submitted!",
                description:
                    "We'll get back to you soon. Thank you for reaching out!",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                category: "general",
                message: "",
            });

            // Close form after 2 seconds
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to submit enquiry. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button - Always Visible */}
            <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="group relative w-35 h-10 md:w-35 md:h-10 p-2 bg-skitm-blue hover:bg-skitm-lightBlue text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
                        aria-label="Open enquiry form"
                    >
                        {/* <MessageCircle size={24} className="md:w-6 md:h-6" /> */}
                        {"Enquire Now"}
                    </button>
                )}
            </div>

            {/* Popup Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end md:justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Popup Content */}
                    <div
                        className={`relative w-full md:w-[500px] transition-all duration-300 ease-out ${
                            isMinimized
                                ? "h-14 md:h-16"
                                : "h-[600px] md:h-[700px]"
                        }`}
                    >
                        {/* Header */}
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-skitm-navy to-skitm-blue text-white rounded-t-2xl px-6 py-4 flex items-center justify-between shadow-lg h-14 md:h-16">
                            <div className="flex items-center gap-3">
                                <MessageCircle
                                    size={20}
                                    className="md:w-5 md:h-5"
                                />
                                <div>
                                    <h3 className="font-display font-bold text-lg md:text-xl">
                                        Quick Enquiry
                                    </h3>
                                    {!isMinimized && (
                                        <p className="text-xs text-blue-100">
                                            We're here to help
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                    aria-label={
                                        isMinimized ? "Maximize" : "Minimize"
                                    }
                                >
                                    {isMinimized ? (
                                        <Maximize2 size={18} />
                                    ) : (
                                        <Minimize2 size={18} />
                                    )}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Form Content */}
                        {!isMinimized && (
                            <div className="absolute top-14 md:top-16 left-0 right-0 bottom-0 bg-white rounded-b-2xl overflow-y-auto shadow-2xl">
                                <form
                                    onSubmit={handleSubmit}
                                    className="p-6 space-y-4"
                                >
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-semibold text-skitm-navy"
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-skitm-navy"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>

                                    {/* Phone Field */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-semibold text-skitm-navy"
                                        >
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            required
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>

                                    {/* Category Select */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="category"
                                            className="block text-sm font-semibold text-skitm-navy"
                                        >
                                            Category *
                                        </label>
                                        <select
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                        >
                                            {categories.map((cat) => (
                                                <option
                                                    key={cat.value}
                                                    value={cat.value}
                                                >
                                                    {cat.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Subject Field */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-semibold text-skitm-navy"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What is this about?"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-skitm-navy"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us more about your enquiry..."
                                            rows={3}
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-skitm-blue to-skitm-lightBlue text-white font-semibold rounded-lg hover:shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Send Enquiry
                                            </>
                                        )}
                                    </button>

                                    {/* Footer Text */}
                                    <p className="text-xs text-gray-500 text-center">
                                        We typically respond within 24 hours
                                    </p>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default EnquiryFormPopup;
