// Animation System for Kingshaus React App
// This replicates all the original website animations but works with React

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { initParallax } from './gsapUtilityFunctions.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Global animation state
let animationsInitialized = false;
let scrollSmoother = null;

// Initialize all animations
export const initAnimations = () => {
  if (animationsInitialized) return;
  
  console.log('Initializing Kingshaus animations...');
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAnimations);
  } else {
    setupAnimations();
  }
  
  animationsInitialized = true;
};

const setupAnimations = () => {
  // Initialize smooth scrolling
  initSmoothScroll();
  
  // Initialize interactive stats animations
  initInteractiveStats();
  
  // Initialize text reveal animations
  initTextReveal();
  
  // Initialize carousel background transitions
  initCarouselBackground();
  
  // Initialize parallax effects
initParallax(false); // Parallax working well
  
  // Initialize hero animations
  initHeroAnimations();
  
  // Initialize expanding callout animations
  initExpandingCallout();
};

// Smooth scrolling setup
const initSmoothScroll = () => {
  const smoothWrapper = document.getElementById('smooth-wrapper');
  const smoothContent = document.getElementById('smooth-content');
  
  if (smoothWrapper && smoothContent) {
    scrollSmoother = ScrollSmoother.create({
      wrapper: smoothWrapper,
      content: smoothContent,
      smooth: 1,
      effects: true
    });
  }
};

// Interactive stats animations (left-to-right reveal)
const initInteractiveStats = () => {
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
    
    // Scroll-triggered animation
    gsap.timeline({
      scrollTrigger: {
        trigger: overContent,
        start: "top center",
        toggleActions: "play none none reverse"
      }
    }).fromTo(overContent, {
      clipPath: "inset(0% 100% 0% 0%)"
    }, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.in",
      duration: 0.6
    }).fromTo(image, {
      x: -200
    }, {
      x: -100,
      ease: "power1.out",
      duration: 1
    }, "<");
    
    // Hover animations (desktop only)
    if (window.innerWidth >= 1024) {
      stat.addEventListener('mouseenter', () => {
        gsap.to(overContent, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power4.in",
          duration: 0.8
        });
        
        if (image) {
          gsap.to(image, {
            x: -100,
            ease: "power1.out",
            duration: 1.2
          });
        }
      });
      
      stat.addEventListener('mouseleave', () => {
        gsap.to(overContent, {
          clipPath: "inset(0% 0% 0% 100%)",
          ease: "power4.in",
          duration: 0.8
        });
        
        if (image) {
          gsap.to(image, {
            x: 0,
            ease: "power4.in",
            duration: 0.8
          });
        }
      });
    }
  });
};

// Text reveal animations - EXACT COPY FROM ORIGINAL
const initTextReveal = () => {
  const revealableTexts = document.querySelectorAll('.revealable-text');
  
  revealableTexts.forEach(textBlock => {
    const animatedLetters = textBlock.querySelectorAll('.revealable-text__text--animated .revealable-text__letter');
    
    if (animatedLetters.length > 0) {
      // Set initial state - EXACT COPY FROM ORIGINAL
      gsap.set(animatedLetters, {
        clipPath: "inset(0% 100% 0% 0%)"
      });
      
      // Create timeline with scroll trigger - EXACT COPY FROM ORIGINAL
      gsap.timeline({
        scrollTrigger: {
          trigger: textBlock,
          start: "center 90%",
          end: "center center",
          scrub: true,
          toggleActions: "restart none none reverse"
        }
      }).fromTo(animatedLetters, {
        clipPath: "inset(0% 100% 0% 0%)"
      }, {
        clipPath: "inset(0% 0% 0% 0%)",
        stagger: 0.2,
        duration: 0.2,
        ease: "none"
      });
    }
  });
};

// Carousel background transitions
const initCarouselBackground = () => {
  const carousel = document.querySelector('.carousel-fading-background');
  if (!carousel) return;

  const assets = carousel.querySelectorAll('.carousel-fading-background__asset');
  const slides = carousel.querySelectorAll('.carousel-fading-background__text-slide');
  const prevButton = carousel.querySelector('.carousel-fading-background__button--previous');
  const nextButton = carousel.querySelector('.carousel-fading-background__button--next');
  
  let currentSlide = 0;
  const totalSlides = assets.length;

  // Set initial state
  assets.forEach((asset, index) => {
    if (index === 0) {
      asset.classList.add('carousel-fading-background__asset--active');
    } else {
      asset.classList.remove('carousel-fading-background__asset--active');
    }
  });

  slides.forEach((slide, index) => {
    if (index === 0) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  // Update button states
  const updateButtons = () => {
    if (prevButton) {
      prevButton.classList.toggle('carousel-fading-background__button--disabled', currentSlide === 0);
    }
    if (nextButton) {
      nextButton.classList.toggle('carousel-fading-background__button--disabled', currentSlide === totalSlides - 1);
    }
  };

  // Switch to slide
  const goToSlide = (slideIndex) => {
    if (slideIndex < 0 || slideIndex >= totalSlides) return;

    // Update assets
    assets.forEach((asset, index) => {
      if (index === slideIndex) {
        asset.classList.add('carousel-fading-background__asset--active');
      } else {
        asset.classList.remove('carousel-fading-background__asset--active');
      }
    });

    // Update slides
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });

    currentSlide = slideIndex;
    updateButtons();
  };

  // Event listeners
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
      }
    });
  }

  // Initialize button states
  updateButtons();
};

// Parallax effects are now handled by the imported initParallax function from gsapUtilityFunctions.js

// Hero animations
const initHeroAnimations = () => {
  const heroText = document.querySelector('.animatable-text__heading');
  const heroSubtext = document.querySelector('.home-hero__text');
  const scrollButton = document.querySelector('.home-hero__scroll-button');
  
  if (heroText) {
    gsap.fromTo(heroText, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    });
  }
  
  if (heroSubtext) {
    gsap.fromTo(heroSubtext, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1
    });
  }
  
  if (scrollButton) {
    gsap.fromTo(scrollButton, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1.5
    });
  }
};

// Expanding callout animations (rectangular reveal) - EXACT COPY FROM ORIGINAL
const initExpandingCallout = () => {
  const expandingCallouts = document.querySelectorAll('.expanding-callout');
  
  expandingCallouts.forEach(callout => {
    const clippedBlock = callout.querySelector('.expanding-callout__clipped-block');
    
    if (!clippedBlock) return;
    
    // Check if desktop or mobile (exact logic from original)
    if (window.innerWidth >= 768) {
      // Desktop animation - EXACT COPY FROM ORIGINAL
      gsap.timeline({
        scrollTrigger: {
          trigger: callout,
          start: "center 90%",
          end: "center center",
          scrub: true,
          toggleActions: "restart none none reverse"
        }
      }).fromTo(clippedBlock, {
        clipPath: "inset(16.25% 40% 16.25% 40% round 20px)"
      }, {
        clipPath: "inset(0% 0% 0% 0% round 0px)"
      });
    } else {
      // Mobile animation - EXACT COPY FROM ORIGINAL
      gsap.timeline({
        scrollTrigger: {
          trigger: callout,
          start: "center bottom",
          end: "center center",
          scrub: true,
          toggleActions: "restart none none reverse"
        }
      }).fromTo(clippedBlock, {
        clipPath: "inset(20% 20% 20% 20% round 20px)"
      }, {
        clipPath: "inset(0% 0% 0% 0% round 0px)"
      });
    }
  });
};

// Cleanup function
export const cleanupAnimations = () => {
  if (scrollSmoother) {
    scrollSmoother.kill();
  }
  
  ScrollTrigger.getAll().forEach(trigger => {
    trigger.kill();
  });
  
  // Cleanup carousel animation
  // The carousel animation system is now initialized directly in setupAnimations
  // No need to import and call cleanup here unless the carousel system itself has a global cleanup
  // For now, assuming the carousel system manages its own cleanup or is not global.
  
  animationsInitialized = false;
};

export default {
  initAnimations,
  cleanupAnimations
};
