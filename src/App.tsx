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

// About pages
import Society from "./pages/about/Society";
import VisionMission from "./pages/about/VisionMission";
import Chairman from "./pages/about/Chairman";
import DirectorsMessage from "./pages/about/DirectorsMessage";
import BoardGovernors from "./pages/about/BoardGovernors";
import LeadershipTeam from "./pages/about/LeadershipTeam";
import BoardAdvisors from "./pages/about/BoardAdvisors";

// Academic pages
import Departments from "./pages/Departments";
import CSE from "./pages/academics/CSE";
import ECE from "./pages/academics/ECE";
import MechanicalEngineering from "./pages/academics/MechanicalEngineering";
import CivilEngineering from "./pages/academics/CivilEngineering";
import MBA from "./pages/academics/MBA";
import IMBA from "./pages/academics/IMBA";
import BBA from "./pages/academics/BBA";
import BPharma from "./pages/academics/BPharma";
import DPharma from "./pages/academics/DPharma";
import Commerce from "./pages/academics/Commerce";
import AppliedSciences from "./pages/academics/AppliedSciences";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Research from "./pages/Research";
import Library from "./pages/Library";

// Admission pages
import Admissions from "./pages/Admissions";
import Apply from "./pages/admissions/Apply";
import OnlineAdmission from "./pages/admissions/OnlineAdmission";
import Fees from "./pages/Fees";
import Scholarships from "./pages/Scholarships";
import AdmissionEnquiry from "./pages/admissions/AdmissionEnquiry";
import Faqs from "./pages/Faqs";

// Campus Life pages
import StudentLife from "./pages/StudentLife";
import Campus from "./pages/campus/Campus";
import Facilities from "./pages/Facilities";
import Hostels from "./pages/Hostels";
import Sports from "./pages/campus/Sports";
import ClubsSocieties from "./pages/campus/ClubsSocieties";
import CulturalSociety from "./pages/campus/CulturalSociety";
import Events from "./pages/Events";

// Placement pages
import Placements from "./pages/Placements";
import PlacementProcess from "./pages/placements/PlacementProcess";
import Recruiters from "./pages/placements/Recruiters";
import PlacementReports from "./pages/placements/PlacementReports";
import CampusRecruitment from "./pages/placements/CampusRecruitment";
import Career from "./pages/placements/Career";
import CRDTeam from "./pages/placements/CRDTeam";

// Partnership pages
import Partners from "./pages/partnerships/Partners";
import OracleAcademy from "./pages/partnerships/OracleAcademy";
import AWSAcademy from "./pages/partnerships/AWSAcademy";
import HarvardX from "./pages/partnerships/HarvardX";
import LinuxFoundation from "./pages/partnerships/LinuxFoundation";
import CourseraAcademy from "./pages/partnerships/CourseraAcademy";
import RedHatAcademy from "./pages/partnerships/RedHatAcademy";
import UiPathAcademy from "./pages/partnerships/UiPathAcademy";

// Cells & Committees pages
import EntrepreneurshipCell from "./pages/cells/EntrepreneurshipCell";
import IncubationCell from "./pages/cells/IncubationCell";
import WomenDevelopmentCell from "./pages/cells/WomenDevelopmentCell";
import IQAC from "./pages/cells/IQAC";
import GrievanceCommittee from "./pages/cells/GrievanceCommittee";
import AntiRagging from "./pages/cells/AntiRagging";
import SCSTCommittee from "./pages/cells/SCSTCommittee";

// Other pages
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";

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
                
                {/* About pages */}
                <Route path="/society" element={<Society />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/chairman" element={<Chairman />} />
                <Route path="/directors-message" element={<DirectorsMessage />} />
                <Route path="/board-governors" element={<BoardGovernors />} />
                <Route path="/leadership-team" element={<LeadershipTeam />} />
                <Route path="/board-advisors" element={<BoardAdvisors />} />
                
                {/* Academic pages */}
                <Route path="/departments" element={<Departments />} />
                <Route path="/cse" element={<CSE />} />
                <Route path="/ece" element={<ECE />} />
                <Route path="/me" element={<MechanicalEngineering />} />
                <Route path="/ce" element={<CivilEngineering />} />
                <Route path="/mba" element={<MBA />} />
                <Route path="/imba" element={<IMBA />} />
                <Route path="/bba" element={<BBA />} />
                <Route path="/bpharm" element={<BPharma />} />
                <Route path="/dpharm" element={<DPharma />} />
                <Route path="/commerce" element={<Commerce />} />
                <Route path="/ash" element={<AppliedSciences />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/research" element={<Research />} />
                <Route path="/library" element={<Library />} />
                
                {/* Admission pages */}
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/online-admission" element={<OnlineAdmission />} />
                <Route path="/fees" element={<Fees />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />
                <Route path="/faqs" element={<Faqs />} />
                
                {/* Campus Life pages */}
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/campus" element={<Campus />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/hostels" element={<Hostels />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/clubs-societies" element={<ClubsSocieties />} />
                <Route path="/cultural-society" element={<CulturalSociety />} />
                <Route path="/events" element={<Events />} />
                
                {/* Placement pages */}
                <Route path="/placements" element={<Placements />} />
                <Route path="/placement-process" element={<PlacementProcess />} />
                <Route path="/recruiters" element={<Recruiters />} />
                <Route path="/placement-reports" element={<PlacementReports />} />
                <Route path="/campus-recruitment" element={<CampusRecruitment />} />
                <Route path="/career" element={<Career />} />
                <Route path="/crd-team" element={<CRDTeam />} />
                
                {/* Partnership pages */}
                <Route path="/partners" element={<Partners />} />
                <Route path="/oracle-academy" element={<OracleAcademy />} />
                <Route path="/aws-academy" element={<AWSAcademy />} />
                <Route path="/harvardx" element={<HarvardX />} />
                <Route path="/linux-foundation" element={<LinuxFoundation />} />
                <Route path="/coursera-academy" element={<CourseraAcademy />} />
                <Route path="/red-hat-academy" element={<RedHatAcademy />} />
                <Route path="/uipath" element={<UiPathAcademy />} />
                
                {/* Cells & Committees pages */}
                <Route path="/entrepreneurship-cell" element={<EntrepreneurshipCell />} />
                <Route path="/incubation-cell" element={<IncubationCell />} />
                <Route path="/women-development-cell" element={<WomenDevelopmentCell />} />
                <Route path="/iqac" element={<IQAC />} />
                <Route path="/grievance-committee" element={<GrievanceCommittee />} />
                <Route path="/anti-ragging" element={<AntiRagging />} />
                <Route path="/sc-st-committee" element={<SCSTCommittee />} />
                
                {/* Other pages */}
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/news" element={<News />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<BlogDetail />} />
                
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
