import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  mobileImage: string;
  desktopImage: string;
  title: string;
  subtitle: string;
  caption: string;
  cta?: {
    text: string;
    link: string;
  };
}

// 🔥 Your specific, ordered slides — no randomness
const slides: Slide[] = [
  {
    id: 1,
    mobileImage: "/Gallery/GalleryImage (25).png",
    desktopImage: "/Gallery/GalleryImage (9).png",
    title: "Naac 'A' Grade",
    subtitle: "UGC Autonomous Institute",
    caption: "State-of-the-art facilities and industry-aligned curriculum preparing students for the future.",
    cta: {
      text: "Explore Engineering",
      link: "/cse",
    },
  },
  {
    id: 2,
    mobileImage: "/Gallery/GalleryImage (6).png",
    desktopImage: "/Gallery/GalleryImage (19).png",
    title: "Business Leadership Programs",
    subtitle: "MBA & Management Excellence",
    caption: "Developing future business leaders with practical knowledge and industry connections.",
    cta: {
      text: "Discover MBA",
      link: "/mba",
    },
  },
  {
    id: 3,
    mobileImage: "/Gallery/GalleryImage (21).png",
    desktopImage: "/Gallery/GalleryImage (14).png",
    title: "Healthcare Innovation",
    subtitle: "Pharmacy & Life Sciences",
    caption: "Contributing to healthcare advancement through pharmaceutical education and research.",
    cta: {
      text: "Explore Pharmacy",
      link: "/bpharm",
    },
  },
  {
    id: 4,
    mobileImage: "/Gallery/GalleryImage (1).png",
    desktopImage: "/Gallery/GalleryImage (23).png",
    title: "Legal Excellence",
    subtitle: "Transnational School of Law",
    caption: "Comprehensive legal education preparing advocates for global practice.",
    cta: {
      text: "Explore Law",
      link: "/law",
    },
  },
  {
    id: 5,
    mobileImage: "/Gallery/GalleryImage (35).png",
    desktopImage: "/Gallery/GalleryImage (27).png",
    title: "Campus Life & Growth",
    subtitle: "Beyond Academics",
    caption: "Vibrant campus life with sports, cultural activities, and personal development opportunities.",
    cta: {
      text: "Campus Tour",
      link: "/campus-tour",
    },
  },
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (i: number) => setCurrentSlide(i);
  let isMobile: boolean = window.innerWidth < 768;

  return (
    <section className="hero-section relative h-screen min-h-[100vh] overflow-hidden">
      {/* Slideshow backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* forced-render div */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat flex"
              style={{ backgroundImage: `url('${isMobile ? slide.mobileImage: slide.desktopImage}')` }}
            >
              <span className="sr-only">Slide background</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Left-aligned content overlay */}
      <div className="relative z-20 container mx-auto px-6 h-full flex items-center justify-start">
        <div className="max-w-3xl text-white text-left space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium tracking-wide">
              Welcome to SKITM, Indore
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide">
            {slides[currentSlide].title}
          </h1>
          <h2 className="font-display font-medium text-2xl md:text-3xl text-blue-200 tracking-wide">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
            {slides[currentSlide].caption}
          </p>
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            {slides[currentSlide].cta && (
              <Link to={slides[currentSlide].cta.link}>
                <Button className="bg-white text-skitm-navy hover:bg-blue-50 px-8 py-4 text-lg">
                  {slides[currentSlide].cta.text}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            )}
            <Link to="/admissions">
              <Button
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                Get Admission
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
