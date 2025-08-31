import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ParallaxImage = ({ 
  src, 
  srcSet, 
  sizes, 
  alt, 
  className = "", 
  speed = 0.8, 
  mobileSrc, 
  mobileSrcSet,
  mobileSizes 
}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image || typeof gsap === 'undefined') return;

    // Create smooth parallax animation
    const animation = gsap.to(image, {
      y: `${-30 * speed}%`, // More subtle parallax effect
      ease: "none",
      scrollTrigger: {
        trigger: image.parentElement || image,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3, // Very smooth movement
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Performance optimization
          if (self.progress < 0.05 || self.progress > 0.95) {
            image.style.willChange = 'auto';
          } else {
            image.style.willChange = 'transform';
          }
        }
      }
    });

    // Cleanup function
    return () => {
      if (animation && animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
    };
  }, [speed]);

  return (
    <picture className={`parallax-image ${className}`}>
      {/* Desktop image */}
      <source
        type="image/webp"
        srcSet={srcSet}
        sizes={sizes}
      />
      <img
        ref={imageRef}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className="parallax-image__desktop"
        loading="lazy"
      />
      
      {/* Mobile image if provided */}
      {mobileSrc && (
        <>
          <source
            type="image/webp"
            srcSet={mobileSrcSet}
            sizes={mobileSizes}
            media="(max-width: 768px)"
          />
          <img
            src={mobileSrc}
            srcSet={mobileSrcSet}
            sizes={mobileSizes}
            alt={alt}
            className="parallax-image__mobile"
            loading="lazy"
          />
        </>
      )}
    </picture>
  );
};

export default ParallaxImage;
