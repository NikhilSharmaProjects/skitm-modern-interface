import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import {
    Award,
    Book,
    Code,
    Computer,
    Users,
    FlaskRound,
    Wrench,
} from "lucide-react";

const introImage = "/Gallery/GalleryImage (${RANDOM_INT}).png"; // students at workshop

const departmentWorkshops = [
    {
        department: "Electronics & Communication Engineering",
        icon: <FlaskRound className="h-6 w-6 text-skitm-blue" />,
        color: "bg-blue-50",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        workshops: [
            {
                title: "Workshop in Electronics & Communications",
                detail: "An awareness seminar on UPSC Civil Services is conducted for the students of pre-final year and final year.",
            },
            {
                title: "Expert Lecture: Embedded Systems",
                detail: "Topic: 'Embedded Systems and Applications of AVR Microcontroller'",
            },
            {
                title: "Seminar: Applications of IoT",
                detail: "Seminar on 'Applications of IoT' in industrial, medical, armed forces domain. Supporting technologies like Raspberry-Pi and Arduino discussed.",
            },
            {
                title: "Expert Lecture: Hyper-Connected World",
                detail: "Lecture on 'Evolutions on Technologies in Hyper-Connected World'.",
            },
            {
                title: "PCB Designing & Fabrication",
                detail: "2nd-year workshop covering PCB design in Eagle, hardware fabrication and component assembly.",
            },
            {
                title: "Hands-on Circuit Testing",
                detail: "Practical session on circuit fabrication and testing by students.",
            },
        ],
    },
    {
        department: "Civil Engineering",
        icon: <Wrench className="h-6 w-6 text-skitm-blue" />,
        color: "bg-green-50",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        workshops: [
            {
                title: "Workshop in Civil Engineering",
                detail: "Workshops & technical events to give students industry exposure.",
            },
            {
                title: "Kota Barrage (Rajasthan)",
                detail: "5 days tour at Rawatbhata atomic power plant.",
            },
            {
                title: "Pune – Bombay Tour",
                detail: "7 days tour: Mumbai metro project, Bandra Worli Sealink, Bhatan tunnel, LAVASA township.",
            },
            {
                title: "Bhakra – Nangal Dam",
                detail: "8 day technical tour: Bhakra & Nangal Dams, Rohtang Tunnel, bridges, Golden Temple and more.",
            },
            {
                title: "Indore Trenching Ground Visit",
                detail: "Industrial visit (zero waste plant) for understanding dry/wet waste processing.",
            },
            {
                title: "Jalud & Devdharan Water Plant Visits",
                detail: "Technical tours for 3rd year students.",
            },
            {
                title: "Annual Civil Mania & Thrill o Civil Competitions",
                detail: "Bridge model making, Crane making, Debate, Techno Rangoli, and more with lots of prizes.",
            },
        ],
    },
    {
        department: "Computer Science & Engineering",
        icon: <Code className="h-6 w-6 text-skitm-blue" />,
        color: "bg-yellow-50",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        workshops: [
            {
                title: "ISO HACK",
                detail: "'ISO HACK', a national level 36-hour coding competition with the theme 'Code for a Reason'.",
            },
            {
                title: "Short Term Training: Data Science",
                detail: "Training program on Data Science and Big Data Analytics.",
            },
            {
                title: "IoT Workshop",
                detail: "Three day hands-on IoT workshop: Node MCU, Arduino, cloud and connectivity.",
            },
            {
                title: "Cloud Computing with AWS",
                detail: '"Cloud Computing with AWS" conducted by Mr. Mehtab Singh.',
            },
            {
                title: "Cyber Threats & InfoSec Careers",
                detail: "Expert session by Rediff.com Director (InfoSec) on cyber threats and security careers.",
            },
            {
                title: "Software Quality Workshop",
                detail: "National workshop on the impact of software quality for engineers.",
            },
        ],
    },
    {
        department: "Mechanical Engineering",
        icon: <Award className="h-6 w-6 text-skitm-blue" />,
        color: "bg-orange-50",
        image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        workshops: [
            {
                title: "Smart Manufacturing Talk",
                detail: "Expert lecture for students on Smart Manufacturing strategies.",
            },
            {
                title: "Industrial Visits",
                detail: "Visits to Indian Railways, Sanchi Dairy Plant, Eicher Motors, and more.",
            },
            {
                title: "Power Plant & Machinery Talks",
                detail: "Prof. Khandwawala & Prof. Ambekar on thermal plants and machine design.",
            },
            {
                title: "Material Engineering Talk",
                detail: "Prof. Satish Purohit on material selection and material engineering.",
            },
            {
                title: "E-baja 2018 Participation",
                detail: "Team Acroracerz achieved IVth rank in national E-baja competition.",
            },
        ],
    },
];

const speakerImage = "/Gallery/GalleryImage (${RANDOM_INT}).png";

const ProjectsWorkshops = () => {
    return (
        <div className="min-h-screen flex flex-col bg-skitm-offWhite">
            <Navbar />

            {/* Parallax Intro Section */}
            <ParallaxSection
                backgroundImage={introImage}
                overlayOpacity={0.65}
                className="min-h-[55vh]"
            >
                <div className="parallax-content space-y-6">
                    <div className="inline-block px-6 py-2 mb-4 rounded-full bg-white/30 text-white text-sm font-semibold shadow-md backdrop-blur">
                        Projects & Workshops
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-3 leading-tight">
                        Practical Learning at SKITM
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow">
                        Practical learning is a major part of our unique
                        teaching methodology. We emphasize hands-on projects,
                        training, workshops, industrial visits, and speaker
                        events so students gain invaluable real-world exposure
                        and expert guidance.
                    </p>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* Departments & Workshops */}
                <section className="section-container bg-white/90 rounded-b-3xl pb-8">
                    <h2 className="section-title text-center mb-0">
                        Key Workshops & Activities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
                        {departmentWorkshops.map((dept, i) => (
                            <div
                                key={dept.department}
                                className={`rounded-2xl shadow-xl card-hover flex flex-col h-full group overflow-hidden glassmorphism ${dept.color}`}
                            >
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={dept.image}
                                        alt={dept.department}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div className="flex items-center gap-3 mb-2">
                                        {dept.icon}
                                        <span className="font-display font-bold text-xl md:text-2xl text-skitm-navy grow">
                                            {dept.department}
                                        </span>
                                    </div>
                                    <ul className="mt-2 ml-1 space-y-3 text-skitm-gray">
                                        {dept.workshops.map((w, idx) => (
                                            <li key={idx} className="text-base">
                                                <span className="font-semibold text-skitm-blue">
                                                    {w.title}:
                                                </span>{" "}
                                                {w.detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Speaker Events / Industrial Visits */}
                <section className="section-container bg-skitm-offWhite pt-0 pb-10">
                    <h2 className="section-title text-center mb-6">
                        Real-World Exposure & Industrial Visits
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <img
                            src={speakerImage}
                            alt="Speaker event"
                            className="rounded-xl shadow-lg max-w-md mx-auto h-64 object-cover"
                        />
                        <div className="max-w-lg mx-auto text-lg text-skitm-gray space-y-5">
                            <p>
                                Our students participate in frequent industrial
                                visits and hands-on sessions at major sites and
                                companies – be it atomic power plants, metro
                                projects, national competitions, or top IT and
                                manufacturing firms.
                                <br />
                                Eminent speakers and industry experts routinely
                                guide students with lectures, live
                                demonstrations, and interactive training so
                                SKITM graduates are industry-ready from day one!
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-block px-4 py-2 bg-skitm-blue text-white rounded-lg text-sm font-medium">
                                    Workshops
                                </span>
                                <span className="inline-block px-4 py-2 bg-skitm-green text-white rounded-lg text-sm font-medium">
                                    Industrial Visits
                                </span>
                                <span className="inline-block px-4 py-2 bg-skitm-navy text-white rounded-lg text-sm font-medium">
                                    Speaker Events
                                </span>
                                <span className="inline-block px-4 py-2 bg-skitm-yellow text-skitm-navy rounded-lg text-sm font-medium">
                                    Competitions
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsWorkshops;
