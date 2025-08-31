// Interactive Stats Animation - Copied from original _nuxt/6847afa.js
// This replicates the exact left-to-right animation from the original website

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize interactive stats animations
export const initInteractiveStatsAnimation = () => {
  const stats = document.querySelectorAll('.interactive-stat');
  
  stats.forEach(stat => {
    const overContent = stat.querySelector('.interactive-stat__content--over');
    const image = stat.querySelector('.interactive-stat__image');
    
    if (!overContent) return;
    
    // Set initial state
    gsap.set(overContent, {
      clipPath: "inset(0% 100% 0% 0%)"
    });
    
    if (image) {
      gsap.set(image, {
        x: -200
      });
    }
    
    // Auto animation enter timeline (scroll-triggered)
    const enterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: overContent,
        start: "top center",
        toggleActions: "restart none none reverse"
      }
    });
    
    enterTimeline.fromTo(overContent, {
      clipPath: "inset(0% 100% 0% 0%)"
    }, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.in",
      duration: 0.6
    });
    
    if (image) {
      enterTimeline.fromTo(image, {
        x: -200
      }, {
        x: -100,
        ease: "power1.out",
        duration: 1
      }, "<");
    }
    
    // Auto animation leave timeline
    const leaveTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: overContent,
        start: "bottom center",
        toggleActions: "restart none none reverse"
      }
    });
    
    leaveTimeline.fromTo(overContent, {
      clipPath: "inset(0% 0% 0% 0%)"
    }, {
      clipPath: "inset(0% 0% 0% 100%)",
      ease: "power4.in",
      duration: 0.8
    });
    
    if (image) {
      leaveTimeline.fromTo(image, {
        x: -100
      }, {
        x: 0,
        ease: "power4.in",
        duration: 0.8
      }, "<");
    }
    
    // Hover animations
    let hoverTimeline;
    
    stat.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 1024) { // Desktop only
        hoverTimeline = gsap.timeline();
        
        hoverTimeline.fromTo(overContent, {
          clipPath: "inset(0% 100% 0% 0%)"
        }, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power4.in",
          duration: 0.8
        });
        
        if (image) {
          hoverTimeline.fromTo(image, {
            x: -200
          }, {
            x: -100,
            ease: "power1.out",
            duration: 1.2
          }, "<");
        }
        
        hoverTimeline.play();
      }
    });
    
    stat.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 1024) { // Desktop only
        hoverTimeline = gsap.timeline();
        
        hoverTimeline.fromTo(overContent, {
          clipPath: "inset(0% 0% 0% 0%)"
        }, {
          clipPath: "inset(0% 0% 0% 100%)",
          ease: "power4.in",
          duration: 0.8
        });
        
        if (image) {
          hoverTimeline.fromTo(image, {
            x: -100
          }, {
            x: 0,
            ease: "power4.in",
            duration: 0.8
          }, "<");
        }
        
        hoverTimeline.play();
      }
    });
  });
};

// Mobile animation (simplified)
export const initMobileInteractiveStatsAnimation = () => {
  const stats = document.querySelectorAll('.interactive-stat');
  
  stats.forEach(stat => {
    const overContent = stat.querySelector('.interactive-stat__content--over');
    
    if (!overContent) return;
    
    // Set initial state
    gsap.set(overContent, {
      clipPath: "inset(0% 100% 0% 0%)"
    });
    
    // Scrubbed animation for mobile
    gsap.timeline({
      scrollTrigger: {
        trigger: overContent,
        start: "top bottom",
        end: "top 10%",
        scrub: true,
        toggleActions: "restart none none reverse"
      }
    }).fromTo(overContent, {
      clipPath: "inset(0% 100% 0% 0%)"
    }, {
      clipPath: "inset(0% 0% 0% 0%)"
    });
  });
};

// Main initialization function
export const initInteractiveStats = () => {
  if (window.innerWidth < 768) {
    initMobileInteractiveStatsAnimation();
  } else {
    initInteractiveStatsAnimation();
  }
};

// Cleanup function
export const cleanupInteractiveStats = () => {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.trigger && trigger.vars.trigger.classList.contains('interactive-stat')) {
      trigger.kill();
    }
  });
};

export default {
  initInteractiveStats,
  cleanupInteractiveStats
};
