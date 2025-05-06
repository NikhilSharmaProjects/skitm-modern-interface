
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Link } from 'react-router-dom';

const Law = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  
  const programs = [
    {
      id: 1,
      name: "B.A. LL.B. (Hons.)",
      description: "A 5-year integrated program combining Bachelor of Arts and Bachelor of Laws, providing a strong foundation in humanities alongside comprehensive legal education.",
      icon: "⚖️",
      subjects: ["Constitutional Law", "Contract Law", "Criminal Law", "Civil Procedure", "Corporate Law", "International Law"]
    },
    {
      id: 2,
      name: "B.B.A. LL.B. (Hons.)",
      description: "A 5-year integrated program combining Bachelor of Business Administration and Bachelor of Laws, ideal for students interested in corporate and business law.",
      icon: "📊",
      subjects: ["Corporate Law", "Business Administration", "Taxation Law", "Competition Law", "Banking Law", "Intellectual Property Rights"]
    },
    {
      id: 3,
      name: "LL.B. (Hons.)",
      description: "A 3-year undergraduate law program designed for graduates seeking a career in legal practice, judiciary, or legal consultancy.",
      icon: "🏛️",
      subjects: ["Constitutional Law", "Criminal Law", "Civil Law", "Property Law", "Administrative Law", "Jurisprudence"]
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
              SKITM Transnational School of Law
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Legal Education
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Shaping legal professionals through analytical thinking, ethical practice, and comprehensive understanding of jurisprudence.
            </p>
          </div>

          <div className="bg-gradient-to-r from-skitm-navy/5 to-skitm-blue/5 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Why Choose SKITM Law School?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Distinguished Faculty</h3>
                <p className="text-skitm-gray">Learn from experienced legal professionals, judges, and distinguished academicians</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Moot Court Facility</h3>
                <p className="text-skitm-gray">Realistic court simulations to develop practical advocacy skills</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Legal Aid Clinic</h3>
                <p className="text-skitm-gray">Hands-on experience through legal aid services to the community</p>
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
                  <Link to={`/courses#law-${program.id}`}>
                    <Button variant="outline" fullWidth>
                      View Program Details
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-skitm-navy text-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Practical Learning</h2>
            <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
              Our curriculum emphasizes practical legal education through moot courts, internships, and legal aid clinics to prepare students for professional practice.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 px-6 py-3 rounded-lg">Moot Court Competitions</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Legal Internships</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Legal Aid Services</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Court Visits</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">Legal Research</div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">Build Your Legal Career</h2>
            <Link to="/admissions">
              <Button>Apply for Law Programs</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Law;
