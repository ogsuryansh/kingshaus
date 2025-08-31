import React from 'react';
import { useParallax } from '../hooks/useParallax';

const Asset = ({ 
  asset, 
  className = '', 
  imgClassName = '', 
  pictureClassName = '',
  parallax = false,
  parallaxSpeed = 0.5,
  ...props 
}) => {
  const parallaxRef = useParallax(parallax ? parallaxSpeed : null);

  if (!asset || !asset.image) {
    return null;
  }

  const image = asset.image[0] || asset.image;
  
  return (
    <div 
      className={`asset ${parallax ? 'asset--with-parallax' : 'asset--standard'} ${className}`}
      {...props}
    >
      <picture className={`asset__image-holder ${pictureClassName}`}>
        {image.srcSet && (
          <source
            type="image/webp"
            srcSet={image.srcSet}
            sizes={image.sizes}
          />
        )}
        <img
          ref={parallax ? parallaxRef : null}
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.sizes}
          alt={image.alt || ''}
          className={`asset__image ${imgClassName}`}
          data-speed={parallax ? parallaxSpeed : null}
          loading={image.loading || 'lazy'}
        />
      </picture>
    </div>
  );
};

export default Asset;
