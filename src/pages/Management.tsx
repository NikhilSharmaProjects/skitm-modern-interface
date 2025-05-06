
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Link } from 'react-router-dom';

const Management = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  
  const programs = [
    {
      id: 1,
      name: "Master of Business Administration",
      description: "Our flagship 2-year MBA program prepares future business leaders with comprehensive education in management principles, strategic thinking, and practical business skills.",
      icon: "📊",
      specializations: ["Marketing", "Finance", "Human Resources", "Operations Management", "Business Analytics"]
    },
    {
      id: 2,
      name: "Integrated Master of Business Administration (UG+PG)",
      description: "A 5-year integrated program combining undergraduate and postgraduate education in business management for a seamless learning experience.",
      icon: "🎓",
      specializations: ["Marketing", "Finance", "International Business", "Entrepreneurship"]
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
              SKITM Faculty of Management Studies
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Management Studies
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Develop business acumen and leadership skills with our industry-focused management programs designed to create future business leaders.
            </p>
          </div>

          <div className="bg-gradient-to-r from-skitm-navy/5 to-skitm-blue/5 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Why Choose SKITM for Management Studies?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Industry Partnerships</h3>
                <p className="text-skitm-gray">Strong connections with leading companies for internships, live projects, and placements</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Experienced Faculty</h3>
                <p className="text-skitm-gray">Learn from industry veterans and academicians with extensive practical experience</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Case-Based Learning</h3>
                <p className="text-skitm-gray">Practical approach with real-world business cases and simulations</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div key={program.id} className="glassmorphism rounded-xl p-6 flex flex-col h-full">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h2 className="text-xl font-display font-bold text-skitm-navy mb-3">{program.name}</h2>
                  <p className="text-skitm-gray mb-4 flex-grow">{program.description}</p>
                  <div className="bg-skitm-blue/5 rounded-lg p-3 mb-4">
                    <h3 className="font-semibold text-skitm-navy mb-2">Specializations:</h3>
                    <ul className="text-sm text-skitm-gray">
                      {program.specializations.map((spec, index) => (
                        <li key={index} className="flex items-start mb-1">
                          <svg className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/courses#management-${program.id}`}>
                    <Button variant="outline" fullWidth>
                      View Program Details
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-skitm-navy text-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Industry Connect</h2>
            <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
              Our management programs are designed with industry input and feature regular interactions with business leaders through guest lectures, workshops, and industry visits.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 px-6 py-3 rounded-lg">Corporate Mentorship</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Live Projects</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Industry Visits</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Business Summits</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Internships</div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">Ready to Start Your Management Career?</h2>
            <Link to="/admissions">
              <Button>Apply Now</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Management;
