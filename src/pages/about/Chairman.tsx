
import PageTemplate from '@/components/layout/PageTemplate';

const Chairman = () => {
  return (
    <PageTemplate
      title="About Our Chairman"
      subtitle="Leadership that inspires excellence and drives our institution's vision forward."
      breadcrumb="About Us"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glassmorphism rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-skitm-gray">Chairman Photo</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-skitm-navy mb-4">
                Shri [Chairman Name]
              </h2>
              <p className="text-skitm-blue font-semibold mb-4">Chairman, SKITM</p>
              
              <p className="text-skitm-gray mb-4 leading-relaxed">
                With years of experience in education and industry, our Chairman provides visionary leadership to SKITM. Their commitment to quality education and student development has been instrumental in establishing our institution as a center of excellence.
              </p>
              
              <p className="text-skitm-gray leading-relaxed">
                Under their guidance, SKITM has grown to become one of the leading technical institutions in Madhya Pradesh, known for its innovative approach to education and strong industry connections.
              </p>
            </div>
          </div>
        </div>
        
        <div className="glassmorphism rounded-xl p-8">
          <h3 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Message from the Chairman
          </h3>
          <blockquote className="text-skitm-gray italic text-lg leading-relaxed border-l-4 border-skitm-blue pl-6">
            "Education is the most powerful weapon which you can use to change the world. At SKITM, we are committed to providing our students with not just technical knowledge, but also the values and skills needed to become responsible global citizens."
          </blockquote>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Chairman;
