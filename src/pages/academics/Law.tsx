
import PageTemplate from '@/components/layout/PageTemplate';

const Law = () => {
  return (
    <PageTemplate
      title="Transnational School of Law"
      subtitle="Excellence in legal education with global perspective and practical training."
      breadcrumb="Academics"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              About the School
            </h2>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              The Transnational School of Law at SKITM is dedicated to providing comprehensive legal education that combines traditional legal principles with modern global perspectives. Our school prepares students for the evolving legal landscape in an interconnected world.
            </p>
            <p className="text-skitm-gray mb-4 leading-relaxed">
              We offer rigorous academic programs that emphasize both theoretical knowledge and practical skills. Our curriculum includes contemporary issues in law, international legal frameworks, and emerging areas like cyber law, environmental law, and intellectual property rights.
            </p>
            <p className="text-skitm-gray leading-relaxed">
              With experienced faculty, moot court facilities, and strong industry connections, we prepare graduates for successful careers in legal practice, corporate legal departments, judiciary, legal research, and public service.
            </p>
          </div>
          
          <div className="glassmorphism rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
              Programs Offered
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-skitm-blue pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Bachelor of Laws (LL.B.)</h3>
                <p className="text-skitm-gray mb-3">3-year undergraduate law program</p>
                <div className="text-sm text-skitm-gray space-y-1">
                  <p><strong>Duration:</strong> 6 Semesters</p>
                  <p><strong>Intake:</strong> 60 Students</p>
                  <p><strong>Eligibility:</strong> Graduation in any discipline</p>
                  <p><strong>Affiliation:</strong> University of Calcutta</p>
                </div>
              </div>
              <div className="border-l-4 border-skitm-orange pl-6">
                <h3 className="text-xl font-semibold text-skitm-navy mb-2">Bachelor of Arts + Bachelor of Laws (BA LL.B.)</h3>
                <p className="text-skitm-gray mb-3">5-year integrated law program</p>
                <div className="text-sm text-skitm-gray space-y-1">
                  <p><strong>Duration:</strong> 10 Semesters</p>
                  <p><strong>Intake:</strong> 60 Students</p>
                  <p><strong>Eligibility:</strong> 12th standard (any stream)</p>
                  <p><strong>Affiliation:</strong> University of Calcutta</p>
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
                <h4 className="font-semibold text-skitm-navy mb-3">Core Law Subjects</h4>
                <ul className="space-y-2 text-sm text-skitm-gray">
                  <li>• Constitutional Law</li>
                  <li>• Contract Law</li>
                  <li>• Tort Law</li>
                  <li>• Criminal Law</li>
                  <li>• Property Law</li>
                  <li>• Company Law</li>
                  <li>• Family Law</li>
                  <li>• Administrative Law</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy mb-3">Specialized Areas</h4>
                <ul className="space-y-2 text-sm text-skitm-gray">
                  <li>• International Law</li>
                  <li>• Cyber Law and IT Act</li>
                  <li>• Environmental Law</li>
                  <li>• Intellectual Property Rights</li>
                  <li>• Banking and Insurance Law</li>
                  <li>• Human Rights Law</li>
                  <li>• Corporate Governance</li>
                  <li>• Alternative Dispute Resolution</li>
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
                <span className="text-skitm-gray">Moot court training facilities</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Comprehensive law library</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Legal aid clinic</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Experienced faculty members</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Court visits and internships</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-skitm-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-skitm-gray">Guest lectures by legal experts</span>
              </li>
            </ul>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Legal Specializations
            </h3>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Constitutional Law
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Criminal Law
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Corporate Law
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                International Law
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Cyber Law
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                IPR
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Environmental Law
              </span>
              <span className="inline-block px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full mr-2 mb-2">
                Human Rights
              </span>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Career Opportunities
            </h3>
            <div className="space-y-3 text-sm text-skitm-gray">
              <div>
                <h4 className="font-semibold text-skitm-navy">Legal Practice</h4>
                <p>Advocate, Solicitor, Legal Consultant</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Corporate Sector</h4>
                <p>Legal Advisor, Compliance Officer, Company Secretary</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Judiciary</h4>
                <p>Judge, Judicial Services, Legal Researcher</p>
              </div>
              <div>
                <h4 className="font-semibold text-skitm-navy">Public Service</h4>
                <p>Government Legal Officer, Administrative Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Facilities and Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Law Library</h4>
            <p className="text-sm text-skitm-gray">Extensive collection of legal books, journals, and databases</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Moot Court Hall</h4>
            <p className="text-sm text-skitm-gray">Simulated courtroom for practical advocacy training</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Legal Aid Clinic</h4>
            <p className="text-sm text-skitm-gray">Facility for providing legal assistance to underprivileged</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Computer Lab</h4>
            <p className="text-sm text-skitm-gray">Digital legal research resources and online databases</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Seminar Hall</h4>
            <p className="text-sm text-skitm-gray">Space for legal discussions, workshops, and conferences</p>
          </div>
          <div className="p-4 border border-skitm-blue/20 rounded-lg">
            <h4 className="font-semibold text-skitm-navy mb-2">Legal Journals & Publications</h4>
            <p className="text-sm text-skitm-gray">School-published legal journals and research papers</p>
          </div>
        </div>
      </div>

      <div className="glassmorphism rounded-xl p-8 mt-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Student Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-skitm-navy mb-3">Academic Activities</h4>
            <ul className="space-y-2 text-sm text-skitm-gray">
              <li>• Moot court competitions (national and international)</li>
              <li>• Legal debates and quizzes</li>
              <li>• Legal research symposiums</li>
              <li>• Client counseling competitions</li>
              <li>• Legal drafting workshops</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-skitm-navy mb-3">Community Engagement</h4>
            <ul className="space-y-2 text-sm text-skitm-gray">
              <li>• Legal awareness camps</li>
              <li>• Pro bono legal services</li>
              <li>• Legal literacy programs</li>
              <li>• Human rights advocacy</li>
              <li>• Environmental law initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Law;
