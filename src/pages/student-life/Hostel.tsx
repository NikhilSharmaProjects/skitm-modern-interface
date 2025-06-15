
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/common/ParallaxSection';
import {
  Bed, Internet, Computer, Gymnasium, Tv, TableTennis, Basketball, Volleyball, Football, Badminton, Garden, HotWater, Water
} from "lucide-react";

// Placeholder/stock images relevant for hostels
const IMG_ROOM = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"; // white building
const IMG_GARDEN = "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"; // garden
const IMG_LOUNGE = "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"; // lounge
const IMG_POND = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"; // water pond

const features = [
  {
    icon: <Internet className="h-7 w-7 text-skitm-blue" />,
    title: "24x7 Internet",
    description: "High-speed 100MBPS WiFi access in all rooms, lounge and study areas.",
    image: IMG_ROOM,
  },
  {
    icon: <Computer className="h-7 w-7 text-skitm-blue" />,
    title: "Computer Labs",
    description: "Accessible computer centers for all residents to aid in studies and projects.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Gymnasium className="h-7 w-7 text-skitm-blue" />,
    title: "Gymnasium",
    description: "State-of-the-art gym facilities for fitness and health.",
    image: "https://images.unsplash.com/photo-1519864600265-abb62423ddec?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Tv className="h-7 w-7 text-skitm-blue" />,
    title: "TV Room",
    description: "Spacious lounge with TV for breaks, movies, and events.",
    image: IMG_LOUNGE
  },
  {
    icon: <TableTennis className="h-7 w-7 text-skitm-blue" />,
    title: "Indoor & Outdoor Games",
    description: "Table tennis, chess, and board games indoors; Volleyball, Football, Kho Kho, and Badminton outdoors.",
    image: "https://images.unsplash.com/photo-1517639493569-56689abc3e66?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Basketball className="h-7 w-7 text-skitm-blue" />,
    title: "Sports Ground",
    description: "Basketball, volleyball, football, and more—ample space for your favorite sports.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Garden className="h-7 w-7 text-skitm-blue" />,
    title: "Garden & Greenery",
    description: "Beautiful gardens, open spaces, and walking trails.",
    image: IMG_GARDEN
  },
  {
    icon: <HotWater className="h-7 w-7 text-skitm-blue" />,
    title: "Hot & RO Water",
    description: "Round-the-clock supply of hot water and safe drinking RO water.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Bed className="h-7 w-7 text-skitm-blue" />,
    title: "Air-Cooled Rooms",
    description: "Comfortable air-cooled rooms to make hostel a true home away from home.",
    image: IMG_ROOM,
  },
  {
    icon: <Utensils className="h-7 w-7 text-skitm-blue" />,
    title: "Mess & Canteen",
    description: "Pure vegetarian menu, homely nutritious meals, with special weekly treats and a lively canteen.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Water className="h-7 w-7 text-skitm-blue" />,
    title: "Water Pond",
    description: "Serene water pond adding tranquility to the campus.",
    image: IMG_POND
  },
];

const rules = [
  "Hostel accommodation is provisional and based on academic performance and discipline.",
  "No refund/claim for Hostel Money if leaving mid-session.",
  "Admission is for one academic year; payment in quarterly installments.",
  "All residents must follow hostel rules and regulations.",
  "Residents are solely responsible for their actions inside/outside campus.",
  "Rooms can be inspected by Warden/Management at any time.",
  "No electronic devices allowed without prior permission.",
  "Morning classes are mandatory, regular and punctual attendance required.",
  "Application on prescribed form to Hostel Warden required for admission.",
  "Only vegetarian meals are served.",
  "Meals must be taken in the dining hall (morning tea, breakfast, lunch, dinner).",
  "Meals are served only during prescribed timings displayed on the board.",
  "Common menu for all residents.",
  "Maintain dignity; no nuisance or disturbance permitted.",
  "Switch off room lights/fans when leaving the room.",
  "Inform Warden in case of illness/injury; all medical charges are borne by residents.",
  "Visitors/parents only allowed in hostel rooms with prior permission.",
  "Directions of Wardens must be obeyed on all matters.",
  "Illegal activities (gambling, making noise at night, etc.) are forbidden.",
  "Smoking is strictly prohibited on campus.",
  "No intoxicants (alcohol, gutkha, etc.) allowed on premises. No one should come to hostel in inebriated condition.",
  "Residents are responsible for hostel property; damages must be reported and will be charged.",
];

const Hostel = () => (
  <div className="min-h-screen flex flex-col bg-skitm-offWhite">
    <Navbar />
    {/* Parallax Hero Section */}
    <ParallaxSection
      backgroundImage={IMG_ROOM}
      overlayOpacity={0.55}
      className="min-h-[50vh]"
    >
      <div className="parallax-content space-y-6">
        <div className="inline-block px-6 py-2 mb-5 rounded-full bg-white/30 text-white text-sm font-semibold shadow-md backdrop-blur">
          SKITM, Indore — Hostel Facilities
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-2 leading-tight">
          Hostel : Home Away from Home
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-2 drop-shadow">
          Air-cooled rooms, beautiful green campus, lively mess, gymnasium, sports and the best environment to grow personally and academically.
        </p>
      </div>
    </ParallaxSection>

    {/* Hostel Features : Cards with Images */}
    <main className="flex-grow">
      <section className="section-container bg-white/90 rounded-b-3xl pb-8">
        <h2 className="section-title text-center mb-0">Hostel Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {features.map((feature, i) => (
            <div key={i} className="rounded-2xl shadow-xl group overflow-hidden glassmorphism card-hover flex flex-col h-full">
              <div className="h-52 sm:h-60 w-full overflow-hidden mb-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-white bg-opacity-80">
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <span className="font-display font-bold text-xl md:text-2xl text-skitm-navy grow">
                    {feature.title}
                  </span>
                </div>
                <div className="text-skitm-gray text-base font-medium">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <span className="inline-block px-5 py-2 bg-skitm-blue text-white font-medium rounded-lg shadow hover-scale transition">
            Weekly tours, sports & much more make Hostel life unforgettable!
          </span>
        </div>
      </section>

      {/* Hostel Rules & Regulations */}
      <section className="section-container pt-8 pb-12 max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-4">Hostel Rules & Regulations</h2>
        <div className="glassmorphism rounded-xl shadow-xl p-6 md:p-10 max-h-[620px] overflow-y-auto">
          <div className="prose prose-skitm text-skitm-gray text-lg space-y-4">
            <p className="text-skitm-navy font-extrabold text-2xl mb-2">
              The aim of our Hostel is to make it a <span className="text-skitm-blue">Home Away from Home</span>.
            </p>
            <p>
              The air-cooled hostel offers an ambience focused on studies, sports, cultural activities and interpersonal development.
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-base marker:text-skitm-blue">
              {rules.map((rule, idx) => (
                <li key={idx} className="leading-snug">{rule}</li>
              ))}
            </ul>
            <p className="mt-8 text-base text-skitm-gray font-medium text-right italic">SKITM, Indore</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Hostel;
