import { useState } from "react";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";

export default function ContactForm() {
    const [result, setResult] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "1ea2dd85-2e1e-4a6b-acf6-36cf67abc733");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                setResult("success");
                (event.target as HTMLFormElement).reset();
                setTimeout(() => setResult(""), 3000);
            } else {
                setResult("error");
            }
        } catch (error) {
            setResult("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={onSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-skitm-navy mb-2"
                    >
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-skitm-navy mb-2"
                    >
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition"
                        placeholder="Enter your email address"
                    />
                </div>

                {/* Phone Input */}
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-skitm-navy mb-2"
                    >
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition"
                        placeholder="Enter your phone number"
                    />
                </div>

                {/* Subject Input */}
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-skitm-navy mb-2"
                    >
                        Subject *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition"
                        placeholder="What is this about?"
                    />
                </div>

                {/* Message Textarea */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-skitm-navy mb-2"
                    >
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skitm-blue focus:border-transparent transition resize-none"
                        placeholder="Enter your message here..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-skitm-blue hover:bg-skitm-blue/90 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <Loader className="h-5 w-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </button>

                {/* Success Message */}
                {result === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <p className="text-green-800 font-medium">
                            Thank you! Your message has been sent successfully.
                            We'll get back to you soon.
                        </p>
                    </div>
                )}

                {/* Error Message */}
                {result === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                        <p className="text-red-800 font-medium">
                            Something went wrong. Please try again later.
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
}
