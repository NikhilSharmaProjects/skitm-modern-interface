
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { pickRandomGalleryImages } from "@/utils/galleryImages";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  caption: string;
  cta?: {
    text: string;
    link: string;
  };
}

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    // Get 5 random gallery images for the slideshow
    setGalleryImages(pickRandomGalleryImages(5));
  }, []);

  const slides: Slide[] = [
    {
      id: 1,
      image: galleryImages[0] || "/Gallery/GalleryImage (1).png",
      title: "Excellence in Engineering Education",
      subtitle: "Shaping Tomorrow's Engineers",
      caption: "State-of-the-art facilities and industry-aligned curriculum preparing students for the future.",
      cta: {
        text: "Explore Engineering",
        link: "/academics/engineering"
      }
    },
    {
      id: 2,
      image: galleryImages[1] || "/Gallery/GalleryImage (2).png",
      title: "Business Leadership Programs",
      subtitle: "MBA & Management Excellence",
      caption: "Developing future business leaders with practical knowledge and industry connections.",
      cta: {
        text: "Discover MBA",
        link: "/academics/management"
      }
    },
    {
      id: 3,
      image: galleryImages[2] || "/Gallery/GalleryImage (3).png",
      title: "Healthcare Innovation",
      subtitle: "Pharmacy & Life Sciences",
      caption: "Contributing to healthcare advancement through pharmaceutical education and research.",
      cta: {
        text: "Learn More",
        link: "/academics/pharmacy"
      }
    },
    {
      id: 4,
      image: galleryImages[3] || "/Gallery/GalleryImage (4).png",
      title: "Legal Excellence",
      subtitle: "Transnational School of Law",
      caption: "Comprehensive legal education preparing advocates for global practice.",
      cta: {
        text: "Explore Law",
        link: "/academics/law"
      }
    },
    {
      id: 5,
      image: galleryImages[4] || "/Gallery/GalleryImage (5).png",
      title: "Campus Life & Growth",
      subtitle: "Beyond Academics",
      caption: "Vibrant campus life with sports, cultural activities, and personal development opportunities.",
      cta: {
        text: "Campus Tour",
        link: "/campus-tour"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section relative">
      {/* Slideshow Container */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium tracking-wide">Welcome to SKITM, Indore</span>
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
                <Link to={slides[currentSlide].cta!.link}>
                  <Button size="lg" className="bg-white text-skitm-navy hover:bg-blue-50 text-lg px-8 py-4">
                    {slides[currentSlide].cta!.text}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              )}
              <Link to="/admissions">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-black text-lg px-8 py-4"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
