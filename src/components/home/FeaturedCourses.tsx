import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Button from '@/components/ui/CustomButton';

interface Course {
  id: string;
  name: string;
  code: string;
  duration: string;
  description: string;
  icon: string;
}

const FeaturedCourses = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      name: 'Computer Science & Engineering',
      code: 'CSE',
      duration: '4 Years',
      description: 'Comprehensive curriculum covering programming, algorithms, data structures, and modern computing paradigms.',
      icon: '💻',
    },
    {
      id: '2',
      name: 'Artificial Intelligence & Machine Learning',
      code: 'AIML',
      duration: '4 Years',
      description: 'Cutting-edge program focused on AI algorithms, neural networks, deep learning, and data science applications.',
      icon: '🤖',
    },
    {
      id: '3',
      name: 'Civil Engineering',
      code: 'CE',
      duration: '4 Years',
      description: 'Focused on structural design, construction management, environmental engineering, and infrastructure development.',
      icon: '🏗️',
    },
    {
      id: '4',
      name: 'Mechanical Engineering',
      code: 'ME',
      duration: '4 Years',
      description: 'Comprehensive study of thermodynamics, manufacturing processes, machine design, and automation technologies.',
      icon: '⚙️',
    },
    {
      id: '5',
      name: 'Master of Business Administration',
      code: 'MBA',
      duration: '2 Years',
      description: 'Business management program with specializations in marketing, finance, HR, operations, and entrepreneurship.',
      icon: '📊',
    },
  ]);
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>} 
        className={`container mx-auto px-4 ${sectionVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-skitm-navy mb-4">
            Our Featured Programs
          </h2>
          <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
            Explore our diverse range of undergraduate and postgraduate programs designed to prepare you for a successful future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`glassmorphism rounded-xl p-6 transition-all duration-500 card-hover ${
                sectionVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4 text-4xl">{course.icon}</div>
              <h3 className="text-xl font-display font-semibold text-skitm-navy mb-2">{course.name}</h3>
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-2 py-1 bg-skitm-blue/10 text-skitm-blue text-xs font-medium rounded">
                  {course.code}
                </span>
                <span className="px-2 py-1 bg-skitm-navy/10 text-skitm-navy text-xs font-medium rounded">
                  {course.duration}
                </span>
              </div>
              <p className="text-skitm-gray mb-4 text-sm">{course.description}</p>
              <Link to={`/courses/${course.id}`}>
                <Button variant="outline" size="sm" fullWidth>
                  View Details
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/courses">
            <Button variant="primary">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
