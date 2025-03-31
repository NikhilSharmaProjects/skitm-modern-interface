
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, User, Calendar, CheckCircle, Download } from 'lucide-react';

const Scholarships = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Scholarships - SKITM</title>
        <meta name="description" content="Explore the range of merit-based and need-based scholarships available at SKITM. Find information about eligibility criteria, application process, and deadlines." />
        <meta name="keywords" content="SKITM scholarships, engineering scholarships, merit scholarships, need-based scholarships, financial aid, education funding, scholarship application" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className="text-center mb-16 animate-fade-in"
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              Financial Assistance
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Scholarships
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Supporting talented students through merit and need-based scholarships.
            </p>
          </div>
          
          {/* Introduction Section */}
          <div className="glassmorphism rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-skitm-gray mb-6">
                At SKITM, we believe that financial constraints should not be a barrier to quality education. 
                We offer a range of scholarships to recognize academic excellence, encourage talent, and support 
                students with financial needs. Our scholarship programs are designed to reward merit and provide 
                financial assistance to deserving students, helping them pursue their educational goals without 
                financial burden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center">
                  <Award className="text-skitm-blue mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-skitm-navy mb-2">Merit-Based</h3>
                  <p className="text-sm text-skitm-gray">Scholarships awarded based on academic performance and achievements</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <Users className="text-skitm-blue mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-skitm-navy mb-2">Need-Based</h3>
                  <p className="text-sm text-skitm-gray">Financial support for students from economically disadvantaged backgrounds</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <User className="text-skitm-blue mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-skitm-navy mb-2">Special Category</h3>
                  <p className="text-sm text-skitm-gray">Scholarships for women, differently-abled, and other special categories</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scholarship Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
              Our Scholarship Programs
            </h2>
            
            {/* Merit-Based Scholarships */}
            <div className="glassmorphism rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Award className="text-skitm-blue mr-3" size={28} />
                <h3 className="text-xl font-bold text-skitm-navy">Merit-Based Scholarships</h3>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-skitm-navy mb-3">SKITM Academic Excellence Scholarship</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-skitm-gray mb-4">
                        Awarded to students with outstanding performance in JEE Main/State-level entrance exams.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">Up to 100% tuition fee waiver</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">JEE Main rank within top 10,000 or equivalent in state-level exams</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">Renewable annually based on academic performance</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="bg-skitm-blue/5 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Calendar size={16} className="text-skitm-blue mr-2" />
                          <h5 className="font-medium text-skitm-navy">Key Dates</h5>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Application Opens:</span>
                            <span className="text-skitm-navy font-medium">June 1, 2023</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Application Deadline:</span>
                            <span className="text-skitm-navy font-medium">July 15, 2023</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Results Announcement:</span>
                            <span className="text-skitm-navy font-medium">July 31, 2023</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-skitm-navy mb-3">SKITM Merit Scholarship</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-skitm-gray mb-4">
                        For students who excel in their academic performance during their studies at SKITM.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">25-50% tuition fee waiver for the next semester</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">CGPA of 8.5 or above with no backlogs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">Awarded each semester based on previous semester performance</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="bg-skitm-blue/5 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Calendar size={16} className="text-skitm-blue mr-2" />
                          <h5 className="font-medium text-skitm-navy">Key Dates</h5>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Fall Semester Awards:</span>
                            <span className="text-skitm-navy font-medium">August 15, 2023</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Spring Semester Awards:</span>
                            <span className="text-skitm-navy font-medium">February 15, 2024</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Need-Based Scholarships */}
            <div className="glassmorphism rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Users className="text-skitm-blue mr-3" size={28} />
                <h3 className="text-xl font-bold text-skitm-navy">Need-Based Scholarships</h3>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-skitm-navy mb-3">SKITM Financial Aid Program</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-skitm-gray mb-4">
                        Financial assistance for students from economically disadvantaged backgrounds.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">Up to 75% tuition fee waiver based on family income</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">Annual family income less than ₹4 lakhs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">Requires submission of income certificate and supporting documents</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="bg-skitm-blue/5 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Calendar size={16} className="text-skitm-blue mr-2" />
                          <h5 className="font-medium text-skitm-navy">Key Dates</h5>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Application Opens:</span>
                            <span className="text-skitm-navy font-medium">June 1, 2023</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Application Deadline:</span>
                            <span className="text-skitm-navy font-medium">July 15, 2023</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Results Announcement:</span>
                            <span className="text-skitm-navy font-medium">July 31, 2023</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Special Category Scholarships */}
            <div className="glassmorphism rounded-xl p-8">
              <div className="flex items-center mb-6">
                <User className="text-skitm-blue mr-3" size={28} />
                <h3 className="text-xl font-bold text-skitm-navy">Special Category Scholarships</h3>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-skitm-navy mb-3">Women in Engineering Scholarship</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-skitm-gray mb-4">
                        Encourages women to pursue engineering education and promotes gender equality in STEM fields.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">25-50% tuition fee waiver</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">Female students with good academic records</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-skitm-gray">Preference to students from underrepresented regions</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="bg-skitm-blue/5 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Calendar size={16} className="text-skitm-blue mr-2" />
                          <h5 className="font-medium text-skitm-navy">Key Dates</h5>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Application Opens:</span>
                            <span className="text-skitm-navy font-medium">June 1, 2023</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Application Deadline:</span>
                            <span className="text-skitm-navy font-medium">July 15, 2023</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-skitm-gray">Results Announcement:</span>
                            <span className="text-skitm-navy font-medium">July 31, 2023</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* How to Apply */}
          <div className="glassmorphism rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
              How to Apply
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <ol className="space-y-6">
                <li className="bg-white/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-skitm-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                    <h4 className="font-semibold text-skitm-navy">Check Eligibility</h4>
                  </div>
                  <p className="text-skitm-gray ml-9">
                    Review the eligibility criteria for each scholarship program and determine which ones you qualify for.
                  </p>
                </li>
                
                <li className="bg-white/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-skitm-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                    <h4 className="font-semibold text-skitm-navy">Prepare Documents</h4>
                  </div>
                  <p className="text-skitm-gray ml-9">
                    Gather all required documents including academic records, income certificates, and other supporting materials.
                  </p>
                </li>
                
                <li className="bg-white/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-skitm-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                    <h4 className="font-semibold text-skitm-navy">Complete Application Form</h4>
                  </div>
                  <p className="text-skitm-gray ml-9">
                    Fill out the scholarship application form available on the SKITM student portal or at the Financial Aid Office.
                  </p>
                </li>
                
                <li className="bg-white/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-skitm-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3">4</div>
                    <h4 className="font-semibold text-skitm-navy">Submit Application</h4>
                  </div>
                  <p className="text-skitm-gray ml-9">
                    Submit the completed application form along with all required documents before the specified deadline.
                  </p>
                </li>
                
                <li className="bg-white/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-skitm-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3">5</div>
                    <h4 className="font-semibold text-skitm-navy">Scholarship Review Process</h4>
                  </div>
                  <p className="text-skitm-gray ml-9">
                    Applications are reviewed by the Scholarship Committee. Selected candidates may be called for an interview.
                  </p>
                </li>
                
                <li className="bg-white/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-skitm-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3">6</div>
                    <h4 className="font-semibold text-skitm-navy">Award Notification</h4>
                  </div>
                  <p className="text-skitm-gray ml-9">
                    Successful applicants will be notified via email and the scholarship amount will be adjusted in their fee structure.
                  </p>
                </li>
              </ol>
              
              <div className="text-center mt-8">
                <a 
                  href="#"
                  className="inline-flex items-center bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-lightBlue transition-colors font-medium"
                >
                  <Download size={18} className="mr-2" />
                  Download Scholarship Application Form
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="glassmorphism rounded-xl p-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white/50 p-6 rounded-lg">
                <h4 className="font-semibold text-skitm-navy mb-2">Can I apply for multiple scholarships simultaneously?</h4>
                <p className="text-skitm-gray">
                  Yes, you can apply for multiple scholarships for which you are eligible. However, in most cases, a student will be awarded only one scholarship with the highest benefit.
                </p>
              </div>
              
              <div className="bg-white/50 p-6 rounded-lg">
                <h4 className="font-semibold text-skitm-navy mb-2">What happens if I don't maintain the required academic performance for a merit scholarship?</h4>
                <p className="text-skitm-gray">
                  If you fail to maintain the required academic performance, the scholarship may be revoked or put on probation for one semester. You can regain the scholarship by meeting the criteria in the subsequent semester.
                </p>
              </div>
              
              <div className="bg-white/50 p-6 rounded-lg">
                <h4 className="font-semibold text-skitm-navy mb-2">Are scholarship opportunities available for existing students or only for new admissions?</h4>
                <p className="text-skitm-gray">
                  Both new and existing students can apply for scholarships. While some scholarships are specifically for new admissions, many are available for continuing students based on their academic performance or financial need.
                </p>
              </div>
              
              <div className="bg-white/50 p-6 rounded-lg">
                <h4 className="font-semibold text-skitm-navy mb-2">How and when will I know if I've been awarded a scholarship?</h4>
                <p className="text-skitm-gray">
                  Scholarship recipients will be notified via email and through the student portal. The timing varies by scholarship type, but most decisions are announced within 4-6 weeks after the application deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scholarships;
