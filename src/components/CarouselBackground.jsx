import React, { useState, useEffect } from 'react';
import Asset from './Asset';
import { gsap } from 'gsap';

const CarouselBackground = ({ slides = [], className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animate slide transitions when currentSlide changes
  useEffect(() => {
    if (slides.length === 0) return;

    // Animate the slide change with GSAP
    gsap.to('.carousel-fading-background__asset', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    });

    gsap.to(`.carousel-fading-background__asset:nth-child(${currentSlide + 1})`, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.in',
      delay: 0.2
    });

    // Animate text content
    gsap.fromTo('.carousel-fading-background__text-slide', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

  }, [currentSlide, slides.length]);

  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      setCurrentSlide(slideIndex);
    }
  };

  const goToNext = () => {
    goToSlide(currentSlide + 1);
  };

  const goToPrev = () => {
    goToSlide(currentSlide - 1);
  };

  return (
    <section className={`carousel-fading-background module ${className}`}>
      {/* Background images positioned first (bottom to closer effect) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`asset carousel-fading-background__asset asset--with-parallax ${
            index === currentSlide ? 'carousel-fading-background__asset--active' : ''
          }`}
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <Asset
            asset={slide.asset}
            imgClassName="carousel-fading-background__image"
            pictureClassName="carousel-fading-background__image-holder carousel-fading-background__image-holder--desktop"
            parallax={true}
            parallaxSpeed={0.4}
          />
          <Asset
            asset={slide.asset}
            imgClassName="carousel-fading-background__image"
            pictureClassName="carousel-fading-background__image-holder carousel-fading-background__image-holder--mobile"
            parallax={true}
            parallaxSpeed={0.4}
          />
        </div>
      ))}

      {/* Content positioned after images (bottom to closer effect) */}
      <div className="carousel-fading-background__container container">
        <div className="carousel-fading-background__content-holder" data-speed="0.4">
          <div className="carousel-fading-background__carousel gsap-carousel">
            <div className="gsap-carousel-wrapper carousel-fading-background__wrapper">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="gsap-carousel-slide carousel-fading-background__text-slide"
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <h2 className="carousel-fading-background__slide-heading">
                    {slide.heading}
                  </h2>
                  <div className="text-block carousel-fading-background__slide-text">
                    <p>{slide.text}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Navigation */}
            <div className="carousel-fading-background__navigation">
              <button
                className={`carousel-fading-background__button carousel-fading-background__button--previous ${
                  currentSlide === 0 ? 'carousel-fading-background__button--disabled' : ''
                }`}
                onClick={() => {
                  console.log('🖱️ Previous button clicked!');
                  console.log('🖱️ Button state - currentSlide:', currentSlide, 'disabled:', currentSlide === 0);
                  goToPrev();
                }}
                disabled={currentSlide === 0}
                aria-label="Previous slide"
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="carousel-fading-background__button-icon"
                >
                  <path
                    d="M8.76667 1.1499L2.23333 7.68324L8.76667 14.2166"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </button>
              <button
                className={`carousel-fading-background__button carousel-fading-background__button--next ${
                  currentSlide === slides.length - 1 ? 'carousel-fading-background__button--disabled' : ''
                }`}
                onClick={() => {
                  console.log('🖱️ Next button clicked!');
                  console.log('🖱️ Button state - currentSlide:', currentSlide, 'disabled:', currentSlide === slides.length - 1);
                  goToNext();
                }}
                disabled={currentSlide === slides.length - 1}
                aria-label="Next slide"
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="carousel-fading-background__button-icon"
                >
                  <path
                    d="M1.23333 14.8501L7.76666 8.31676L1.23333 1.78343"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselBackground;
