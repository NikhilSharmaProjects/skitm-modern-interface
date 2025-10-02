import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import Button from "@/components/ui/CustomButton";
import { toast } from "sonner";
import { Loader2, Shield } from "lucide-react";
import { useAuth } from "@/App";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
            toast.error("Please enter both username and password");
            return;
        }

        setIsLoading(true);

        // Simple credential check
        if (username === "admin" && password === "demo123") {
            // Use setTimeout to simulate login time for a smoother experience
            setTimeout(() => {
                login("admin-token-12345");
                toast.success("Login successful!");
                navigate("/admin-dashboard");
                setIsLoading(false);
            }, 800);
        } else {
            setTimeout(() => {
                toast.error("Invalid credentials. Please try again.");
                setIsLoading(false);
            }, 800);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Gallery/GalleryImage (9).png"
                overlayOpacity={0.7}
                className="min-h-[100vh]"
            >
                <div className="max-w-md mx-auto glassmorphism rounded-xl p-8">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-skitm-blue/20 backdrop-blur-sm rounded-full">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-display font-bold text-white mb-2">
                            Admin Login
                        </h1>
                        <p className="text-blue-100">
                            Please enter your credentials to continue
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-white mb-1"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-white mb-1"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="text-right">
                            <a
                                href="#"
                                className="text-sm text-blue-100 hover:text-white transition-colors"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Signing In...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-blue-100">
                            Need help? Contact the IT department at{" "}
                            <a
                                href="mailto:it@skitm.in"
                                className="text-white hover:text-blue-200 transition-colors"
                            >
                                it@skitm.in
                            </a>
                        </p>
                    </div>

                    <div className="mt-4 p-3 bg-amber-500/20 border border-amber-400/30 rounded-md backdrop-blur-sm">
                        <p className="text-sm text-amber-100">
                            <strong>Login Access:</strong> Use username{" "}
                            <code className="bg-white/20 px-1 rounded">
                                admin
                            </code>{" "}
                            and password{" "}
                            <code className="bg-white/20 px-1 rounded">
                                demo123
                            </code>{" "}
                            to login.
                        </p>
                    </div>
                </div>
            </ParallaxSection>

            <Footer />
        </div>
    );
};

export default Login;
