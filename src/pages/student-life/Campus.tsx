
import PageTemplate from '@/components/layout/PageTemplate';
import { MapPin, Trees, Building, Users, Car, Wifi, Camera, Clock } from 'lucide-react';

const Campus = () => {
  const campusFeatures = [
    {
      icon: <Building className="h-8 w-8 text-skitm-blue" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art academic buildings with smart classrooms, well-equipped laboratories, and contemporary facilities designed for optimal learning experience."
    },
    {
      icon: <Trees className="h-8 w-8 text-skitm-blue" />,
      title: "Green Campus",
      description: "Sprawling 50-acre campus with lush green gardens, tree-lined pathways, and eco-friendly environment that promotes sustainability and well-being."
    },
    {
      icon: <Users className="h-8 w-8 text-skitm-blue" />,
      title: "Vibrant Community",
      description: "Diverse student community from across India fostering cultural exchange, collaborative learning, and lifelong friendships in a inclusive environment."
    },
    {
      icon: <Wifi className="h-8 w-8 text-skitm-blue" />,
      title: "Digital Campus",
      description: "High-speed Wi-Fi connectivity throughout campus, digital library access, smart card systems, and modern IT infrastructure supporting digital learning."
    }
  ];

  const facilities = [
    {
      category: "Academic Facilities",
      items: [
        {
          name: "Smart Classrooms",
          description: "65+ air-conditioned classrooms with digital projectors and audio-visual systems",
          icon: <Building className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Research Laboratories",
          description: "Specialized labs for AI, ML, Robotics, and advanced engineering research",
          icon: <Building className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Central Library",
          description: "26,673 volumes, digital resources, and quiet study spaces",
          icon: <Building className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Seminar Halls",
          description: "Multiple conference halls for academic events and guest lectures",
          icon: <Building className="h-5 w-5 text-skitm-blue" />
        }
      ]
    },
    {
      category: "Recreation & Sports",
      items: [
        {
          name: "Sports Complex",
          description: "Cricket ground, basketball court, volleyball court, and badminton facilities",
          icon: <Users className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Gymnasium",
          description: "Modern fitness equipment and dedicated space for physical training",
          icon: <Users className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Indoor Games",
          description: "Table tennis, chess, carrom, and other recreational activities",
          icon: <Users className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Cultural Center",
          description: "Auditorium and performance spaces for cultural events and festivals",
          icon: <Users className="h-5 w-5 text-skitm-blue" />
        }
      ]
    },
    {
      category: "Student Amenities",
      items: [
        {
          name: "Cafeteria & Food Courts",
          description: "Multiple dining options with hygienic and nutritious meal varieties",
          icon: <Building className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Medical Center",
          description: "On-campus health facility with qualified medical staff and emergency care",
          icon: <Building className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Banking & ATM",
          description: "On-campus banking services and ATM facilities for student convenience",
          icon: <Building className="h-5 w-5 text-skitm-blue" />
        },
        {
          name: "Transportation",
          description: "Bus services connecting campus to major locations in Indore",
          icon: <Car className="h-5 w-5 text-skitm-blue" />
        }
      ]
    }
  ];

  const campusLife = [
    {
      title: "Annual Cultural Festival",
      description: "Three-day cultural extravaganza featuring competitions, performances, and celebrations showcasing student talents.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Technical Symposium",
      description: "Technical competitions, workshops, and seminars bringing together students and industry experts.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Sports Championships",
      description: "Inter-department and inter-college sports competitions promoting healthy competition and team spirit.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Industry Interactions",
      description: "Regular guest lectures, industry visits, and corporate interactions enhancing practical knowledge.",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <PageTemplate
      title="Campus Life"
      subtitle="Experience vibrant campus life at SKITM with modern facilities, green environment, and endless opportunities for growth."
      breadcrumb="Student Life"
    >
      {/* Campus Overview */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <div className="flex items-center mb-6">
          <MapPin className="h-8 w-8 text-skitm-blue mr-3" />
          <h2 className="text-2xl font-display font-bold text-skitm-navy">
            Campus Overview
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-skitm-gray mb-6 leading-relaxed">
              SKITM's sprawling 50-acre campus is strategically located near Ralamandal Wildlife Sanctuary, providing a serene and pollution-free environment ideal for academic pursuits. The campus combines modern infrastructure with natural beauty, creating an inspiring atmosphere for learning and personal development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-skitm-navy">Campus Area:</span>
                <span className="text-skitm-gray">50 Acres</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-skitm-navy">Location:</span>
                <span className="text-skitm-gray">Near Ralamandal Sanctuary, Indore</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-skitm-navy">Student Capacity:</span>
                <span className="text-skitm-gray">3000+ Students</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-skitm-navy">Academic Buildings:</span>
                <span className="text-skitm-gray">8 Major Blocks</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-skitm-navy">Hostel Capacity:</span>
                <span className="text-skitm-gray">548 Students</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="SKITM Campus Aerial View"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
              Aerial View of SKITM Campus
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-skitm-blue/10 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-bold text-skitm-navy mb-2">{feature.title}</h3>
              <p className="text-sm text-skitm-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Facilities */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Campus Facilities
        </h2>
        
        {facilities.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-display font-bold text-skitm-navy mb-6">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 border border-skitm-blue/20 rounded-lg">
                  <div className="p-2 bg-skitm-blue/10 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-skitm-navy mb-1">{item.name}</h4>
                    <p className="text-sm text-skitm-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Campus Life Events */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <div className="flex items-center mb-8">
          <Camera className="h-8 w-8 text-skitm-blue mr-3" />
          <h2 className="text-2xl font-display font-bold text-skitm-navy">
            Campus Life Highlights
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campusLife.map((event, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-skitm-navy mb-3">{event.title}</h3>
                <p className="text-skitm-gray">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability Initiatives */}
      <div className="glassmorphism rounded-xl p-8">
        <div className="flex items-center mb-6">
          <Trees className="h-8 w-8 text-skitm-blue mr-3" />
          <h2 className="text-2xl font-display font-bold text-skitm-navy">
            Green & Sustainable Campus
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trees className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-bold text-skitm-navy mb-2">Green Initiatives</h3>
            <p className="text-sm text-skitm-gray">Extensive plantation drives, rainwater harvesting, and waste management systems promoting environmental consciousness.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-skitm-navy mb-2">Energy Efficiency</h3>
            <p className="text-sm text-skitm-gray">Solar panel installations, LED lighting, and energy-efficient systems reducing carbon footprint and promoting sustainability.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-skitm-navy mb-2">Community Engagement</h3>
            <p className="text-sm text-skitm-gray">Student-led environmental clubs and community outreach programs creating awareness about environmental protection.</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Campus;
