
import PageTemplate from '@/components/layout/PageTemplate';
import { Bed, Coffee, Shield, Users, Wifi, Utensils, BookOpen, Dumbbell, Clock, Users2 } from 'lucide-react';

const Hostel = () => {
  const features = [
    {
      icon: <Bed className="h-6 w-6 text-skitm-blue" />,
      title: "Comfortable Rooms",
      description: "Well-furnished rooms with beds, study tables, wardrobes, and attached/common bathrooms"
    },
    {
      icon: <Wifi className="h-6 w-6 text-skitm-blue" />,
      title: "High-Speed Internet",
      description: "24/7 Wi-Fi connectivity throughout all hostel buildings for academic and personal use"
    },
    {
      icon: <Utensils className="h-6 w-6 text-skitm-blue" />,
      title: "Mess Facility",
      description: "Nutritious meals served three times a day with hygienic kitchen and dining facilities"
    },
    {
      icon: <Shield className="h-6 w-6 text-skitm-blue" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance and trained security personnel"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-skitm-blue" />,
      title: "Study Areas",
      description: "Dedicated quiet zones and common study areas for focused learning and group discussions"
    },
    {
      icon: <Dumbbell className="h-6 w-6 text-skitm-blue" />,
      title: "Recreational Facilities",
      description: "Indoor games, TV rooms, and fitness areas for physical and mental well-being"
    }
  ];

  const hostelBuildings = [
    {
      name: "Boys' Hostel",
      capacity: "198 students",
      roomTypes: ["Single Occupancy", "Double Occupancy", "Triple Occupancy"],
      facilities: ["Common Room", "Study Hall", "Mess", "Laundry", "Medical Room"],
      description: "Modern residential facility for male students with various accommodation options"
    },
    {
      name: "Girls' Hostel",
      capacity: "350 students", 
      roomTypes: ["Single Occupancy", "Double Occupancy"],
      facilities: ["Common Room", "Study Hall", "Mess", "Laundry", "Medical Room", "Recreation Room"],
      description: "Secure and comfortable accommodation for female students with enhanced safety measures"
    }
  ];

  const rules = [
    "Students must maintain discipline and follow the hostel code of conduct",
    "Entry and exit timings: Gates close at 10:00 PM for security",
    "Visitors allowed only in designated areas during specified hours (10 AM - 6 PM)",
    "Consumption of alcohol, tobacco, and prohibited substances strictly forbidden",
    "Students responsible for maintaining cleanliness in rooms and common areas",
    "Conservation of electricity and water encouraged",
    "Any damage to hostel property will result in penalty charges",
    "Ragging in any form is strictly prohibited with severe consequences",
    "Medical emergencies should be reported to hostel warden immediately",
    "Hostel fees must be paid on time as per academic calendar"
  ];

  return (
    <PageTemplate
      title="Hostel Facilities"
      subtitle="Safe, comfortable, and modern residential accommodation for students at SKITM."
      breadcrumb="Student Life"
    >
      {/* Hostel Buildings Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {hostelBuildings.map((hostel, index) => (
          <div key={index} className="glassmorphism rounded-xl p-8">
            <div className="flex items-center mb-4">
              <Users2 className="h-8 w-8 text-skitm-blue mr-3" />
              <h3 className="text-2xl font-display font-bold text-skitm-navy">
                {hostel.name}
              </h3>
            </div>
            
            <div className="mb-4">
              <p className="text-skitm-gray mb-3">{hostel.description}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-skitm-navy">Capacity:</span>
                <span className="text-sm text-skitm-gray">{hostel.capacity}</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-skitm-navy mb-2">Room Types:</h4>
              <div className="flex flex-wrap gap-2">
                {hostel.roomTypes.map((type, idx) => (
                  <span key={idx} className="px-3 py-1 bg-skitm-blue/10 text-skitm-blue text-sm rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-skitm-navy mb-2">Facilities:</h4>
              <div className="grid grid-cols-2 gap-2">
                {hostel.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></div>
                    <span className="text-sm text-skitm-gray">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hostel Features */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Hostel Features & Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-3 bg-skitm-blue/10 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-skitm-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-skitm-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timings and Important Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="glassmorphism rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Clock className="h-8 w-8 text-skitm-blue mr-3" />
            <h3 className="text-2xl font-display font-bold text-skitm-navy">
              Hostel Timings
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-skitm-navy">Gate Opening:</span>
              <span className="text-skitm-gray">6:00 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-skitm-navy">Gate Closing:</span>
              <span className="text-skitm-gray">10:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-skitm-navy">Mess Breakfast:</span>
              <span className="text-skitm-gray">7:30 AM - 9:30 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-skitm-navy">Mess Lunch:</span>
              <span className="text-skitm-gray">12:30 PM - 2:30 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-skitm-navy">Mess Dinner:</span>
              <span className="text-skitm-gray">7:30 PM - 9:30 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-skitm-navy">Visitor Hours:</span>
              <span className="text-skitm-gray">10:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="glassmorphism rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-skitm-blue mr-3" />
            <h3 className="text-2xl font-display font-bold text-skitm-navy">
              Hostel Staff
            </h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-skitm-navy mb-2">Boys' Hostel Warden</h4>
              <p className="text-skitm-gray text-sm">Available 24/7 for student assistance and emergency support</p>
            </div>
            <div>
              <h4 className="font-semibold text-skitm-navy mb-2">Girls' Hostel Warden</h4>
              <p className="text-skitm-gray text-sm">Dedicated female warden for enhanced safety and support</p>
            </div>
            <div>
              <h4 className="font-semibold text-skitm-navy mb-2">Security Staff</h4>
              <p className="text-skitm-gray text-sm">Trained security personnel for round-the-clock safety</p>
            </div>
            <div>
              <h4 className="font-semibold text-skitm-navy mb-2">Housekeeping</h4>
              <p className="text-skitm-gray text-sm">Daily cleaning and maintenance services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hostel Rules & Regulations */}
      <div className="glassmorphism rounded-xl p-8">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Hostel Rules & Regulations
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-skitm-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-skitm-blue">{index + 1}</span>
                </div>
                <p className="text-sm text-skitm-gray">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Hostel;
