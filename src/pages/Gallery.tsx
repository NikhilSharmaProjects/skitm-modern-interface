
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, X } from 'lucide-react';

// Gallery image categories and data
const categories = ["All", "Campus", "Events", "Academic", "Sports", "Cultural", "Infrastructure"];

const galleryImages = [
  { id: 1, src: "/placeholder.svg", alt: "Main Building", category: "Campus" },
  { id: 2, src: "/placeholder.svg", alt: "Library", category: "Infrastructure" },
  { id: 3, src: "/placeholder.svg", alt: "Computer Lab", category: "Academic" },
  { id: 4, src: "/placeholder.svg", alt: "Sports Day", category: "Sports" },
  { id: 5, src: "/placeholder.svg", alt: "Cultural Performance", category: "Cultural" },
  { id: 6, src: "/placeholder.svg", alt: "Technical Fest", category: "Events" },
  { id: 7, src: "/placeholder.svg", alt: "Classroom", category: "Academic" },
  { id: 8, src: "/placeholder.svg", alt: "Campus Garden", category: "Campus" },
  { id: 9, src: "/placeholder.svg", alt: "Auditorium", category: "Infrastructure" },
  { id: 10, src: "/placeholder.svg", alt: "Basketball Court", category: "Sports" },
  { id: 11, src: "/placeholder.svg", alt: "Dance Performance", category: "Cultural" },
  { id: 12, src: "/placeholder.svg", alt: "Workshop", category: "Events" },
  { id: 13, src: "/placeholder.svg", alt: "Science Lab", category: "Academic" },
  { id: 14, src: "/placeholder.svg", alt: "Cafeteria", category: "Campus" },
  { id: 15, src: "/placeholder.svg", alt: "Hostels", category: "Infrastructure" },
  { id: 16, src: "/placeholder.svg", alt: "Cricket Match", category: "Sports" },
  { id: 17, src: "/placeholder.svg", alt: "Music Concert", category: "Cultural" },
  { id: 18, src: "/placeholder.svg", alt: "Graduation Ceremony", category: "Events" },
];

const Gallery = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gallery - SKITM</title>
        <meta name="description" content="Browse through SKITM's image gallery showcasing our campus, events, academic activities, sports, and cultural programs. Get a visual tour of our college life and facilities." />
        <meta name="keywords" content="SKITM gallery, college photos, campus images, college events, student activities, college facilities" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className="text-center mb-12 animate-fade-in"
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              Visual Tour
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Gallery
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Explore campus life through our collection of photos and videos.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-skitm-blue text-white' 
                    : 'bg-gray-100 text-skitm-gray hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="mx-auto text-skitm-gray mb-4" size={48} />
              <h3 className="text-xl font-semibold text-skitm-navy mb-2">No images found</h3>
              <p className="text-skitm-gray">No images available for the selected category.</p>
            </div>
          )}
          
          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                <button 
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
                
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="aspect-video">
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.alt} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-skitm-navy">{selectedImage.alt}</h3>
                    <p className="text-sm text-skitm-gray">Category: {selectedImage.category}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Video Gallery Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
              Video Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glassmorphism rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-skitm-gray text-sm">Video Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-skitm-navy mb-1">Campus Tour</h3>
                  <p className="text-sm text-skitm-gray">A virtual tour of our beautiful campus and facilities.</p>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-skitm-gray text-sm">Video Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-skitm-navy mb-1">Annual Day Highlights</h3>
                  <p className="text-sm text-skitm-gray">Highlights from our last Annual Day celebration.</p>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-skitm-gray text-sm">Video Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-skitm-navy mb-1">TechFest 2023</h3>
                  <p className="text-sm text-skitm-gray">Exciting moments from our biggest technical festival.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Virtual Tour CTA */}
          <div className="mt-20 glassmorphism rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">Virtual Campus Tour</h2>
            <p className="text-skitm-gray mb-6 max-w-2xl mx-auto">
              Can't visit us in person? Take a virtual tour of our campus to explore our facilities, 
              classrooms, labs, hostels, and more from anywhere.
            </p>
            <a 
              href="#"
              className="bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-lightBlue transition-colors inline-block font-medium"
            >
              Launch Virtual Tour
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
