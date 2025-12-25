
import PageTemplate from '@/components/layout/PageTemplate';
import Button from '@/components/ui/CustomButton';

const AdmissionEnquiry = () => {
  return (
    <PageTemplate
      title="Admission Enquiry"
      subtitle="Have questions about admissions? Get in touch with our admission counselors."
      breadcrumb="Admissions"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Send Your Enquiry
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-skitm-navy mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-skitm-navy mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-skitm-navy mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-skitm-navy mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue"
                placeholder="Your enquiry message"
              ></textarea>
            </div>
            <Button variant="primary" fullWidth>
              Send Enquiry
            </Button>
          </form>
        </div>
        
        <div className="space-y-6">
          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Admission Helpline
            </h3>
            <div className="space-y-3">
              <p className="text-skitm-gray flex items-center">
                <span className="w-4 h-4 bg-skitm-blue rounded-full mr-3"></span>
                +91 9770907100
              </p>
              <p className="text-skitm-gray flex items-center">
                <span className="w-4 h-4 bg-skitm-blue rounded-full mr-3"></span>
                +91 9770907103
              </p>
              <p className="text-skitm-gray flex items-center">
                <span className="w-4 h-4 bg-skitm-blue rounded-full mr-3"></span>
                admissions@skitm.in
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-skitm-navy mb-4">
              Office Hours
            </h3>
            <div className="space-y-2 text-skitm-gray">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AdmissionEnquiry;
