import ParallaxSection from "@/components/common/ParallaxSection";
import CampusMap from "@/components/common/CampusMap";
import OptimizedImage from "@/components/ui/OptimizedImage";
import PageTemplate from "@/components/layout/PageTemplate";
import {
    getRandomGalleryImage,
    pickRandomGalleryImages,
} from "@/utils/galleryImages";

const Campus = () => {
    // Get random gallery images for campus sections
    const campusImages = pickRandomGalleryImages(10);

    const CAMPUS_IMAGES = [
        campusImages[0] || "/Gallery/GalleryImage (1).png",
        campusImages[1] || "/Gallery/GalleryImage (2).png",
        campusImages[2] || "/Gallery/GalleryImage (3).png",
        campusImages[3] || "/Gallery/GalleryImage (4).png",
        campusImages[4] || "/Gallery/GalleryImage (5).png",
    ];

    const CAMPUS_FEATURES = [
        {
            title: "Peaceful Hillside Setting",
            description:
                "Nestled against the serene Ralamandal Hills, SKITM offers a peaceful atmosphere for learning and personal growth.",
            image: CAMPUS_IMAGES[4],
        },
        {
            title: "Architectural Grandeur",
            description:
                "Our main academic block is clad in the same stone used in India's Parliament, exuding grandeur and timelessness.",
            image: CAMPUS_IMAGES[3],
        },
        {
            title: "Nature Meets Modernity",
            description:
                "Abundant greenery, flora and fauna give the campus a unique personality and an inspiring environment to thrive.",
            image: CAMPUS_IMAGES[1],
        },
        {
            title: "Expansive Facilities",
            description:
                "Spread across 12 acres, SKITM features over 300,000 sq.ft. of built-up area, with state-of-the-art labs, recreation spaces, and modern residences. Extensive new upgrades are always underway.",
            image: CAMPUS_IMAGES[0],
        },
    ];

    const CAMPUS_OFFERINGS = [
        "B.Tech (CSE, MECH, CIVIL, EC)",
        "B.COM",
        "BBA",
        "Integrated MBA",
        "MBA (Full Time)",
        "D.Pharm",
        "B.Pharm",
    ];

    const CAMPUS_GALLERY = [
        campusImages[5] || "/Gallery/GalleryImage (6).png",
        campusImages[6] || "/Gallery/GalleryImage (7).png",
        campusImages[7] || "/Gallery/GalleryImage (8).png",
        campusImages[8] || "/Gallery/GalleryImage (9).png",
        campusImages[9] || "/Gallery/GalleryImage (10).png",
    ];

    return (
        <PageTemplate title="Our Campus">
            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Background.png"
                overlayOpacity={0.55}
                className="min-h-[60vh]"
            >
                <div className="parallax-content space-y-6">
                    <div className="inline-block px-6 py-2 mb-3 rounded-full bg-white/30 text-white text-sm font-semibold shadow-md backdrop-blur">
                        Our Campus
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
                        Discover the SKITM Campus
                    </h1>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* About Our Campus - User Provided Text */}
                <section className="bg-white rounded-xl max-w-4xl mx-auto p-8 -mt-16 shadow-xl mb-12 z-10 relative ">
                    <h2 className="text-3xl font-bold mb-4 text-skitm-blue font-display text-center">
                        Our Campus
                    </h2>
                    <p className="text-skitm-navy text-lg mb-4 text-center">
                        SKITM is among the top private engineering, pharmacy and
                        management colleges in Indore, Madhya Pradesh. We offer
                        B.TECH (CSE, MECH, CIVIL, EC), B.COM, BBA, Integrated
                        MBA, MBA (Full Time), D.Pharm, and B.Pharm.
                    </p>
                    <p className="text-base text-skitm-gray text-center">
                        The SKITM Campus is set in the backdrop of the serene
                        Ralamandal Hills. The location of the campus is a
                        typical stand out point about it, where you are close to
                        the city while being tucked away from its hustle bustle.
                        All the flora and fauna gives the campus a unique
                        personality like no other. It’s a campus which exudes a
                        peaceful environment and makes for a great place to
                        learn and imbibe knowledge.
                        <br />
                        <br />
                        The sprawling campus is spread over 12 acres of land
                        with over 300,000 ft.² of infrastructure in place. The
                        building is clad with the same stone as our Parliament
                        which exudes Grandeur, while at the same time newer
                        buildings are underway to provide more learning spaces
                        to our students.
                        <br />
                        <br />
                        Moreover, the campus is currently undergoing extensive
                        upgradation on infrastructural front with the newer
                        state of the art labs, recreation spaces and residential
                        facilities. A host of new features and facilities are
                        also under development to ensure that the campus is a
                        perfect blend of modernity along with its closeness to
                        nature.
                    </p>
                </section>

                {/* Photo-Driven Features */}
                <section className="section-container bg-white">
                    <h2 className="section-title text-center">
                        Campus Life at a Glance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {CAMPUS_FEATURES.map((feature, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl shadow-xl overflow-hidden glassmorphism flex flex-col md:flex-row items-stretch animate-fade-in"
                            >
                                <div className="md:w-2/5 h-52 md:h-auto">
                                    <OptimizedImage
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-center">
                                    <h3 className="font-display text-2xl font-bold text-skitm-navy mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-skitm-gray text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Campus Gallery */}
                <section className="section-container py-12 bg-skitm-blue/5 rounded-xl my-12">
                    <h2 className="section-title text-center mb-6">
                        Campus Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {CAMPUS_GALLERY.map((img, i) => (
                            <div
                                key={i}
                                className="rounded-lg overflow-hidden hover-scale shadow-lg"
                            >
                                <OptimizedImage
                                    src={img}
                                    alt={`Campus view ${i + 1}`}
                                    className="w-full h-36 md:h-48 object-cover transition-transform duration-200"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Programs Offered */}
                <section className="section-container bg-white py-8 pb-12 text-skitm-navy max-w-3xl mx-auto rounded-xl">
                    <h2 className="text-3xl font-bold mb-6 font-display text-center">
                        Programs Offered
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-2">
                        {CAMPUS_OFFERINGS.map((program, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-skitm-blue/10 text-skitm-blue rounded-lg font-medium shadow"
                            >
                                {program}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 360° Campus Tour (In-page Section) */}
                <section className="section-container bg-skitm-blue/10 rounded-xl py-12 my-12 flex flex-col items-center justify-center">
                    <h2 className="section-title text-center mb-6">
                        360° Campus Tour
                    </h2>
                    <div className="relative w-full max-w-3xl mx-auto h-72 md:h-96 rounded-xl overflow-hidden border-4 border-skitm-blue shadow-2xl flex items-center justify-center bg-black">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1717942478196!6m8!1m7!1sCAoSLEFGMVFpcFBwVUNaV1VOQTNkYm5MOTZuZHhjV3dVRlRJenlWWkZGVkhjMkFs!2m2!1d22.604653!2d75.9628764!3f286.85!4f3.07!5f0.7820865974627469"
                            title="360° Campus Tour"
                            className="w-full h-full"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="absolute top-2 left-2 bg-white/90 px-4 py-2 rounded text-skitm-navy font-semibold shadow">
                            Explore our campus in 360°
                        </div>
                    </div>
                </section>

                {/* Map - Interactive Mapbox Map */}
                <section className="section-container py-12">
                    <h2 className="section-title text-center">
                        Campus Location
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <CampusMap />
                    </div>
                </section>
            </main>
        </PageTemplate>
    );
};

export default Campus;
