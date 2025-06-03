
import PageTemplate from '@/components/layout/PageTemplate';
import Button from '@/components/ui/CustomButton';

const OnlineAdmission = () => {
  return (
    <PageTemplate
      title="Online Admission Form"
      subtitle="Complete your admission application online - Quick, easy, and secure."
      breadcrumb="Admissions"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glassmorphism rounded-xl p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-skitm-navy mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-skitm-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-skitm-navy mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-skitm-navy mb-2">
                  Program of Interest *
                </label>
                <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue">
                  <option value="">Select Program</option>
                  <option value="btech-cse">B.Tech Computer Science</option>
                  <option value="btech-ece">B.Tech Electronics</option>
                  <option value="btech-me">B.Tech Mechanical</option>
                  <option value="btech-ce">B.Tech Civil</option>
                  <option value="mba">MBA</option>
                  <option value="bba">BBA</option>
                  <option value="bpharma">B.Pharma</option>
                </select>
              </div>
            </div>
            
            <div className="pt-6">
              <Button variant="primary" fullWidth>
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
};

export default OnlineAdmission;
