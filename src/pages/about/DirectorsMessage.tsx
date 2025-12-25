
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
                <img
                  src="/photos/Dr. Sanjay Purkar.png"
                  alt="Director's Photo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-skitm-navy mb-4">
                Dr. Sanjay T Purkar
              </h2>
              <p className="text-skitm-blue font-semibold mb-4">Director, SKITM</p>
              
              <p className="text-skitm-gray mb-4 leading-relaxed">
                Dear Students, Parents, Patrons and Stakeholders,
              </p>
              
              <p className="text-skitm-gray leading-relaxed mb-4">
                Itcs a pleasure to have you Explore us through this website.
              </p>
              <p className="text-skitm-gray leading-relaxed mb-4">
                At SKITM, it’s our goal to enhance the employability of our graduates. We back our programs with research, a sound curriculum, intensive training and a host of Certifications. Our attitude of going beyond the books will surely position our graduates at the forefront of the Placement curve. Currently, SKITM is working extensively to bring its academic infrastructure at par with the best in the Industry.
              </p>
              <p className="text-skitm-gray leading-relaxed mb-4">
                Besides, with the faculty actively engaged in academic research, we are committed to making SKITM a centre for an outstanding learning experience. The aim is not only to provide world class education but also to inculcate an attitude towards the betterment of society. We invite you to join us in our endeavor to create a knowledge based society that fortifies the intellectual, physical and mental dimensions of participating individuals. We produce graduates who have the skill, experience and confidence to be comfortable with the latest developments in their profession. In life you get out of, what you put in, and College life is no different. Dare to dream, put in the effort, enjoy the ride and reap the rewards!
              </p>
              <p className="text-skitm-gray leading-relaxed mb-4">
                I need not to say that special care will be taken towards all the students in general and for those who are away from their homes in particular.
              </p>
              <p className="text-skitm-gray leading-relaxed mb-4">
                I welcome you to discover SKITM. Let’s Make a Difference Together!
              </p>
              <p className="mt-6 text-skitm-navy font-semibold">Best Regards,</p>
              <p className="text-skitm-navy font-semibold">Dr. Sanjay T Purkar</p>
              <p className="text-skitm-gray">Director, SKITM</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DirectorsMessage;
