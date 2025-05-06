import { useState, useEffect } from "react";
import { useScrollAnimationDiv } from "@/hooks/useScrollAnimationDiv";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { X } from "lucide-react";

// Define GalleryItem type
interface GalleryItem {
    id: string;
    title: string;
    imageUrl: string;
    category: string;
    date: string;
}

// Default gallery items if none in localStorage
const defaultGalleryItems: GalleryItem[] = [
    {
        id: "1",
        title: "Campus Building",
        imageUrl: "Gallery/GalleryImage (1).png",
        category: "Campus",
        date: "2023-01-15",
    },
    {
        id: "2",
        title: "Graduation Ceremony",
        imageUrl: "Gallery/GalleryImage (2).png",
        category: "Events",
        date: "2023-06-22",
    },
    {
        id: "3",
        title: "Technical Workshop",
        imageUrl: "Gallery/GalleryImage (3).png",
        category: "Workshops",
        date: "2023-03-10",
    },
    {
        id: "4",
        title: "Sports Event",
        imageUrl: "Gallery/GalleryImage (4).png",
        category: "Sports",
        date: "2023-02-05",
    },
    {
        id: "5",
        title: "Cultural Festival",
        imageUrl: "Gallery/GalleryImage (5).png",
        category: "Cultural",
        date: "2023-04-18",
    },
    {
        id: "6",
        title: "Research Exhibition",
        imageUrl: "Gallery/GalleryImage (5).png",
        category: "Research",
        date: "2023-05-30",
    },
];

// Gallery categories
const categories = [
    "All",
    "Campus",
    "Events",
    "Workshops",
    "Sports",
    "Cultural",
    "Research",
];

const Gallery = () => {
    const { ref, isVisible } = useScrollAnimationDiv();
    const [activeCategory, setActiveCategory] = useState("All");
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    useEffect(() => {
        // Load gallery items from localStorage or use defaults
        const savedGallery = localStorage.getItem("skitm-gallery");
        if (savedGallery) {
            setGalleryItems(JSON.parse(savedGallery));
        } else {
            setGalleryItems(defaultGalleryItems);
        }
    }, []);

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    const openLightbox = (item: GalleryItem) => {
        setSelectedItem(item);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedItem(null);
        document.body.style.overflow = "auto";
    };

    // Format date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Gallery - SKITM</title>
                <meta
                    name="description"
                    content="Browse through images of SKITM campus, events, workshops, and student activities. See what life at SKITM is all about."
                />
                <meta property="og:title" content="Gallery - SKITM" />
                <meta
                    property="og:description"
                    content="Browse through images of SKITM campus, events, workshops, and student activities."
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://skitm.edu/gallery" />
            </Helmet>

            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={ref as React.RefObject<HTMLDivElement>}
                        className={`text-center mb-12 ${
                            isVisible ? "animate-fade-in" : "opacity-1"
                        }`}
                    >
                        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
                            Visual Tour
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
                            SKITM Gallery
                        </h1>
                        <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
                            Explore images from our campus, events, and student
                            activities
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    activeCategory === category
                                        ? "bg-skitm-blue text-white"
                                        : "bg-gray-100 text-skitm-gray hover:bg-gray-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-skitm-gray">
                                No images found in this category.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                                    onClick={() => openLightbox(item)}
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-1 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <h3 className="text-white font-medium mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/80 text-sm">
                                            {formatDate(item.date)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Lightbox */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div className="max-w-5xl max-h-[90vh] w-full">
                        <img
                            src={selectedItem.imageUrl}
                            alt={selectedItem.title}
                            className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                        />

                        <div className="text-center mt-4">
                            <h3 className="text-white text-lg font-medium">
                                {selectedItem.title}
                            </h3>
                            <p className="text-gray-300 text-sm mt-1">
                                {formatDate(selectedItem.date)} •{" "}
                                {selectedItem.category}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Gallery;
