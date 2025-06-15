import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  Bell,
  BellElectric,
  Bus,
  Cctv,
  Computer,
  Library,
  TableTennis,
  Volleyball,
  Wifi
} from "lucide-react";
// Note: Cricket, Basketball, Football are NOT available as Lucide icons
// We'll fallback to 'Bell' for unavailable icons, or pick close alternatives

const FACILITY_IMAGES = [
  { title: "Auditorium", img: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80" },
  { title: "Boys Hostel", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" },
  { title: "Computer Labs", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { title: "Labs for Specific Subjects", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
  { title: "Amphitheatre", img: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80" },
  { title: "Cricket Ground", img: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80" },
  { title: "Volleyball Court", img: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=800&q=80" },
  { title: "Canteen", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" },
  { title: "CCTV Surveillance", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80" },
  { title: "Digitally equipped library", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
  { title: "Smart Classes", img: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" },
  { title: "Transport Facility – Buses", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80" },
  { title: "Language Labs", img: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80" },
  { title: "Audio-Visual Rooms", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" },
  { title: "ATM", img: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80" },
  { title: "Wi-Fi Enabled Campus", img: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&q=80" },
  { title: "Indoor Sports Facilities – Table Tennis, Chess, Billiards", img: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80" },
  { title: "Football Ground", img: "https://images.unsplash.com/photo-1500673922987-e212871fec2e?auto=format&fit=crop&w=800&q=80" },
];

const FACILITY_DEVELOPMENT = [
  { title: "Cricket Pavilion", img: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80" },
  { title: "Building for College of Professional Studies", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" },
  { title: "Gymnasium", img: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80" },
  { title: "Basketball Court", img: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=800&q=80" },
  { title: "Biometric Entry Points", img: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" },
  { title: "Recreation Spaces", img: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80" },
  { title: "Residential Facilities", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" },
];

const icons: Record<string, JSX.Element> = {
  "Auditorium": <Bell size={32} className="text-skitm-blue" />,
  "Boys Hostel": <BellElectric size={32} className="text-skitm-blue" />,
  "Computer Labs": <Computer size={32} className="text-skitm-blue" />,
  "Labs for Specific Subjects": <Computer size={32} className="text-skitm-blue" />,
  "Amphitheatre": <Bell size={32} className="text-skitm-blue" />,
  "Cricket Ground": <Bell size={32} className="text-skitm-blue" />, // fallback
  "Volleyball Court": <Volleyball size={32} className="text-skitm-blue" />,
  "Canteen": <Bell size={32} className="text-skitm-blue" />,
  "CCTV Surveillance": <Cctv size={32} className="text-skitm-blue" />,
  "Digitally equipped library": <Library size={32} className="text-skitm-blue" />,
  "Smart Classes": <Computer size={32} className="text-skitm-blue" />,
  "Transport Facility – Buses": <Bus size={32} className="text-skitm-blue" />,
  "Language Labs": <Computer size={32} className="text-skitm-blue" />,
  "Audio-Visual Rooms": <Bell size={32} className="text-skitm-blue" />,
  "ATM": <Bell size={32} className="text-skitm-blue" />,
  "Wi-Fi Enabled Campus": <Wifi size={32} className="text-skitm-blue" />,
  "Indoor Sports Facilities – Table Tennis, Chess, Billiards": <TableTennis size={32} className="text-skitm-blue" />,
  "Football Ground": <Bell size={32} className="text-skitm-blue" />, // fallback
  "Cricket Pavilion": <Bell size={32} className="text-skitm-blue" />, // fallback
  "Building for College of Professional Studies": <Library size={32} className="text-skitm-blue" />,
  "Gymnasium": <BellElectric size={32} className="text-skitm-blue" />,
  "Basketball Court": <Bell size={32} className="text-skitm-blue" />, // fallback
  "Biometric Entry Points": <Cctv size={32} className="text-skitm-blue" />,
  "Recreation Spaces": <Bell size={32} className="text-skitm-blue" />,
  "Residential Facilities": <BellElectric size={32} className="text-skitm-blue" />,
};

const getFacilityIcon = (title: string) => icons[title] || <Bell size={32} className="text-skitm-blue" />;

const getShortDesc = (title: string) => {
  // short descriptions for select facilities
  switch (title) {
    case "Auditorium":
      return "Spacious and fully equipped for events, cultural programs and seminars.";
    case "Boys Hostel":
      return "Safe, comfortable, and well-furnished residential blocks for students.";
    case "Computer Labs":
      return "Hi-tech computer labs with high-speed internet and modern hardware.";
    case "Labs for Specific Subjects":
      return "Discipline-specific labs for practical learning experiences.";
    case "Cricket Ground":
      return "Well-maintained ground for matches and college tournaments.";
    case "CCTV Surveillance":
      return "24x7 campus surveillance for enhanced security.";
    case "Digitally equipped library":
      return "Massive collection of books, journals, and digital materials.";
    case "Transport Facility – Buses":
      return "Extensive fleet connecting key city routes for students and faculty.";
    case "Wi-Fi Enabled Campus":
      return "High-speed wireless network accessible throughout the campus.";
    case "Indoor Sports Facilities – Table Tennis, Chess, Billiards":
      return "Enjoy a range of indoor sports and activities.";
    case "Football Ground":
      return "Professional football ground for practice and competitions.";
    case "Amphitheatre":
      return "Open-air venue for performances and community events.";
    case "ATM":
      return "On-campus ATM for students' and staff convenience.";
    case "Smart Classes":
      return "Interactive, digitally enhanced learning spaces.";
    case "Residential Facilities":
      return "Modern living spaces for staff and students.";
    case "Gymnasium":
      return "Well-equipped gym for fitness and training.";
    case "Building for College of Professional Studies":
      return "A new modern building underway for professional courses.";
    case "Recreation Spaces":
      return "Chill zones and spaces for relaxation and hangouts.";
    case "Basketball Court":
      return "State-of-the-art basketball court for sports enthusiasts.";
    case "Language Labs":
      return "Labs for language learning equipped with modern tools.";
    case "Audio-Visual Rooms":
      return "Spaces equipped for advanced audio-visual learning.";
    default:
      return undefined;
  }
};

const Facilities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Parallax Hero Section */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        overlayOpacity={0.5}
        className="min-h-[60vh]"
      >
        <div className="text-center space-y-8">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
            World-Class Infrastructure
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
            State-of-the-Art Facilities
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore SKITM's modern amenities, green spaces, and vibrant campus life
          </p>
        </div>
      </ParallaxSection>

      <main className="flex-grow">
        {/* Facilities Grid */}
        <section className="section-container bg-white">
          <h2 className="section-title text-center">Core Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {FACILITY_IMAGES.map(({ title, img }) => (
              <div key={title} className="rounded-2xl overflow-hidden group shadow-xl card-hover bg-white">
                <div className="relative w-full h-52 sm:h-44 md:h-56 lg:h-52 overflow-hidden">
                  <OptimizedImage
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-skitm-blue/80 rounded-full p-2 z-10">
                    {getFacilityIcon(title)}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl mb-2 font-semibold text-skitm-blue group-hover:underline">{title}</h3>
                  <p className="text-skitm-gray text-[16px] min-h-[3rem]">
                    {getShortDesc(title) || ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Under Development */}
        <section className="section-container bg-skitm-blue/5 rounded-xl">
          <h2 className="section-title text-center mb-6">Development Underway</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {FACILITY_DEVELOPMENT.map(({ title, img }) => (
              <div key={title} className="rounded-2xl overflow-hidden group shadow-lg card-hover bg-white">
                <div className="relative w-full h-56 sm:h-44 md:h-48 lg:h-40 overflow-hidden">
                  <OptimizedImage
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-skitm-blue/90 rounded-full p-2 z-10">
                    {getFacilityIcon(title)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-display text-skitm-blue font-semibold mb-2 group-hover:underline">{title}</h3>
                  <p className="text-skitm-gray text-[15px] min-h-[2.5rem]">{getShortDesc(title) || ""}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Facilities;
