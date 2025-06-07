
import PageTemplate from '@/components/layout/PageTemplate';
import { 
  Building, 
  BookOpen, 
  Cpu, 
  Beaker, 
  Utensils, 
  Wifi, 
  Home, 
  Bus, 
  Dumbbell,
  Shield,
  Heart,
  Car,
  Camera,
  Monitor
} from 'lucide-react';

const Facilities = () => {
  const academicFacilities = [
    {
      icon: <Building className="h-8 w-8 text-skitm-blue" />,
      title: "Smart Classrooms",
      description: "65+ air-conditioned classrooms equipped with digital projectors, interactive whiteboards, and advanced audio-visual systems for enhanced learning experience.",
      features: ["Digital Projectors", "Interactive Boards", "Audio-Visual Systems", "Air Conditioning"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-skitm-blue" />,
      title: "Central Library",
      description: "Comprehensive library with 26,673 volumes, 1,167 e-journals, 1,393 e-books, and DELNET access providing vast academic resources.",
      features: ["26,673 Books", "1,167 E-Journals", "Digital Resources", "Research Databases"]
    },
    {
      icon: <Beaker className="h-8 w-8 text-skitm-blue" />,
      title: "Advanced Laboratories",
      description: "State-of-the-art laboratories for Engineering, Pharmacy, and Management with modern equipment and research facilities.",
      features: ["Engineering Labs", "Pharmacy Labs", "Computer Labs", "Research Centers"]
    },
    {
      icon: <Cpu className="h-8 w-8 text-skitm-blue" />,
      title: "IT Infrastructure",
      description: "Modern computer laboratories with latest software, high-speed internet, and dedicated servers for academic and research purposes.",
      features: ["Latest Software", "High-Speed Internet", "Dedicated Servers", "24/7 Access"]
    }
  ];

  const researchFacilities = [
    {
      title: "AI & Machine Learning Lab",
      description: "Specialized laboratory for artificial intelligence and machine learning research with GPU clusters and advanced computing resources.",
      equipment: ["GPU Clusters", "High-Performance Computing", "ML Software Tools", "Research Workstations"]
    },
    {
      title: "Robotics Laboratory",
      description: "Modern robotics lab with industrial robots, sensors, and automation equipment for hands-on learning and research.",
      equipment: ["Industrial Robots", "Sensor Modules", "Automation Systems", "Programming Tools"]
    },
    {
      title: "Pharmaceutical Research Lab",
      description: "Advanced pharmacy lab with drug analysis equipment, formulation facilities, and quality control instruments.",
      equipment: ["HPLC Systems", "UV-Vis Spectrophotometer", "Tablet Compression", "Quality Control Tools"]
    },
    {
      title: "Innovation & Incubation Center",
      description: "Dedicated space for student startups and innovative projects with mentorship and funding support.",
      equipment: ["Co-working Spaces", "Mentorship Programs", "Funding Support", "Prototype Development"]
    }
  ];

  const studentAmenities = [
    {
      icon: <Home className="h-8 w-8 text-skitm-blue" />,
      title: "Hostel Accommodation",
      description: "Comfortable residential facilities for 548 students with modern amenities and 24/7 security.",
      details: ["Boys Hostel: 198 capacity", "Girls Hostel: 350 capacity", "24/7 Security", "Modern Amenities"]
    },
    {
      icon: <Utensils className="h-8 w-8 text-skitm-blue" />,
      title: "Dining Facilities",
      description: "Multiple cafeterias and food courts offering hygienic, nutritious meals and diverse cuisine options.",
      details: ["Main Cafeteria", "Food Courts", "Healthy Menu", "24/7 Snack Counter"]
    },
    {
      icon: <Heart className="h-8 w-8 text-skitm-blue" />,
      title: "Medical Center",
      description: "On-campus health facility with qualified medical staff providing primary healthcare and emergency services.",
      details: ["Qualified Medical Staff", "Emergency Care", "First Aid", "Health Checkups"]
    },
    {
      icon: <Bus className="h-8 w-8 text-skitm-blue" />,
      title: "Transportation",
      description: "Regular bus services connecting campus to major locations in Indore with safe and comfortable travel.",
      details: ["Multiple Routes", "Regular Schedule", "Safe Travel", "Student Discounts"]
    }
  ];

  const sportsRecreation = [
    {
      icon: <Dumbbell className="h-8 w-8 text-skitm-blue" />,
      title: "Sports Complex",
      description: "Comprehensive sports facilities including outdoor and indoor games for physical fitness and recreation.",
      facilities: [
        "Cricket Ground",
        "Basketball Court", 
        "Volleyball Court",
        "Badminton Courts",
        "Table Tennis",
        "Indoor Games Room"
      ]
    },
    {
      icon: <Monitor className="h-8 w-8 text-skitm-blue" />,
      title: "Recreation Center",
      description: "Entertainment and relaxation facilities for students including TV rooms, gaming areas, and cultural spaces.",
      facilities: [
        "TV Lounge",
        "Gaming Zone",
        "Music Room",
        "Cultural Center",
        "Reading Corners",
        "Study Groups"
      ]
    }
  ];

  const infrastructureHighlights = [
    {
      title: "Campus Security",
      icon: <Shield className="h-6 w-6 text-skitm-blue" />,
      description: "24/7 CCTV surveillance, trained security personnel, and access control systems ensuring student safety."
    },
    {
      title: "Parking Facilities", 
      icon: <Car className="h-6 w-6 text-skitm-blue" />,
      description: "Dedicated parking areas for students, faculty, and visitors with proper security arrangements."
    },
    {
      title: "Wi-Fi Connectivity",
      icon: <Wifi className="h-6 w-6 text-skitm-blue" />,
      description: "High-speed internet connectivity throughout campus enabling digital learning and research."
    },
    {
      title: "Surveillance System",
      icon: <Camera className="h-6 w-6 text-skitm-blue" />,
      description: "Advanced CCTV monitoring system ensuring campus security and maintaining discipline."
    }
  ];

  return (
    <PageTemplate
      title="Campus Facilities"
      subtitle="Explore world-class infrastructure and facilities designed to enhance your academic journey and campus experience."
      breadcrumb="Campus Life"
    >
      {/* Academic Facilities */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Academic Facilities
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {academicFacilities.map((facility, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-skitm-blue/10 rounded-full">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-skitm-navy mb-2">{facility.title}</h3>
                  <p className="text-skitm-gray mb-4">{facility.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {facility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></div>
                    <span className="text-sm text-skitm-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Facilities */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Research & Innovation Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchFacilities.map((facility, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-lg p-6">
              <h3 className="font-bold text-skitm-navy mb-3">{facility.title}</h3>
              <p className="text-skitm-gray mb-4">{facility.description}</p>
              <div>
                <h4 className="font-semibold text-skitm-navy mb-2">Key Equipment:</h4>
                <div className="flex flex-wrap gap-2">
                  {facility.equipment.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Amenities */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Student Amenities
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studentAmenities.map((amenity, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-4 bg-skitm-blue/10 rounded-full">
                {amenity.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-skitm-navy mb-2">{amenity.title}</h3>
                <p className="text-skitm-gray mb-4">{amenity.description}</p>
                <ul className="space-y-1">
                  {amenity.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-skitm-gray">
                      <div className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports & Recreation */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Sports & Recreation
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sportsRecreation.map((facility, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-skitm-blue/10 rounded-full">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-skitm-navy mb-2">{facility.title}</h3>
                  <p className="text-skitm-gray mb-4">{facility.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {facility.facilities.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></div>
                    <span className="text-sm text-skitm-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Highlights */}
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Infrastructure Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infrastructureHighlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-skitm-blue/10 rounded-full">
                  {highlight.icon}
                </div>
              </div>
              <h3 className="font-bold text-skitm-navy mb-2">{highlight.title}</h3>
              <p className="text-sm text-skitm-gray">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Facilities;
