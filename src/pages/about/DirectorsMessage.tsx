
import PageTemplate from '@/components/layout/PageTemplate';

const DirectorsMessage = () => {
  return (
    <PageTemplate
      title="Director's Message"
      subtitle="Leadership insights and vision for academic excellence at SKITM."
      breadcrumb="About Us"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glassmorphism rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-skitm-gray">Director Photo</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-skitm-navy mb-4">
                Dr. [Director Name]
              </h2>
              <p className="text-skitm-blue font-semibold mb-4">Director, SKITM</p>
              
              <p className="text-skitm-gray mb-4 leading-relaxed">
                As the Director of SKITM, I am committed to maintaining the highest standards of academic excellence and ensuring that our students receive world-class education that prepares them for the challenges of tomorrow.
              </p>
              
              <p className="text-skitm-gray leading-relaxed">
                Our focus is on holistic development, combining technical expertise with ethical values, leadership skills, and innovation capabilities.
              </p>
            </div>
          </div>
        </div>
        
        <div className="glassmorphism rounded-xl p-8">
          <h3 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Message
          </h3>
          <div className="text-skitm-gray leading-relaxed space-y-4">
            <p>
              Welcome to Shivajirao Kadam Institute of Technology and Management. As we continue our journey of excellence in technical education, I am proud to lead an institution that has consistently demonstrated its commitment to academic quality, research, and innovation.
            </p>
            <p>
              At SKITM, we believe that education is not just about imparting knowledge, but about shaping minds, building character, and preparing future leaders. Our faculty, staff, and students work together to create an environment that fosters creativity, critical thinking, and collaborative learning.
            </p>
            <p>
              I invite you to explore the opportunities that SKITM offers and join us in our mission to create tomorrow's technology leaders.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-skitm-navy font-semibold">Dr. [Director Name]</p>
            <p className="text-skitm-gray">Director, SKITM</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DirectorsMessage;
