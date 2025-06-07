
import PageTemplate from '@/components/layout/PageTemplate';
import { 
  Trophy, 
  Users, 
  Target, 
  Award, 
  Calendar, 
  Clock,
  Dumbbell,
  Activity,
  Star,
  Medal
} from 'lucide-react';

const Sports = () => {
  const sportsFeatures = [
    {
      icon: <Target className="h-8 w-8 text-skitm-blue" />,
      title: "Comprehensive Sports Program",
      description: "Well-structured sports curriculum promoting physical fitness, team spirit, and competitive excellence among students.",
      highlights: ["Regular training sessions", "Professional coaching", "Inter-department competitions", "State-level participation"]
    },
    {
      icon: <Users className="h-8 w-8 text-skitm-blue" />,
      title: "Team Sports Excellence",
      description: "Strong emphasis on team sports fostering collaboration, leadership, and sportsmanship among student athletes.",
      highlights: ["Cricket teams", "Football squads", "Basketball teams", "Volleyball groups"]
    },
    {
      icon: <Award className="h-8 w-8 text-skitm-blue" />,
      title: "Individual Sports Focus",
      description: "Dedicated training and facilities for individual sports helping students excel in personal athletic achievements.",
      highlights: ["Athletics training", "Badminton coaching", "Table tennis", "Chess tournaments"]
    },
    {
      icon: <Activity className="h-8 w-8 text-skitm-blue" />,
      title: "Fitness & Wellness",
      description: "Modern gymnasium and fitness programs ensuring overall health and wellness of students and faculty.",
      highlights: ["Modern gym equipment", "Fitness training", "Yoga sessions", "Health monitoring"]
    }
  ];

  const outdoorSports = [
    {
      name: "Cricket",
      facility: "Full-size cricket ground with practice nets",
      equipment: "Professional cricket gear, bowling machines",
      achievements: ["Inter-college tournament winners", "District level participation"],
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Football",
      facility: "Standard football field with goal posts",
      equipment: "Professional footballs, training cones, nets",
      achievements: ["University level participation", "Regional tournament runners-up"],
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Basketball",
      facility: "Two full-size outdoor basketball courts",
      equipment: "Professional basketballs, electronic scoreboards",
      achievements: ["State level championship", "Inter-college league winners"],
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Volleyball",
      facility: "Multiple volleyball courts with proper lighting",
      equipment: "Professional volleyballs, nets, training aids",
      achievements: ["Regional championship participants", "University tournament winners"],
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const indoorSports = [
    {
      name: "Badminton",
      facility: "4 professional badminton courts with wooden flooring",
      equipment: "Quality rackets, shuttlecocks, stringing services",
      programs: ["Daily practice sessions", "Coaching by certified trainers", "Inter-department tournaments"]
    },
    {
      name: "Table Tennis",
      facility: "6 table tennis tables in dedicated sports hall",
      equipment: "Professional tables, paddles, balls",
      programs: ["Regular practice", "Skills development", "Competitive tournaments"]
    },
    {
      name: "Chess",
      facility: "Dedicated chess room with 20 chess boards",
      equipment: "Tournament-grade chess sets, digital clocks",
      programs: ["Chess club activities", "Strategy workshops", "Inter-college competitions"]
    },
    {
      name: "Carrom & Indoor Games",
      facility: "Recreation hall with multiple carrom boards",
      equipment: "Quality carrom boards, coins, strikers",
      programs: ["Recreational play", "Tournament organization", "Skill development"]
    }
  ];

  const fitnessPrograms = [
    {
      title: "Strength Training",
      description: "Comprehensive weight training programs with modern equipment and professional guidance.",
      duration: "Daily sessions available",
      includes: ["Weight machines", "Free weights", "Cardio equipment", "Personal training"]
    },
    {
      title: "Yoga & Meditation",
      description: "Traditional yoga practices and meditation sessions for mental and physical well-being.",
      duration: "Morning and evening sessions",
      includes: ["Hatha yoga", "Pranayama", "Meditation", "Stress management"]
    },
    {
      title: "Aerobics & Zumba",
      description: "High-energy fitness classes combining dance and aerobic exercises for fun and fitness.",
      duration: "3 times per week",
      includes: ["Dance aerobics", "Zumba sessions", "Group fitness", "Music-based workouts"]
    },
    {
      title: "Athletics Training",
      description: "Track and field training for students interested in competitive athletics and running.",
      duration: "Regular coaching available",
      includes: ["Running tracks", "Field events", "Timing systems", "Competition preparation"]
    }
  ];

  const achievements = [
    {
      year: "2023",
      events: [
        "Cricket team won Inter-Engineering College Tournament",
        "Basketball team secured 2nd position in State Championship", 
        "Individual athletics gold medal in University games",
        "Chess team qualified for National level competition"
      ]
    },
    {
      year: "2022", 
      events: [
        "Football team reached University championship finals",
        "Badminton players won multiple medals in State tournament",
        "Volleyball team champions in Regional competition",
        "Table tennis team secured top 3 position in Inter-college meet"
      ]
    }
  ];

  const sportsCalendar = [
    { event: "Annual Sports Day", month: "February", description: "Grand celebration of sports with competitions and cultural programs" },
    { event: "Inter-Department Sports Meet", month: "October", description: "Competition between different departments fostering healthy rivalry" },
    { event: "Cricket Tournament", month: "November", description: "Inter-college cricket championship with multiple teams" },
    { event: "Basketball League", month: "January", description: "Semester-long basketball league with weekly matches" },
    { event: "Athletics Championship", month: "March", description: "Track and field events showcasing individual athletic excellence" },
    { event: "Indoor Games Tournament", month: "August", description: "Badminton, table tennis, and chess competitions" }
  ];

  return (
    <PageTemplate
      title="Sports & Recreation"
      subtitle="Comprehensive sports facilities and programs promoting physical fitness, team spirit, and competitive excellence."
      breadcrumb="Student Life"
    >
      {/* Sports Program Overview */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Sports Program Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sportsFeatures.map((feature, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-skitm-blue/10 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-skitm-navy mb-2">{feature.title}</h3>
                  <p className="text-skitm-gray mb-4">{feature.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></div>
                    <span className="text-sm text-skitm-gray">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outdoor Sports Facilities */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-display font-bold text-skitm-navy text-center mb-8">
          Outdoor Sports Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outdoorSports.map((sport, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-skitm-navy mb-3">{sport.name}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-skitm-navy">Facility: </span>
                    <span className="text-skitm-gray">{sport.facility}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-skitm-navy">Equipment: </span>
                    <span className="text-skitm-gray">{sport.equipment}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-skitm-navy">Recent Achievements:</span>
                    <ul className="mt-1 space-y-1">
                      {sport.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-skitm-gray">
                          <Trophy className="h-3 w-3 text-skitm-blue mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indoor Sports & Fitness */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="glassmorphism rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6">
            Indoor Sports
          </h2>
          {indoorSports.map((sport, index) => (
            <div key={index} className="mb-6 p-4 border border-skitm-blue/20 rounded-lg">
              <h3 className="font-bold text-skitm-navy mb-2">{sport.name}</h3>
              <p className="text-sm text-skitm-gray mb-2">{sport.facility}</p>
              <p className="text-sm text-skitm-gray mb-3"><strong>Equipment:</strong> {sport.equipment}</p>
              <div className="flex flex-wrap gap-2">
                {sport.programs.map((program, idx) => (
                  <span key={idx} className="px-2 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full">
                    {program}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glassmorphism rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Dumbbell className="h-8 w-8 text-skitm-blue mr-3" />
            <h2 className="text-2xl font-display font-bold text-skitm-navy">
              Fitness Programs
            </h2>
          </div>
          {fitnessPrograms.map((program, index) => (
            <div key={index} className="mb-6 p-4 border border-skitm-blue/20 rounded-lg">
              <h3 className="font-bold text-skitm-navy mb-2">{program.title}</h3>
              <p className="text-sm text-skitm-gray mb-2">{program.description}</p>
              <div className="flex items-center mb-3">
                <Clock className="h-4 w-4 text-skitm-blue mr-2" />
                <span className="text-sm font-medium text-skitm-navy">{program.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {program.includes.map((item, idx) => (
                  <span key={idx} className="px-2 py-1 bg-skitm-blue/10 text-skitm-blue text-xs rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Achievements */}
      <div className="glassmorphism rounded-xl p-8 mb-16">
        <div className="flex items-center mb-8">
          <Medal className="h-8 w-8 text-skitm-blue mr-3" />
          <h2 className="text-2xl font-display font-bold text-skitm-navy">
            Recent Sports Achievements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((yearData, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-skitm-navy mb-4 flex items-center">
                <Star className="h-6 w-6 text-skitm-blue mr-2" />
                {yearData.year} Achievements
              </h3>
              <ul className="space-y-3">
                {yearData.events.map((event, idx) => (
                  <li key={idx} className="flex items-start">
                    <Trophy className="h-4 w-4 text-skitm-blue mr-3 mt-1" />
                    <span className="text-skitm-gray">{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Calendar */}
      <div className="glassmorphism rounded-xl p-8">
        <div className="flex items-center mb-8">
          <Calendar className="h-8 w-8 text-skitm-blue mr-3" />
          <h2 className="text-2xl font-display font-bold text-skitm-navy">
            Annual Sports Calendar
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsCalendar.map((event, index) => (
            <div key={index} className="border border-skitm-blue/20 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-skitm-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-skitm-blue" />
              </div>
              <h3 className="font-bold text-skitm-navy mb-2">{event.event}</h3>
              <p className="text-sm font-medium text-skitm-blue mb-2">{event.month}</p>
              <p className="text-sm text-skitm-gray">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Sports;
