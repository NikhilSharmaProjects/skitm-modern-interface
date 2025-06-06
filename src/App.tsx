
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, createContext, useState, useContext } from "react";

// Main pages
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

// About Us pages
import AboutSKITM from "./pages/about/AboutSKITM";
import Society from "./pages/about/Society";
import VisionMission from "./pages/about/VisionMission";
import Chairman from "./pages/about/Chairman";
import DirectorsMessage from "./pages/about/DirectorsMessage";
import BoardGovernors from "./pages/about/BoardGovernors";
import LeadershipTeam from "./pages/about/LeadershipTeam";
import BoardAdvisors from "./pages/about/BoardAdvisors";
import Leadership from "./pages/about/Leadership";
import Partners from "./pages/about/Partners";

// Academic pages - Engineering
import Engineering from "./pages/academics/Engineering";
import CSE from "./pages/academics/engineering/CSE";
import ECE from "./pages/academics/engineering/ECE";
import CivilEngineering from "./pages/academics/engineering/CivilEngineering";
import MechanicalEngineering from "./pages/academics/engineering/MechanicalEngineering";
import AppliedScience from "./pages/academics/engineering/AppliedScience";

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
import Campus from "./pages/student-life/Campus";
import Facilities from "./pages/Facilities";
import Sports from "./pages/student-life/Sports";

// Other pages
import NewsEvents from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import CampusTour from "./pages/CampusTour";

// Admin pages
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

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
              <Routes>
                {/* Main pages */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* About Us pages */}
                <Route path="/about-skitm" element={<AboutSKITM />} />
                <Route path="/society" element={<Society />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/chairman" element={<Chairman />} />
                <Route path="/directors-message" element={<DirectorsMessage />} />
                <Route path="/board-governors" element={<BoardGovernors />} />
                <Route path="/leadership-team" element={<LeadershipTeam />} />
                <Route path="/board-advisors" element={<BoardAdvisors />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/partners" element={<Partners />} />
                
                {/* Academic pages */}
                <Route path="/academics" element={<Academics />} />
                <Route path="/departments" element={<Departments />} />
                
                {/* Engineering */}
                <Route path="/engineering" element={<Engineering />} />
                <Route path="/cse" element={<CSE />} />
                <Route path="/ece" element={<ECE />} />
                <Route path="/civil-engineering" element={<CivilEngineering />} />
                <Route path="/mechanical-engineering" element={<MechanicalEngineering />} />
                <Route path="/applied-science" element={<AppliedScience />} />
                
                {/* Management */}
                <Route path="/management" element={<Management />} />
                <Route path="/mba" element={<MBA />} />
                <Route path="/integrated-mba" element={<IntegratedMBA />} />
                <Route path="/mba-plus" element={<MBAPlus />} />
                
                {/* Pharmacy */}
                <Route path="/pharmacy" element={<Pharmacy />} />
                <Route path="/bpharm" element={<BPharma />} />
                <Route path="/mpharm" element={<MPharm />} />
                <Route path="/dpharm" element={<DPharma />} />
                
                {/* Professional Studies */}
                <Route path="/professional-studies" element={<ProfessionalStudies />} />
                <Route path="/bba" element={<BBA />} />
                <Route path="/bcom-ca" element={<BComCA />} />
                <Route path="/bcom-general" element={<BComGeneral />} />
                <Route path="/bcom-honours" element={<BComHonours />} />
                <Route path="/bcom-taxation" element={<BComTaxation />} />
                
                {/* Law */}
                <Route path="/law" element={<Law />} />
                
                {/* Other academic pages */}
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/research" element={<Research />} />
                <Route path="/library" element={<Library />} />
                
                {/* Admission pages */}
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/apply-to-skitm" element={<ApplyToSKITM />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/download-brochure" element={<DownloadBrochure />} />
                <Route path="/faqs" element={<Faqs />} />
                
                {/* Placement pages */}
                <Route path="/placement" element={<Placement />} />
                
                {/* Student Life pages */}
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/hostel" element={<Hostel />} />
                <Route path="/projects-workshops" element={<ProjectsWorkshops />} />
                <Route path="/student-testimonials" element={<StudentTestimonials />} />
                <Route path="/campus" element={<Campus />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/sports" element={<Sports />} />
                
                {/* Other pages */}
                <Route path="/news-events" element={<NewsEvents />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/campus-tour" element={<CampusTour />} />
                
                {/* Admin pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/admin-dashboard" element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                
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
