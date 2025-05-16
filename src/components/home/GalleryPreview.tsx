
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/CustomButton";
import { GalleryItem, galleryService } from "@/services/dataService";
import { toast } from "sonner";

const GalleryPreview = () => {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
    const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGalleryPreview() {
            setLoading(true);
            try {
                let items = await galleryService.getAll();
                // Take only the first 6 items for the preview
                items = items.slice(0, 6);
                setGalleryImages(items);
            } catch (error) {
                console.error("Failed to load gallery preview:", error);
                toast.error("Failed to load gallery preview");
                
                // Fallback to default images
                setGalleryImages([
                    {
                        id: "1",
                        imageUrl:
                            "Gallery/GalleryImage (1).png",
                        title: "Campus Building",
                        category: "Campus",
                        date: "2023-01-15"
                    },
                    {
                        id: "2",
                        imageUrl:
                            "Gallery/GalleryImage (2).png",
                        title: "Graduation Ceremony",
                        category: "Events",
                        date: "2023-06-22"
                    },
                    {
                        id: "3",
                        imageUrl:
                            "Gallery/GalleryImage (3).png",
                        title: "Technical Workshop",
                        category: "Workshops",
                        date: "2023-03-10"
                    },
                    {
                        id: "4",
                        imageUrl:
                            "Gallery/GalleryImage (4).png",
                        title: "Sports Event",
                        category: "Sports",
                        date: "2023-02-05"
                    },
                    {
                        id: "5",
                        imageUrl:
                            "Gallery/GalleryImage (5).png",
                        title: "Cultural Festival",
                        category: "Cultural",
                        date: "2023-04-18"
                    },
                    {
                        id: "6",
                        imageUrl:
                            "Gallery/GalleryImage (6).png",
                        title: "Research Exhibition",
                        category: "Research",
                        date: "2023-05-30"
                    },
                ]);
            } finally {
                setLoading(false);
            }
        }
        
        loadGalleryPreview();
    }, []);

    return (
        <section className="py-20 bg-white">
            <div
                ref={sectionRef as React.RefObject<HTMLDivElement>}
                className={`container mx-auto px-4 ${
                    sectionVisible ? "animate-fade-in" : "opacity-1"
                }`}
            >
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                        Campus Life
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-skitm-navy mb-4">
                        SKITM Gallery
                    </h2>
                    <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                        Take a visual tour of our campus, events, and student
                        activities.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <p className="text-skitm-gray">Loading gallery preview...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((image, index) => (
                            <Link
                                key={image.id}
                                to="/gallery"
                                className={`group relative overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02] ${
                                    sectionVisible ? "animate-fade-in" : "opacity-1"
                                }`}
                                style={{ animationDelay: `${0.1 * index}s` }}
                            >
                                <img
                                    src={image.imageUrl}
                                    alt={image.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback image if the original fails to load
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
                )}

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
