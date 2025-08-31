import React from "react";

function AnimatedGraphicSection() {
  return (
    <section
      id="build-better"
      className="animated-graphic module home-page__animated-graphic"
    >
      <div className="animated-graphic__container container">
        <div className="animated-graphic__graphic-holder">
          <svg
            width="341"
            height="526"
            viewBox="0 0 341 526"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animated-graphic__graphic animated-graphic__graphic--1"
          >
            <path
              d="M0.25 497.01L3.16 498.66V167.49L0.25 165.84V497.01Z"
              fill="white"
              stroke="#1C1C1B"
              strokeWidth="0.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M293.66 1.91L290.75 0.25L0.25 165.84L3.16 167.49L293.66 1.91Z"
              fill="white"
              stroke="#1C1C1B"
              strokeWidth="0.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3.16016 167.49V498.66L293.66 333.07V1.91016L3.16016 167.49ZM212.32 286.71L84.5002 359.57V213.86L212.32 141V286.72V286.71Z"
              fill="white"
              stroke="#1C1C1B"
              strokeWidth="0.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M84.4902 356.26L209.41 285.06L212.31 286.71L84.4902 359.57V356.26Z"
              fill="white"
              stroke="#1C1C1B"
              strokeWidth="0.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M209.41 142.65L212.32 141L212.31 286.71L209.41 285.06V142.65Z"
              fill="white"
              stroke="#1C1C1B"
              strokeWidth="0.5"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className="content-area animated-graphic__content-area">
          <div className="heading content-area__heading h2">
            <h2 className="heading__heading heading__heading--h2">
              A better, faster way to build homes
            </h2>
          </div>
          <div className="text-block content-area__text-block">
            By pre-constructing our homes offsite, we save valuable resources
            including time, energy, and manpower. This maximises efficiency,
            reduces costs and guarantees their quality.
          </div>
          <div className="button-block content-area__button-block button-block--standard">
            <a href="/contact" className="button button--link-green">
              <span className="button__text">Partner with us</span>
            </a>
            <a href="/build-smarter" className="button button--link-green">
              <span className="button__text">Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimatedGraphicSection;
