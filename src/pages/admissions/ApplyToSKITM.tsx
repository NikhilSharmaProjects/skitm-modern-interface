
import PageTemplate from '@/components/layout/PageTemplate';
import Button from '@/components/ui/CustomButton';

const ApplyToSKITM = () => {
  return (
    <PageTemplate
      title="Apply To SKITM"
      subtitle="Start your journey towards excellence - Apply now for admission to SKITM"
      breadcrumb="Admissions"
    >
      <div className="space-y-8">
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-skitm-navy mb-2">Fill Application</h3>
              <p className="text-sm text-skitm-gray">Complete the online application form with required details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-skitm-navy mb-2">Document Upload</h3>
              <p className="text-sm text-skitm-gray">Upload required documents and certificates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-skitm-navy mb-2">Review & Submit</h3>
              <p className="text-sm text-skitm-gray">Review your application and submit for processing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-skitm-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-skitm-navy mb-2">Confirmation</h3>
              <p className="text-sm text-skitm-gray">Receive confirmation and further instructions</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glassmorphism rounded-xl p-8">
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-6">
              Online Application Form
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-skitm-navy mb-2">First Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-skitm-navy mb-2">Last Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-skitm-navy mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-skitm-navy mb-2">Phone Number *</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                  placeholder="Enter phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-skitm-navy mb-2">Program of Interest *</label>
                <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue">
                  <option value="">Select Program</option>
                  <optgroup label="Engineering">
                    <option value="btech-cse">B.Tech Computer Science</option>
                    <option value="btech-ece">B.Tech Electronics</option>
                    <option value="btech-me">B.Tech Mechanical</option>
                    <option value="btech-ce">B.Tech Civil</option>
                  </optgroup>
                  <optgroup label="Management">
                    <option value="mba">MBA</option>
                    <option value="imba">Integrated MBA</option>
                    <option value="mba-plus">MBA Plus</option>
                  </optgroup>
                  <optgroup label="Pharmacy">
                    <option value="bpharma">B.Pharma</option>
                    <option value="dpharma">D.Pharma</option>
                  </optgroup>
                  <optgroup label="Professional Studies">
                    <option value="bba">BBA</option>
                    <option value="bcom">B.Com</option>
                  </optgroup>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-skitm-navy mb-2">Previous Education</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                  placeholder="Brief details about your previous education"
                ></textarea>
              </div>
              
              <div className="pt-4">
                <Button variant="primary" fullWidth>
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
                Required Documents
              </h3>
              <ul className="space-y-2 text-skitm-gray">
                <li>• 10th Mark Sheet and Certificate</li>
                <li>• 12th Mark Sheet and Certificate</li>
                <li>• JEE Main Scorecard (for B.Tech)</li>
                <li>• CAT/MAT/CMAT Scorecard (for MBA)</li>
                <li>• Transfer Certificate</li>
                <li>• Character Certificate</li>
                <li>• Passport Size Photographs</li>
                <li>• Aadhar Card Copy</li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
                Important Dates
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-skitm-gray">Application Start:</span>
                  <span className="font-semibold text-skitm-navy">March 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-skitm-gray">Application Deadline:</span>
                  <span className="font-semibold text-skitm-navy">July 30, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-skitm-gray">Merit List Declaration:</span>
                  <span className="font-semibold text-skitm-navy">August 10, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-skitm-gray">Admission Confirmation:</span>
                  <span className="font-semibold text-skitm-navy">August 25, 2024</span>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
                Need Help?
              </h3>
              <div className="space-y-2 text-skitm-gray">
                <p>📞 +91 9770907100</p>
                <p>📧 admissions@skitm.in</p>
                <p>🕒 Mon-Sat: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ApplyToSKITM;
