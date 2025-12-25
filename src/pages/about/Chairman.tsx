
import PageTemplate from '@/components/layout/PageTemplate';


const Chairman = () => {
  return (
    <PageTemplate
      title="About Our Chairman"
      subtitle="Prof. Shivajirao Kadam — A Visionary in Indian Education"
      breadcrumb="About Us"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero + bio section */}
        <div className="glassmorphism rounded-xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <img
                src={"/photos/chairman.png"}
                alt="Prof. Shivajirao Kadam"
                className="w-full h-72 object-cover rounded-xl shadow border"
                
              />
              <p className="mt-2 text-center text-sm text-skitm-gray">
                Prof. Dr. Shivajirao Kadam<br />
                Chairman, SKITM
              </p>
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-skitm-navy mb-4">Prof. Shivajirao Kadam</h2>
              <p className="text-lg text-skitm-blue mb-3 font-semibold">A Journey of Inspiration & Service</p>
              <p className="text-skitm-gray leading-relaxed mb-2">
                Prof. Shivajirao Kadam was born in a small village. Overcoming adversity, and with his parents’ commitment to education, he rose to pre-eminence in Indian academia. His illustrious journey—marked by resilience, scholarship, and institution-building—serves as an inspiration to countless students and educators.
              </p>
              <p className="text-skitm-gray leading-relaxed mb-2">
                Beginning as a lecturer at Bharati Vidyapeeth’s Yashwantrao Mohite College, Dr. Kadam was soon appointed principal of Poona College of Pharmacy, Pune. Over 27 years, he transformed the college into one of India’s leading pharmacy institutions, pioneering postgraduate and Ph.D. programs, and igniting a vibrant research culture.
              </p>
              <p className="text-skitm-gray leading-relaxed">
                Under his visionary leadership, the faculty secured 25 research patents; many alumni occupy prominent positions in academia, research, and industry across the globe.
              </p>
            </div>
          </div>
        </div>

        {/* Experience and Leadership */}
        <div className="glassmorphism rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-bold text-skitm-navy mb-4">Leadership & Administrative Experience</h3>
          <ul className="list-disc pl-6 text-skitm-gray space-y-1">
            <li><b>Chancellor</b>, Bharati Vidyapeeth (Deemed to be University), Pune (2018–Present)</li>
            <li><b>Vice-Chancellor</b>, Bharati Vidyapeeth Deemed University (2006–2017)</li>
            <li><b>Principal</b>, Poona College of Pharmacy (1979–2006)</li>
            <li><b>Pro-Chancellor, Pro Vice-Chancellor, Secretary</b> at Bharati Vidyapeeth, Pune</li>
            <li><b>Dean</b>, Faculty of Pharmaceutical Sciences, University of Pune (9 years)</li>
            <li>Chairman & Member of search, governance, and advisory boards across top Indian institutions</li>
          </ul>
        </div>

        {/* Government & Professional Bodies */}
        <div className="glassmorphism rounded-xl p-8 space-y-4">
          <h3 className="text-xl font-semibold text-skitm-blue mb-2">
            National & International Associations
          </h3>
          <ul className="list-disc pl-6 text-base text-skitm-gray space-y-1">
            <li>Member, <b>University Grants Commission</b> (UGC), New Delhi (6 years)</li>
            <li>Member, Pharmacy Council of India (10 years)</li>
            <li>Member, Governing Council, NAAC, Bangalore</li>
            <li>Major roles in Pune University: Executive Council, Academic Council, Senate, Board of Studies, Statutes Committee</li>
            <li>Advisory and Board positions at NMIMS, KIIT, Jaypee, Karunya University, and others</li>
            <li>Chairman, Bharati Sahakari Bank; Mahatma Gandhi Rugnalaya Charitable Hospital, Pune</li>
          </ul>
        </div>

        {/* Awards & Honours */}
        <div className="glassmorphism rounded-xl p-8 space-y-2">
          <h3 className="text-xl font-semibold text-skitm-blue mb-2">Select Awards & Distinctions</h3>
          <ul className="list-disc pl-6 text-base text-skitm-gray space-y-1">
            <li>Bar Council of India <b>“Golden Jubilee Special Award”</b> (2013) by the Prime Minister of India</li>
            <li>National award from Smt. Pratibhatai Patil, President of India, for excellence in higher education</li>
            <li><b>Best Teacher Award</b>, Government of Maharashtra (2001)</li>
            <li><b>Pharmacy Educator of Distinction</b> Award by Indian Pharmaceutical Association (2001)</li>
            <li>“Samaj Bhushan Puraskar”, “Eminent Educationist” Award, and more</li>
          </ul>
        </div>

        {/* Publications */}
        <div className="glassmorphism rounded-xl p-8 space-y-2">
          <h3 className="text-xl font-semibold text-skitm-blue mb-2">Publications & Research</h3>
          <p className="text-skitm-gray mb-2">
            Dr. Kadam has authored and published over <b>175 research papers</b> in international and national journals.
          </p>
          <ul className="list-disc pl-6 text-base text-skitm-gray space-y-1">
            <li>Books: <b>Physical Pharmacy</b>, <b>Medicinal Chemistry</b>, <b>Principles of Medicinal Chemistry</b>, <b>Maharashtra Universities Act, 1994</b></li>
          </ul>
        </div>

        {/* Conferences */}
        <div className="glassmorphism rounded-xl p-8 space-y-2">
          <h3 className="text-xl font-semibold text-skitm-blue mb-2">Major Conferences & Initiatives</h3>
          <ul className="list-disc pl-6 text-base text-skitm-gray space-y-1">
            <li>Indian Pharmaceutical Congress (6000+ delegates)</li>
            <li>All India Vice Chancellors Conference (2010)</li>
            <li>International Conference on Nano Science & Technology (2010, 2012)</li>
            <li>94th Annual Conference of Indian Economic Association (2011)</li>
          </ul>
        </div>

        {/* Personal Values */}
        <div className="glassmorphism rounded-xl p-8">
          <blockquote className="text-skitm-gray italic text-lg leading-relaxed border-l-4 border-skitm-blue pl-6 mb-2">
            “Through his innumerable achievements and contributions to society and education, Dr. Shivajirao Kadam has reached such heights of eminence that mere words are not enough to justify his work.”
          </blockquote>
          <p className="text-skitm-gray text-base leading-relaxed">
            Dr. Kadam’s helping nature, philanthropy, and dedication to education and research continue to inspire us every day.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Chairman;

