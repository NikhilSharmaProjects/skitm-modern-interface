
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Placements = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  
  // Dummy data for placements
  const placementStats = [
    { label: "Placement Rate", value: "95%", icon: "📈" },
    { label: "Highest Package", value: "₹18 LPA", icon: "💰" },
    { label: "Average Package", value: "₹8.5 LPA", icon: "📊" },
    { label: "Companies Visited", value: "120+", icon: "🏢" },
  ];
  
  const topRecruiters = [
    "TCS", "Infosys", "Wipro", "IBM", "Accenture", 
    "Cognizant", "Tech Mahindra", "HCL", "Amazon", "Microsoft",
    "Google", "Flipkart", "Oracle", "Adobe", "Cisco"
  ];
  
  const successStories = [
    {
      name: "Rahul Sharma",
      batch: "CSE 2022",
      company: "Microsoft",
      package: "16 LPA",
      quote: "The placement preparation and support at SKITM gave me the confidence to crack interviews at top tech companies."
    },
    {
      name: "Priya Verma",
      batch: "ECE 2022",
      company: "Amazon",
      package: "18 LPA",
      quote: "The mock interviews and technical training sessions were particularly helpful in preparing for the rigorous selection process."
    },
    {
      name: "Amit Singh",
      batch: "ME 2022",
      company: "Tata Motors",
      package: "12 LPA",
      quote: "The industry exposure through industrial visits and guest lectures provided valuable insights for my career."
    },
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
              Career Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Placements & Career Services
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Our dedicated placement cell works tirelessly to secure excellent career opportunities for our students and prepare them for professional success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {placementStats.map((stat, index) => (
              <div key={index} className="glassmorphism rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-display font-bold text-skitm-blue mb-2">{stat.value}</div>
                <p className="text-sm text-skitm-gray">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="glassmorphism rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">Placement Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-skitm-navy mb-2">Registration</h3>
                <p className="text-sm text-skitm-gray">Students register with the placement cell and complete their profile.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-skitm-navy mb-2">Pre-Placement Training</h3>
                <p className="text-sm text-skitm-gray">Intensive training on aptitude, technical skills, and soft skills.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-skitm-navy mb-2">Company Selection</h3>
                <p className="text-sm text-skitm-gray">Students apply to companies based on eligibility criteria.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold text-skitm-navy mb-2">Aptitude Tests</h3>
                <p className="text-sm text-skitm-gray">Online or offline aptitude and technical assessments.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">5</div>
                <h3 className="text-lg font-semibold text-skitm-navy mb-2">Technical & HR Interviews</h3>
                <p className="text-sm text-skitm-gray">Multiple rounds of interviews to assess technical and soft skills.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-skitm-blue/10 flex items-center justify-center text-skitm-blue text-2xl mx-auto mb-4">6</div>
                <h3 className="text-lg font-semibold text-skitm-navy mb-2">Offer Letter</h3>
                <p className="text-sm text-skitm-gray">Successful candidates receive job offers with details of position and package.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">Our Top Recruiters</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {topRecruiters.map((company, index) => (
                <div key={index} className="h-20 glassmorphism rounded-lg flex items-center justify-center">
                  <div className="text-lg font-bold text-skitm-navy">{company}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="glassmorphism rounded-xl p-6">
                  <p className="text-skitm-gray text-sm italic mb-4">"{story.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-skitm-blue/20 flex items-center justify-center text-skitm-blue font-bold mr-3">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-skitm-navy">{story.name}</div>
                      <div className="text-xs text-skitm-gray">{story.batch}, {story.package} at {story.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Career Development Services</h2>
            <p className="text-skitm-gray mb-6 max-w-2xl mx-auto">
              Beyond placements, we offer comprehensive career development services to help students achieve their professional goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-skitm-blue/5 rounded-lg">
                <h3 className="font-semibold text-skitm-navy mb-2">Career Counseling</h3>
                <p className="text-xs text-skitm-gray">One-on-one guidance for career planning and development</p>
              </div>
              <div className="p-4 bg-skitm-blue/5 rounded-lg">
                <h3 className="font-semibold text-skitm-navy mb-2">Resume Building</h3>
                <p className="text-xs text-skitm-gray">Professional assistance to create impactful resumes</p>
              </div>
              <div className="p-4 bg-skitm-blue/5 rounded-lg">
                <h3 className="font-semibold text-skitm-navy mb-2">Mock Interviews</h3>
                <p className="text-xs text-skitm-gray">Practice sessions with industry experts</p>
              </div>
              <div className="p-4 bg-skitm-blue/5 rounded-lg">
                <h3 className="font-semibold text-skitm-navy mb-2">Soft Skills Training</h3>
                <p className="text-xs text-skitm-gray">Communication, leadership, and teamwork development</p>
              </div>
            </div>
            <Button variant="primary">
              Contact Placement Cell
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Placements;
