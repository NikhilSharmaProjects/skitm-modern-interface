
import PageTemplate from '@/components/layout/PageTemplate';
import SEOHead from '@/components/SEO/SEOHead';
import { programSEO } from '@/lib/seo';
import { useState } from "react";
const DPharma = () => {
   const [showMore, setShowMore] = useState(false);
  return (
    <>
      <SEOHead 
        title={programSEO.dpharm.title}
        description={programSEO.dpharm.description}
        keywords={programSEO.dpharm.keywords}
      />
      <PageTemplate
        title="Diploma in Pharmacy (D.Pharm)"
        subtitle="Professional diploma program for pharmaceutical technicians and healthcare support professionals."
        breadcrumb="Academics > Pharmacy"
      >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Program Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The D.Pharm program provides essential pharmaceutical knowledge and practical skills for students aspiring to work as pharmaceutical technicians and healthcare support professionals.
        </p>
      </div>
        {/* add readmore content */}
<div className="mt-16 w-full">

  {/* open button */}
  {!showMore && (
    <div className="text-left">
      <button
        onClick={() => setShowMore(true)}
        className="inline-flex items-center gap-2 bg-skitm-navy text-white font-semibold px-6 py-2.5 rounded-lg text-lg shadow-md"
      >
        Read More
        <span className="text-white text-xl">▼</span>
      </button>
    </div>
  )}

  {/* show extra content */}
  {showMore && (
    <div className="mt-8 w-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg space-y-10 animate-fadeInUp">

      {/* Block 1 */}
      <div>
        <h1 className="text-2xl font-semibold text-skitm-navy mb-3">
          Build Your Future with D.Pharm College in Indore
        </h1>
        <p className="text-skitm-gray leading-relaxed">
         SKITM is recognized among the top D.Pharm colleges in Indore, offering students an excellent platform to begin their journey in the pharmaceutical sector. Our Diploma in Pharmacy program is designed to provide in-depth knowledge of drug formulation, clinical practices, and healthcare services. With advanced laboratories, experienced faculty, and practical learning opportunities, we ensure students develop the technical expertise required to excel in the industry.
        </p>
        <p className="text-skitm-gray leading-relaxed">At SKITM, students benefit from internships, industry visits, and skill-based workshops that prepare them for real-world challenges. The course opens career opportunities in hospitals, retail pharmacies, pharmaceutical companies, and healthcare organizations. With a strong focus on ethics, innovation, and professional growth, SKITM ensures every student graduates as a confident, competent, and career-ready pharmacist. Choosing SKITM means choosing one of the best D.Pharm colleges in Indore to secure a successful future in the field of pharmacy.</p>
      </div>

  
      {/*  Block 3 */}
      {/* <div>
        <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
      
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          
        </p>
      </div> */}

      {/* Read Less button */}
      <div className="text-left pt-4">
        <button
          onClick={() => setShowMore(false)}
          className="inline-flex items-center gap-2 bg-skitm-navy text-white font-semibold px-6 py-2.5 rounded-lg text-lg shadow-md"
        >
          Read Less
          <span className="text-white text-xl">▲</span>
        </button>
      </div>

    </div>
  )}
</div>

{/* --in this readmore contant close-- */}


      {/*  Add animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out; }
      `}</style>
      </PageTemplate>
    </>
  );
};

export default DPharma;
