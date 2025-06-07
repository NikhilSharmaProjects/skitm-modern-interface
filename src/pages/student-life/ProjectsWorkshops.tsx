
import PageTemplate from '@/components/layout/PageTemplate';
import { Code, Cpu, Wrench, Lightbulb, Users, Award, Calendar, Target } from 'lucide-react';

const ProjectsWorkshops = () => {
  const projects = [
    {
      title: "AI & Machine Learning Projects",
      icon: <Cpu className="h-6 w-6 text-skitm-blue" />,
      description: "Students work on cutting-edge AI projects including computer vision, natural language processing, and predictive analytics.",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
      outcomes: ["Industry-ready skills", "Research publications", "Internship opportunities"]
    },
    {
      title: "Web Development Projects",
      icon: <Code className="h-6 w-6 text-skitm-blue" />,
      description: "Full-stack web development projects using modern frameworks and technologies for real-world applications.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      outcomes: ["Portfolio development", "Client projects", "Startup opportunities"]
    },
    {
      title: "IoT & Embedded Systems",
      icon: <Wrench className="h-6 w-6 text-skitm-blue" />,
      description: "Hands-on projects involving sensor integration, microcontroller programming, and smart device development.",
      technologies: ["Arduino", "Raspberry Pi", "Sensors", "Cloud Integration"],
      outcomes: ["Innovation skills", "Hardware expertise", "Patent applications"]
    },
    {
      title: "Research & Innovation",
      icon: <Lightbulb className="h-6 w-6 text-skitm-blue" />,
      description: "Student-led research projects in collaboration with faculty, focusing on solving real-world problems.",
      technologies: ["MATLAB", "Simulation Tools", "Data Analysis", "Technical Writing"],
      outcomes: ["Research papers", "Conference presentations", "Academic recognition"]
    }
  ];

  const workshops = [
    {
      category: "Technical Skills",
      sessions: [
        {
          title: "Python Programming Bootcamp",
          duration: "5 days",
          level: "Beginner to Advanced",
          description: "Comprehensive Python training covering basics to advanced concepts including data structures and algorithms."
        },
        {
          title: "Data Science & Analytics",
          duration: "3 days",
          level: "Intermediate",
          description: "Hands-on workshop on data analysis, visualization, and machine learning using popular Python libraries."
        },
        {
          title: "Web Development Masterclass",
          duration: "7 days",
          level: "Beginner to Advanced",
          description: "Complete web development training covering HTML, CSS, JavaScript, and modern frameworks."
        },
        {
          title: "Mobile App Development",
          duration: "4 days",
          level: "Intermediate",
          description: "React Native and Flutter training for cross-platform mobile application development."
        }
      ]
    },
    {
      category: "Industry Skills",
      sessions: [
        {
          title: "Digital Marketing & SEO",
          duration: "2 days",
          level: "Beginner",
          description: "Learn digital marketing strategies, social media marketing, and search engine optimization techniques."
        },
        {
          title: "Entrepreneurship & Startup",
          duration: "3 days",
          level: "All Levels",
          description: "Business development, pitch preparation, and startup ecosystem understanding for aspiring entrepreneurs."
        },
        {
          title: "Communication & Soft Skills",
          duration: "2 days",
          level: "All Levels",
          description: "Professional communication, presentation skills, and personality development for career growth."
        }
      ]
    }
  ];

  const achievements = [
    {
      title: "Smart City Solutions",
      description: "Student team developed IoT-based traffic management system adopted by local municipal corporation",
      impact: "Reduced traffic congestion by 25%"
    },
    {
      title: "Healthcare Innovation",
      description: "AI-powered diagnostic tool for early disease detection developed by CSE students",
      impact: "Patent filed and industry collaboration secured"
    },
    {
      title: "Sustainable Technology",
      description: "Solar-powered water purification system designed by Mechanical Engineering students",
      impact: "Implemented in 3 rural villages"
    },
    {
      title: "Fintech Solution",
      description: "Mobile banking application with enhanced security features developed by student team",
      impact: "Won national-level competition"
    }
  ];

  return (
    <PageTemplate
      title="Projects & Workshops"
      subtitle="Hands-on learning through industry projects, research initiatives, and skill development workshops."
      breadcrumb="Student Life"
    >
      {/* Projects Section */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <div className="flex items-center mb-8">
          <Target className="h-8 w-8 text-skitm-blue mr-3" />
          <h2 className="text-2xl font-display font-bold text-skitm-navy">
            Student Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-skitm-blue/10 rounded-full">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-skitm-navy mb-2">
                    {project.title}
                  </h3>
                  <p className="text-skitm-gray mb-4">{project.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-skitm-navy mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-skitm-navy mb-2">Learning Outcomes:</h4>
                <ul className="space-y-1">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-center text-sm text-skitm-gray">
                      <div className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workshops Section */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <div className="flex items-center mb-8">
          <Users className="h-8 w-8 text-skitm-blue mr-3" />
          <h2 className="text-2xl font-display font-bold text-skitm-navy">
            Skill Development Workshops
          </h2>
        </div>
        
        {workshops.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-6">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.sessions.map((workshop, idx) => (
                <div key={idx} className="border border-skitm-blue/20 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-skitm-navy">{workshop.title}</h4>
                    <div className="flex items-center text-sm text-skitm-blue">
                      <Calendar className="h-4 w-4 mr-1" />
                      {workshop.duration}
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full">
                      {workshop.level}
                    </span>
                  </div>
                  <p className="text-sm text-skitm-gray">{workshop.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project Achievements */}
      <div className="glassmorphism rounded-xl p-8">
        <div className="flex items-center mb-8">
          <Award className="h-8 w-8 text-skitm-blue mr-3" />
          <h2 className="text-2xl font-display font-bold text-skitm-navy">
            Notable Project Achievements
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="border-l-4 border-skitm-blue pl-6">
              <h3 className="font-bold text-skitm-navy mb-2">{achievement.title}</h3>
              <p className="text-skitm-gray mb-3">{achievement.description}</p>
              <div className="bg-skitm-blue/10 rounded-lg p-3">
                <span className="text-sm font-medium text-skitm-blue">Impact: {achievement.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default ProjectsWorkshops;
