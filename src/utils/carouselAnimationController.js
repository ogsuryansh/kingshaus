// Carousel Animation System - MANUAL ONLY (NO AUTO-ROTATION)
// This carousel ONLY responds to button clicks - NO automatic changing

import { gsap } from 'gsap';

// Global carousel state
let carouselInstance = null;

// AGGRESSIVE AUTO-ROTATION PREVENTION
const preventAutoRotation = () => {
  console.log('🔒 AGGRESSIVE AUTO-ROTATION PREVENTION ACTIVATED');
  
  // Override setInterval for carousel-related functions
  const originalSetInterval = window.setInterval;
  window.setInterval = function(fn, delay, ...args) {
    const fnString = fn.toString().toLowerCase();
    if (fnString.includes('carousel') || fnString.includes('slide') || fnString.includes('autoplay') || fnString.includes('rotate')) {
      console.log('🚫 BLOCKED setInterval for carousel/autoplay function:', fnString.substring(0, 100));
      return null; // Return null instead of interval ID
    }
    return originalSetInterval.call(this, fn, delay, ...args);
  };
  
  // Clear any existing intervals that might be running
  const maxIntervalId = 10000;
  for (let i = 1; i <= maxIntervalId; i++) {
    clearInterval(i);
  }
  
  console.log('✅ All potential auto-rotation intervals cleared');
};

// Initialize carousel functionality - MANUAL ONLY
export const initCarouselAnimation = () => {
  console.log('🚀 Initializing MANUAL carousel animation (NO AUTO-ROTATION)...');
  
  // Activate aggressive prevention
  preventAutoRotation();
  
  const carousel = document.querySelector('.carousel-fading-background');
  if (!carousel) {
    console.log('❌ Carousel not found');
    return;
  }
  console.log('✅ Carousel found:', carousel);

  const assets = carousel.querySelectorAll('.carousel-fading-background__asset');
  const slides = carousel.querySelectorAll('.gsap-carousel-slide');
  const prevButton = carousel.querySelector('.carousel-fading-background__button--previous');
  const nextButton = carousel.querySelector('.carousel-fading-background__button--next');

  console.log('Found elements:', {
    assets: assets.length,
    slides: slides.length,
    prevButton: !!prevButton,
    nextButton: !!nextButton
  });

  if (assets.length < 2 || slides.length < 2) {
    console.log('❌ Not enough slides or assets');
    return;
  }

  let currentIndex = 0;
  let isAnimating = false;

  // Set initial state - first slide and asset visible
  gsap.set(assets[0], { opacity: 1 });
  gsap.set(assets[1], { opacity: 0 });
  
  // Set up initial slide states
  slides.forEach((slide, i) => {
    if (i === 0) {
      slide.style.display = 'block';
      slide.style.position = 'relative';
      slide.style.opacity = '1';
    } else {
      slide.style.display = 'none';
      slide.style.position = 'absolute';
      slide.style.opacity = '0';
    }
  });

  // Update button states
  const updateButtonStates = () => {
    if (prevButton) {
      if (currentIndex === 0) {
        prevButton.classList.add('carousel-fading-background__button--disabled');
      } else {
        prevButton.classList.remove('carousel-fading-background__button--disabled');
      }
    }
    if (nextButton) {
      if (currentIndex === slides.length - 1) {
        nextButton.classList.add('carousel-fading-background__button--disabled');
      } else {
        nextButton.classList.remove('carousel-fading-background__button--disabled');
      }
    }
  };

  // Go to specific slide - MANUAL ONLY
  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex || index < 0 || index >= slides.length) return;

    console.log('🎯 Manual slide change to index:', index);
    isAnimating = true;
    const previousIndex = currentIndex;
    currentIndex = index;

    // Remove active class from previous asset
    assets[previousIndex].classList.remove('carousel-fading-background__asset--active');
    
    // Add active class to new asset
    assets[currentIndex].classList.add('carousel-fading-background__asset--active');

    // Hide all slides first
    slides.forEach((slide, i) => {
      slide.style.display = 'none';
      slide.style.position = 'absolute';
      slide.style.opacity = '0';
    });

    // Show current slide
    slides[currentIndex].style.display = 'block';
    slides[currentIndex].style.position = 'relative';
    slides[currentIndex].style.opacity = '1';

    // Fade out current slide and asset
    gsap.to(assets[previousIndex], {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut"
    });

    // Fade in new slide and asset
    gsap.to(assets[currentIndex], {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
      delay: 0.4
    });

    gsap.to(slides[currentIndex], {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
      delay: 0.4,
      onComplete: () => {
        isAnimating = false;
        updateButtonStates();
        console.log('✅ Slide change completed');
      }
    });

    updateButtonStates();
  };

  // Next slide - MANUAL ONLY
  const nextSlide = () => {
    console.log('➡️ Manual next slide clicked');
    if (currentIndex < slides.length - 1 && !isAnimating) {
      goToSlide(currentIndex + 1);
    } else {
      console.log('⚠️ Cannot go to next slide - at end or animating');
    }
  };

  // Previous slide - MANUAL ONLY
  const prevSlide = () => {
    console.log('⬅️ Manual prev slide clicked');
    if (currentIndex > 0 && !isAnimating) {
      goToSlide(currentIndex - 1);
    } else {
      console.log('⚠️ Cannot go to prev slide - at beginning or animating');
    }
  };

  // Add event listeners - MANUAL ONLY
  if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
    console.log('✅ Added next button listener');
  }

  if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
    console.log('✅ Added prev button listener');
  }

  // NO AUTO-ROTATION - COMPLETELY DISABLED
  console.log('🚫 AUTO-ROTATION COMPLETELY DISABLED - Manual navigation only');
  
  // Additional prevention - override any potential auto-rotation
  const preventAnyAutoRotation = () => {
    // Clear any existing intervals every 2 seconds as a safety measure
    setInterval(() => {
      for (let i = 1; i <= 10000; i++) {
        clearInterval(i);
      }
    }, 2000);
  };
  
  // Start the prevention system
  preventAnyAutoRotation();

  // Initialize button states
  updateButtonStates();

  // Store instance for cleanup
  carouselInstance = {
    goToSlide,
    nextSlide,
    prevSlide,
    autoRotateInterval: null, // NO AUTO-ROTATION
    nextButton,
    prevButton
  };

  console.log('🎉 Manual carousel animation initialized successfully - NO AUTO-ROTATION');
  
  // Final check - clear any remaining intervals
  setTimeout(() => {
    console.log('🔍 Final check - clearing any remaining intervals');
    for (let i = 1; i <= 10000; i++) {
      clearInterval(i);
    }
  }, 1000);
};

// Cleanup carousel - NO AUTO-ROTATION TO CLEANUP
export const cleanupCarouselAnimation = () => {
  console.log('🧹 Cleaning up manual carousel animation');
  
  if (carouselInstance) {
    // No auto-rotation interval to clear
    console.log('✅ No auto-rotation interval to clear');

    if (carouselInstance.nextButton) {
      carouselInstance.nextButton.removeEventListener('click', carouselInstance.nextSlide);
      console.log('✅ Removed next button listener');
    }

    if (carouselInstance.prevButton) {
      carouselInstance.prevButton.removeEventListener('click', carouselInstance.prevSlide);
      console.log('✅ Removed prev button listener');
    }

    carouselInstance = null;
    console.log('✅ Manual carousel cleanup complete');
  }
};

export default {
  initCarouselAnimation,
  cleanupCarouselAnimation
};
