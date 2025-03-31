
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useEffect } from 'react';

// This would typically come from an API
const blogPosts = [
  {
    id: 1,
    title: "How to Get Admission to SKITM",
    slug: "how-to-get-admission",
    content: `
      <p class="mb-4">The admission process at SKITM is designed to be comprehensive yet straightforward, ensuring that deserving candidates have the opportunity to pursue their academic goals with us.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Eligibility Criteria</h2>
      <p class="mb-4">To be eligible for admission to our undergraduate programs, candidates must have:</p>
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2">Completed 10+2 or equivalent examination with a minimum of 60% marks (55% for reserved categories) in PCM (Physics, Chemistry, Mathematics)</li>
        <li class="mb-2">Valid JEE Main/State-level entrance examination score</li>
        <li class="mb-2">Fulfilled any additional criteria specified for particular programs</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Important Dates</h2>
      <p class="mb-4">The admission timeline for the upcoming academic year is as follows:</p>
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2">Application Start Date: February 1, 2023</li>
        <li class="mb-2">Application Deadline: May 30, 2023</li>
        <li class="mb-2">Entrance Examination: As per JEE Main/State-level entrance schedule</li>
        <li class="mb-2">Merit List Declaration: June 15, 2023</li>
        <li class="mb-2">Counselling and Seat Allotment: June 20-30, 2023</li>
        <li class="mb-2">Commencement of Classes: August 1, 2023</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Application Process</h2>
      <p class="mb-4">Follow these steps to apply for admission to SKITM:</p>
      <ol class="list-decimal pl-5 mb-4">
        <li class="mb-2">Visit the official SKITM website and navigate to the Admissions section</li>
        <li class="mb-2">Register by creating an account with your email ID and phone number</li>
        <li class="mb-2">Fill out the application form with accurate personal and academic details</li>
        <li class="mb-2">Upload required documents (photograph, signature, academic certificates, etc.)</li>
        <li class="mb-2">Pay the application fee through the provided online payment gateway</li>
        <li class="mb-2">Submit the application and note down your application number for future reference</li>
      </ol>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Required Documents</h2>
      <p class="mb-4">Ensure you have the following documents ready during the application and admission process:</p>
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2">Class 10 and 12 mark sheets and certificates</li>
        <li class="mb-2">JEE Main/State-level entrance examination score card</li>
        <li class="mb-2">Transfer Certificate/School Leaving Certificate</li>
        <li class="mb-2">Character Certificate from the last attended institution</li>
        <li class="mb-2">Category Certificate (if applicable)</li>
        <li class="mb-2">Recent passport-sized photographs</li>
        <li class="mb-2">ID proof (Aadhar Card/PAN Card/Passport)</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Selection Process</h2>
      <p class="mb-4">The selection of candidates is based on:</p>
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2">Performance in JEE Main/State-level entrance examination</li>
        <li class="mb-2">Academic record in qualifying examination (10+2)</li>
        <li class="mb-2">Seat availability in the chosen program</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Tips for a Successful Application</h2>
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2">Start preparing for entrance examinations well in advance</li>
        <li class="mb-2">Keep all documents ready before beginning the application process</li>
        <li class="mb-2">Fill the application form carefully without any errors</li>
        <li class="mb-2">Regularly check the website and your registered email for updates</li>
        <li class="mb-2">Apply early to avoid last-minute technical issues</li>
      </ul>
      
      <p class="mt-6">For any queries regarding the admission process, feel free to contact our admission helpdesk at <a href="mailto:admissions@skitm.edu" class="text-skitm-blue">admissions@skitm.edu</a> or call us at <a href="tel:+917314013344" class="text-skitm-blue">+91 731 401 3344</a>.</p>
    `,
    author: "Admission Team",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Admissions",
    image: "/placeholder.svg",
    metaDescription: "Learn about the admission process at SKITM including eligibility criteria, important dates, application steps, and tips for a successful application.",
    metaKeywords: "SKITM admission, engineering admission, college application, admission guide, entrance exam, JEE Main, admission requirements"
  }
];

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-skitm-navy mb-4">Blog Not Found</h1>
            <p className="text-skitm-gray mb-6">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blogs"
              className="bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-lightBlue transition-colors inline-block font-medium"
            >
              Back to Blogs
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
        <title>{blog.title} - SKITM Blogs</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.metaKeywords} />
        <meta property="og:title" content={`${blog.title} - SKITM Blogs`} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blog.image} />
        <link rel="canonical" href={`https://skitm.edu/blogs/${blog.slug}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link 
              to="/blogs"
              className="inline-flex items-center text-skitm-gray hover:text-skitm-blue mb-6"
            >
              <ChevronLeft size={16} className="mr-1" /> Back to Blogs
            </Link>
            
            {/* Category */}
            <div className="mb-4">
              <span className="text-sm font-medium text-skitm-blue bg-skitm-blue/10 px-3 py-1 rounded-full">
                {blog.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-skitm-navy mb-6">
              {blog.title}
            </h1>
            
            {/* Meta info */}
            <div className="flex flex-wrap items-center text-sm text-skitm-gray mb-8">
              <div className="flex items-center mr-6 mb-2">
                <User size={16} className="mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar size={16} className="mr-2" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock size={16} className="mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            {/* Featured image */}
            <div className="mb-8">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: blog.content }} />
            
            {/* Share links */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <span className="text-skitm-navy font-medium mr-4 flex items-center">
                  <Share2 size={16} className="mr-2" /> Share:
                </span>
                <div className="flex space-x-3">
                  <a href="#" className="text-skitm-gray hover:text-skitm-blue">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-skitm-gray hover:text-skitm-blue">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-skitm-gray hover:text-skitm-blue">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
