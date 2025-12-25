
import PageTemplate from '@/components/layout/PageTemplate';

const VisionMission = () => {
  return (
    <PageTemplate
      title="Vision & Mission"
      subtitle="Our guiding principles and aspirations that drive excellence in technical education."
      breadcrumb="About Us"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Vision Section */}
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 flex items-center">
            <span className="w-8 h-8 bg-skitm-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">V</span>
            Vision
          </h2>
          <p className="text-skitm-gray leading-relaxed">
            Holistic development of the learner through excellence in education, innovation & research.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 flex items-center">
            <span className="w-8 h-8 bg-skitm-orange rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">M</span>
            Mission
          </h2>
          <ol className="text-skitm-gray space-y-3 list-decimal list-inside">
            <li>
              To create a competitive and technically empowered environment which enables students to develop and discover their potential and become competent to address industrial, societal and global challenges.
            </li>
            <li>
              To achieve academic excellence in application oriented research, novelty and creativity leading to emergence of technocrats, leaders, innovators and renowned entrepreneurs.
            </li>
            <li>
              To become a top school in the country where students are raised with Holistic learning for inculcating core values of professionalism, gender equality, transparency and ethics.
            </li>
            <li>
              To establish partnership with globally recognized institutions and organizations to foster students with industrial exposure through extensive hands-on training.
            </li>
            <li>
              To ensure overall nurturing and all round personality development of students by continuous monitoring and guidance.
            </li>
          </ol>
        </div>
      </div>
      {/* Quality Policy */}
      <div className="glassmorphism rounded-xl p-8 mt-4">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
          Quality Policy
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          We are committed to develop high quality, professionally groomed technocrats and human resources to serve the nation through standards of excellence in academics, governance, research, innovation, training and infrastructure and to remain accountable for quality education through self-evaluation, regular monitoring and implementing corrective actions in an ethical and transparent manner.
        </p>
      </div>
    </PageTemplate>
  );
};

export default VisionMission;

