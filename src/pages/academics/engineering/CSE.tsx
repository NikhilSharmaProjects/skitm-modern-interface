
import PageTemplate from '@/components/layout/PageTemplate';

const CSE = () => {
  return (
    <PageTemplate
      title="Computer Science & Engineering"
      subtitle="Pioneering innovation in software development, artificial intelligence, and cutting-edge computing technologies."
      breadcrumb="Academics > Engineering"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              About the Department
            </h2>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              The Computer Science & Engineering department at SKITM is at the forefront of technological innovation, offering comprehensive programs that prepare students for the rapidly evolving IT industry. Established with a vision to create skilled professionals in computing technologies, our department has consistently maintained high academic standards and industry relevance.
            </p>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              Our curriculum combines theoretical foundations with practical applications, ensuring graduates are well-equipped to tackle real-world challenges in software development, data science, cybersecurity, and emerging technologies. The department emphasizes hands-on learning through modern laboratories, industry projects, and internship opportunities.
            </p>
            <p className="text-skitm-gray leading-relaxed">
              With experienced faculty members holding advanced degrees from prestigious institutions and industry experience, we provide mentorship that bridges the gap between academic learning and professional requirements. Our graduates are successfully placed in leading technology companies, startups, and pursue higher education at renowned universities worldwide.
            </p>
          </div>
          
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Programs Offered
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-skitm-blue pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">B.Tech Computer Science & Engineering</h3>
                <p className="text-skitm-gray mb-3">4-year undergraduate program (120 credits)</p>
                <div className="text-sm text-skitm-gray space-y-1">
                  <p><strong>Duration:</strong> 8 Semesters</p>
                  <p><strong>Intake:</strong> 60 Students</p>
                  <p><strong>Affiliation:</strong> MAKAUT (Maulana Abul Kalam Azad University of Technology)</p>
                  <p><strong>Approval:</strong> AICTE</p>
                </div>
              </div>
              <div className="border-l-4 border-skitm-orange pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">M.Tech Computer Science & Engineering</h3>
                <p className="text-skitm-gray mb-3">2-year postgraduate program (24 credits)</p>
                <div className="text-sm text-skitm-gray space-y-1">
                  <p><strong>Duration:</strong> 4 Semesters</p>
                  <p><strong>Intake:</strong> 18 Students</p>
                  <p><strong>Specializations:</strong> Software Engineering, Data Science</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Curriculum Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-skitm-navy mb-3">Core Subjects</h4>
                <ul className="space-y-2 text-sm text-skitm-gray">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Object-Oriented Programming</li>
                  <li>• Database Management Systems</li>
                  <li>• Computer Networks</li>
                  <li>• Operating Systems</li>
                  <li>• Software Engineering</li>
                  <li>• Computer Architecture</li>
                  <li>• Theory of Computation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy mb-3">Specialized Areas</h4>
                <ul className="space-y-2 text-sm text-skitm-gray">
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Web Development & Mobile Applications</li>
                  <li>• Cybersecurity & Ethical Hacking</li>
                  <li>• Cloud Computing & DevOps</li>
                  <li>• Data Science & Big Data Analytics</li>
                  <li>• Internet of Things (IoT)</li>
                  <li>• Blockchain Technology</li>
                  <li>• Digital Image Processing</li>
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
                <span className="text-skitm-gray">State-of-the-art computer labs with latest software</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Industry-relevant curriculum updated regularly</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Expert faculty with PhD and industry experience</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Strong placement record with 90%+ success rate</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Industry partnerships for internships</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Research opportunities and project guidance</span>
              </li>
            </ul>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Specializations
            </h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Artificial Intelligence
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Machine Learning
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Data Science
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Cybersecurity
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Cloud Computing
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                IoT
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Web Development
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Mobile App Development
              </span>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Career Opportunities
            </h3>
            <div className="space-y-3 text-sm text-skitm-gray">
              <div>
                <h4 className="font-semibold text-skitm-navy">Software Industry</h4>
                <p>Software Engineer, Full Stack Developer, System Analyst</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Data & Analytics</h4>
                <p>Data Scientist, ML Engineer, Business Analyst</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Product Companies</h4>
                <p>Product Manager, Technical Lead, DevOps Engineer</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Consulting</h4>
                <p>IT Consultant, Solution Architect, Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Laboratory Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Programming Lab</h4>
            <p className="text-sm text-skitm-gray">Latest computers with modern IDEs and development tools</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Networks Lab</h4>
            <p className="text-sm text-skitm-gray">Cisco routers, switches, and network simulation software</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">AI/ML Lab</h4>
            <p className="text-sm text-skitm-gray">High-performance GPUs for machine learning and deep learning</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Database Lab</h4>
            <p className="text-sm text-skitm-gray">Oracle, MySQL, MongoDB for database management practice</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Project Lab</h4>
            <p className="text-sm text-skitm-gray">Dedicated space for final year projects and research</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Cloud Lab</h4>
            <p className="text-sm text-skitm-gray">AWS, Azure, Google Cloud Platform access for cloud computing</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CSE;
