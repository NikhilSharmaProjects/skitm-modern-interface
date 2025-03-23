
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main pages
import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Academic pages
import Departments from "./pages/Departments";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Research from "./pages/Research";

// These will be developed in future iterations if requested
import Admissions from "./pages/Admissions";
import Fees from "./pages/Fees";
import Scholarships from "./pages/Scholarships";
import Faqs from "./pages/Faqs";
import StudentLife from "./pages/StudentLife";
import Events from "./pages/Events";
import Facilities from "./pages/Facilities";
import Hostels from "./pages/Hostels";
import Placements from "./pages/Placements";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";

const App = () => {
  // Create a client inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            
            {/* Academic pages */}
            <Route path="/departments" element={<Departments />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/research" element={<Research />} />
            
            {/* Additional pages */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/events" element={<Events />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/hostels" element={<Hostels />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
