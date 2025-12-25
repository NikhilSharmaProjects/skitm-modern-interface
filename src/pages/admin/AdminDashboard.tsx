import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/App';
import { 
  BookOpen, FileText, Calendar, Image as ImageIcon, LogOut, 
  PlusCircle, Settings, ChevronRight, Users, FileText as NewsIcon
} from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminBlogEditor from '@/components/admin/AdminBlogEditor';
import AdminEventEditor from '@/components/admin/AdminEventEditor';
import AdminGalleryEditor from '@/components/admin/AdminGalleryEditor';
import AdminNewsEditor from '@/components/admin/AdminNewsEditor';
import AdminSettings from '@/components/admin/AdminSettings';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [blogCount, setBlogCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [newsCount, setNewsCount] = useState(0);
  
  // Load counts from localStorage
  useEffect(() => {
    const savedBlogs = localStorage.getItem('skitm-blogs');
    const savedEvents = localStorage.getItem('skitm-events');
    const savedGallery = localStorage.getItem('skitm-gallery');
    const savedNews = localStorage.getItem('skitm-news');
    
    setBlogCount(savedBlogs ? JSON.parse(savedBlogs).length : 0);
    setEventCount(savedEvents ? JSON.parse(savedEvents).length : 0);
    setGalleryCount(savedGallery ? JSON.parse(savedGallery).length : 0);
    setNewsCount(savedNews ? JSON.parse(savedNews).length : 0);
  }, []);
  
  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate('/');
  };
  
  // Automatically delete old events (15 days after they've passed)
  useEffect(() => {
    const checkForOldEvents = () => {
      const settings = localStorage.getItem('skitm-settings');
      const autoDeleteEnabled = settings 
        ? JSON.parse(settings).preferences.autoDeleteOldEvents 
        : true;
      
      if (autoDeleteEnabled) {
        const savedEvents = localStorage.getItem('skitm-events');
        if (savedEvents) {
          const events = JSON.parse(savedEvents);
          const today = new Date();
          const fifteenDaysAgo = new Date(today);
          fifteenDaysAgo.setDate(today.getDate() - 15);
          
          const filteredEvents = events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= fifteenDaysAgo;
          });
          
          if (filteredEvents.length < events.length) {
            localStorage.setItem('skitm-events', JSON.stringify(filteredEvents));
            setEventCount(filteredEvents.length);
            console.log(`Removed ${events.length - filteredEvents.length} old events`);
          }
        }
      }
    };
    
    checkForOldEvents();
    
    // Check daily
    const interval = setInterval(checkForOldEvents, 86400000); // 24 hours
    return () => clearInterval(interval);
  }, []);
  
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
                    activeTab === 'news' 
                      ? 'bg-skitm-blue/10 text-skitm-blue font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('news')}
                >
                  <NewsIcon size={18} className="mr-2 shrink-0" />
                  <span>News</span>
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
                  <ImageIcon size={18} className="mr-2 shrink-0" />
                  <span>Gallery</span>
                </button>
                
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    activeTab === 'cms'
                      ? 'bg-skitm-blue/10 text-skitm-blue font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => window.open('/admin-cms', '_self')}
                >
                  <Settings size={18} className="mr-2 shrink-0" />
                  <span>Content CMS</span>
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
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="cms">Content CMS</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-display font-bold text-skitm-navy mb-4">
                    Welcome to the Admin Dashboard
                  </h2>
                  <p className="text-gray-600 mb-6">
                    From here, you can manage your college website content, including blogs, news, events, and gallery images.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <FileText className="text-skitm-blue" />
                        <span className="text-xs bg-gray-100 rounded px-2 py-0.5">{blogCount} items</span>
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
                        <NewsIcon className="text-skitm-blue" />
                        <span className="text-xs bg-gray-100 rounded px-2 py-0.5">{newsCount} items</span>
                      </div>
                      <h3 className="text-sm font-medium mb-1">Manage News</h3>
                      <p className="text-xs text-gray-500 mb-3">Add and update news items</p>
                      <button 
                        onClick={() => setActiveTab('news')}
                        className="flex items-center text-xs text-skitm-blue hover:text-skitm-navy"
                      >
                        Go to News <ChevronRight size={14} />
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <Calendar className="text-skitm-blue" />
                        <span className="text-xs bg-gray-100 rounded px-2 py-0.5">{eventCount} items</span>
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
                        <ImageIcon className="text-skitm-blue" />
                        <span className="text-xs bg-gray-100 rounded px-2 py-0.5">{galleryCount} items</span>
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
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <Settings className="text-skitm-blue" />
                      </div>
                      <h3 className="text-sm font-medium mb-1">Settings</h3>
                      <p className="text-xs text-gray-500 mb-3">Configure website settings</p>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className="flex items-center text-xs text-skitm-blue hover:text-skitm-navy"
                      >
                        Go to Settings <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="blogs" className="space-y-6">
                <AdminBlogEditor />
              </TabsContent>
              
              <TabsContent value="news" className="space-y-6">
                <AdminNewsEditor />
              </TabsContent>
              
              <TabsContent value="events" className="space-y-6">
                <AdminEventEditor />
              </TabsContent>
              
              <TabsContent value="gallery" className="space-y-6">
                <AdminGalleryEditor />
              </TabsContent>
              
              <TabsContent value="cms" className="space-y-6">
                {/* Content CMS content */}
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-6">
                <AdminSettings />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
