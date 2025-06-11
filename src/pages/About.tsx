
import PageTemplate from '@/components/layout/PageTemplate';
import ParallaxSection from '@/components/common/ParallaxSection';
import { Award, Users, BookOpen, MapPin, Target, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Award className="h-8 w-8 text-white" />, number: "A+ Grade", label: "NAAC Accredited" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "5000+", label: "Alumni Worldwide" },
    { icon: <BookOpen className="h-8 w-8 text-white" />, number: "15+", label: "Academic Programs" },
    { icon: <MapPin className="h-8 w-8 text-white" />, number: "25+", label: "Years of Excellence" },
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12 text-skitm-blue" />,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in education and research"
    },
    {
      icon: <Heart className="h-12 w-12 text-skitm-blue" />,
      title: "Innovation",
      description: "Fostering creativity and forward-thinking in all academic endeavors"
    },
    {
      icon: <Users className="h-12 w-12 text-skitm-blue" />,
      title: "Community",
      description: "Building strong relationships and contributing to society's betterment"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.5}
        className="min-h-[70vh] pt-24"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            About SKITM
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Shaping Future Leaders
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            UGC Autonomous • NAAC Accredited "A" Grade Institute
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                    {item.icon}
                  </div>
                </div>
                <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                  {item.number}
                </div>
                <div className="text-sm md:text-base text-blue-200">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <main className="flex-grow">
        {/* Image-First About Section */}
        <section className="section-container bg-white">
          <div className="image-first-block mb-20">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SKITM Campus"
                className="image-first-image"
              />
            </div>
            <div className="image-first-content order-1 lg:order-2">
              <h3 className="section-title">Our Story</h3>
              <p className="text-body-lg text-skitm-gray mb-6">
                Shivajirao Kadam Institute of Technology and Management stands as a beacon of excellence in higher education, committed to nurturing innovative minds and fostering academic brilliance.
              </p>
              <p className="text-body text-skitm-gray mb-8">
                With state-of-the-art infrastructure, industry-aligned curriculum, and dedicated faculty, we prepare students for global challenges while maintaining our commitment to ethical values and social responsibility.
              </p>
            </div>
          </div>

          <div className="image-first-block">
            <div className="image-first-content">
              <h3 className="section-title">Our Vision & Mission</h3>
              <p className="text-body-lg text-skitm-gray mb-6">
                To provide world-class education that combines theoretical knowledge with practical application, preparing students to become leaders in their chosen fields.
              </p>
              <p className="text-body text-skitm-gray mb-8">
                We foster an environment of innovation, research, and entrepreneurship, encouraging students to think critically and contribute meaningfully to society.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students in Discussion"
                className="image-first-image"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-container bg-skitm-offWhite">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glassmorphism rounded-xl p-8 text-center card-hover">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-skitm-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
