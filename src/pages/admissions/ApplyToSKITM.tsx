
import PageTemplate from '@/components/layout/PageTemplate';

const ApplyToSKITM = () => {
  return (
    <PageTemplate
      title="Apply To SKITM"
      subtitle="Empowering Minds, Shaping Futures"
      breadcrumb="Admissions"
    >
      <div className="space-y-10">

        {/* Welcome Section */}
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4 text-center">
            Welcome to Shivajirao Kadam Institute of Technology and Management (SKITM) Indore
          </h2>
          <p className="text-xl font-display font-semibold text-skitm-blue mb-3 text-center">
            Empowering Minds, Shaping Futures
          </p>
          <p className="text-skitm-gray text-center max-w-3xl mx-auto">
            Welcome to SKITM, your gateway to excellence in technical, pharmacy and managerial education. As a premier institution in Indore, we take pride in offering a diverse range of courses that cater to the dynamic needs of the industry. At SKITM, we believe in nurturing talent, fostering innovation, and shaping leaders of tomorrow.
          </p>
        </div>

        {/* Offerings Section */}
        <div className="glassmorphism rounded-xl p-8">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-6">
            Our Offerings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Engineering Excellence */}
            <div>
              <h4 className="font-bold text-skitm-blue mb-2">Engineering Excellence</h4>
              <ul className="text-skitm-gray text-sm space-y-1 list-disc list-inside">
                <li>B.Tech. in Computer Science Engineering</li>
                <li>B.Tech. in CSE – Artificial Intelligence & ML</li>
                <li>B.Tech. in CSIT</li>
                <li>B.Tech. in CSE – Data Science</li>
                <li>B.Tech. in Information Technology</li>
                <li>B.Tech. in Electronics & Comm. Engineering</li>
                <li>B.Tech. in Civil Engineering</li>
                <li>B.Tech. in Mechanical Engineering</li>
              </ul>
            </div>

            {/* Business and Commerce */}
            <div>
              <h4 className="font-bold text-skitm-blue mb-2">Business and Commerce</h4>
              <ul className="text-skitm-gray text-sm space-y-1 list-disc list-inside">
                <li>Bachelor of Business Administration (BBA)</li>
                <li>Bachelor of Commerce (BCom)</li>
                <li>Master of Business Administration (MBA)</li>
                <li>Integrated MBA programs</li>
              </ul>
            </div>

            {/* Pharmaceutical Sciences */}
            <div>
              <h4 className="font-bold text-skitm-blue mb-2">Pharmaceutical Sciences</h4>
              <ul className="text-skitm-gray text-sm space-y-1 list-disc list-inside">
                <li>Bachelor of Pharmacy</li>
                <li>Diploma in Pharmacy</li>
                <li>Master of Pharmacy</li>
              </ul>
            </div>

            {/* Transnational School of Law */}
            <div>
              <h4 className="font-bold text-skitm-blue mb-2">Transnational School of Law</h4>
              <ul className="text-skitm-gray text-sm space-y-1 list-disc list-inside">
                <li>B.A. LL.B. (Hons.)</li>
                <li>B.B.A. LL.B. (Hons.)</li>
                <li>LL.B. (Hons.)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose SKITM */}
        <div className="glassmorphism rounded-xl p-8">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-5">
            Why Choose SKITM?
          </h3>
          <ul className="text-skitm-gray text-base space-y-2 list-disc list-inside">
            <li><b className="text-skitm-blue">Experienced Faculty:</b> Learn from industry experts and experienced academicians dedicated to your success.</li>
            <li><b className="text-skitm-blue">State-of-the-Art Facilities:</b> Access cutting-edge labs, libraries, and technology to enhance your learning experience.</li>
            <li><b className="text-skitm-blue">Industry Connections:</b> Benefit from our strong ties with industry leaders, providing valuable exposure and opportunities.</li>
            <li><b className="text-skitm-blue">Holistic Development:</b> Beyond academics, we focus on your overall development with extracurricular activities and leadership programs.</li>
          </ul>
        </div>

        {/* Apply to SKITM / Admission Process */}
        <div className="glassmorphism rounded-xl p-8">
          <h3 className="text-xl font-display font-bold text-skitm-navy mb-5">
            Apply to SKITM: Admission Guidelines
          </h3>

          <div className="mb-8">
            <h4 className="font-semibold text-skitm-blue mb-2">Domicile Rule</h4>
            <p className="text-skitm-gray text-sm mb-2">
              Candidates aspiring for B.Tech admission in Madhya Pradesh must note that 90% of seats in B.E colleges across the state are reserved for Madhya Pradesh domicile/resident students. Only MP domicile students will be considered for the Tuition Fee Waiver scheme.
            </p>
            <h4 className="font-semibold text-skitm-blue mb-2">Entrance Exam</h4>
            <p className="text-skitm-gray text-sm mb-2">
              Madhya Pradesh B.Tech applicants must have a valid JEE Main score (non-zero positive score) to be eligible for the admission process.
              Candidates without JEE Main score can also apply for MP B.Tech admission, and Class 12 merit of the candidates will be considered while preparing the merit list.
            </p>
            <h4 className="font-semibold text-skitm-blue mb-2">Academic Qualification</h4>
            <p className="text-skitm-gray text-sm mb-2">
              B.Tech aspirants in Madhya Pradesh must have passed Class 12 with Physics, Mathematics and Chemistry/Biology/Biotechnology/Computer Science as the main subjects.
              The minimum qualifying marks required in Class 12 for B.Tech applicants should be 45% for General Category and 40% for reserved categories.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold text-skitm-blue mb-3">B.Tech/B.Pharm/MBA/IMBA/Diploma/Lateral Entry Admission Process</h4>
            <ol className="list-decimal list-inside text-skitm-gray text-sm space-y-2 ml-2">
              <li>
                <b className="text-skitm-blue">Registration for Counselling Process:</b> Click on the official link on the DTE website to register for counselling.
              </li>
              <li>
                <b className="text-skitm-blue">Login:</b> After the successful registration, candidates will be directed to the Login page. After login, fill the online application form for counselling.
              </li>
              <li>
                <b className="text-skitm-blue">Filling Online Application Form:</b> Enter all personal details in the prescribed columns of the form.
              </li>
              <li>
                <b className="text-skitm-blue">Release of Common Merit List:</b> DTE MP will release a Common Merit List of eligible candidates for B.E admission. The list will include candidate name, JEE Main Roll Number, Category, and merit number. Admission is merit-based.
              </li>
              <li>
                <b className="text-skitm-blue">Publication of Provisional Seat Allotment Letter:</b> After the merit list, candidates can download the seat allotment letter if satisfied with the allotment.
              </li>
              <li>
                <b className="text-skitm-blue">Upgradation of Seat:</b> Candidates may opt for seat upgradation by re-submitting the option entry form online. Students get two chances for upgradation as per the schedule.
              </li>
              <li>
                <b className="text-skitm-blue">Reporting to College:</b> Download the seat allotment letter and report to the respective college with all relevant documents.
              </li>
              <li>
                <b className="text-skitm-blue">Verification of Documents:</b> College authorities verify documents to confirm your admission.
              </li>
              <li>
                <b className="text-skitm-blue">Admission Confirmation:</b> After document verification, admission is confirmed and you must deposit the first-year fee within the specified date.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-skitm-blue mb-3">Admission Process for BBA/B.Com</h4>
            <p className="text-skitm-gray text-sm mb-2">
              Admission is done by applying through an online form prescribed by the Department of Higher Education, followed by Personal Interview.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ApplyToSKITM;
