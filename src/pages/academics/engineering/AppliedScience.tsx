
import PageTemplate from '@/components/layout/PageTemplate';

const AppliedScience = () => {
  return (
    <PageTemplate
      title="Applied Science Department"
      subtitle="Foundation sciences and humanities education supporting all engineering disciplines."
      breadcrumb="Academics > Engineering"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              About the Department
            </h2>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              The Applied Science Department at SKITM serves as the foundational pillar for all engineering and management programs. We provide essential courses in mathematics, physics, chemistry, and humanities that form the building blocks for advanced technical education. Our department ensures that students develop strong analytical thinking, scientific reasoning, and communication skills.
            </p>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              Our faculty members are highly qualified with advanced degrees in their respective fields and extensive teaching experience. We employ innovative teaching methodologies, interactive learning techniques, and modern laboratory facilities to make science education engaging and effective for engineering students.
            </p>
            <p className="text-skitm-gray leading-relaxed">
              The department plays a crucial role in developing the scientific temperament and research aptitude among students. Through well-designed courses and practical sessions, we prepare students to apply scientific principles in engineering problem-solving and innovation.
            </p>
          </div>
          
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Department Structure
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-skitm-blue pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Mathematics Section</h3>
                <p className="text-skitm-gray mb-3">Advanced mathematics courses for engineering applications</p>
                <ul className="text-sm text-skitm-gray space-y-1">
                  <li>• Calculus and Differential Equations</li>
                  <li>• Linear Algebra and Vector Analysis</li>
                  <li>• Probability and Statistics</li>
                  <li>• Numerical Methods</li>
                </ul>
              </div>
              <div className="border-l-4 border-skitm-orange pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Physics Section</h3>
                <p className="text-skitm-gray mb-3">Physics fundamentals and modern physics concepts</p>
                <ul className="text-sm text-skitm-gray space-y-1">
                  <li>• Engineering Physics</li>
                  <li>• Quantum Mechanics</li>
                  <li>• Solid State Physics</li>
                  <li>• Optics and Photonics</li>
                </ul>
              </div>
              <div className="border-l-4 border-skitm-green pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Chemistry Section</h3>
                <p className="text-skitm-gray mb-3">Engineering chemistry and materials science</p>
                <ul className="text-sm text-skitm-gray space-y-1">
                  <li>• Engineering Chemistry</li>
                  <li>• Environmental Chemistry</li>
                  <li>• Materials Science</li>
                  <li>• Corrosion Science</li>
                </ul>
              </div>
              <div className="border-l-4 border-skitm-purple pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Humanities Section</h3>
                <p className="text-skitm-gray mb-3">Communication skills and social sciences</p>
                <ul className="text-sm text-skitm-gray space-y-1">
                  <li>• Technical Communication</li>
                  <li>• Business Communication</li>
                  <li>• Economics for Engineers</li>
                  <li>• Professional Ethics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Course Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-skitm-navy mb-3">First Year Courses</h4>
                <ul className="space-y-2 text-sm text-skitm-gray">
                  <li>• Mathematics-I (Calculus)</li>
                  <li>• Mathematics-II (Differential Equations)</li>
                  <li>• Engineering Physics</li>
                  <li>• Engineering Chemistry</li>
                  <li>• Technical Communication</li>
                  <li>• Environmental Studies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy mb-3">Advanced Courses</h4>
                <ul className="space-y-2 text-sm text-skitm-gray">
                  <li>• Mathematical Methods for Engineers</li>
                  <li>• Applied Physics for Engineers</li>
                  <li>• Materials Science & Engineering</li>
                  <li>• Business Communication</li>
                  <li>• Engineering Economics</li>
                  <li>• Professional Ethics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="glassmorphism rounded-xl p-6 mb-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Key Features
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Well-equipped physics and chemistry labs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Interactive teaching methodologies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Experienced and qualified faculty</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Modern laboratory equipment</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Computer-aided learning tools</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Research project opportunities</span>
              </li>
            </ul>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Teaching Methods
            </h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Interactive Lectures
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Problem-Based Learning
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Laboratory Experiments
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Computer Simulations
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Group Discussions
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Project Work
              </span>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Support Services
            </h3>
            <div className="space-y-3 text-sm text-skitm-gray">
              <div>
                <h4 className="font-semibold text-skitm-navy">Academic Support</h4>
                <p>Extra classes, doubt clearing sessions, tutorials</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Laboratory Training</h4>
                <p>Hands-on experiments, instrument training</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Communication Skills</h4>
                <p>Technical writing, presentation skills, soft skills</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Research Guidance</h4>
                <p>Project mentoring, research methodology</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Laboratory Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Physics Lab</h4>
            <p className="text-sm text-skitm-gray">Mechanics, optics, electronics, modern physics experiments</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Chemistry Lab</h4>
            <p className="text-sm text-skitm-gray">Analytical chemistry, materials testing, environmental analysis</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Math Computing Lab</h4>
            <p className="text-sm text-skitm-gray">MATLAB, Mathematica, statistical software</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Language Lab</h4>
            <p className="text-sm text-skitm-gray">Communication skills, presentation training</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AppliedScience;
