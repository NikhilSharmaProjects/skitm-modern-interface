
import ParallaxSection from '@/components/common/ParallaxSection';
import { Code, Lightbulb, Users, Award } from 'lucide-react';

const ProjectsWorkshops = () => {
  const stats = [
    { icon: <Code className="h-8 w-8 text-white" />, number: "50+", label: "Projects Annually" },
    { icon: <Lightbulb className="h-8 w-8 text-white" />, number: "25+", label: "Workshops" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "1000+", label: "Participants" },
    { icon: <Award className="h-8 w-8 text-white" />, number: "15+", label: "Industry Partners" },
  ];

  const projectTypes = [
    {
      title: "Technical Innovation Projects",
      description: "Cutting-edge research and development projects in collaboration with industry partners",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industry Workshops",
      description: "Hands-on workshops conducted by industry experts on latest technologies and trends",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Student-Led Initiatives",
      description: "Encouraging students to lead and manage their own research and development projects",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.6}
        className="min-h-[70vh] pt-24"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Innovation Hub
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Projects & Workshops
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Hands-on learning through real-world projects and industry collaborations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-blue-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <main className="flex-grow">
        {/* Project Types Section */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Innovation Opportunities</h2>
          <div className="space-y-16">
            {projectTypes.map((project, index) => (
              <div key={index} className={`image-first-block ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="image-first-image"
                  />
                </div>
                <div className={`image-first-content ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <h3 className="section-title">{project.title}</h3>
                  <p className="text-body-lg text-skitm-gray">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Development Parallax */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Skills Development
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">AI & Machine Learning</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Web Development</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Mobile Apps</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">IoT Solutions</div>
            </div>
          </div>
        </ParallaxSection>
      </main>
    </div>
  );
};

export default ProjectsWorkshops;
