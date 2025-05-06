
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  
  const programs = [
    {
      id: 1,
      name: "Bachelor of Pharmacy",
      description: "A 4-year undergraduate program covering pharmaceutical sciences, drug development, and healthcare systems with a focus on practical applications and research.",
      icon: "💊",
      subjects: ["Pharmaceutics", "Pharmacology", "Pharmaceutical Chemistry", "Pharmacognosy", "Pharmaceutical Analysis"]
    },
    {
      id: 2,
      name: "Diploma in Pharmacy",
      description: "A 2-year diploma program providing essential pharmaceutical education to prepare students for careers as pharmacy assistants and technicians.",
      icon: "🧪",
      subjects: ["Pharmaceutical Chemistry", "Pharmacology", "Pharmaceutics", "Drug Store Management", "Hospital Pharmacy"]
    },
    {
      id: 3,
      name: "Master of Pharmacy",
      description: "An advanced 2-year postgraduate program with specializations for in-depth study and research in pharmaceutical sciences.",
      icon: "🔬",
      subjects: ["Advanced Pharmaceutics", "Clinical Pharmacy", "Pharmaceutical Quality Assurance", "Regulatory Affairs", "Research Methodology"]
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
              SKITM Institute of Pharmaceutical Education & Research
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Pharmaceutical Sciences
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Nurturing professionals in pharmaceutical sciences through innovative education, cutting-edge research, and industry collaborations.
            </p>
          </div>

          <div className="bg-gradient-to-r from-skitm-navy/5 to-skitm-blue/5 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">State-of-the-Art Facilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Modern Laboratories</h3>
                <p className="text-skitm-gray">Advanced labs equipped with the latest instruments for pharmaceutical research</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Research Center</h3>
                <p className="text-skitm-gray">Dedicated facilities for both faculty and student research projects</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Model Pharmacy</h3>
                <p className="text-skitm-gray">On-campus pharmacy providing practical training and experience</p>
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
                  <Link to={`/courses#pharmacy-${program.id}`}>
                    <Button variant="outline" fullWidth>
                      View Program Details
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-skitm-navy text-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Industry Collaborations</h2>
            <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
              We partner with leading pharmaceutical companies to provide internships, industrial visits, and placement opportunities to our students.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 px-6 py-3 rounded-lg">Research Projects</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Industrial Training</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Hospital Internships</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Pharma Conferences</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Industry Workshops</div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">Start Your Pharmaceutical Career</h2>
            <Link to="/admissions">
              <Button>Apply for Pharmacy Programs</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pharmacy;
