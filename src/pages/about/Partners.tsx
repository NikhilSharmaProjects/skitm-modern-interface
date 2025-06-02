
import PageTemplate from '@/components/layout/PageTemplate';

const Partners = () => {
  return (
    <PageTemplate
      title="Our Partners"
      subtitle="Strategic partnerships that enhance learning opportunities and career prospects"
      breadcrumb="About Us"
    >
      <div className="space-y-8">
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Industry & Academic Partnerships
          </h2>
          <p className="text-skitm-gray leading-relaxed mb-6">
            SKITM has established strategic partnerships with leading technology companies, educational institutions, and industry organizations to provide students with the best learning opportunities and career prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Technology Partners</h3>
            <ul className="space-y-2 text-skitm-gray">
              <li>• Oracle Academy</li>
              <li>• AWS Academy</li>
              <li>• Red Hat Academy</li>
              <li>• UiPath Academy</li>
              <li>• Linux Foundation</li>
            </ul>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Academic Partners</h3>
            <ul className="space-y-2 text-skitm-gray">
              <li>• HarvardX Certifications</li>
              <li>• Coursera Academy</li>
              <li>• University of Toledo, USA</li>
              <li>• Campbellsville University, Kentucky</li>
            </ul>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-lg font-semibold text-skitm-navy mb-3">Industry Partners</h3>
            <ul className="space-y-2 text-skitm-gray">
              <li>• TCS</li>
              <li>• Infosys</li>
              <li>• Tech Mahindra</li>
              <li>• Wipro</li>
              <li>• Accenture</li>
            </ul>
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Benefits of Our Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-skitm-navy mb-3">For Students</h3>
              <ul className="space-y-2 text-skitm-gray">
                <li>• Access to industry-standard curriculum</li>
                <li>• Professional certifications</li>
                <li>• Internship opportunities</li>
                <li>• Direct placement programs</li>
                <li>• Exposure to latest technologies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-skitm-navy mb-3">For Faculty</h3>
              <ul className="space-y-2 text-skitm-gray">
                <li>• Professional development programs</li>
                <li>• Access to latest course materials</li>
                <li>• Industry expert interactions</li>
                <li>• Research collaboration opportunities</li>
                <li>• Technology training and support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Partners;
