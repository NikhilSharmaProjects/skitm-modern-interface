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

// Academic pages
import Departments from "./pages/Departments";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Research from "./pages/Research";
import Library from "./pages/Library";

// Admission pages
import Admissions from "./pages/Admissions";
import Fees from "./pages/Fees";
import Scholarships from "./pages/Scholarships";
import Faqs from "./pages/Faqs";

// Campus Life pages
import StudentLife from "./pages/StudentLife";
import Events from "./pages/Events";
import Facilities from "./pages/Facilities";
import Hostels from "./pages/Hostels";

// Other pages
import Placements from "./pages/Placements";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
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
  // Create a client inside the component
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
                
                {/* Academic pages */}
                <Route path="/departments" element={<Departments />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/research" element={<Research />} />
                <Route path="/library" element={<Library />} />
                
                {/* Admission pages */}
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/fees" element={<Fees />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/faqs" element={<Faqs />} />
                
                {/* Campus Life pages */}
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/events" element={<Events />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/hostels" element={<Hostels />} />
                
                {/* Other pages */}
                <Route path="/placements" element={<Placements />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
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
