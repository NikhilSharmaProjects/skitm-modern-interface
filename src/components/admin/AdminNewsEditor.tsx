import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { 
  PlusCircle, Save, Trash2, 
  Calendar, FileText, Image as ImageIcon
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/CustomButton';
import { Textarea } from '@/components/ui/textarea';
import { NewsItem, newsService } from '@/services/dataService';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AdminNewsEditor = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentNewsItem, setCurrentNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  
  const form = useForm<Omit<NewsItem, 'id'>>({
    defaultValues: {
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      category: 'news',
      imageUrl: '',
    }
  });
  
  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      try {
        const items = await newsService.getAll();
        setNewsItems(items);
      } catch (error) {
        console.error("Failed to load news items:", error);
        toast.error("Failed to load news items. Using cached data if available.");
      } finally {
        setLoading(false);
      }
    }
    
    loadNews();
  }, []);
  
  const openNewNewsDialog = () => {
    form.reset({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      category: 'news',
      imageUrl: '',
    });
    setCurrentNewsItem(null);
    setIsDialogOpen(true);
  };
  
  const openEditNewsDialog = (newsItem: NewsItem) => {
    form.reset({
      title: newsItem.title,
      description: newsItem.description,
      date: newsItem.date,
      category: newsItem.category,
      imageUrl: newsItem.imageUrl,
    });
    setCurrentNewsItem(newsItem);
    setIsDialogOpen(true);
  };
  
  const onSubmit = async (data: Omit<NewsItem, 'id'>) => {
    try {
      let result;
      
      if (currentNewsItem) {
        // Edit existing news item
        result = await newsService.save({
          ...data,
          id: currentNewsItem.id,
        });
        
        if (result) {
          setNewsItems(prev => prev.map(item => 
            item.id === currentNewsItem.id ? result! : item
          ));
          toast.success("News item updated successfully");
        }
      } else {
        // Create new news item with a temporary ID
        result = await newsService.save({
          ...data,
          id: Date.now().toString(),
        });
        
        if (result) {
          setNewsItems(prev => [...prev, result!]);
          toast.success("News item created successfully");
        }
      }
      
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error saving news item:", error);
      toast.error("Failed to save news item. Please try again.");
    }
  };
  
  const deleteNewsItem = async (id: string) => {
    if (confirm("Are you sure you want to delete this news item?")) {
      try {
        const success = await newsService.delete(id);
        if (success) {
          setNewsItems(prev => prev.filter(item => item.id !== id));
          toast.success("News item deleted successfully");
        }
      } catch (error) {
        console.error("Error deleting news item:", error);
        toast.error("Failed to delete news item. Please try again.");
      }
    }
  };
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-skitm-navy">News Management</h2>
          <Button
            variant="default"
            size="sm"
            onClick={openNewNewsDialog}
            className="bg-skitm-blue hover:bg-skitm-lightBlue text-white"
          >
            <PlusCircle size={16} className="mr-1" />
            New News Item
          </Button>
        </div>
        
        {loading ? (
          <div className="text-center py-8">
            <p>Loading news items...</p>
          </div>
        ) : newsItems.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg">
            <FileText size={32} className="mx-auto text-gray-300 mb-2" />
            <h3 className="text-sm font-medium text-gray-700 mb-1">No news items found</h3>
            <p className="text-xs text-gray-500 mb-4">Create your first news item to get started</p>
            <Button
              variant="outline"
              size="sm"
              onClick={openNewNewsDialog}
            >
              <PlusCircle size={16} className="mr-1" />
              Create News Item
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {newsItems.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                    <div className="flex flex-wrap items-center text-xs text-gray-500 mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span className="mr-3">{item.date}</span>
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">{item.category}</span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => openEditNewsDialog(item)}
                      className="text-gray-500 hover:text-skitm-blue p-1"
                    >
                      <FileText size={16} />
                    </button>
                    <button
                      onClick={() => deleteNewsItem(item.id)}
                      className="text-gray-500 hover:text-red-500 p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{currentNewsItem ? 'Edit News Item' : 'Create New News Item'}</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>News Title</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                        placeholder="Enter news title"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[120px]"
                        placeholder="Enter news description"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          required
                        >
                          <option value="news">News</option>
                          <option value="announcement">Announcement</option>
                          <option value="achievement">Achievement</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Image URL (Optional)</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          placeholder="Image URL"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="default" 
                  className="bg-skitm-blue hover:bg-skitm-lightBlue text-white"
                >
                  <Save size={16} className="mr-1" />
                  {currentNewsItem ? 'Save Changes' : 'Create News Item'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminNewsEditor;
