
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { 
  PlusCircle, Save, Trash2, 
  Calendar, FileText, Image, Loader2, UploadCloud
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
import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';
import { GalleryItem } from '@/services/dataService';

const categories = ["Campus", "Events", "Workshops", "Sports", "Cultural", "Research"];

const AdminGalleryEditor = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<GalleryItem | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const form = useForm<Omit<GalleryItem, 'id'>>({
    defaultValues: {
      title: '',
      imageUrl: '',
      category: 'Campus',
      date: new Date().toISOString().split('T')[0]
    }
  });
  
  // Fetch gallery items from Supabase
  useEffect(() => {
    fetchGalleryItems();
  }, []);
  
  const fetchGalleryItems = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('date', { ascending: false });
      
      if (error) throw error;
      
      // Transform data to match our frontend model
      const transformedData = data?.map(item => ({
        id: item.id,
        title: item.title,
        imageUrl: item.imageurl, // Map from DB 'imageurl' to our 'imageUrl'
        category: item.category,
        date: item.date
      })) || [];
      
      setGalleryItems(transformedData);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      toast.error("Failed to load gallery items");
    } finally {
      setIsLoading(false);
    }
  };
  
  const openNewItemDialog = () => {
    form.reset({
      title: '',
      imageUrl: '',
      category: 'Campus',
      date: new Date().toISOString().split('T')[0]
    });
    setCurrentItem(null);
    setPreviewUrl(null);
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
    setPreviewUrl(item.imageUrl);
    setIsDialogOpen(true);
  };
  
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Check file type
    if (!file.type.includes('image')) {
      toast.error('Please upload an image file');
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size exceeds 5MB limit');
      return;
    }
    
    setIsUploading(true);
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `gallery/${fileName}`;
      
      // Upload to Supabase Storage
      const { error: uploadError } = await supabase
        .storage
        .from('images')
        .upload(filePath, file);
      
      if (uploadError) throw uploadError;
      
      // Get public URL
      const { data: urlData } = supabase
        .storage
        .from('images')
        .getPublicUrl(filePath);
      
      // Update form with image URL
      form.setValue('imageUrl', urlData.publicUrl);
      setPreviewUrl(urlData.publicUrl);
      toast.success('Image uploaded successfully');
      
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image: ' + (error.message || 'Unknown error'));
    } finally {
      setIsUploading(false);
    }
  };
  
  const onSubmit = async (data: Omit<GalleryItem, 'id'>) => {
    try {
      if (currentItem) {
        // Edit existing item
        const { error } = await supabase
          .from('gallery')
          .update({
            title: data.title,
            imageurl: data.imageUrl, // Map from our 'imageUrl' to DB 'imageurl'
            category: data.category,
            date: data.date
          })
          .eq('id', currentItem.id);
        
        if (error) throw error;
        toast.success("Gallery item updated successfully");
      } else {
        // Create new item
        const { error } = await supabase
          .from('gallery')
          .insert([{
            title: data.title,
            imageurl: data.imageUrl, // Map from our 'imageUrl' to DB 'imageurl'
            category: data.category,
            date: data.date
          }]);
        
        if (error) throw error;
        toast.success("Gallery item added successfully");
      }
      
      setIsDialogOpen(false);
      fetchGalleryItems();
      
    } catch (error: any) {
      console.error('Error saving gallery item:', error);
      toast.error('Failed to save gallery item: ' + (error.message || 'Unknown error'));
    }
  };
  
  const deleteItem = async (id: string) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      try {
        // Get the item to delete its image from storage
        const { data: item } = await supabase
          .from('gallery')
          .select('imageurl')
          .eq('id', id)
          .single();
        
        // Delete the database entry
        const { error } = await supabase
          .from('gallery')
          .delete()
          .eq('id', id);
        
        if (error) throw error;
        
        // Attempt to delete image from storage if it's in our storage
        if (item && item.imageurl && item.imageurl.includes('storage')) {
          const imagePath = item.imageurl.split('images/')[1];
          if (imagePath) {
            await supabase
              .storage
              .from('images')
              .remove([`gallery/${imagePath}`]);
          }
        }
        
        toast.success("Gallery item deleted successfully");
        fetchGalleryItems();
      } catch (error: any) {
        console.error('Error deleting gallery item:', error);
        toast.error('Failed to delete gallery item: ' + (error.message || 'Unknown error'));
      }
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
        
        {isLoading ? (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg">
            <Loader2 size={32} className="mx-auto text-gray-300 mb-2 animate-spin" />
            <h3 className="text-sm font-medium text-gray-700 mb-1">Loading gallery items...</h3>
          </div>
        ) : galleryItems.length === 0 ? (
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
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                    }}
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
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        <div className="flex">
                          <input
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                            placeholder="Image URL or upload"
                            required
                          />
                          <label 
                            className={`bg-gray-100 border border-gray-300 border-l-0 rounded-r-md px-3 py-2 cursor-pointer ${isUploading ? 'opacity-50' : ''}`}
                            htmlFor="image-upload"
                          >
                            {isUploading ? <Loader2 size={16} className="animate-spin" /> : <UploadCloud size={16} />}
                          </label>
                          <input 
                            type="file" 
                            id="image-upload" 
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                            disabled={isUploading}
                          />
                        </div>
                        
                        {previewUrl && (
                          <div className="relative mt-2 h-40 bg-gray-100 rounded-md overflow-hidden">
                            <img 
                              src={previewUrl} 
                              alt="Preview" 
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Invalid+Image+URL';
                              }}
                            />
                          </div>
                        )}
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
                <Button 
                  type="submit" 
                  variant="primary"
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <Loader2 size={16} className="mr-1 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Save size={16} className="mr-1" />
                      {currentItem ? 'Save Changes' : 'Add Image'}
                    </>
                  )}
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
