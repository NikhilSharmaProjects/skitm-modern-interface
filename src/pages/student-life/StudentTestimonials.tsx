import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/common/ParallaxSection";
import { Star, Users, Award, MessageCircle } from "lucide-react";

const StudentTestimonials = () => {
    const stats = [
        {
            icon: <Star className="h-8 w-8 text-white" />,
            number: "4.8/5",
            label: "Student Rating",
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            number: "95%",
            label: "Student Satisfaction",
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            number: "500+",
            label: "Success Stories",
        },
        {
            icon: <MessageCircle className="h-8 w-8 text-white" />,
            number: "100%",
            label: "Recommend SKITM",
        },
    ];

    // Fictional, diverse testimonials data with no photo.
    const testimonials = [
        {
            name: "Rohit Sharma",
            program: "B.Tech Mechanical Engineering",
            year: "2025",
            rating: 5,
            quote: "SKITM's hands-on learning approach truly set me up for success. The supportive faculty and industry exposure helped me discover my passion for robotics.",
        },
        {
            name: "Aishwarya Sen",
            program: "MBA",
            year: "2024",
            rating: 5,
            quote: "The case studies, internships, and skill-building workshops at SKITM transformed my leadership abilities and business acumen.",
        },
        {
            name: "Aditya Patel",
            program: "B.Pharm",
            year: "2023",
            rating: 5,
            quote: "Laboratory sessions and research initiatives here gave me practical experience that's already proving invaluable in my pharma career.",
        },
        {
            name: "Sana Mirza",
            program: "BBA",
            year: "2024",
            rating: 4,
            quote: "SKITM allowed me to grow personally and professionally. The vibrant campus culture and mentoring empowered me to lead club projects confidently.",
        },
        {
            name: "Neeraj Jain",
            program: "B.Tech Electronics",
            year: "2023",
            rating: 5,
            quote: "Workshops, industry visits, and a strong alumni network ensured I was job-ready on graduation day. I’d definitely recommend SKITM!",
        },
    ];

    const alumniAchievements = [
        {
            title: "Industry Leaders",
            description:
                "Our alumni hold leadership positions in top multinational companies",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
        {
            title: "Successful Entrepreneurs",
            description:
                "Many graduates have started their own successful ventures and startups",
            image: "/Gallery/GalleryImage (${RANDOM_INT}).png",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {/* Parallax Hero Section */}
            <ParallaxSection
                backgroundImage="/Gallery/GalleryImage (9).png"
                overlayOpacity={0.6}
                className="min-h-[70vh] pt-24"
            >
                <div className="text-center space-y-8">
                    <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        Student Voices
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight tracking-wide">
                        Student Testimonials
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Hear from our students and alumni about their
                        transformative experiences at SKITM
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="font-display font-bold text-2xl md:text-3xl mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-blue-200">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            <main className="flex-grow">
                {/* Testimonials Section */}
                <section className="section-container bg-white">
                    <h2 className="section-title text-center">
                        What Our Students Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="glassmorphism rounded-xl p-8 card-hover"
                            >
                                {/* Removed student photo */}
                                <div className="mb-6">
                                    <h4 className="font-display font-bold text-skitm-navy">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-skitm-gray">
                                        {testimonial.program}
                                    </p>
                                    <p className="text-xs text-skitm-gray">
                                        Class of {testimonial.year}
                                    </p>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-400 fill-current"
                                            />
                                        )
                                    )}
                                </div>
                                <p className="text-skitm-gray text-sm italic">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Alumni Achievements */}
                <section className="section-container bg-skitm-offWhite">
                    <h2 className="section-title text-center">
                        Alumni Success Stories
                    </h2>
                    <div className="space-y-16">
                        {alumniAchievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`image-first-block ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                <div
                                    className={
                                        index % 2 === 1
                                            ? "order-1 lg:order-2"
                                            : "order-2 lg:order-1"
                                    }
                                >
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="image-first-image"
                                    />
                                </div>
                                <div
                                    className={`image-first-content ${
                                        index % 2 === 1
                                            ? "order-2 lg:order-1"
                                            : "order-1 lg:order-2"
                                    }`}
                                >
                                    <h3 className="section-title">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-body-lg text-skitm-gray">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Community Parallax */}
                <ParallaxSection
                    backgroundImage="/Gallery/GalleryImage (9).png"
                    overlayOpacity={0.7}
                    className="min-h-[50vh]"
                >
                    <div className="text-center space-y-8">
                        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-wide">
                            Join Our Community
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Alumni Network
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Mentorship Programs
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Industry Connections
                            </div>
                            <div className="glassmorphism-dark px-6 py-3 rounded-lg">
                                Career Support
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            </main>
            <Footer />
        </div>
    );
};

export default StudentTestimonials;
