
import PageTemplate from '@/components/layout/PageTemplate';
import { Quote, Star, GraduationCap, Briefcase, Users, MapPin } from 'lucide-react';

const StudentTestimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      course: "B.Tech Computer Science & Engineering",
      year: "2023 Graduate",
      company: "TCS",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "SKITM provided me with an excellent foundation in computer science. The faculty's guidance and practical approach to learning helped me secure a position at TCS. The coding competitions and project work enhanced my problem-solving skills significantly.",
      rating: 5,
      highlights: ["Strong Technical Foundation", "Industry-Ready Skills", "Excellent Placement Support"]
    },
    {
      name: "Rahul Verma",
      course: "MBA",
      year: "2022 Graduate",
      company: "HDFC Bank",
      role: "Business Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "The MBA program at SKITM transformed my career. The case study approach, industry interactions, and internship opportunities gave me real-world business experience. The faculty's mentorship was instrumental in my success.",
      rating: 5,
      highlights: ["Practical Learning", "Industry Exposure", "Career Transformation"]
    },
    {
      name: "Anjali Patel",
      course: "B.Pharm",
      year: "2023 Graduate",
      company: "Sun Pharmaceutical",
      role: "Quality Control Analyst",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "The pharmaceutical program at SKITM is comprehensive and industry-focused. The well-equipped labs and experienced faculty prepared me well for the pharmaceutical industry. The internship program helped me understand real-world applications.",
      rating: 5,
      highlights: ["Modern Lab Facilities", "Industry Connections", "Practical Training"]
    },
    {
      name: "Vikash Kumar",
      course: "B.Tech Electronics & Communication",
      year: "2023 Graduate",
      company: "Jio",
      role: "Network Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "SKITM's ECE department provided excellent exposure to latest technologies in telecommunications. The project-based learning and industry partnerships helped me land a job at Jio. The faculty's support was exceptional throughout my journey.",
      rating: 5,
      highlights: ["Latest Technology", "Project-Based Learning", "Strong Industry Connections"]
    },
    {
      name: "Sneha Gupta",
      course: "BBA",
      year: "2022 Graduate", 
      company: "Entrepreneur",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "The BBA program equipped me with entrepreneurial skills and business acumen. The incubation support and mentorship from faculty helped me start my own digital marketing agency. SKITM truly nurtures entrepreneurial spirit.",
      rating: 5,
      highlights: ["Entrepreneurial Support", "Business Skills", "Incubation Facility"]
    },
    {
      name: "Amit Singh",
      course: "B.Tech Mechanical Engineering",
      year: "2023 Graduate",
      company: "Mahindra & Mahindra",
      role: "Design Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      testimonial: "The mechanical engineering program provided hands-on experience with latest CAD software and manufacturing processes. The industry visits and expert lectures gave me insights into automotive industry, leading to my placement at Mahindra.",
      rating: 5,
      highlights: ["Hands-on Experience", "Industry Exposure", "Modern Equipment"]
    }
  ];

  const stats = [
    {
      icon: <GraduationCap className="h-8 w-8 text-skitm-blue" />,
      title: "Graduates Placed",
      value: "85%+",
      description: "Annual placement rate across all programs"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-skitm-blue" />,
      title: "Industry Partners",
      value: "200+",
      description: "Companies recruiting from SKITM"
    },
    {
      icon: <Users className="h-8 w-8 text-skitm-blue" />,
      title: "Alumni Network",
      value: "5000+",
      description: "Successful professionals worldwide"
    },
    {
      icon: <MapPin className="h-8 w-8 text-skitm-blue" />,
      title: "Global Reach",
      value: "15+",
      description: "Countries where our alumni work"
    }
  ];

  const currentStudents = [
    {
      name: "Aarti Jain",
      course: "B.Tech CSE - Final Year",
      testimonial: "The coding culture at SKITM is amazing. Regular hackathons, coding competitions, and peer learning sessions have significantly improved my programming skills. The faculty encourages innovation and creativity.",
      achievements: ["Hackathon Winner", "Coding Club President", "Internship at Microsoft"]
    },
    {
      name: "Rohit Agarwal", 
      course: "MBA - Final Year",
      testimonial: "The live projects and case studies make learning very practical. The industry mentorship program connected me with senior executives who guided my career path. The campus life is vibrant and enriching.",
      achievements: ["Best Case Study Award", "Student Council Vice-President", "Summer Internship at Wipro"]
    },
    {
      name: "Kavya Reddy",
      course: "B.Pharm - Third Year",
      testimonial: "The research opportunities and modern lab facilities at SKITM are excellent. Working on drug formulation projects has given me practical insights into pharmaceutical development. Faculty support is outstanding.",
      achievements: ["Research Paper Published", "Pharmacy Society Secretary", "National Level Competition Winner"]
    }
  ];

  return (
    <PageTemplate
      title="Student Testimonials"
      subtitle="Hear from our students and alumni about their transformative experiences and achievements at SKITM."
      breadcrumb="Student Life"
    >
      {/* Success Statistics */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Student Success Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-skitm-blue/10 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-skitm-navy mb-2">{stat.value}</h3>
              <h4 className="font-semibold text-skitm-navy mb-1">{stat.title}</h4>
              <p className="text-sm text-skitm-gray">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Testimonials */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Alumni Success Stories
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-skitm-navy">{testimonial.name}</h3>
                  <p className="text-sm text-skitm-blue mb-1">{testimonial.course}</p>
                  <p className="text-sm text-skitm-gray">{testimonial.year}</p>
                  <div className="flex items-center mt-2">
                    <Briefcase className="h-4 w-4 text-skitm-blue mr-2" />
                    <span className="text-sm font-medium text-skitm-navy">{testimonial.role}</span>
                    <span className="text-sm text-skitm-gray ml-2">at {testimonial.company}</span>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="relative mb-4">
                <Quote className="h-6 w-6 text-skitm-blue/30 absolute -top-2 -left-2" />
                <p className="text-skitm-gray italic pl-4">{testimonial.testimonial}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-skitm-navy mb-2">Key Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {testimonial.highlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-sm rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Student Experiences */}
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Current Student Experiences
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentStudents.map((student, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl p-6">
              <div className="mb-4">
                <h3 className="font-bold text-skitm-navy mb-1">{student.name}</h3>
                <p className="text-sm text-skitm-blue">{student.course}</p>
              </div>
              
              <div className="relative mb-4">
                <Quote className="h-5 w-5 text-skitm-blue/30 absolute -top-1 -left-1" />
                <p className="text-sm text-skitm-gray italic pl-3">{student.testimonial}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-skitm-navy mb-2">Achievements:</h4>
                <ul className="space-y-1">
                  {student.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center text-sm text-skitm-gray">
                      <div className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default StudentTestimonials;
