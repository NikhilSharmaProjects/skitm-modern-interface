
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Link } from 'react-router-dom';

const ProfessionalStudies = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  
  const programs = [
    {
      id: 1,
      name: "Bachelor of Business Administration",
      description: "A 3-year undergraduate program providing a strong foundation in business management principles, preparing students for entry-level management positions.",
      icon: "💼",
      subjects: ["Principles of Management", "Marketing Management", "Financial Accounting", "Human Resource Management", "Business Economics"]
    },
    {
      id: 2,
      name: "Bachelor of Commerce",
      description: "A 3-year program focusing on commerce, economics, and business principles to prepare students for careers in finance, accounting, and business.",
      icon: "📈",
      subjects: ["Financial Accounting", "Business Law", "Economics", "Corporate Accounting", "Taxation"]
    },
    {
      id: 3,
      name: "Bachelor of Commerce (Computer Application)",
      description: "A specialized B.Com program with additional focus on computer applications and information technology for commerce and business.",
      icon: "💻",
      subjects: ["Financial Accounting", "Economics", "Computer Applications", "Database Management", "E-Commerce"]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className={`text-center mb-16 ${headingVisible ? 'animate-fade-in' : 'opacity-1'}`}
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              SKITM College of Professional Studies
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Professional Studies
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Building career-ready professionals through industry-aligned commerce and business education programs.
            </p>
          </div>

          <div className="bg-gradient-to-r from-skitm-navy/5 to-skitm-blue/5 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Why Choose Professional Studies at SKITM?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Career-Focused</h3>
                <p className="text-skitm-gray">Programs designed with direct input from industry professionals</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Digital Integration</h3>
                <p className="text-skitm-gray">Technology-enhanced learning with focus on digital business skills</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Industry Connections</h3>
                <p className="text-skitm-gray">Regular workshops, guest lectures, and internship opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div key={program.id} className="glassmorphism rounded-xl p-6 flex flex-col h-full">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h2 className="text-xl font-display font-bold text-skitm-navy mb-3">{program.name}</h2>
                  <p className="text-skitm-gray mb-4 flex-grow">{program.description}</p>
                  <div className="bg-skitm-blue/5 rounded-lg p-3 mb-4">
                    <h3 className="font-semibold text-skitm-navy mb-2">Key Subjects:</h3>
                    <ul className="text-sm text-skitm-gray">
                      {program.subjects.map((subject, index) => (
                        <li key={index} className="flex items-start mb-1">
                          <svg className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/courses#professional-${program.id}`}>
                    <Button variant="outline" fullWidth>
                      View Program Details
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-skitm-navy text-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Career Opportunities</h2>
            <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
              Our professional studies programs prepare students for diverse career paths across industries with a focus on practical skills and knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 px-6 py-3 rounded-lg">Banking Sector</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Financial Services</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Corporate Management</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Entrepreneurship</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">E-Commerce</div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">Start Your Professional Journey</h2>
            <Link to="/admissions">
              <Button>Apply for Professional Programs</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionalStudies;
