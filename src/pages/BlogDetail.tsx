
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

// Define Blog type
interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get blogs from localStorage
    const savedBlogs = localStorage.getItem('skitm-blogs');
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs) as Blog[];
      const foundBlog = blogs.find(b => b.slug === slug);
      
      if (foundBlog) {
        setBlog(foundBlog);
      }
    }
    
    setLoading(false);
  }, [slug]);
  
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Calculate read time (rough estimate based on content length)
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.content.substring(0, 100) + '...',
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing: ', err);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="animate-pulse text-center">
            <p className="text-skitm-gray">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center max-w-lg mx-auto px-4">
            <h1 className="text-2xl font-display font-bold text-skitm-navy mb-4">Blog Not Found</h1>
            <p className="text-skitm-gray mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/blogs"
              className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium"
            >
              <ArrowLeft size={16} className="mr-1" /> Return to All Blogs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{blog.title} - SKITM</title>
        <meta name="description" content={blog.content.substring(0, 160)} />
        <meta property="og:title" content={`${blog.title} - SKITM`} />
        <meta property="og:description" content={blog.content.substring(0, 160)} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://skitm.edu/blogs/${blog.slug}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Blog Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <Link 
              to="/blogs"
              className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium mb-6"
            >
              <ArrowLeft size={16} className="mr-1" /> All Blogs
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-skitm-navy mb-6">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-skitm-gray mb-8">
              <div className="flex items-center mr-6 mb-2">
                <User size={16} className="mr-2 text-skitm-blue" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar size={16} className="mr-2 text-skitm-blue" />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock size={16} className="mr-2 text-skitm-blue" />
                <span>{calculateReadTime(blog.content)}</span>
              </div>
              
              <button 
                onClick={handleShare}
                className="ml-auto flex items-center text-skitm-blue hover:text-skitm-navy"
              >
                <Share2 size={16} className="mr-1" /> Share
              </button>
            </div>
          </div>
          
          {/* Featured Image */}
          {blog.image && (
            <div className="max-w-4xl mx-auto mb-8">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-auto max-h-[500px] object-cover rounded-xl"
              />
            </div>
          )}
          
          {/* Blog Content */}
          <div className="max-w-4xl mx-auto prose prose-lg">
            {blog.content.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-6 text-skitm-gray">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Share and Navigate */}
          <div className="max-w-4xl mx-auto mt-12 flex flex-wrap justify-between items-center border-t border-b border-gray-200 py-6">
            <Link 
              to="/blogs"
              className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium"
            >
              <ArrowLeft size={16} className="mr-1" /> All Blogs
            </Link>
            
            <button 
              onClick={handleShare}
              className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium"
            >
              <Share2 size={16} className="mr-1" /> Share This Post
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
