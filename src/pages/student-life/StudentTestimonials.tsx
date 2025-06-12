
import ParallaxSection from '@/components/common/ParallaxSection';
import { Star, Users, Award, MessageCircle } from 'lucide-react';

const StudentTestimonials = () => {
  const stats = [
    { icon: <Star className="h-8 w-8 text-white" />, number: "4.8/5", label: "Student Rating" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "95%", label: "Student Satisfaction" },
    { icon: <Award className="h-8 w-8 text-white" />, number: "500+", label: "Success Stories" },
    { icon: <MessageCircle className="h-8 w-8 text-white" />, number: "100%", label: "Recommend SKITM" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      program: "B.Tech Computer Science",
      year: "2023",
      rating: 5,
      quote: "SKITM provided me with excellent technical education and industry exposure. The faculty support and placement assistance helped me secure a great job in a leading tech company.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Priya Sharma",
      program: "B.Pharm",
      year: "2023",
      rating: 5,
      quote: "The pharmacy program at SKITM is comprehensive and well-structured. The practical training and research opportunities prepared me well for my career in the pharmaceutical industry.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b098?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Arun Patel",
      program: "MBA",
      year: "2024",
      rating: 5,
      quote: "The MBA program at SKITM transformed my perspective on business and leadership. The case studies, industry interactions, and practical approach helped me grow professionally.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const alumniAchievements = [
    {
      title: "Industry Leaders",
      description: "Our alumni hold leadership positions in top multinational companies",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Successful Entrepreneurs",
      description: "Many graduates have started their own successful ventures and startups",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.6}
        className="min-h-[70vh] pt-24"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Student Voices
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Student Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Hear from our students and alumni about their transformative experiences at SKITM
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
        {/* Testimonials Section */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glassmorphism rounded-xl p-8 card-hover">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-display font-bold text-skitm-navy">{testimonial.name}</h4>
                    <p className="text-sm text-skitm-gray">{testimonial.program}</p>
                    <p className="text-xs text-skitm-gray">Class of {testimonial.year}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-skitm-gray text-sm italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni Achievements */}
        <section className="section-container bg-skitm-offWhite">
          <h2 className="section-title text-center">Alumni Success Stories</h2>
          <div className="space-y-16">
            {alumniAchievements.map((achievement, index) => (
              <div key={index} className={`image-first-block ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                  <img 
                    src={achievement.image}
                    alt={achievement.title}
                    className="image-first-image"
                  />
                </div>
                <div className={`image-first-content ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <h3 className="section-title">{achievement.title}</h3>
                  <p className="text-body-lg text-skitm-gray">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Parallax */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Join Our Community
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Alumni Network</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Mentorship Programs</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Industry Connections</div>
              <div className="glassmorphism-dark px-6 py-3 rounded-lg">Career Support</div>
            </div>
          </div>
        </ParallaxSection>
      </main>
    </div>
  );
};

export default StudentTestimonials;
