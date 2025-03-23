
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Button from '@/components/ui/Button';

const GalleryPreview = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  const galleryImages = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      title: 'Campus Building'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      title: 'Graduation Ceremony'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      title: 'Technical Workshop'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1588072432174-7f828b7ddd75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      title: 'Sports Event'
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      title: 'Cultural Festival'
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      title: 'Research Exhibition'
    },
  ];
  
  return (
    <section className="py-20 bg-white">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 ${sectionVisible ? 'animate-fade-in' : 'opacity-0'}`}
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
              to={`/gallery/${image.id}`}
              className={`group relative overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02] ${
                sectionVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <img 
                src={image.imageUrl} 
                alt={image.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">{image.title}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button variant="primary">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
