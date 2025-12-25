import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
    Users,
    Music,
    Book,
    Award,
    Medal,
    Compass,
    Microscope,
    Film,
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentLife = () => {
    const headingRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Student Life - SKITM</title>
                <meta
                    name="description"
                    content="Experience the vibrant student life at SKITM. Discover student clubs, cultural activities, sports events, and extracurricular opportunities that enrich the college experience."
                />
                <meta
                    name="keywords"
                    content="SKITM student life, college clubs, campus activities, student organizations, cultural events, sports, extracurricular activities"
                />
            </Helmet>

            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={headingRef}
                        className="text-center mb-16 animate-fade-in"
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Campus Experience
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            Student Life
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Discover the vibrant student community, clubs,
                            activities, and events at SKITM.
                        </p>
                    </div>

                    {/* Overview Section */}
                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <div className="max-w-3xl mx-auto">
                            <p className="text-skitm-gray mb-6 text-lg">
                                At SKITM, we believe in the holistic development
                                of students. Our campus is a hub of activities
                                that complement academic learning and help
                                students develop leadership skills, teamwork,
                                creativity, and social responsibility. Student
                                life at SKITM is vibrant, diverse, and
                                enriching, offering numerous opportunities for
                                personal and professional growth.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                                <div className="flex flex-col items-center text-center">
                                    <Users
                                        className="text-skitm-blue mb-4"
                                        size={32}
                                    />
                                    <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                        20+ Clubs
                                    </h3>
                                    <p className="text-sm text-skitm-gray">
                                        Technical and cultural clubs for diverse
                                        interests
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <Music
                                        className="text-skitm-blue mb-4"
                                        size={32}
                                    />
                                    <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                        Annual Fest
                                    </h3>
                                    <p className="text-sm text-skitm-gray">
                                        Cultural and technical festivals with
                                        competitions
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <Book
                                        className="text-skitm-blue mb-4"
                                        size={32}
                                    />
                                    <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                        Workshops
                                    </h3>
                                    <p className="text-sm text-skitm-gray">
                                        Regular skill development and training
                                        sessions
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <Award
                                        className="text-skitm-blue mb-4"
                                        size={32}
                                    />
                                    <h3 className="text-lg font-semibold text-skitm-navy mb-2">
                                        Sports
                                    </h3>
                                    <p className="text-sm text-skitm-gray">
                                        Comprehensive sports facilities and
                                        competitions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Student Clubs & Organizations */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
                            Student Clubs & Organizations
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Technical Clubs */}
                            <div className="glassmorphism rounded-xl overflow-hidden">
                                <div className="bg-skitm-blue/10 p-4 flex items-center">
                                    <Microscope
                                        className="text-skitm-blue mr-3"
                                        size={24}
                                    />
                                    <h3 className="text-xl font-bold text-skitm-navy">
                                        Technical Clubs
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Robotics Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Designs and builds robots for
                                                various competitions and
                                                projects
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Coding Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Focuses on programming skills,
                                                hackathons, and coding
                                                competitions
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                IoT Lab
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Works on Internet of Things
                                                projects and smart solutions
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                AI Research Group
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Explores artificial intelligence
                                                applications and research
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                SAE Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Designs and builds automotive
                                                projects for competitions
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cultural Clubs */}
                            <div className="glassmorphism rounded-xl overflow-hidden">
                                <div className="bg-skitm-blue/10 p-4 flex items-center">
                                    <Music
                                        className="text-skitm-blue mr-3"
                                        size={24}
                                    />
                                    <h3 className="text-xl font-bold text-skitm-navy">
                                        Cultural Clubs
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Music Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                For music enthusiasts to learn,
                                                perform, and compose music
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Dance Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Explores various dance forms and
                                                participates in competitions
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Drama Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Produces theatrical performances
                                                and nurtures acting talent
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Fine Arts Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                For painting, sketching, and
                                                other visual arts
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Literary Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Organizes debates, poetry
                                                sessions, and writing workshops
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Professional Development */}
                            <div className="glassmorphism rounded-xl overflow-hidden">
                                <div className="bg-skitm-blue/10 p-4 flex items-center">
                                    <Medal
                                        className="text-skitm-blue mr-3"
                                        size={24}
                                    />
                                    <h3 className="text-xl font-bold text-skitm-navy">
                                        Professional Clubs
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Entrepreneurship Cell
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Promotes startup culture and
                                                business skills
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                IEEE Student Branch
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Professional networking and
                                                technical workshops
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Career Development Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Focuses on employability skills
                                                and career guidance
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Debating Society
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Hones public speaking and
                                                critical thinking skills
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="font-semibold text-skitm-navy mb-1">
                                                Social Service Club
                                            </h4>
                                            <p className="text-sm text-skitm-gray">
                                                Organizes community service and
                                                outreach programs
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <Link
                                to="/news-events"
                                className="bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-lightBlue transition-colors inline-block font-medium"
                            >
                                Explore Club Events
                            </Link>
                        </div>
                    </div>

                    {/* Annual Festivals */}
                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
                            Annual Festivals
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/50 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-skitm-blue/10 rounded-xl p-3 text-center min-w-[80px]">
                                        <Microscope
                                            className="text-skitm-blue mx-auto mb-2"
                                            size={24}
                                        />
                                        <div className="text-sm font-medium text-skitm-navy">
                                            March
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-skitm-navy mb-2">
                                            TechnoVision
                                        </h3>
                                        <p className="text-skitm-gray mb-4">
                                            Annual technical festival featuring
                                            robotics competitions, hackathons,
                                            project exhibitions, technical paper
                                            presentations, and expert talks from
                                            industry leaders.
                                        </p>
                                        <ul className="text-sm text-skitm-gray list-disc pl-5 space-y-1">
                                            <li>Coding competitions</li>
                                            <li>Robotics battle</li>
                                            <li>Technical quizzes</li>
                                            <li>Circuit design challenges</li>
                                            <li>Tech startup expo</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/50 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-skitm-blue/10 rounded-xl p-3 text-center min-w-[80px]">
                                        <Music
                                            className="text-skitm-blue mx-auto mb-2"
                                            size={24}
                                        />
                                        <div className="text-sm font-medium text-skitm-navy">
                                            October
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-skitm-navy mb-2">
                                            Rhythms
                                        </h3>
                                        <p className="text-skitm-gray mb-4">
                                            Cultural festival celebrating art,
                                            music, dance, and creativity with
                                            performances, competitions, and
                                            celebrity appearances.
                                        </p>
                                        <ul className="text-sm text-skitm-gray list-disc pl-5 space-y-1">
                                            <li>Battle of bands</li>
                                            <li>Dance competitions</li>
                                            <li>Fashion show</li>
                                            <li>Theatrical performances</li>
                                            <li>Celebrity concerts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sports & Recreation */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
                            Sports & Recreation
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glassmorphism rounded-xl p-6">
                                <h3 className="text-xl font-bold text-skitm-navy mb-4 text-center">
                                    Sports Facilities
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Cricket ground with pavilion
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Football field with floodlights
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Basketball and volleyball courts
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Indoor badminton and table tennis
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Modern gymnasium and fitness center
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Swimming pool (25m)
                                    </li>
                                </ul>
                            </div>

                            <div className="glassmorphism rounded-xl p-6">
                                <h3 className="text-xl font-bold text-skitm-navy mb-4 text-center">
                                    Sports Events
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Annual Sports Meet (January)
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Inter-department Cricket Tournament
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        SKITM Basketball Championship
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Chess and Carrom Competitions
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Badminton League
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Swimming Gala
                                    </li>
                                </ul>
                            </div>

                            <div className="glassmorphism rounded-xl p-6">
                                <h3 className="text-xl font-bold text-skitm-navy mb-4 text-center">
                                    Recreation
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Student lounge with indoor games
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Movie screenings at amphitheater
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Campus radio station
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Food court and campus cafes
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Weekend outings and treks
                                    </li>
                                    <li className="flex items-center text-skitm-gray">
                                        <span className="w-2 h-2 bg-skitm-blue rounded-full mr-2"></span>
                                        Gaming zones
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Student Experience Gallery */}
                    <div className="glassmorphism rounded-xl p-8 mb-16">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
                            Student Experience
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Campus Life"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Technical Festival"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Cultural Performance"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Sports Event"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Robotics Competition"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Student Workshop"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <Link
                                to="/gallery"
                                className="bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-lightBlue transition-colors inline-block font-medium"
                            >
                                View Full Gallery
                            </Link>
                        </div>
                    </div>

                    {/* Student Leadership */}
                    <div className="glassmorphism rounded-xl p-8">
                        <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
                            Student Leadership & Governance
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-skitm-navy mb-4">
                                    Student Council
                                </h3>
                                <p className="text-skitm-gray mb-4">
                                    The Student Council is the elected
                                    representative body of students that works
                                    as a bridge between students and
                                    administration. They organize events,
                                    address student concerns, and contribute to
                                    campus policy decisions.
                                </p>
                                <ul className="space-y-2 text-skitm-gray">
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>
                                            Organizes major campus events and
                                            celebrations
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>
                                            Represents student interests in
                                            administrative meetings
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>
                                            Coordinates between various clubs
                                            and departments
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>
                                            Manages budget allocation for
                                            student activities
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-skitm-navy mb-4">
                                    Leadership Opportunities
                                </h3>
                                <p className="text-skitm-gray mb-4">
                                    SKITM provides numerous opportunities for
                                    students to develop leadership skills
                                    through various roles and responsibilities
                                    within the campus community.
                                </p>
                                <ul className="space-y-2 text-skitm-gray">
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>
                                            Club President and Secretary
                                            positions
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>
                                            Class Representatives and Department
                                            Coordinators
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>
                                            Event Management Teams for festivals
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>Student Mentors for juniors</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Compass
                                            size={16}
                                            className="text-skitm-blue mr-2 mt-1"
                                        />
                                        <span>Research Group Leaders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default StudentLife;
