import PageTemplate from "@/components/layout/PageTemplate";
import { useMemo } from "react";
import { pickRandomGalleryImages } from "@/utils/galleryImages";

const schools = [
    "Shivajirao Kadam Institute of Technology & Management",
    "Faculty of Management Studies – SKITM",
    "Shivajirao Kadam Institute of Pharmaceutical Edu. & Research",
    "Transnational School of Law",
    "College of Professional Studies – ATC",
    "Bharati Vidhyapeeth School of Performing Arts (Centre)",
];

const affiliations = [
    "Accredited with grade 'A' by NAAC",
    "Devi Ahilya Vishwavidyalaya (DAVV), Indore",
    "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
    "Pharmacy Council of India",
    "Bar Council of India",
];

const AboutSKITM = () => {
    // Pick 3 random gallery images for different content sections
    const [img1, img2, img3] = useMemo(() => pickRandomGalleryImages(3), []);

    return (
        <PageTemplate
            title="About SKITM"
            subtitle="The best college in Indore."
            breadcrumb="About Us"
        >
            <div className="space-y-12">
                {/* Hero Visual & Introduction */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src={img1}
                        alt="SKITM campus"
                        className="rounded-2xl shadow-lg w-full h-96 object-cover"
                        loading="lazy"
                    />
                    <div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-skitm-navy mb-5">
                            Visionary Leadership. Transformative Education.
                        </h2>
                        <p className="text-lg text-skitm-gray leading-relaxed mb-4">
                            SKITM is an academician-led institute founded by
                            Prof. Shivajirao Kadam, Chancellor of Bharati
                            Vidyapeeth Pune—India’s leading university. The
                            group has colleges in Engineering, Law, Management,
                            Pharmacy & Commerce.
                        </p>
                        <p className="text-skitm-gray leading-relaxed mb-4">
                            SKITM is NAAC Grade ‘A’ accredited & ISO Certified
                            for its high quality of education. Affiliated to
                            RGPV (Bhopal) & DAVV (Indore) and approved by AICTE,
                            UGC, PCI, BCI, and MP Department of Higher
                            Education, the institute sets the benchmark for
                            quality and innovation in Central India.
                        </p>
                        <p className="text-skitm-gray leading-relaxed">
                            Through industry-aligned pedagogy and the unrivalled
                            guidance of eminent mentors, SKITM is changing the
                            nature of education—empowering students to
                            transform, innovate and lead.
                        </p>
                    </div>
                </div>

                {/* Institutes/Schools */}
                <div className="glassmorphism rounded-xl p-8 shadow">
                    <h3 className="text-2xl font-bold text-skitm-blue mb-5">
                        Hosting Schools
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-skitm-gray text-lg">
                        {schools.map((school) => (
                            <li key={school}>{school}</li>
                        ))}
                    </ul>
                </div>

                {/* Visual Section: Excellence & Placement */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="font-bold text-2xl md:text-3xl text-skitm-navy mb-4">
                            Excellence Recognized. Placements Delivered.
                        </h3>
                        <p className="text-lg text-skitm-gray mb-4">
                            SKITM is accredited with Grade A, upholding the
                            highest academic standards and ensuring outstanding
                            placement opportunities. With a unique teaching
                            methodology, strong collaborations, and impactful
                            certifications, SKITM has emerged as the best
                            institute in Central India.
                        </p>
                        <p className="text-skitm-gray">
                            Join SKITM for an educational experience recognized
                            for its transformative impact, placement success,
                            and top academics.
                        </p>
                    </div>
                    <img
                        src={img2}
                        alt="Student Achievements and Campus Life"
                        className="rounded-2xl shadow-lg w-full h-96 object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Affiliations & Approvals */}
                <div className="glassmorphism rounded-xl p-8 shadow space-y-4">
                    <h3 className="text-xl font-semibold text-skitm-blue mb-2">
                        Affiliations & Certifications
                    </h3>
                    <ul className="list-disc pl-6 text-lg space-y-1 text-skitm-gray">
                        {affiliations.map((aff, idx) => (
                            <li key={idx}>{aff}</li>
                        ))}
                    </ul>
                </div>

                {/* Gallery visual */}
                <div className="w-full overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={img3}
                        alt="Campus Gallery"
                        className="w-full h-72 object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </PageTemplate>
    );
};

export default AboutSKITM;
