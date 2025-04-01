
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { 
  PlusCircle, Save, Trash2, 
  Calendar, FileText, Image
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/CustomButton';
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

// Types for gallery management
interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
}

const categories = ["Campus", "Events", "Workshops", "Sports", "Cultural", "Research"];

const AdminGalleryEditor = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const savedGallery = localStorage.getItem('skitm-gallery');
    return savedGallery ? JSON.parse(savedGallery) : [];
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<GalleryItem | null>(null);
  
  const form = useForm<Omit<GalleryItem, 'id'>>({
    defaultValues: {
      title: '',
      imageUrl: '',
      category: 'Campus',
      date: new Date().toISOString().split('T')[0]
    }
  });
  
  const openNewItemDialog = () => {
    form.reset({
      title: '',
      imageUrl: '',
      category: 'Campus',
      date: new Date().toISOString().split('T')[0]
    });
    setCurrentItem(null);
    setIsDialogOpen(true);
  };
  
  const openEditItemDialog = (item: GalleryItem) => {
    form.reset({
      title: item.title,
      imageUrl: item.imageUrl,
      category: item.category,
      date: item.date
    });
    setCurrentItem(item);
    setIsDialogOpen(true);
  };
  
  const onSubmit = (data: Omit<GalleryItem, 'id'>) => {
    if (currentItem) {
      // Edit existing item
      const updatedItems = galleryItems.map(item => 
        item.id === currentItem.id 
          ? { ...item, ...data } 
          : item
      );
      setGalleryItems(updatedItems);
      localStorage.setItem('skitm-gallery', JSON.stringify(updatedItems));
      toast.success("Gallery item updated successfully");
    } else {
      // Create new item
      const newItem: GalleryItem = {
        id: Date.now().toString(),
        ...data
      };
      const updatedItems = [...galleryItems, newItem];
      setGalleryItems(updatedItems);
      localStorage.setItem('skitm-gallery', JSON.stringify(updatedItems));
      toast.success("Gallery item added successfully");
    }
    setIsDialogOpen(false);
  };
  
  const deleteItem = (id: string) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      const updatedItems = galleryItems.filter(item => item.id !== id);
      setGalleryItems(updatedItems);
      localStorage.setItem('skitm-gallery', JSON.stringify(updatedItems));
      toast.success("Gallery item deleted successfully");
    }
  };
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-skitm-navy">Gallery Management</h2>
          <Button
            variant="primary"
            size="sm"
            onClick={openNewItemDialog}
          >
            <PlusCircle size={16} className="mr-1" />
            Add Image
          </Button>
        </div>
        
        {galleryItems.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg">
            <Image size={32} className="mx-auto text-gray-300 mb-2" />
            <h3 className="text-sm font-medium text-gray-700 mb-1">No gallery items found</h3>
            <p className="text-xs text-gray-500 mb-4">Add your first gallery image to get started</p>
            <Button
              variant="outline"
              size="sm"
              onClick={openNewItemDialog}
            >
              <PlusCircle size={16} className="mr-1" />
              Add Image
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar size={12} className="mr-1" />
                    <span className="mr-3">{item.date}</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full">{item.category}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openEditItemDialog(item)}
                      className="text-gray-500 hover:text-skitm-blue p-1"
                    >
                      <FileText size={16} />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
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
            <DialogTitle>{currentItem ? 'Edit Gallery Item' : 'Add Gallery Item'}</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                        placeholder="Enter image title"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <div className="flex">
                        <input
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          placeholder="Enter image URL"
                          required
                        />
                        <button
                          type="button"
                          className="bg-gray-100 border border-gray-300 border-l-0 rounded-r-md px-3"
                        >
                          <Image size={16} />
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        >
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
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
              </div>
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  <Save size={16} className="mr-1" />
                  {currentItem ? 'Save Changes' : 'Add Image'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminGalleryEditor;
