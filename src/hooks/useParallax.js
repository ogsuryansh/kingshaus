import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useParallax = (speed = 0.5) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof gsap === 'undefined') return;

    // Create the improved parallax animation
    const animation = gsap.to(element, {
      y: `${-50 * speed}%`, // Reduced for subtler effect
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement || element,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5, // Smoother movement
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Performance optimization
          if (self.progress < 0.1 || self.progress > 0.9) {
            element.style.willChange = 'auto';
          } else {
            element.style.willChange = 'transform';
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

  return elementRef;
};
