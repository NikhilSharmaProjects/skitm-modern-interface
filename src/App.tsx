import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EnquiryFormPopup } from "@/components/ui/EnquiryFormPopup";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, createContext, useState, useContext } from "react";

// Main pages
import Index from "./pages/Index";
import Contact from "./pages/Contact";

// About Us pages
import AboutSKITM from "./pages/about/AboutSKITM";
import Society from "./pages/about/Society";
import VisionMission from "./pages/about/VisionMission";
import Chairman from "./pages/about/Chairman";
import DirectorsMessage from "./pages/about/DirectorsMessage";
import BoardGovernors from "./pages/about/BoardGovernors";
import LeadershipTeam from "./pages/about/LeadershipTeam";
import AcademicCouncil from "./pages/about/academic";
import BoardAdvisors from "./pages/about/BoardAdvisors";
import Partners from "./pages/about/Partners";

// Academic pages - Engineering
import Engineering from "./pages/academics/Engineering";
import CSE from "./pages/academics/engineering/CSE";
import ECE from "./pages/academics/engineering/ECE";
import CivilEngineering from "./pages/academics/engineering/CivilEngineering";
import MechanicalEngineering from "./pages/academics/engineering/MechanicalEngineering";

// Academic pages - Management
import Management from "./pages/academics/Management";
import MBA from "./pages/academics/management/MBA";
import IntegratedMBA from "./pages/academics/management/IntegratedMBA";
import MBAPlus from "./pages/academics/management/MBAPlus";

// Academic pages - Pharmacy
import Pharmacy from "./pages/academics/Pharmacy";
import BPharma from "./pages/academics/pharmacy/BPharma";
import DPharma from "./pages/academics/pharmacy/DPharma";
import MPharm from "./pages/academics/pharmacy/MPharm";

// Academic pages - Professional Studies
import ProfessionalStudies from "./pages/academics/ProfessionalStudies";
import BBA from "./pages/academics/professional/BBA";
import BComCA from "./pages/academics/professional/BComCA";
import BComGeneral from "./pages/academics/professional/BComGeneral";
import BComHonours from "./pages/academics/professional/BComHonours";
import BComTaxation from "./pages/academics/professional/BComTaxation";

// Academic pages - Law
import Law from "./pages/academics/Law";

// Other academic pages
import Academics from "./pages/Academics";
import Departments from "./pages/Departments";
import Faculty from "./pages/Faculty";
import Research from "./pages/Research";
import Library from "./pages/Library";

// Admission pages
import Admissions from "./pages/Admissions";
import ApplyToSKITM from "./pages/admissions/ApplyToSKITM";
import Scholarships from "./pages/Scholarships";
import DownloadBrochure from "./pages/admissions/DownloadBrochure";
import Faqs from "./pages/Faqs";

// Placement pages
import Placement from "./pages/Placement";

// Student Life pages
import StudentLife from "./pages/StudentLife";
import Hostel from "./pages/student-life/Hostel";
import ProjectsWorkshops from "./pages/student-life/ProjectsWorkshops";
import StudentTestimonials from "./pages/student-life/StudentTestimonials";
import Campus from "./pages/campus/Campus";
import Facilities from "./pages/Facilities";
import Sports from "./pages/student-life/Sports";

// Approvals pages
import AICTE from "./pages/approvals/aicte";
import UGC from "./pages/approvals/ugc";
import RGPV from "./pages/approvals/rgpv";
import DAVV from "./pages/approvals/davv";
import DTE from "./pages/approvals/dte";

// Other pages
import NewsEvents from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs"; // <-- Add this import
import AntiRagging from "./pages/AntiRagging";
import MandatoryDisclosure from "./pages/mandatory-disclosure";
import SCST from "./pages/SCST";
import NaacAGrade from "./pages/NaacAGrade";
import Autonomous from "./pages/Autonomous";
import BTech from "./pages/BTech";
import BALLB from "./pages/BA_LLB";
import Ranking from "./pages/Ranking";

// Admin pages
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";

// Auth context
type AuthContextType = {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return localStorage.getItem("skitm-admin-token") !== null;
    });

    const login = (token: string) => {
        localStorage.setItem("skitm-admin-token", token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("skitm-admin-token");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

// ScrollToTop component to handle scroll position
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    <AuthProvider>
                        <BrowserRouter>
                            <ScrollToTop />
                            <EnquiryFormPopup />
                            <Routes>
                                {/* Main pages */}
                                <Route path="/" element={<Index />} />
                                {/* Redirect /about to /about-skitm since /about is deprecated */}
                                <Route
                                    path="/about-skitm"
                                    element={
                                        <Navigate to="/about-skitm" replace />
                                    }
                                />
                                <Route path="/contact" element={<Contact />} />
                                {/* About Us pages */}
                                <Route
                                    path="/about-skitm"
                                    element={<AboutSKITM />}
                                />
                                <Route path="/society" element={<Society />} />
                                <Route
                                    path="/vision-mission"
                                    element={<VisionMission />}
                                />
                                <Route
                                    path="/chairman"
                                    element={<Chairman />}
                                />
                                <Route
                                    path="/directors-message"
                                    element={<DirectorsMessage />}
                                />
                                <Route
                                    path="/board-governors"
                                    element={<BoardGovernors />}
                                />
                                <Route
                                    path="/leadership-team"
                                    element={<LeadershipTeam />}
                                />
                                <Route
                                    path="/academic-council"
                                    element={<AcademicCouncil />}
                                />
                                <Route
                                    path="/board-advisors"
                                    element={<BoardAdvisors />}
                                />
                                <Route
                                    path="/partners"
                                    element={<Partners />}
                                />
                                {/* Academic pages */}
                                <Route
                                    path="/academics"
                                    element={<Academics />}
                                />
                                <Route
                                    path="/departments"
                                    element={<Departments />}
                                />
                                {/* Engineering */}
                                <Route
                                    path="/engineering"
                                    element={<Engineering />}
                                />
                                <Route path="/cse" element={<CSE />} />
                                <Route path="/ece" element={<ECE />} />
                                <Route
                                    path="/civil-engineering"
                                    element={<CivilEngineering />}
                                />
                                <Route
                                    path="/mechanical-engineering"
                                    element={<MechanicalEngineering />}
                                />
                                {/* Management */}
                                <Route
                                    path="/management"
                                    element={<Management />}
                                />
                                <Route path="/mba" element={<MBA />} />
                                <Route
                                    path="/integrated-mba"
                                    element={<IntegratedMBA />}
                                />
                                <Route path="/mba-plus" element={<MBAPlus />} />
                                {/* Pharmacy */}
                                <Route
                                    path="/pharmacy"
                                    element={<Pharmacy />}
                                />
                                <Route path="/bpharm" element={<BPharma />} />
                                <Route path="/mpharm" element={<MPharm />} />
                                <Route path="/dpharm" element={<DPharma />} />
                                {/* Professional Studies */}
                                <Route
                                    path="/professional-studies"
                                    element={<ProfessionalStudies />}
                                />
                                <Route path="/bba" element={<BBA />} />
                                <Route path="/bcom-ca" element={<BComCA />} />
                                <Route
                                    path="/bcom-general"
                                    element={<BComGeneral />}
                                />
                                <Route
                                    path="/bcom-honours"
                                    element={<BComHonours />}
                                />
                                <Route
                                    path="/bcom-taxation"
                                    element={<BComTaxation />}
                                />
                                {/* Law */}
                                <Route path="/law" element={<Law />} />
                                {/* Other academic pages */}
                                <Route path="/faculty" element={<Faculty />} />
                                <Route
                                    path="/research"
                                    element={<Research />}
                                />
                                <Route path="/library" element={<Library />} />
                                {/* Admission pages */}
                                <Route
                                    path="/admissions"
                                    element={<Admissions />}
                                />
                                <Route
                                    path="/apply-to-skitm"
                                    element={<ApplyToSKITM />}
                                />
                                <Route
                                    path="/scholarships"
                                    element={<Scholarships />}
                                />
                                <Route
                                    path="/download-brochure"
                                    element={<DownloadBrochure />}
                                />
                                <Route path="/faqs" element={<Faqs />} />
                                {/* Placement pages */}
                                <Route
                                    path="/placement"
                                    element={<Placement />}
                                />
                                {/* Student Life pages */}
                                <Route
                                    path="/student-life"
                                    element={<StudentLife />}
                                />
                                <Route path="/hostel" element={<Hostel />} />
                                <Route
                                    path="/projects-workshops"
                                    element={<ProjectsWorkshops />}
                                />
                                <Route
                                    path="/student-testimonials"
                                    element={<StudentTestimonials />}
                                />
                                <Route path="/campus" element={<Campus />} />
                                <Route
                                    path="/facilities"
                                    element={<Facilities />}
                                />
                                <Route path="/sports" element={<Sports />} />
                                {/* Approvals pages */}
                                <Route path="/aicte" element={<AICTE />} />
                                <Route path="/ugc" element={<UGC />} />
                                <Route path="/rgpv" element={<RGPV />} />
                                <Route path="/davv" element={<DAVV />} />
                                <Route path="/dte" element={<DTE />} />
                                {/* Other pages */}
                                <Route path="/gallery" element={<Gallery />} />
                                <Route
                                    path="/anti-ragging"
                                    element={<AntiRagging />}
                                />
                                <Route
                                    path="/mandatory-disclosure"
                                    element={<MandatoryDisclosure />}
                                />
                                <Route
                                    path="/sc-st"
                                    element={<SCST />}
                                />
                                <Route path="/blogs" element={<Blogs />} />{" "}
                                {/* <-- Add Blogs */}
                                {/* New SEO landing pages */}
                                <Route
                                    path="/top-naac-a-grade-college-in-indore"
                                    element={<NaacAGrade />}
                                />
                                <Route
                                    path="/autonomous-college-in-indore"
                                    element={<Autonomous />}
                                />
                                <Route
                                    path="/best-btech-college-in-indore"
                                    element={<BTech />}
                                />
                                <Route
                                    path="/best-ba-llb-college-in-indore"
                                    element={<BALLB />}
                                />
                                <Route path="/rankings" element={<Ranking />} />
                                {/* SEO alias routes for existing pages from CSV */}
                                <Route
                                    path="/b-pharma-college-in-indore"
                                    element={<BPharma />}
                                />
                                <Route
                                    path="/d-pharma-college-in-indore"
                                    element={<DPharma />}
                                />
                                <Route
                                    path="/pharmacy-college-in-indore"
                                    element={<Pharmacy />}
                                />
                                <Route
                                    path="/law-college-in-indore"
                                    element={<Law />}
                                />
                                <Route
                                    path="/best-engineering-college-in-indore"
                                    element={<Engineering />}
                                />
                                <Route
                                    path="/best-college-for-cs-in-indore"
                                    element={<CSE />}
                                />
                                {/* Remove campus tour and top-level news-events nav -- /news-events is still routed below */}
                                <Route
                                    path="/news-events"
                                    element={<NewsEvents />}
                                />
                                {/* Admin pages */}
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/admin-dashboard"
                                    element={
                                        <ProtectedRoute>
                                            <AdminDashboard />
                                        </ProtectedRoute>
                                    }
                                />
                                {/* Catch-all route */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </BrowserRouter>
                    </AuthProvider>
                </TooltipProvider>
            </HelmetProvider>
        </QueryClientProvider>
    );
};

export default App;
