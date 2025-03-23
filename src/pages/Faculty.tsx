
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Faculty = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Professor & HOD, Computer Science",
      education: "Ph.D in Computer Science, IIT Delhi",
      specialization: "Artificial Intelligence, Machine Learning",
      image: "https://placehold.co/200x200",
      publications: 45,
      experience: "15+ years"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Associate Professor, Electronics",
      education: "Ph.D in Electronics, IIT Bombay",
      specialization: "VLSI Design, Embedded Systems",
      image: "https://placehold.co/200x200",
      publications: 32,
      experience: "12+ years"
    },
    {
      id: 3,
      name: "Dr. Anil Verma",
      position: "Professor, Mechanical Engineering",
      education: "Ph.D in Mechanical Engineering, IIT Madras",
      specialization: "Thermodynamics, Fluid Mechanics",
      image: "https://placehold.co/200x200",
      publications: 28,
      experience: "14+ years"
    },
    {
      id: 4,
      name: "Dr. Meena Gupta",
      position: "Assistant Professor, Mathematics",
      education: "Ph.D in Applied Mathematics, Delhi University",
      specialization: "Numerical Analysis, Differential Equations",
      image: "https://placehold.co/200x200",
      publications: 18,
      experience: "8+ years"
    },
    {
      id: 5,
      name: "Dr. Suresh Patel",
      position: "Professor, Civil Engineering",
      education: "Ph.D in Structural Engineering, IIT Kanpur",
      specialization: "Earthquake Engineering, Structural Analysis",
      image: "https://placehold.co/200x200",
      publications: 37,
      experience: "16+ years"
    },
    {
      id: 6,
      name: "Dr. Neha Singh",
      position: "Associate Professor, Chemistry",
      education: "Ph.D in Organic Chemistry, BHU",
      specialization: "Polymer Chemistry, Green Chemistry",
      image: "https://placehold.co/200x200",
      publications: 25,
      experience: "11+ years"
    },
    {
      id: 7,
      name: "Dr. Vikram Malhotra",
      position: "Professor, Electrical Engineering",
      education: "Ph.D in Electrical Engineering, IIT Roorkee",
      specialization: "Power Systems, High Voltage Engineering",
      image: "https://placehold.co/200x200",
      publications: 42,
      experience: "18+ years"
    },
    {
      id: 8,
      name: "Dr. Anjali Desai",
      position: "Assistant Professor, Physics",
      education: "Ph.D in Theoretical Physics, TIFR",
      specialization: "Quantum Mechanics, Solid State Physics",
      image: "https://placehold.co/200x200",
      publications: 21,
      experience: "9+ years"
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
              Our Educators
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Faculty Members
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Meet our distinguished faculty members who bring their expertise, research, and industry experience to the classroom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {facultyMembers.map((faculty) => (
              <div key={faculty.id} className="glassmorphism rounded-xl p-6 flex flex-col h-full">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <h2 className="text-xl font-display font-bold text-skitm-navy mb-1 text-center">{faculty.name}</h2>
                <p className="text-skitm-blue mb-3 text-center">{faculty.position}</p>
                <div className="bg-skitm-navy/5 rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm text-skitm-gray">{faculty.education}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-sm text-skitm-gray">{faculty.specialization}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-skitm-gray">Experience: {faculty.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-skitm-blue flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-skitm-gray">Publications: {faculty.publications}</span>
                  </div>
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

export default Faculty;
