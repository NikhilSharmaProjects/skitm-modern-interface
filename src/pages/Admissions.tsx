
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { BookOpen, CreditCard, FileText, CheckSquare, Calendar, GraduationCap } from 'lucide-react';

const Admissions = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  
  // Admission steps
  const admissionSteps = [
    {
      icon: <FileText className="h-10 w-10 text-skitm-blue" />,
      title: "1. Application",
      description: "Submit your application form online or at the admission office along with required documents."
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-skitm-blue" />,
      title: "2. Eligibility Screening",
      description: "Applications are screened for eligibility based on academic records and entrance scores."
    },
    {
      icon: <Calendar className="h-10 w-10 text-skitm-blue" />,
      title: "3. Interview",
      description: "Selected candidates may be called for a personal interview or counseling session."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-skitm-blue" />,
      title: "4. Fee Payment",
      description: "After selection, complete the admission process by paying the required fees."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-skitm-blue" />,
      title: "5. Enrollment",
      description: "Receive your enrollment confirmation and orientation schedule to begin your journey."
    }
  ];
  
  // Programs offered
  const programs = [
    {
      degree: "B.Tech",
      duration: "4 years",
      specializations: [
        "Computer Science Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electronics & Communication"
      ]
    },
    {
      degree: "M.Tech",
      duration: "2 years",
      specializations: [
        "Computer Science Engineering",
        "Structural Engineering",
        "Power Systems",
        "Digital Communication"
      ]
    },
    {
      degree: "BBA",
      duration: "3 years",
      specializations: [
        "Marketing",
        "Finance",
        "Human Resources",
        "International Business"
      ]
    },
    {
      degree: "MBA",
      duration: "2 years",
      specializations: [
        "Marketing Management",
        "Financial Management",
        "Human Resource Management",
        "Operations Management",
        "Business Analytics"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className={`text-center mb-16 ${headingVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              Join Our Community
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Admissions
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Begin your journey towards a successful future at SKITM.
            </p>
          </div>
          
          {/* Admission Overview */}
          <div className="glassmorphism rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-6">
              Admission Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-skitm-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-skitm-gray">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Programs Offered */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
              Programs Offered
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="glassmorphism rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-skitm-blue mr-3" />
                    <div>
                      <h3 className="text-xl font-display font-bold text-skitm-navy">
                        {program.degree}
                      </h3>
                      <p className="text-sm text-skitm-gray">
                        Duration: {program.duration}
                      </p>
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-medium text-skitm-navy mb-2">
                    Specializations:
                  </h4>
                  
                  <ul className="list-disc list-inside text-sm text-skitm-gray space-y-1 mb-4">
                    {program.specializations.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Eligibility & Documents */}
          <div className="glassmorphism rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-6">
              Eligibility & Required Documents
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-display font-bold text-skitm-navy mb-3">
                  Eligibility Criteria
                </h3>
                <ul className="list-disc list-inside text-skitm-gray space-y-2">
                  <li>10+2 with minimum 60% marks in PCM for engineering programs</li>
                  <li>Valid JEE/NEET scores for engineering/medical programs</li>
                  <li>Graduation with minimum 55% for postgraduate programs</li>
                  <li>Valid CAT/MAT/XAT scores for MBA programs</li>
                  <li>English proficiency for international students</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-display font-bold text-skitm-navy mb-3">
                  Required Documents
                </h3>
                <ul className="list-disc list-inside text-skitm-gray space-y-2">
                  <li>Completed application form</li>
                  <li>10th and 12th mark sheets and certificates</li>
                  <li>Graduation certificate (for PG courses)</li>
                  <li>Entrance exam score card</li>
                  <li>Transfer certificate</li>
                  <li>Character certificate</li>
                  <li>Passport size photographs</li>
                  <li>ID proof (Aadhar/PAN/Passport)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
              Ready to Apply?
            </h2>
            <p className="text-skitm-gray mb-6 max-w-2xl mx-auto">
              Take the first step toward your future by applying to SKITM today. Our admissions team is ready to guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">
                Apply Online
              </Button>
              <Button variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admissions;
