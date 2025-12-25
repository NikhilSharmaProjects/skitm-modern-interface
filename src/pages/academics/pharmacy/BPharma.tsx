
import PageTemplate from '@/components/layout/PageTemplate';
import SEOHead from '@/components/SEO/SEOHead';
import { programSEO } from '@/lib/seo';
import { useState } from "react"; 
const BPharma = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <>
      <SEOHead 
        title={programSEO.bpharm.title}
        description={programSEO.bpharm.description}
        keywords={programSEO.bpharm.keywords}
      />
      <PageTemplate
        title="Bachelor of Pharmacy (B.Pharm)"
        subtitle="Comprehensive pharmaceutical education preparing students for careers in healthcare and drug development."
        breadcrumb="Academics > Pharmacy"
      >
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
          Program Overview
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          The B.Pharm program offers in-depth knowledge of pharmaceutical sciences, drug development, and healthcare systems, preparing students for diverse career opportunities in the pharmaceutical industry.
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
          Explore Opportunities at B.Pharma College in Indore
        </h1>
        <p className="text-skitm-gray leading-relaxed">
          Recognized as one of the leading B.Pharm colleges in Indore, SKITM provides world-class 
          education in pharmacy through practical learning and innovative teaching. Our programs 
          emphasize research, drug development, and clinical skills. With state-of-the-art labs 
          and industry collaborations, students graduate with the knowledge and confidence to excel 
          in the pharmaceutical field.
        </p>
      </div>

      {/* Block 2 */}
      <div>
        <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
          Choose Excellence with Best Private B.Pharma College in Madhya Pradesh
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM is ranked among the best private B.Pharm colleges in Madhya Pradesh, offering a 
          career-focused curriculum and advanced laboratory facilities. Students gain hands-on 
          training in pharmaceutical sciences, research, and industry practices. With expert 
          faculty and strong placement assistance, we prepare graduates for successful careers 
          in healthcare and pharmaceutical industries.
        </p>
      </div>

      {/*  Block 3 */}
      <div>
        <h2 className="text-2xl font-semibold text-skitm-navy mb-3">
          Build Your Career with B Pharmacy in Indore
        </h2>
        <p className="text-skitm-gray leading-relaxed">
          SKITM offers one of the most comprehensive programs for B Pharmacy in Indore, combining 
          theoretical knowledge with real-world applications. Students benefit from modern 
          laboratories, industry training, and expert mentorship. With a strong academic 
          foundation and placement support, we prepare future pharmacists to contribute 
          effectively to healthcare and medicine.
        </p>
      </div>

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

export default BPharma;
