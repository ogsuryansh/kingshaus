// Utility functions for the Kingshaus landing page using GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);



// Initialize ScrollSmoother
export const initScrollSmoother = () => {
  const smoothWrapper = document.getElementById('smooth-wrapper');
  const smoothContent = document.getElementById('smooth-content');
  
  if (!smoothWrapper || !smoothContent) {
    return null;
  }

  try {
    // Create ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper,
      content: smoothContent,
      smooth: 0.8,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });
    return smoother;
  } catch {
    return null;
  }
};

// Carousel functionality for fading background - DISABLED (using dedicated carouselAnimation.js instead)
export const initCarousel = () => {
  console.log('initCarousel DISABLED - using dedicated carouselAnimation.js instead');
  // This function is disabled to prevent conflicts with the dedicated carousel system
  // The carousel is now handled by carouselAnimation.js which has NO auto-rotation
};

// Interactive stats functionality
export const initInteractiveStats = () => {
  const stats = document.querySelectorAll('.interactive-stat');
  
  stats.forEach(stat => {
    const underContent = stat.querySelector('.interactive-stat__content--under');
    const overContent = stat.querySelector('.interactive-stat__content--over');
    
    if (!underContent || !overContent) return;

    stat.addEventListener('mouseenter', () => {
      underContent.style.opacity = '0';
      overContent.style.opacity = '1';
    });

    stat.addEventListener('mouseleave', () => {
      underContent.style.opacity = '1';
      overContent.style.opacity = '0';
    });
  });
};

// Text reveal animations
export const initTextReveal = () => {
  const textReveal = document.querySelector('.text-reveal');
  if (!textReveal) return;

  const letters = textReveal.querySelectorAll('.revealable-text__letter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        letters.forEach((letter, index) => {
          setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
          }, index * 50);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(textReveal);
};

// Parallax effects - Improved implementation using GSAP
export const initParallax = (debug = false) => {
  // Only initialize if GSAP is available
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not available for parallax effects');
    return;
  }

  const parallaxElements = document.querySelectorAll('[data-speed]');
  
  if (parallaxElements.length === 0) {
    if (debug) console.log('No parallax elements found');
    return;
  }

  if (debug) console.log(`Found ${parallaxElements.length} parallax elements`);

  parallaxElements.forEach((element, index) => {
    const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
    
    if (debug) console.log(`Parallax element ${index}: speed = ${speed}`);
    
    // Improved parallax with better performance and smoother movement
    gsap.to(element, {
      y: `${-50 * speed}%`, // Reduced from -100% to -50% for subtler effect
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement || element,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5, // Reduced from 1 to 0.5 for smoother movement
        invalidateOnRefresh: true,
        markers: debug, // Enable markers for debugging
        onUpdate: (self) => {
          // Optional: Add performance optimization
          if (self.progress < 0.1 || self.progress > 0.9) {
            element.style.willChange = 'auto';
          } else {
            element.style.willChange = 'transform';
          }
        }
      }
    });
  });
};

// Clean up parallax effects
export const cleanupParallax = () => {
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger && trigger.vars.trigger.querySelector('[data-speed]')) {
        trigger.kill();
      }
    });
  }
};

// Scroll button functionality
export const handleScrollButtonClick = () => {
  const buildBetterSection = document.getElementById('build-better');
  if (buildBetterSection) {
    buildBetterSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Video handling
export const handleVideoLoad = (video) => {
  if (video) {
    video.play().catch(error => {
      console.log('Video autoplay prevented:', error);
    });
  }
};

// Helper function to format numbers with commas
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Helper function to debounce function calls
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Helper function to throttle function calls
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Helper function to check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Helper function to get viewport height
export const getViewportHeight = () => {
  return window.innerHeight || document.documentElement.clientHeight;
};

// Helper function to get viewport width
export const getViewportWidth = () => {
  return window.innerWidth || document.documentElement.clientWidth;
};

// Helper function to check if device is mobile
export const isMobile = () => {
  return window.innerWidth < 768;
};

// Helper function to check if device is tablet
export const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

// Helper function to check if device is desktop
export const isDesktop = () => {
  return window.innerWidth >= 1024;
};

// Carousel navigation
export const handleCarouselNavigation = (direction) => {
  const carousel = document.querySelector('.carousel-fading-background');
  if (!carousel) return;

  const nextButton = carousel.querySelector('.carousel-fading-background__button--next');
  const prevButton = carousel.querySelector('.carousel-fading-background__button--previous');

  if (direction === 'next' && nextButton && !nextButton.classList.contains('carousel-fading-background__button--disabled')) {
    nextButton.click();
  } else if (direction === 'prev' && prevButton && !prevButton.classList.contains('carousel-fading-background__button--disabled')) {
    prevButton.click();
  }
};

// Initialize all functionality
export const initializeAll = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        initScrollSmoother();
        // initCarousel(); // REMOVED - using dedicated carouselAnimation.js instead
        initInteractiveStats();
        initTextReveal();
        // initParallax(); // REMOVED - parallax effect disabled
      }, 100);
    });
  } else {
    setTimeout(() => {
      initScrollSmoother();
      // initCarousel(); // REMOVED - using dedicated carouselAnimation.js instead
      initInteractiveStats();
      initTextReveal();
      // initParallax(); // REMOVED - parallax effect disabled
    }, 100);
  }
};

// Test parallax effect - useful for debugging
export const testParallax = () => {
  console.log('🧪 Testing parallax effects...');
  
  // Check if GSAP is available
  if (typeof gsap === 'undefined') {
    console.error('❌ GSAP not available');
    return false;
  }
  
  // Check if ScrollTrigger is available
  if (typeof ScrollTrigger === 'undefined') {
    console.error('❌ ScrollTrigger not available');
    return false;
  }
  
  // Find parallax elements
  const parallaxElements = document.querySelectorAll('[data-speed]');
  console.log(`📊 Found ${parallaxElements.length} parallax elements`);
  
  // Log details of each element
  parallaxElements.forEach((element, index) => {
    const speed = element.getAttribute('data-speed');
    const className = element.className;
    console.log(`  ${index + 1}. Speed: ${speed}, Class: ${className}`);
  });
  
  // Test ScrollTrigger
  try {
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        console.log(`✅ ScrollTrigger working - Progress: ${self.progress.toFixed(2)}`);
      }
    });
  } catch (error) {
    console.error('❌ ScrollTrigger test failed:', error);
    return false;
  }
  
  console.log('✅ Parallax test completed successfully');
  return true;
};
