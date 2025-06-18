
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import { getRandomGalleryImage, pickRandomGalleryImages } from "@/utils/galleryImages";
import {
  Bell,
  Volleyball,
  Zap
} from 'lucide-react';

const SPORTS_HEAD = {
  name: "Mr. Anil Panwar",
  role: "Sports Incharge",
  degree: "BA, BPAD",
  email: "anilpanwar@skitm.in"
};

const intro = `
Our institution is a firm believer in the holistic development of our students. Hence we greatly focus on their physical fitness. Our sports department is unlike any other in the region. A host of new sporting facilities are underway, under the guidance of Mr. Sanjay Jagdale, a former Indian cricketer and a former Secretary of BCCI. Currently, we offer Cricket, Football, Volleyball, Table Tennis, Basketball and a host of other indoor games. Our aim is to provide our students with world-class sporting facilities in the coming years and help them get recognition at various national and international level platforms.
`;

const Sports = () => {
  // Get random gallery images for sports
  const sportsImages = pickRandomGalleryImages(5);

  const sports = [
    {
      name: "Cricket",
      desc: "Full-size cricket ground, regular matches and professional coaching.",
      icon: <Bell className="h-10 w-10 text-skitm-blue mx-auto mb-3" />,
      img: sportsImages[0] || "/Gallery/GalleryImage (1).png"
    },
    {
      name: "Football",
      desc: "Well-maintained football field for tournaments and training.",
      icon: <Bell className="h-10 w-10 text-skitm-blue mx-auto mb-3" />,
      img: sportsImages[1] || "/Gallery/GalleryImage (2).png"
    },
    {
      name: "Volleyball",
      desc: "Outdoor volleyball courts with modern facilities.",
      icon: <Volleyball className="h-10 w-10 text-skitm-blue mx-auto mb-3" />,
      img: sportsImages[2] || "/Gallery/GalleryImage (3).png"
    },
    {
      name: "Basketball",
      desc: "Basketball court for regular matches and events.",
      icon: <Bell className="h-10 w-10 text-skitm-blue mx-auto mb-3" />,
      img: sportsImages[3] || "/Gallery/GalleryImage (4).png"
    },
    {
      name: "Table Tennis",
      desc: "Indoor table tennis and indoor games facility.",
      icon: <Zap className="h-10 w-10 text-skitm-blue mx-auto mb-3" />,
      img: sportsImages[4] || "/Gallery/GalleryImage (5).png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <ParallaxSection
        backgroundImage={getRandomGalleryImage()}
        overlayOpacity={0.5}
        className="min-h-[60vh]"
      >
        <div className="text-center space-y-8 flex flex-col items-center">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            Sports Department
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
            Sporting Excellence at SKITM
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {intro}
          </p>
          <div className="flex flex-col items-center mt-6">
            <div className="flex items-center gap-2 text-white text-base font-medium">
              <span className="font-semibold">{SPORTS_HEAD.name}</span>
              <span className="text-blue-200">| {SPORTS_HEAD.role} ({SPORTS_HEAD.degree})</span>
            </div>
            <a
              href={`mailto:${SPORTS_HEAD.email}`}
              className="text-blue-100 underline mt-1 text-sm hover:text-blue-50 duration-200"
            >
              {SPORTS_HEAD.email}
            </a>
          </div>
        </div>
      </ParallaxSection>

      <main className="flex-grow">
        {/* Sports Cards */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Featured Sports Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sports.map((sport) => (
              <div
                key={sport.name}
                className="rounded-2xl overflow-hidden shadow-xl card-hover bg-white animate-fade-in transition-transform"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={sport.img}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-skitm-blue/90 rounded-full p-2 z-10">
                    {sport.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-semibold text-skitm-blue mb-2">
                    {sport.name}
                  </h3>
                  <p className="text-skitm-gray min-h-[2.5rem]">{sport.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container bg-skitm-blue/5 rounded-xl my-12 p-8 text-center">
          <h2 className="section-title text-center mb-2">Our Vision</h2>
          <p className="text-lg text-skitm-navy mb-2">
            Our aim is to provide world-class sporting facilities and help our students achieve recognition on national and international platforms.
          </p>
          <div className="text-skitm-blue font-semibold">
            Guided by Mr. Sanjay Jagdale, former Indian cricketer and ex-BCCI Secretary.
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sports;
