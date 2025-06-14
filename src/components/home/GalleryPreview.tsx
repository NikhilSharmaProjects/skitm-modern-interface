import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import { getRandomGalleryImage, pickRandomGalleryImages } from "@/utils/galleryImages";

const GalleryPreview = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const [galleryImages, setGalleryImages] = useState<{ id: string; imageUrl: string; title: string; }[]>([]);

  useEffect(() => {
    // For preview, show 6 random images
    const imgs = pickRandomGalleryImages(6).map((imgPath, idx) => ({
      id: String(idx + 1),
      imageUrl: imgPath,
      title: `Campus Moment ${idx + 1}`,
    }));
    setGalleryImages(imgs);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 ${sectionVisible ? "animate-fade-in" : "opacity-1"}`}
      >
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
            Campus Life
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-skitm-navy mb-4">
            SKITM Gallery
          </h2>
          <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
            Take a visual tour of our campus, events, and student activities.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Link
              key={image.id}
              to="/gallery"
              className={`group relative overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02] ${sectionVisible ? "animate-fade-in" : "opacity-1"}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-1 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">
                  {image.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button variant="primary">View Full Gallery</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
