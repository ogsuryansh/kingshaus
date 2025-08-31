import React from "react";

function ExpandingCalloutSection() {
  return (
    <section className="expanding-callout module home-page__expanding-callout">
      <div className="expanding-callout__container container">
        <h2 className="expanding-callout__heading expanding-callout__heading--under">
          Building on 75 years experience
        </h2>
      </div>
      <div className="expanding-callout__clipped-block container">
        <div className="asset expanding-callout__asset asset--with-parallax">
          <picture className="asset__image-holder expanding-callout__image-holder expanding-callout__image-holder--desktop">
            <source
              type="image/webp"
              srcSet="/image/ef9ee7.webp 374w, /image/9061de.webp 413w, /image/821168.webp 570w, /image/40e78c.webp 767w, /image/5a1ff5.webp 1023w, /image/81a990.webp 1199w, /image/a09935.webp 1365w, /image/6ca395.webp 1439w, /image/81a990.webp 1536w, /image/81a990.webp 1599w"
              sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
            />
            <img
              src="/image/3479c3.jpeg"
              srcSet="/image/2898cb.jpeg 374w, /image/7ff382.jpeg 413w, /image/24e4d4.jpeg 570w, /image/550dfe.jpeg 767w, /image/696541.jpeg 1023w, /image/db2235.jpeg 1199w, /image/fbf5de.jpeg 1365w, /image/0102ee.jpeg 1439w, /image/daafe5.jpeg 1536w, /image/3479c3.jpeg 1599w"
              sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
              alt="a person measuring some wood"
              className="asset__image expanding-callout__image"
              data-speed="0.3"
              loading="lazy"
            />
          </picture>
          <picture className="asset__image-holder expanding-callout__image-holder expanding-callout__image-holder--mobile">
            <source
              type="image/webp"
              srcSet="/image/bb7139.webp 374w, /image/14c759.webp 413w, /image/1290a8.webp 570w, /image/3933e1.webp 767w, /image/6f75ad.webp 1023w, /image/060e55.webp 1199w, /image/0c4c61.webp 1365w, /image/f7b888.webp 1439w, /image/74957f.webp 1536w, /image/060e55.webp 1599w"
              sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
            />
            <img
              src="/image/2efde3.jpeg"
              srcSet="/image/4d1147.jpeg 374w, /image/fdb85a.jpeg 413w, /image/03e1fc.jpeg 570w, /image/d59380.jpeg 767w, /image/ffab88.jpeg 1023w, /image/54ac78.jpeg 1199w, /image/d3cf43.jpeg 1365w, /image/d017a2.jpeg 1439w, /image/fadaf2.jpeg 1536w, /image/2efde3.jpeg 1599w"
              sizes="(max-width: 374px) 374px, (max-width: 413px) 413px, (max-width: 570px) 570px, (max-width: 767px) 767px, (max-width: 1023px) 1023px, (max-width: 1199px) 1199px, (max-width: 1365px) 1365px, (max-width: 1439px) 1439px, (max-width: 1536px) 1536px, 1599px"
              alt="a person measuring some wood"
              className="asset__image expanding-callout__image"
              data-speed="0.3"
              loading="lazy"
            />
          </picture>
        </div>
        <span
          aria-hidden="true"
          className="expanding-callout__heading expanding-callout__heading--over"
        >
          Building on 75 years experience
        </span>
      </div>
    </section>
  );
}

export default ExpandingCalloutSection;
