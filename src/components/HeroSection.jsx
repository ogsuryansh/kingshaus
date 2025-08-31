import React from "react";

function HeroSection() {
  return (
    <section className="home-hero module hero home-hero module">
      <div className="home-hero__container container">
        <div className="home-hero__chevron-holder">
          <svg
            fill="none"
            height="782"
            viewBox="0 0 1896 782"
            width="1896"
            xmlns="http://www.w3.org/2000/svg"
            className="home-hero__chevron"
          >
            <path
              d="m688.1 212.455-.243-.162 256.411-211.645258 950.332 780.852258h-513l-436.367-358.026-.318-.262-.318.264-430.283 356.807h-512.92471l686.19271-567.399z"
              stroke="#ffffff"
              opacity="0.3"
            ></path>
          </svg>
        </div>
        <div className="asset home-hero__asset asset--standard">
          <video
            poster="/image/670a34.jpg"
            autoPlay
            playsInline
            muted
            loop
            preload="true"
            className="asset__video home-hero__video desktopVideoClass"
          >
            <source src="/video/5ef09e.mp4" type="video/mp4" />
          </video>
          <video
            poster="/image/670a34.jpg"
            autoPlay
            playsInline
            muted
            loop
            preload="true"
            className="asset__video home-hero__video home-hero__video--mobile"
          >
            <source src="/video/5ef09e.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="animatable-text home-hero__animatable-text animatable-text--home-hero">
          <h1 className="animatable-text__heading">
            Build
            <br />
            smarter
          </h1>
        </div>
        <p className="home-hero__text">
          Offsite production of world-leading homes for forward-thinking
          developers
        </p>
        <button className="home-hero__scroll-button">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-hero__arrow-icon"
          >
            <path
              d="M17 8L9 16L1 8"
              stroke="white"
              strokeWidth="2"
              className="home-hero__arrow-chevron"
            ></path>
            <path
              d="M9.17407 1.56519L9.00016 16"
              stroke="white"
              strokeWidth="2"
              className="home-hero__arrow-line"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
