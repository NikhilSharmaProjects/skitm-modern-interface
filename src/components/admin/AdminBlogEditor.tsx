
import { useState } from 'react';
import { toast } from 'sonner';
import { 
  PlusCircle, Save, Trash2, 
  Calendar, User, FileText, Image
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/CustomButton';
import { Textarea } from '@/components/ui/textarea';
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

// Types for blog management
interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

const AdminBlogEditor = () => {
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    const savedBlogs = localStorage.getItem('skitm-blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  
  const form = useForm<Omit<Blog, 'id' | 'slug'>>({
    defaultValues: {
      title: '',
      content: '',
      image: '',
      author: '',
      date: new Date().toISOString().split('T')[0]
    }
  });
  
  const openNewBlogDialog = () => {
    form.reset({
      title: '',
      content: '',
      image: '',
      author: '',
      date: new Date().toISOString().split('T')[0]
    });
    setCurrentBlog(null);
    setIsDialogOpen(true);
  };
  
  const openEditBlogDialog = (blog: Blog) => {
    form.reset({
      title: blog.title,
      content: blog.content,
      image: blog.image,
      author: blog.author,
      date: blog.date
    });
    setCurrentBlog(blog);
    setIsDialogOpen(true);
  };
  
  const onSubmit = (data: Omit<Blog, 'id' | 'slug'>) => {
    if (currentBlog) {
      // Edit existing blog
      const updatedBlogs = blogs.map(blog => 
        blog.id === currentBlog.id 
          ? { ...blog, ...data } 
          : blog
      );
      setBlogs(updatedBlogs);
      localStorage.setItem('skitm-blogs', JSON.stringify(updatedBlogs));
      toast.success("Blog updated successfully");
    } else {
      // Create new blog
      const newBlog: Blog = {
        id: Date.now().toString(),
        slug: data.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
        ...data
      };
      const updatedBlogs = [...blogs, newBlog];
      setBlogs(updatedBlogs);
      localStorage.setItem('skitm-blogs', JSON.stringify(updatedBlogs));
      toast.success("Blog created successfully");
    }
    setIsDialogOpen(false);
  };
  
  const deleteBlog = (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      localStorage.setItem('skitm-blogs', JSON.stringify(updatedBlogs));
      toast.success("Blog deleted successfully");
    }
  };
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-skitm-navy">Blog Management</h2>
          <Button
            variant="primary"
            size="sm"
            onClick={openNewBlogDialog}
          >
            <PlusCircle size={16} className="mr-1" />
            New Blog
          </Button>
        </div>
        
        {blogs.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg">
            <FileText size={32} className="mx-auto text-gray-300 mb-2" />
            <h3 className="text-sm font-medium text-gray-700 mb-1">No blogs found</h3>
            <p className="text-xs text-gray-500 mb-4">Create your first blog post to get started</p>
            <Button
              variant="outline"
              size="sm"
              onClick={openNewBlogDialog}
            >
              <PlusCircle size={16} className="mr-1" />
              Create Blog
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {blogs.map(blog => (
              <div key={blog.id} className="border border-gray-200 rounded-lg p-4 hover:border-skitm-blue/50 hover:shadow-sm transition-all">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-1">{blog.title}</h3>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span className="mr-3">{blog.date}</span>
                      <User size={12} className="mr-1" />
                      <span>{blog.author}</span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2">{blog.content}</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => openEditBlogDialog(blog)}
                      className="text-gray-500 hover:text-skitm-blue p-1"
                    >
                      <FileText size={16} />
                    </button>
                    <button
                      onClick={() => deleteBlog(blog.id)}
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
            <DialogTitle>{currentBlog ? 'Edit Blog' : 'Create New Blog'}</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blog Title</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                        placeholder="Enter blog title"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[200px]"
                        placeholder="Enter blog content"
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
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <input
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                            placeholder="Image URL"
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
                
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skitm-blue/50"
                          placeholder="Author name"
                          required
                        />
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
                      <FormLabel>Publish Date</FormLabel>
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
                  {currentBlog ? 'Save Changes' : 'Create Blog'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminBlogEditor;
