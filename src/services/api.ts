
import { toast } from "sonner";

const API_URL = "https://api.skitm.in"; // Replace with actual API URL

interface NewsEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  category: string;
}

interface Department {
  id: string;
  name: string;
  hod: string;
  description: string;
  image: string;
}

interface Course {
  id: string;
  name: string;
  departmentId: string;
  duration: string;
  description: string;
  outcomes: string[];
}

interface Faculty {
  id: string;
  name: string;
  designation: string;
  departmentId: string;
  qualification: string;
  experience: string;
  imageUrl: string;
}

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
}

interface PlacementStat {
  year: string;
  totalStudents: number;
  placedStudents: number;
  highestPackage: string;
  averagePackage: string;
}

// Function to handle API errors
const handleApiError = (error: any, customMessage?: string) => {
  console.error(error);
  toast.error(customMessage || "An error occurred. Please try again later.");
};

// Fetch all news and events
export const fetchNewsEvents = async (): Promise<NewsEvent[]> => {
  try {
    const response = await fetch(`${API_URL}/news-events`);
    if (!response.ok) throw new Error("Failed to fetch news events");
    
    return await response.json();
  } catch (error) {
    handleApiError(error, "Failed to load news and events");
    return [];
  }
};

// Fetch departments
export const fetchDepartments = async (): Promise<Department[]> => {
  try {
    const response = await fetch(`${API_URL}/departments`);
    if (!response.ok) throw new Error("Failed to fetch departments");
    
    return await response.json();
  } catch (error) {
    handleApiError(error, "Failed to load departments");
    return [];
  }
};

// Fetch courses
export const fetchCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch(`${API_URL}/courses`);
    if (!response.ok) throw new Error("Failed to fetch courses");
    
    return await response.json();
  } catch (error) {
    handleApiError(error, "Failed to load courses");
    return [];
  }
};

// Fetch faculty by department
export const fetchFacultyByDepartment = async (departmentId: string): Promise<Faculty[]> => {
  try {
    const response = await fetch(`${API_URL}/faculty?departmentId=${departmentId}`);
    if (!response.ok) throw new Error("Failed to fetch faculty");
    
    return await response.json();
  } catch (error) {
    handleApiError(error, "Failed to load faculty information");
    return [];
  }
};

// Fetch gallery items
export const fetchGalleryItems = async (category?: string): Promise<GalleryItem[]> => {
  try {
    const url = category 
      ? `${API_URL}/gallery?category=${category}` 
      : `${API_URL}/gallery`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch gallery items");
    
    return await response.json();
  } catch (error) {
    handleApiError(error, "Failed to load gallery");
    return [];
  }
};

// Fetch placement statistics
export const fetchPlacementStats = async (): Promise<PlacementStat[]> => {
  try {
    const response = await fetch(`${API_URL}/placement-stats`);
    if (!response.ok) throw new Error("Failed to fetch placement stats");
    
    return await response.json();
  } catch (error) {
    handleApiError(error, "Failed to load placement statistics");
    return [];
  }
};

// Contact form submission
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactForm): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) throw new Error("Failed to submit form");
    
    toast.success("Your message has been sent successfully!");
    return true;
  } catch (error) {
    handleApiError(error, "Failed to submit your message. Please try again.");
    return false;
  }
};

// Admin login
export const adminLogin = async (username: string, password: string): Promise<{token: string} | null> => {
  try {
    const response = await fetch(`${API_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    if (!response.ok) throw new Error("Invalid credentials");
    
    const data = await response.json();
    
    // Store token in localStorage
    localStorage.setItem('skitm-admin-token', data.token);
    
    toast.success("Login successful!");
    return data;
  } catch (error) {
    handleApiError(error, "Login failed. Please check your credentials.");
    return null;
  }
};

// Logout function
export const adminLogout = (): void => {
  localStorage.removeItem('skitm-admin-token');
  toast.success("Logged out successfully!");
};
