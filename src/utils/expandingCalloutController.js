// Expanding Callout Animation - Copied from original _nuxt/6847afa.js
// This replicates the exact rectangular reveal animation from the original website

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize expanding callout animations
export const initExpandingCalloutAnimation = () => {
  const expandingCallouts = document.querySelectorAll('.expanding-callout');
  
  expandingCallouts.forEach(callout => {
    const clippedBlock = callout.querySelector('.expanding-callout__clipped-block');
    
    if (!clippedBlock) return;
    
    // Check if desktop or mobile
    if (window.innerWidth >= 768) {
      animateDesktopExpandingCallout(callout, clippedBlock);
    } else {
      animateMobileExpandingCallout(callout, clippedBlock);
    }
  });
};

// Desktop animation (larger rectangular reveal)
const animateDesktopExpandingCallout = (callout, clippedBlock) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: callout,
      start: "center 90%",
      end: "center center",
      scrub: true,
      toggleActions: "restart none none reverse"
    }
  });
  
  timeline.fromTo(clippedBlock, {
    clipPath: "inset(16.25% 40% 16.25% 40% round 20px)"
  }, {
    clipPath: "inset(0% 0% 0% 0% round 0px)"
  });
};

// Mobile animation (smaller rectangular reveal)
const animateMobileExpandingCallout = (callout, clippedBlock) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: callout,
      start: "center bottom",
      end: "center center",
      scrub: true,
      toggleActions: "restart none none reverse"
    }
  });
  
  timeline.fromTo(clippedBlock, {
    clipPath: "inset(20% 20% 20% 20% round 20px)"
  }, {
    clipPath: "inset(0% 0% 0% 0% round 0px)"
  });
};

// Handle window resize
export const handleExpandingCalloutResize = () => {
  // Kill existing ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.trigger && trigger.vars.trigger.classList.contains('expanding-callout')) {
      trigger.kill();
    }
  });
  
  // Reinitialize animations
  initExpandingCalloutAnimation();
};

// Cleanup function
export const cleanupExpandingCalloutAnimation = () => {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.trigger && trigger.vars.trigger.classList.contains('expanding-callout')) {
      trigger.kill();
    }
  });
};

export default {
  initExpandingCalloutAnimation,
  handleExpandingCalloutResize,
  cleanupExpandingCalloutAnimation
};
