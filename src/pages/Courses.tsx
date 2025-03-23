
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { useScrollAnimationDiv } from '@/hooks/useScrollAnimationDiv';
import { Link } from 'react-router-dom';

const Courses = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimationDiv();
  
  const courses = [
    {
      id: 1,
      name: "B.Tech in Computer Science",
      duration: "4 years",
      eligibility: "10+2 with PCM",
      description: "A comprehensive program covering programming, algorithms, databases, and software engineering.",
      highlights: ["Modern curriculum", "Industry-aligned projects", "Internship opportunities", "State-of-the-art labs"]
    },
    {
      id: 2,
      name: "B.Tech in Electronics & Communication",
      duration: "4 years",
      eligibility: "10+2 with PCM",
      description: "Study communication systems, signal processing, embedded systems, and VLSI design.",
      highlights: ["Hands-on lab work", "Industry-sponsored projects", "Expert faculty", "Research opportunities"]
    },
    {
      id: 3,
      name: "M.Tech in Computer Science",
      duration: "2 years",
      eligibility: "B.Tech/B.E in relevant discipline",
      description: "Advanced study in machine learning, AI, cloud computing, and software architecture.",
      highlights: ["Research-focused", "Specialization tracks", "Industry connections", "Publication opportunities"]
    },
    {
      id: 4,
      name: "MBA in Technology Management",
      duration: "2 years",
      eligibility: "Bachelor's degree with minimum 50% marks",
      description: "Blend of business acumen and technology expertise for leadership roles.",
      highlights: ["Dual specialization", "Industry mentorship", "Case-based learning", "International exposure"]
    },
    {
      id: 5,
      name: "PhD Program",
      duration: "3-5 years",
      eligibility: "Master's degree in relevant discipline",
      description: "Research-intensive program with focus on innovation and scholarly contributions.",
      highlights: ["Funded research", "Publication support", "Conference grants", "Industry collaborations"]
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
              Academic Programs
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Our Courses
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Discover our diverse range of undergraduate, postgraduate, and doctoral programs designed to prepare you for success.
            </p>
          </div>
          
          <div className="space-y-6 mb-16">
            {courses.map((course) => (
              <div key={course.id} className="glassmorphism rounded-xl p-6 flex flex-col md:flex-row">
                <div className="md:w-2/3 mb-6 md:mb-0 md:mr-6">
                  <h2 className="text-2xl font-display font-bold text-skitm-navy mb-3">{course.name}</h2>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue rounded-full text-sm">
                      Duration: {course.duration}
                    </span>
                    <span className="px-3 py-1 bg-skitm-navy/10 text-skitm-navy rounded-full text-sm">
                      Eligibility: {course.eligibility}
                    </span>
                  </div>
                  <p className="text-skitm-gray mb-4">{course.description}</p>
                  <div>
                    <h3 className="font-semibold text-skitm-navy mb-2">Program Highlights:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                      {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-skitm-gray">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/3 flex flex-col justify-between">
                  <div className="bg-skitm-blue/5 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-skitm-navy mb-2">Admission Open</h3>
                    <p className="text-sm text-skitm-gray mb-4">Next batch starting July 2023. Limited seats available.</p>
                    <Link to="/admissions">
                      <Button variant="primary" fullWidth>
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="outline" fullWidth>
                      Course Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
