
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Link } from 'react-router-dom';

const Departments = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  
  const departments = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      description: "Our CSE department offers specialized programs in AI, ML, and Cybersecurity, along with cutting-edge education in algorithms, programming, and software development.",
      icon: "💻",
      courses: ["B.Tech in CSE", "B.Tech in CSE (AI & ML)", "B.Tech in CSE (Cybersecurity)"]
    },
    {
      id: 2,
      name: "Electronics & Communication",
      description: "The ECE department provides comprehensive knowledge in communication systems, embedded systems, and signal processing with a focus on practical applications.",
      icon: "📱",
      courses: ["B.Tech in ECE", "M.Tech in ECE", "Ph.D. in ECE"]
    },
    {
      id: 3,
      name: "Mechanical Engineering",
      description: "Our Mechanical Engineering department covers thermodynamics, robotics, manufacturing, and structural analysis with state-of-the-art laboratories for practical learning.",
      icon: "⚙️",
      courses: ["B.Tech in ME", "M.Tech in ME", "Ph.D. in ME"]
    },
    {
      id: 4,
      name: "Civil Engineering",
      description: "The Civil Engineering department focuses on structural engineering, transportation, environmental systems, and sustainable infrastructure development.",
      icon: "🏗️",
      courses: ["B.Tech in CE", "M.Tech in CE", "Ph.D. in CE"]
    },
    {
      id: 5,
      name: "Management Studies",
      description: "Our Management department offers comprehensive business education with industry collaborations, case studies, and hands-on business projects.",
      icon: "📊",
      courses: ["MBA", "Integrated MBA (BBA + MBA)", "MBA Plus (Industry-specific)"]
    },
    {
      id: 6,
      name: "Pharmacy",
      description: "The Pharmacy department provides education in pharmaceutical sciences, drug development, and healthcare with well-equipped laboratories and research facilities.",
      icon: "💊",
      courses: ["B.Pharm (Bachelor of Pharmacy)", "D.Pharm (Diploma in Pharmacy)"]
    },
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
              Our Academic Departments
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Academic Departments
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Explore our diverse range of departments offering cutting-edge education and research opportunities with industry-aligned curriculum.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {departments.map((dept) => (
              <div key={dept.id} className="glassmorphism rounded-xl p-6 flex flex-col h-full">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h2 className="text-xl font-display font-bold text-skitm-navy mb-3">{dept.name}</h2>
                <p className="text-skitm-gray mb-4 flex-grow">{dept.description}</p>
                <div className="bg-skitm-blue/5 rounded-lg p-3 mb-4">
                  <h3 className="font-semibold text-skitm-navy mb-2">Courses Offered:</h3>
                  <ul className="text-sm text-skitm-gray">
                    {dept.courses.map((course, index) => (
                      <li key={index} className="flex items-start mb-1">
                        <svg className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={`/departments/${dept.id}`}>
                  <Button variant="outline" fullWidth>
                    View Department
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Departments;
