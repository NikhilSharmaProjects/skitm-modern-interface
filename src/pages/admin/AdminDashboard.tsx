
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/App';
import { 
  BookOpen, FileText, Calendar, Image, LogOut, 
  PlusCircle, Settings, ChevronRight, Users
} from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminBlogEditor from '@/components/admin/AdminBlogEditor';
import AdminEventEditor from '@/components/admin/AdminEventEditor';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-display font-bold text-skitm-navy">SKITM Admin</h1>
            <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Admin Access
            </span>
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center text-sm text-gray-600 hover:text-skitm-navy transition-colors"
          >
            <LogOut size={16} className="mr-1" />
            Logout
          </button>
        </div>
      </header>
      
      {/* Admin Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-1 mb-6">
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    activeTab === 'overview' 
                      ? 'bg-skitm-blue/10 text-skitm-blue font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  <BookOpen size={18} className="mr-2 shrink-0" />
                  <span>Overview</span>
                </button>
                
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    activeTab === 'blogs' 
                      ? 'bg-skitm-blue/10 text-skitm-blue font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('blogs')}
                >
                  <FileText size={18} className="mr-2 shrink-0" />
                  <span>Blogs</span>
                </button>
                
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    activeTab === 'events' 
                      ? 'bg-skitm-blue/10 text-skitm-blue font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('events')}
                >
                  <Calendar size={18} className="mr-2 shrink-0" />
                  <span>Events</span>
                </button>
                
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    activeTab === 'gallery' 
                      ? 'bg-skitm-blue/10 text-skitm-blue font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('gallery')}
                >
                  <Image size={18} className="mr-2 shrink-0" />
                  <span>Gallery</span>
                </button>
                
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    activeTab === 'settings' 
                      ? 'bg-skitm-blue/10 text-skitm-blue font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings size={18} className="mr-2 shrink-0" />
                  <span>Settings</span>
                </button>
              </div>
              
              <div className="bg-gray-50 rounded-md p-3">
                <p className="text-xs text-gray-500 mb-2">
                  Logged in as <span className="font-medium">Admin</span>
                </p>
                <button 
                  onClick={handleLogout}
                  className="text-xs text-skitm-blue hover:text-skitm-navy"
                >
                  Switch account
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="hidden">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="blogs">Blogs</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-display font-bold text-skitm-navy mb-4">
                    Welcome to the Admin Dashboard
                  </h2>
                  <p className="text-gray-600 mb-6">
                    From here, you can manage your college website content, including blogs, events, and gallery images.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <FileText className="text-skitm-blue" />
                        <span className="text-xs bg-gray-100 rounded px-2 py-0.5">0 items</span>
                      </div>
                      <h3 className="text-sm font-medium mb-1">Manage Blogs</h3>
                      <p className="text-xs text-gray-500 mb-3">Create and edit blog posts</p>
                      <button 
                        onClick={() => setActiveTab('blogs')}
                        className="flex items-center text-xs text-skitm-blue hover:text-skitm-navy"
                      >
                        Go to Blogs <ChevronRight size={14} />
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <Calendar className="text-skitm-blue" />
                        <span className="text-xs bg-gray-100 rounded px-2 py-0.5">0 items</span>
                      </div>
                      <h3 className="text-sm font-medium mb-1">Manage Events</h3>
                      <p className="text-xs text-gray-500 mb-3">Add and update campus events</p>
                      <button 
                        onClick={() => setActiveTab('events')}
                        className="flex items-center text-xs text-skitm-blue hover:text-skitm-navy"
                      >
                        Go to Events <ChevronRight size={14} />
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <Image className="text-skitm-blue" />
                        <span className="text-xs bg-gray-100 rounded px-2 py-0.5">0 items</span>
                      </div>
                      <h3 className="text-sm font-medium mb-1">Manage Gallery</h3>
                      <p className="text-xs text-gray-500 mb-3">Upload and organize images</p>
                      <button 
                        onClick={() => setActiveTab('gallery')}
                        className="flex items-center text-xs text-skitm-blue hover:text-skitm-navy"
                      >
                        Go to Gallery <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="blogs" className="space-y-6">
                <AdminBlogEditor />
              </TabsContent>
              
              <TabsContent value="events" className="space-y-6">
                <AdminEventEditor />
              </TabsContent>
              
              <TabsContent value="gallery" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-display font-bold text-skitm-navy mb-4">
                    Gallery Management
                  </h2>
                  <p className="text-gray-500">
                    This feature is coming soon. You'll be able to upload and manage gallery images here.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-display font-bold text-skitm-navy mb-4">
                    Account Settings
                  </h2>
                  <p className="text-gray-500">
                    This feature is coming soon. You'll be able to manage your account settings here.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
