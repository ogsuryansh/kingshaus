import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import OptimizedVideo from '../Components/OptimizedVideo';
import backgroundVideo from '../assets/background.mp4';
import videoPoster from '../assets/video-poster.svg';

const AnimatedText = ({ text, className, delay = 0 }) => {
  const characters = text.split('');
  
  return (
    <div className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: delay + (index * 0.1),
            ease: "easeOut"
          }}
          style={{ 
            display: 'inline-block',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

const Home = () => {
  const nextSectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoLoad = () => {
    // Video loaded successfully
  };

  const handleVideoError = () => {
    // Video failed to load
  };

  const getLayerTransform = (layerIndex, totalLayers) => {
    const staggerDelay = 0.08;
    const layerProgress = Math.max(0, (scrollY - layerIndex * staggerDelay) / (1 - (totalLayers - 1) * staggerDelay));
    
    const baseOffset = 40;
    const xOffset = layerProgress * baseOffset * (layerIndex + 1) * 0.866;
    const yOffset = layerProgress * baseOffset * (layerIndex + 1) * 0.5;
    
    return {
      x: xOffset,
      y: yOffset,
      opacity: Math.min(1, layerProgress * 1.5)
    };
  };

  const wallPaths = [
    {
      paths: [
        "M0 0H341V526H0V0Z",
        "M200 150H300V250H200V150Z"
      ]
    },
    {
      paths: [
        "M0 0H341V526H0V0Z"
      ]
    },
    {
      paths: [
        "M0 0H341V526H0V0Z",
        "M50 50H291V476H50V50Z",
        "M50 50H291V263H50V50Z",
        "M50 263H291V476H50V263Z",
        "M100 50V476",
        "M150 50V476",
        "M200 50V476",
        "M250 50V476"
      ]
    },
    {
      paths: [
        "M0 0H341V526H0V0Z"
      ]
    },
    {
      paths: [
        "M0 0H341V526H0V0Z",
        "M60 60H281V466H60V60Z",
        "M60 60H281V263H60V60Z",
        "M60 263H281V466H60V263Z",
        "M110 60V466",
        "M160 60V466",
        "M210 60V466"
      ]
    },
    {
      paths: [
        "M0 0H341V526H0V0Z"
      ]
    }
  ];

  const renderSVGLayer = (layerIndex) => {
    const transform = getLayerTransform(layerIndex, wallPaths.length);
    const layer = wallPaths[layerIndex];
    
    return (
      <svg
        key={layerIndex}
        width="341"
        height="526"
        viewBox="0 0 341 526"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute transition-all duration-100"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px)`,
          opacity: transform.opacity
        }}
      >
        {layer.paths.map((path, pathIndex) => (
          <path
            key={pathIndex}
            d={path}
            fill="white"
            stroke="#1C1C1B"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        ))}
        
        <defs>
          <pattern id={`dots-${layerIndex}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#1C1C1B" opacity="0.3"/>
          </pattern>
        </defs>
        
        <rect
          x="0"
          y="0"
          width="341"
          height="526"
          fill={`url(#dots-${layerIndex})`}
          opacity="0.6"
        />
      </svg>
    );
  };

  return (
    <div className="relative">
      <Header />
      
      <div className="relative md:sticky md:top-0 h-screen overflow-auto md:overflow-hidden">
        <OptimizedVideo
          mp4Src={backgroundVideo}
          posterSrc={videoPoster}
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
          onLoad={handleVideoLoad}
          onError={handleVideoError}
        />

        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative flex flex-col items-start justify-end min-h-screen px-6 pb-32">
          <div
            className="max-w-7xl ml-4 md:ml-16 lg:ml-24 animate-fade-in-up"
            style={{ 
              animation: 'fadeInUp 1s ease-out 0.5s both'
            }}
          >
            <div
              className="text-5xl md:text-7xl lg:text-[90px] xl:text-[110px] font-semibold text-white mb-12 leading-[0.9] text-left uppercase tracking-[0.1em]"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.15em',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="mb-2">
                <AnimatedText 
                  text="BUILD" 
                  delay={0.8}
                />
              </div>
              <AnimatedText 
                text="SMARTER" 
                delay={1.4}
              />
            </div>

            <p
              className="text-sm md:text-base text-white/90 max-w-2xl uppercase tracking-[1px] leading-relaxed"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4)',
                animation: 'fadeInUp 1s ease-out 2.2s both'
              }}
            >
              OFFSITE PRODUCTION OF WORLD-LEADING HOMES FOR FORWARD-THINKING DEVELOPERS
            </p>
          </div>
        </div>

        <div className="absolute bottom-20 left-4 md:left-8 z-20">
          <button
            onClick={scrollToNextSection}
            className="relative group hover:scale-105 active:scale-95 transition-transform duration-200"
            style={{ 
              animation: 'fadeInUp 0.8s ease-out 2.8s both'
            }}
          >
            
            <div className="border-2 border-white rounded-full p-2 bg-black/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div ref={nextSectionRef} className="relative min-h-screen bg-white overflow-hidden">
        <div ref={containerRef} className="relative min-h-screen overflow-hidden">
          <div className="container mx-auto px-6 py-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen relative overflow-hidden">
              
              <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
                <div className="relative transform rotateX(60deg) rotateZ(-30deg) scale-75 md:scale-90 overflow-hidden">
                  <div className="relative w-[341px] h-[526px] overflow-hidden">
                    {wallPaths.map((_, index) => renderSVGLayer(index))}
                  </div>
                </div>
              </div>

              <div
                className="space-y-8 overflow-hidden animate-fade-in-left"
                style={{ 
                  animation: 'fadeInLeft 0.8s ease-out both'
                }}
              >
                <h2 
                  className="text-4xl md:text-5xl font-bold text-black leading-tight hover:scale-105 hover:translate-x-2 transition-transform duration-300" 
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  A better, faster way to build homes
                </h2>
                
                <p 
                  className="text-lg text-black/80 leading-relaxed max-w-lg hover:translate-x-2 transition-transform duration-300" 
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  By pre-constructing our homes offsite, we save valuable resources including time, energy, and manpower. This maximises efficiency, reduces costs and guarantees their quality.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <a 
                    href="#partner"
                    className="text-black font-medium underline underline-offset-4 hover:no-underline hover:translate-x-4 hover:scale-105 transition-all duration-300 text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    PARTNER WITH US
                  </a>
                  <a 
                    href="#learn"
                    className="text-black font-medium underline underline-offset-4 hover:no-underline hover:translate-x-4 hover:scale-105 transition-all duration-300 text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>

            <div
              className="text-center mt-16 animate-fade-in"
              style={{ 
                animation: 'fadeIn 0.8s ease-out 0.5s both'
              }}
            >
              <p className="text-sm text-black/50 uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                Scroll to explode • Hover to animate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
