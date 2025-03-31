
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How to Get Admission to SKITM",
    slug: "how-to-get-admission",
    excerpt: "A comprehensive guide to the admission process at SKITM, including eligibility criteria, important dates, and tips for a successful application.",
    author: "Admission Team",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Admissions",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Career Opportunities After B.Tech",
    slug: "career-opportunities-after-btech",
    excerpt: "Explore various career paths and opportunities available to engineering graduates from SKITM, from industry positions to entrepreneurship.",
    author: "Career Development Cell",
    date: "April 3, 2023",
    readTime: "12 min read",
    category: "Career",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Campus Life at SKITM",
    slug: "campus-life-at-skitm",
    excerpt: "Get a glimpse of what life is like on the SKITM campus, including academic activities, clubs, events, and recreational facilities.",
    author: "Student Council",
    date: "March 21, 2023",
    readTime: "6 min read",
    category: "Campus Life",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Research Advancements in AI at SKITM",
    slug: "research-advancements-in-ai",
    excerpt: "Learn about the cutting-edge research being conducted in artificial intelligence and machine learning at SKITM's research labs.",
    author: "Dr. Rajesh Sharma",
    date: "February 18, 2023",
    readTime: "10 min read",
    category: "Research",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Scholarship Opportunities for Students",
    slug: "scholarship-opportunities",
    excerpt: "Discover the various merit-based and need-based scholarships available to SKITM students and how to apply for them.",
    author: "Financial Aid Office",
    date: "January 5, 2023",
    readTime: "7 min read",
    category: "Scholarships",
    image: "/placeholder.svg"
  },
];

const categories = [
  "All", "Admissions", "Academic", "Career", "Campus Life", "Research", "Scholarships", "Events"
];

const Blogs = () => {
  const { ref, isVisible } = useScrollAnimationDiv();
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredBlogs = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(blog => blog.category === activeCategory);
  
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
            ref={ref}
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
            {filteredBlogs.map(post => (
              <article key={post.id} className="glassmorphism rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/blogs/${post.slug}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium text-skitm-blue bg-skitm-blue/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <Link to={`/blogs/${post.slug}`}>
                    <h2 className="text-xl font-bold text-skitm-navy mb-3 hover:text-skitm-blue transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-skitm-gray mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-skitm-gray mb-4">
                    <div className="flex items-center mr-4">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
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
            ))}
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
