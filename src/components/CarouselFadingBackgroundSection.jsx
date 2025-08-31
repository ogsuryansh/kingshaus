import React from "react";

function CarouselFadingBackgroundSection() {
  return (
    <section className="carousel-fading-background module home-page__carousel-fading-background">
      {/* Background images positioned first (bottom to closer effect) */}
      <div className="asset carousel-fading-background__asset asset--with-parallax carousel-fading-background__asset--active">
        <picture className="asset__image-holder carousel-fading-background__image-holder carousel-fading-background__image-holder--desktop">
          <source
            type="image/webp"
            srcSet="/image/20719e.webp 374w, /image/bc16c9.webp 413w, /image/8d74e1.webp 570w, /image/7139cb.webp 767w, /image/81a990.webp 1023w, /image/7139cb.webp 1199w, /image/20719e.webp 1365w, /image/bc16c9.webp 1439w, /image/7139cb.webp 1536w, /image/7139cb.webp 1599w"
            sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
          />
          <img
            src="/image/20719e.webp"
            srcSet="/image/20719e.webp 374w, /image/bc16c9.webp 413w, /image/8d74e1.webp 570w, /image/7139cb.webp 767w, /image/81a990.webp 1023w, /image/7139cb.webp 1199w, /image/20719e.webp 1365w, /image/bc16c9.webp 1439w, /image/7139cb.webp 1536w, /image/20719e.webp 1599w"
            sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
            alt="an overhead view of a dense forest"
            className="asset__image carousel-fading-background__image"
            data-speed="0.4"
            loading="lazy"
          />
        </picture>
        <picture className="asset__image-holder carousel-fading-background__image-holder carousel-fading-background__image-holder--mobile">
          <source
            type="image/webp"
            srcSet="/image/20719e.webp 374w, /image/bc16c9.webp 413w, /image/8d74e1.webp 570w, /image/7139cb.webp 767w, /image/81a990.webp 1023w, /image/7139cb.webp 1199w, /image/20719e.webp 1365w, /image/bc16c9.webp 1439w, /image/7139cb.webp 1536w, /image/20719e.webp 1599w"
            sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
          />
          <img
            src="/image/20719e.webp"
            srcSet="/image/20719e.webp 374w, /image/bc16c9.webp 413w, /image/8d74e1.webp 570w, /image/7139cb.webp 767w, /image/81a990.webp 1023w, /image/7139cb.webp 1199w, /image/20719e.webp 1365w, /image/bc16c9.webp 1439w, /image/7139cb.webp 1536w, /image/20719e.webp 1599w"
            sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
            alt="an overhead view of a dense forest"
            className="asset__image carousel-fading-background__image"
            data-speed="0.4"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="asset carousel-fading-background__asset asset--with-parallax">
        <picture className="asset__image-holder carousel-fading-background__image-holder carousel-fading-background__image-holder--desktop">
          <source
            type="image/webp"
            srcSet="/image/bc16c9.webp 374w, /image/8d74e1.webp 413w, /image/7139cb.webp 570w, /image/81a990.webp 767w, /image/20719e.webp 1023w, /image/bc16c9.webp 1199w, /image/8d74e1.webp 1365w, /image/7139cb.webp 1439w, /image/81a990.webp 1536w, /image/81a990.webp 1599w"
            sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
          />
          <img
            src="/image/bc16c9.webp"
            srcSet="/image/bc16c9.webp 374w, /image/8d74e1.webp 413w, /image/7139cb.webp 570w, /image/81a990.webp 767w, /image/20719e.webp 1023w, /image/bc16c9.webp 1199w, /image/8d74e1.webp 1365w, /image/7139cb.webp 1439w, /image/81a990.webp 1536w, /image/bc16c9.webp 1599w"
            sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
            alt="a small bird perching on a branch"
            className="asset__image carousel-fading-background__image"
            data-speed="0.4"
            loading="lazy"
          />
        </picture>
        <picture className="asset__image-holder carousel-fading-background__image-holder carousel-fading-background__image-holder--mobile">
          <source
            type="image/webp"
            srcSet="/image/8d74e1.webp 374w, /image/7139cb.webp 413w, /image/81a990.webp 570w, /image/20719e.webp 767w, /image/bc16c9.webp 1023w, /image/8d74e1.webp 1199w, /image/7139cb.webp 1365w, /image/81a990.webp 1439w, /image/20719e.webp 1536w, /image/20719e.webp 1599w"
            sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
          />
          <img
            src="/image/8d74e1.webp"
            srcSet="/image/8d74e1.webp 374w, /image/7139cb.webp 413w, /image/81a990.webp 570w, /image/20719e.webp 767w, /image/bc16c9.webp 1023w, /image/8d74e1.webp 1199w, /image/7139cb.webp 1365w, /image/81a990.webp 1439w, /image/20719e.webp 1536w, /image/8d74e1.webp 1599w"
            sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
            alt="a small bird perching on a branch"
            className="asset__image carousel-fading-background__image"
            data-speed="0.4"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Content positioned after images (bottom to closer effect) */}
      <div className="carousel-fading-background__container container">
        <div className="carousel-fading-background__content-holder" data-speed="0.4">
          <div className="carousel-fading-background__carousel gsap-carousel">
            <div className="gsap-carousel-wrapper carousel-fading-background__wrapper">
              <div className="gsap-carousel-slide carousel-fading-background__text-slide">
                <h2 className="carousel-fading-background__slide-heading">
                  Reducing our carbon footprint
                </h2>
                <div className="text-block carousel-fading-background__slide-text">
                  <p>
                    Our homes capture and store atmospheric carbon in their
                    timber frames, so we can lower the carbon footprint of
                    home construction by 80%.
                  </p>
                </div>
              </div>
              <div className="gsap-carousel-slide carousel-fading-background__text-slide">
                <h2 className="carousel-fading-background__slide-heading">
                  Responsible FSC‑certified materials
                </h2>
                <div className="text-block carousel-fading-background__slide-text">
                  <p>
                    The forests we source from preserve biological diversity
                    and benefit the lives of local people and workers.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="carousel-fading-background__navigation">
              <button
                className="carousel-fading-background__button carousel-fading-background__button--prev"
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
                className="carousel-fading-background__button carousel-fading-background__button--next"
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
}

export default CarouselFadingBackgroundSection;
