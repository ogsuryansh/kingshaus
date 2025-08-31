import React from "react";

function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__chevron-holder">
          <svg 
            fill="none" 
            height="782" 
            viewBox="0 0 1896 782" 
            width="1896" 
            xmlns="http://www.w3.org/2000/svg" 
            className="footer__chevron"
          >
            <path 
              d="m688.1 212.455-.243-.162 256.411-211.645258 950.332 780.852258h-513l-436.367-358.026-.318-.262-.318.264-430.283 356.807h-512.92471l686.19271-567.399z" 
              stroke="#282828" 
              opacity="0.1"
            />
          </svg>
        </div>
        <div className="animatable-text footer__animatable-text animatable-text--footer">
          <p className="animatable-text__heading">Build<br />smarter</p>
        </div>
        <nav className="footer-nav footer__nav">
          <a href="/" aria-current="page" aria-label="home page" className="footer-nav__logo-link active">
            <div className="asset footer-nav__logo-asset asset--standard">
              <picture className="asset__image-holder footer-nav__logo-holder">
                <img 
                  src="/images/logos/kingshaus-dark.svg" 
                  alt="Kingshaus logo" 
                  className="asset__image footer-nav__logo"
                />
              </picture>
            </div>
          </a>
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a href="/build-smarter" className="footer-nav__link">
                <span className="footer-nav__text">Build Smarter</span>
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="/sustainability" className="footer-nav__link">
                <span className="footer-nav__text">Sustainability</span>
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="/about" className="footer-nav__link">
                <span className="footer-nav__text">About</span>
              </a>
            </li>
          </ul>
          <div className="button-block footer-nav__button-block button-block--standard">
            <a href="/contact" className="button button--footer-nav">
              <span className="button__text">Let's work together</span>
            </a>
          </div>
        </nav>
        <div className="footer-small-print footer__small-print">
          <a href="/privacy-policy" className="footer-small-print__link">
            <span className="footer-small-print__text">Privacy policy</span>
          </a>
          <p className="footer__copyright footer-small-print__text">
            © <time dateTime="2025">2025</time> Kingshaus
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
