import React, { useEffect } from "react";
import { initAnimations, cleanupAnimations } from "../utils/gsapAnimationController";
import HeroSection from "./HeroSection";
import AnimatedGraphicSection from "./AnimatedGraphicSection";
import ExpandingCalloutSection from "./ExpandingCalloutSection";
import TaglineContentSection from "./TaglineContentSection";
import InteractiveStatsSection from "./InteractiveStatsSection";
import CarouselBackground from "./CarouselBackground";
import TextRevealSection from "./TextRevealSection";
import FooterSection from "./FooterSection";

// Sample carousel data for the dynamic carousel
const carouselSlides = [
  {
    asset: {
      image: [
        {
          src: "/image/20719e.webp",
          srcSet: "/image/20719e.webp 374w, /image/bc16c9.webp 413w, /image/8d74e1.webp 570w, /image/7139cb.webp 767w, /image/81a990.webp 1023w, /image/7139cb.webp 1199w, /image/20719e.webp 1365w, /image/bc16c9.webp 1439w, /image/7139cb.webp 1536w, /image/7139cb.webp 1599w",
          sizes: "(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px",
          alt: "an overhead view of a dense forest"
        }
      ]
    },
    heading: "Reducing our carbon footprint",
    text: "Our homes capture and store atmospheric carbon in their timber frames, so we can lower the carbon footprint of home construction by 80%."
  },
  {
    asset: {
      image: [
        {
          src: "/image/bc16c9.webp",
          srcSet: "/image/bc16c9.webp 374w, /image/8d74e1.webp 413w, /image/7139cb.webp 570w, /image/81a990.webp 767w, /image/20719e.webp 1023w, /image/bc16c9.webp 1199w, /image/8d74e1.webp 1365w, /image/7139cb.webp 1439w, /image/81a990.webp 1536w, /image/bc16c9.webp 1599w",
          sizes: "(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px",
          alt: "a small bird perching on a branch"
        }
      ]
    },
    heading: "Responsible FSC‑certified materials",
    text: "The forests we source from preserve biological diversity and benefit the lives of local people and workers."
  }
];

// IMMEDIATE AUTO-ROTATION PREVENTION - runs before component loads
if (typeof window !== 'undefined') {
  console.log('🚨 IMMEDIATE AUTO-ROTATION PREVENTION ACTIVATED');
  
  // Override setInterval globally - only block actual auto-rotation, not React functions
  const originalSetInterval = window.setInterval;
  window.setInterval = function(fn, delay, ...args) {
    const fnString = fn.toString().toLowerCase();
    // Only block actual auto-rotation patterns, not React carousel navigation
    if (fnString.includes('autoplay') || fnString.includes('autorotate') || 
        (fnString.includes('carousel') && fnString.includes('interval')) ||
        (fnString.includes('slide') && fnString.includes('interval'))) {
      console.log('🚫 BLOCKED setInterval for auto-rotation function');
      return null;
    }
    return originalSetInterval.call(this, fn, delay, ...args);
  };
  
  // Clear all existing intervals
  for (let i = 1; i <= 10000; i++) {
    clearInterval(i);
  }
  
  console.log('✅ All intervals cleared on page load');
}

function LandingPage() {
  useEffect(() => {
    // IMMEDIATE AUTO-ROTATION PREVENTION
    console.log('🚨 COMPONENT MOUNT - PREVENTING AUTO-ROTATION');
    
    // Clear all intervals immediately
    for (let i = 1; i <= 10000; i++) {
      clearInterval(i);
    }
    
    // Override setInterval again to be sure
    const originalSetInterval = window.setInterval;
    window.setInterval = function(fn, delay, ...args) {
      const fnString = fn.toString().toLowerCase();
      if (fnString.includes('carousel') || fnString.includes('slide') || fnString.includes('autoplay') || fnString.includes('rotate')) {
        console.log('🚫 BLOCKED setInterval in component mount');
        return null;
      }
      return originalSetInterval.call(this, fn, delay, ...args);
    };
    
    console.log('✅ Auto-rotation prevention completed');
    
    // Initialize all animations when component mounts
    initAnimations();

    // Cleanup when component unmounts
    return () => {
      cleanupAnimations();
    };
  }, []);

  return (
    <>
    <main className="home-page flow">
      <HeroSection />

      <AnimatedGraphicSection />

      <ExpandingCalloutSection />

      <TaglineContentSection />

      <InteractiveStatsSection />

      <CarouselBackground slides={carouselSlides} />

      <TextRevealSection />
    </main>

    <FooterSection />
    </>
  );
}

export default LandingPage;
