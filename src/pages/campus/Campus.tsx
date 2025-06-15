
import ParallaxSection from '@/components/common/ParallaxSection';
import CampusMap from '@/components/common/CampusMap';

const CAMPUS_IMAGES = [
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80", // Parliament stone vibes
  "https://images.unsplash.com/photo-1500673922987-e212871fec2e?auto=format&fit=crop&w=800&q=80" // Green, hills
];

const CAMPUS_FEATURES = [
  {
    title: "Peaceful Hillside Setting",
    description:
      "Nestled against the serene Ralamandal Hills, SKITM offers a peaceful atmosphere for learning and personal growth.",
    image: CAMPUS_IMAGES[4]
  },
  {
    title: "Architectural Grandeur",
    description:
      "Our main academic block is clad in the same stone used in India's Parliament, exuding grandeur and timelessness.",
    image: CAMPUS_IMAGES[3]
  },
  {
    title: "Nature Meets Modernity",
    description:
      "Abundant greenery, flora and fauna give the campus a unique personality and an inspiring environment to thrive.",
    image: CAMPUS_IMAGES[2]
  },
  {
    title: "Expansive Facilities",
    description:
      "Spread across 12 acres, SKITM features over 300,000 sq.ft. of built-up area, with state-of-the-art labs, recreation spaces, and modern residences. Extensive new upgrades are always underway.",
    image: CAMPUS_IMAGES[0]
  },
  {
    title: "Central Location, Tranquil Experience",
    description:
      "Accessible from the city yet tucked away from the bustle, SKITM is a true learning oasis amidst nature.",
    image: CAMPUS_IMAGES[1]
  }
];

const CAMPUS_OFFERINGS = [
  "B.Tech (CSE, MECH, CIVIL, EC)",
  "B.COM",
  "BBA",
  "Integrated MBA",
  "MBA (Full Time)",
  "D.Pharm",
  "B.Pharm"
];

const Campus = () => {
  return (
    <div className="min-h-screen flex flex-col bg-skitm-offWhite">
      {/* Hero/Parallax Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80"
        overlayOpacity={0.5}
        className="min-h-[60vh]"
      >
        <div className="parallax-content space-y-5">
          <div className="inline-block px-6 py-2 mb-4 rounded-full bg-white/30 text-white text-sm font-semibold shadow-md backdrop-blur">
            Our Campus
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-2 leading-tight">
            Discover the SKITM Campus
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Where modern learning meets nature.<br />
            Experience vibrant facilities, architectural grandeur, and peace in the heart of Indore.
          </p>
        </div>
      </ParallaxSection>

      <main className="flex-grow">
        {/* Campus Highlights Image-driven */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Campus Life at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CAMPUS_FEATURES.map((feature, idx) => (
              <div key={idx} className="rounded-2xl shadow-xl overflow-hidden glassmorphism flex flex-col md:flex-row items-stretch">
                <div className="md:w-2/5 h-56 md:h-auto">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold text-skitm-navy mb-2">{feature.title}</h3>
                  <p className="text-skitm-gray text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Copy and Courses */}
        <section className="section-container bg-skitm-blue/5 py-8 pb-16 text-skitm-navy max-w-3xl mx-auto rounded-xl">
          <h2 className="text-3xl font-bold mb-6 font-display text-center">About Our Campus</h2>
          <p className="text-lg mb-6 text-center">
            SKITM is among the top private engineering, pharmacy, and management colleges in Indore, Madhya Pradesh.
            Our campus is a perfect blend of modernity and nature—with new state-of-the-art labs, recreation spaces, and vibrant residential facilities. The campus is always evolving to offer the best, while the unique setting fosters a peaceful learning experience.
          </p>
          <p className="text-center mb-6">
            <strong>Programs Offered:</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            {CAMPUS_OFFERINGS.map((program, idx) => (
              <span key={idx} className="px-4 py-2 bg-skitm-blue/10 text-skitm-blue rounded-lg font-medium shadow">{program}</span>
            ))}
          </div>
        </section>

        {/* Interactive Campus Map */}
        <section className="section-container py-12">
          <h2 className="section-title text-center">Campus Location</h2>
          <div className="max-w-3xl mx-auto">
            <CampusMap />
          </div>
        </section>

      </main>
    </div>
  );
};

export default Campus;
