
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>News & Events - SKITM</title>
        <meta name="description" content="Stay updated with the latest news, events, achievements, and announcements from SKITM. Find information about upcoming workshops, seminars, cultural events, and more." />
        <meta name="keywords" content="SKITM news, college events, campus updates, academic news, engineering events, technical fest, cultural events" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className="text-center mb-16 animate-fade-in"
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              News & Events
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Stay up to date with the latest happenings at SKITM.
            </p>
          </div>
          
          {/* News & Announcements Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
              Latest News & Announcements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glassmorphism rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="National Award" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar size={16} className="text-skitm-blue mr-2" />
                    <span className="text-sm text-skitm-gray">June 15, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-skitm-navy mb-3">
                    SKITM Receives National Excellence Award
                  </h3>
                  <p className="text-skitm-gray mb-4">
                    SKITM has been honored with the National Excellence Award for Outstanding Contribution to Technical Education by the Ministry of Education.
                  </p>
                  <Link 
                    to="/news/skitm-receives-national-award"
                    className="text-skitm-blue hover:text-skitm-navy font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Research Grant" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar size={16} className="text-skitm-blue mr-2" />
                    <span className="text-sm text-skitm-gray">May 28, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-skitm-navy mb-3">
                    SKITM Secures ₹2 Crore Research Grant
                  </h3>
                  <p className="text-skitm-gray mb-4">
                    The Department of Computer Science has secured a prestigious research grant for developing AI solutions for healthcare challenges.
                  </p>
                  <Link 
                    to="/news/research-grant-announcement"
                    className="text-skitm-blue hover:text-skitm-navy font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Industry Collaboration" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar size={16} className="text-skitm-blue mr-2" />
                    <span className="text-sm text-skitm-gray">May 10, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-skitm-navy mb-3">
                    New Industry Collaboration with TechGiant
                  </h3>
                  <p className="text-skitm-gray mb-4">
                    SKITM has partnered with TechGiant to establish a Center of Excellence for Cloud Computing and offer industry internships.
                  </p>
                  <Link 
                    to="/news/techgiant-partnership"
                    className="text-skitm-blue hover:text-skitm-navy font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Upcoming Events Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
              Upcoming Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glassmorphism rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-skitm-blue/10 rounded-xl p-3 text-center min-w-[80px]">
                    <div className="text-2xl font-bold text-skitm-blue">25</div>
                    <div className="text-sm text-skitm-navy">July</div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-skitm-navy mb-2">
                      Annual Technical Symposium
                    </h3>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-skitm-blue mr-2" />
                      <span className="text-sm text-skitm-gray">July 25-27, 2023 | 9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <MapPin size={16} className="text-skitm-blue mr-2" />
                      <span className="text-sm text-skitm-gray">Main Auditorium, SKITM Campus</span>
                    </div>
                    <p className="text-skitm-gray mb-3">
                      Three-day technical extravaganza featuring workshops, competitions, expert talks, and project exhibitions.
                    </p>
                    <Link 
                      to="/events/technical-symposium"
                      className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium"
                    >
                      View Details <ExternalLink size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-skitm-blue/10 rounded-xl p-3 text-center min-w-[80px]">
                    <div className="text-2xl font-bold text-skitm-blue">10</div>
                    <div className="text-sm text-skitm-navy">Aug</div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-skitm-navy mb-2">
                      Workshop on AI & Machine Learning
                    </h3>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-skitm-blue mr-2" />
                      <span className="text-sm text-skitm-gray">August 10, 2023 | 10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <MapPin size={16} className="text-skitm-blue mr-2" />
                      <span className="text-sm text-skitm-gray">Computer Science Block, SKITM</span>
                    </div>
                    <p className="text-skitm-gray mb-3">
                      Hands-on workshop covering fundamentals of AI and practical applications of machine learning.
                    </p>
                    <Link 
                      to="/events/ai-workshop"
                      className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium"
                    >
                      View Details <ExternalLink size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-skitm-blue/10 rounded-xl p-3 text-center min-w-[80px]">
                    <div className="text-2xl font-bold text-skitm-blue">15</div>
                    <div className="text-sm text-skitm-navy">Aug</div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-skitm-navy mb-2">
                      Independence Day Celebrations
                    </h3>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-skitm-blue mr-2" />
                      <span className="text-sm text-skitm-gray">August 15, 2023 | 8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <MapPin size={16} className="text-skitm-blue mr-2" />
                      <span className="text-sm text-skitm-gray">Main Ground, SKITM Campus</span>
                    </div>
                    <p className="text-skitm-gray mb-3">
                      Flag hoisting ceremony followed by cultural performances and patriotic events to celebrate Independence Day.
                    </p>
                    <Link 
                      to="/events/independence-day"
                      className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium"
                    >
                      View Details <ExternalLink size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-skitm-blue/10 rounded-xl p-3 text-center min-w-[80px]">
                    <div className="text-2xl font-bold text-skitm-blue">2</div>
                    <div className="text-sm text-skitm-navy">Sep</div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-skitm-navy mb-2">
                      Industry Expert Guest Lecture
                    </h3>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-skitm-blue mr-2" />
                      <span className="text-sm text-skitm-gray">September 2, 2023 | 11:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <MapPin size={16} className="text-skitm-blue mr-2" />
                      <span className="text-sm text-skitm-gray">Seminar Hall, SKITM</span>
                    </div>
                    <p className="text-skitm-gray mb-3">
                      Guest lecture on "Future of Robotics and Automation" by Dr. Rajiv Mehta, CTO of RoboTech Solutions.
                    </p>
                    <Link 
                      to="/events/guest-lecture-robotics"
                      className="inline-flex items-center text-skitm-blue hover:text-skitm-navy font-medium"
                    >
                      View Details <ExternalLink size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/events"
                className="bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-lightBlue transition-colors inline-block font-medium"
              >
                View All Events
              </Link>
            </div>
          </div>
          
          {/* Academic Calendar */}
          <div className="glassmorphism rounded-xl p-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
              Academic Calendar Highlights
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-skitm-blue/5 rounded-lg">
                <div className="bg-skitm-blue/10 rounded-full p-3">
                  <Calendar size={24} className="text-skitm-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-skitm-navy">July 25-30, 2023</h3>
                  <p className="text-skitm-gray">New Student Orientation Week</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-skitm-blue/5 rounded-lg">
                <div className="bg-skitm-blue/10 rounded-full p-3">
                  <Calendar size={24} className="text-skitm-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-skitm-navy">August 1, 2023</h3>
                  <p className="text-skitm-gray">Commencement of Classes for Fall Semester</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-skitm-blue/5 rounded-lg">
                <div className="bg-skitm-blue/10 rounded-full p-3">
                  <Calendar size={24} className="text-skitm-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-skitm-navy">October 10-15, 2023</h3>
                  <p className="text-skitm-gray">Mid-Semester Examination</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-skitm-blue/5 rounded-lg">
                <div className="bg-skitm-blue/10 rounded-full p-3">
                  <Calendar size={24} className="text-skitm-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-skitm-navy">December 5-15, 2023</h3>
                  <p className="text-skitm-gray">End-Semester Examination</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <a 
                href="#"
                className="text-skitm-blue hover:text-skitm-navy font-medium inline-flex items-center"
              >
                Download Complete Academic Calendar <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
