
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import { TrendingUp, Users, Award, Building2, Target, CheckCircle } from 'lucide-react';

const Placement = () => {
  const stats = [
    { icon: <TrendingUp className="h-8 w-8 text-white" />, number: "95%", label: "Placement Rate" },
    { icon: <Building2 className="h-8 w-8 text-white" />, number: "150+", label: "Recruiting Companies" },
    { icon: <Award className="h-8 w-8 text-white" />, number: "₹12 LPA", label: "Highest Package" },
    { icon: <Users className="h-8 w-8 text-white" />, number: "5000+", label: "Alumni Placed" },
  ];

  const process = [
    {
      icon: <Target className="h-8 w-8 text-skitm-blue" />,
      title: "Pre-placement Training",
      description: "Comprehensive training and preparation programs"
    },
    {
      icon: <Users className="h-8 w-8 text-skitm-blue" />,
      title: "Resume Building",
      description: "Professional resume building and interview skills"
    },
    {
      icon: <Building2 className="h-8 w-8 text-skitm-blue" />,
      title: "Company Presentations",
      description: "Interactive sessions with industry representatives"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-skitm-blue" />,
      title: "Selection Process",
      description: "Written tests, technical rounds, and final interviews"
    }
  ];

  const topCompanies = [
    'TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'Accenture', 'IBM', 
    'Cognizant', 'HCL', 'Capgemini', 'Mindtree', 'L&T', 'Oracle'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.7}
        className="min-h-[70vh]"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Career Excellence
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
            Exceptional Placements
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Leading companies across industries recruit our talented graduates
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
        {/* Image-First Process Section */}
        <section className="section-container bg-white">
          <div className="image-first-block mb-20">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Job Interview"
                className="image-first-image"
              />
            </div>
            <div className="image-first-content order-1 lg:order-2">
              <h3 className="section-title">Industry Partnerships</h3>
              <p className="text-body-lg text-skitm-gray mb-6">
                Strong industry connections ensure our students have access to the best career opportunities. We maintain partnerships with over 150 companies across various sectors.
              </p>
              <p className="text-body text-skitm-gray mb-8">
                Our dedicated Career Resource and Development team works tirelessly to bridge the gap between academia and industry, ensuring our graduates are industry-ready.
              </p>
            </div>
          </div>
        </section>

        {/* Placement Process */}
        <section className="section-container bg-skitm-offWhite">
          <h2 className="section-title text-center">Placement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="glassmorphism rounded-xl p-8 text-center card-hover">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-skitm-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-skitm-gray">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Our Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {topCompanies.map((company, index) => (
              <div key={index} className="glassmorphism rounded-lg p-4 text-center card-hover">
                <span className="text-sm font-medium text-skitm-navy">{company}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Support Services Parallax */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          overlayOpacity={0.7}
          className="min-h-[50vh]"
        >
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
              Career Support Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Industry Mentorship</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Soft Skills Training</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Mock Interviews</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Internship Programs</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Alumni Network</div>
              </div>
              <div className="glassmorphism-dark px-4 py-3 rounded-lg text-center">
                <div className="text-sm">Career Counseling</div>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
};

export default Placement;
