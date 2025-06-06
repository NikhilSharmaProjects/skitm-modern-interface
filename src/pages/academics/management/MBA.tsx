
import PageTemplate from '@/components/layout/PageTemplate';

const MBA = () => {
  return (
    <PageTemplate
      title="Master of Business Administration (MBA)"
      subtitle="Comprehensive management education for future business leaders."
      breadcrumb="Academics > Management"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Program Overview
            </h2>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              The MBA program at SKITM provides comprehensive business education with focus on leadership, strategy, and innovation. The curriculum is designed to prepare students for senior management roles in various industries including corporate sector, banking, consulting, and entrepreneurship.
            </p>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              Our two-year full-time MBA program combines rigorous academic curriculum with practical business applications. Students gain exposure to real-world business challenges through case studies, industry projects, internships, and guest lectures by industry experts.
            </p>
            <p className="text-skitm-gray leading-relaxed">
              The program emphasizes developing analytical thinking, strategic decision-making, leadership skills, and global business perspective. Our graduates are successfully placed in leading companies across various sectors with competitive compensation packages.
            </p>
          </div>
          
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Program Details
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-skitm-blue pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">MBA General Management</h3>
                <p className="text-skitm-gray mb-3">2-year full-time program (120 credits)</p>
                <div className="text-sm text-skitm-gray space-y-1">
                  <p><strong>Duration:</strong> 4 Semesters</p>
                  <p><strong>Intake:</strong> 60 Students</p>
                  <p><strong>Affiliation:</strong> MAKAUT (Maulana Abul Kalam Azad University of Technology)</p>
                  <p><strong>Approval:</strong> AICTE</p>
                  <p><strong>Eligibility:</strong> Graduate in any discipline with 50% marks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Curriculum Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-skitm-navy mb-3">Core Subjects</h4>
                <ul className="space-y-2 text-sm text-skitm-gray">
                  <li>• Organizational Behavior</li>
                  <li>• Financial Management</li>
                  <li>• Marketing Management</li>
                  <li>• Operations Management</li>
                  <li>• Human Resource Management</li>
                  <li>• Strategic Management</li>
                  <li>• Business Analytics</li>
                  <li>• Business Communication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy mb-3">Specialized Areas</h4>
                <ul className="space-y-2 text-sm text-skitm-gray">
                  <li>• Digital Marketing & E-commerce</li>
                  <li>• International Business</li>
                  <li>• Entrepreneurship & Innovation</li>
                  <li>• Supply Chain Management</li>
                  <li>• Financial Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Project Management</li>
                  <li>• Corporate Strategy</li>
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
                <span className="text-skitm-gray">Industry-relevant curriculum</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Case study based learning</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Industry partnerships and internships</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Expert faculty with industry experience</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Strong placement support</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Entrepreneurship development</span>
              </li>
            </ul>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Specializations
            </h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Finance
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Marketing
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Human Resources
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Operations
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                International Business
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Entrepreneurship
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Business Analytics
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Digital Marketing
              </span>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Career Opportunities
            </h3>
            <div className="space-y-3 text-sm text-skitm-gray">
              <div>
                <h4 className="font-semibold text-skitm-navy">Corporate Sector</h4>
                <p>Manager, Assistant Manager, Business Analyst</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Banking & Finance</h4>
                <p>Investment Banker, Financial Analyst, Credit Analyst</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Consulting</h4>
                <p>Management Consultant, Strategy Consultant, Business Advisor</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Entrepreneurship</h4>
                <p>Startup Founder, Business Owner, Social Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glassmorphism rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Learning Methodology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 border border-skitm-blue/20 rounded-lg text-center">
            <h4 className="font-semibold text-skitm-navy mb-2">Case Studies</h4>
            <p className="text-sm text-skitm-gray">Harvard and local business cases for practical learning</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg text-center">
            <h4 className="font-semibold text-skitm-navy mb-2">Industry Projects</h4>
            <p className="text-sm text-skitm-gray">Real business problems and consulting projects</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg text-center">
            <h4 className="font-semibold text-skitm-navy mb-2">Internships</h4>
            <p className="text-sm text-skitm-gray">Summer internships in leading companies</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg text-center">
            <h4 className="font-semibold text-skitm-navy mb-2">Guest Lectures</h4>
            <p className="text-sm text-skitm-gray">Industry experts and successful entrepreneurs</p>
          </div>
        </div>
      </div>

      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Facilities & Infrastructure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-skitm-navy mb-3">Academic Facilities</h4>
            <ul className="space-y-2 text-sm text-skitm-gray">
              <li>• Smart classrooms with AV equipment</li>
              <li>• Computer lab with business software</li>
              <li>• Well-stocked library with business journals</li>
              <li>• Seminar halls for presentations</li>
              <li>• Wi-Fi enabled campus</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-skitm-navy mb-3">Support Services</h4>
            <ul className="space-y-2 text-sm text-skitm-gray">
              <li>• Career counseling and placement assistance</li>
              <li>• Industry mentorship programs</li>
              <li>• Entrepreneurship incubation center</li>
              <li>• Alumni network and connections</li>
              <li>• Student clubs and activities</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default MBA;
