
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

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

// Default blogs if none are in localStorage
const defaultBlogs = [
  {
    id: "1",
    title: "How to Get Admission to SKITM",
    slug: "how-to-get-admission",
    content: "A comprehensive guide to the admission process at SKITM, including eligibility criteria, important dates, and tips for a successful application.",
    author: "Admission Team",
    date: "2023-05-15",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Career Opportunities After B.Tech",
    slug: "career-opportunities-after-btech",
    content: "Explore various career paths and opportunities available to engineering graduates from SKITM, from industry positions to entrepreneurship.",
    author: "Career Development Cell",
    date: "2023-04-03",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Campus Life at SKITM",
    slug: "campus-life-at-skitm",
    content: "Get a glimpse of what life is like on the SKITM campus, including academic activities, clubs, events, and recreational facilities.",
    author: "Student Council",
    date: "2023-03-21",
    image: "/placeholder.svg"
  },
];

const categories = [
  "All", "Admissions", "Academic", "Career", "Campus Life", "Research", "Scholarships", "Events"
];

const Blogs = () => {
  const { ref, isVisible } = useScrollAnimationDiv();
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  
  useEffect(() => {
    // Load blogs from localStorage or use default blogs
    const savedBlogs = localStorage.getItem('skitm-blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      setBlogs(defaultBlogs);
    }
  }, []);
  
  // Filter blogs by category if needed
  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.title.toLowerCase().includes(activeCategory.toLowerCase()));
  
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blogs - SKITM</title>
        <meta name="description" content="Read insightful articles and blogs from SKITM about admissions, campus life, career guidance, research, and more. Stay updated with the latest from our college community." />
        <meta name="keywords" content="SKITM blogs, college blogs, engineering education, campus life, admission guide, career advice, research news" />
        <meta property="og:title" content="Blogs - SKITM" />
        <meta property="og:description" content="Read insightful articles and blogs from SKITM about admissions, campus life, career guidance, research, and more." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://skitm.edu/blogs" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              Our Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              SKITM Blogs
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Discover insights, stories, and knowledge from our college community
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-skitm-blue text-white' 
                    : 'bg-gray-100 text-skitm-gray hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map(post => (
                <article key={post.id} className="glassmorphism rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/blogs/${post.slug}`}>
                    <img 
                      src={post.image || "/placeholder.svg"} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  
                  <div className="p-6">
                    <Link to={`/blogs/${post.slug}`}>
                      <h2 className="text-xl font-bold text-skitm-navy mb-3 hover:text-skitm-blue transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-skitm-gray mb-4">
                      {post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content}
                    </p>
                    
                    <div className="flex items-center text-sm text-skitm-gray mb-4">
                      <div className="flex items-center mr-4">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{calculateReadTime(post.content)}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium transition-colors"
                    >
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500">No blogs found in this category. Check back later or try another category.</p>
              </div>
            )}
          </div>
          
          {/* CTA Section */}
          <div className="glassmorphism rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Want to Contribute?</h2>
            <p className="text-skitm-gray mb-6 max-w-2xl mx-auto">
              Are you a student, faculty member, or alumnus with insights to share? We welcome guest contributions to our blog.
            </p>
            <Link 
              to="/contact"
              className="bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-lightBlue transition-colors inline-block font-medium"
            >
              Contact Us to Contribute
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
