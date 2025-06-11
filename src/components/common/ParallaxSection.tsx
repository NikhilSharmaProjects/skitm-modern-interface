
import { ReactNode } from "react";

interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: number;
}

const ParallaxSection = ({ 
  backgroundImage, 
  children, 
  className = "",
  overlayOpacity = 0.4 
}: ParallaxSectionProps) => {
  return (
    <section 
      className={`parallax-section ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div 
        className="parallax-overlay" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      <div className="parallax-content">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
