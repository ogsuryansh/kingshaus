# Parallax System Documentation

## Overview

The parallax system has been completely cleaned up and optimized for better performance and maintainability. The new system uses GSAP ScrollTrigger for smooth, performant parallax effects.

## Components

### 1. useParallax Hook (`src/hooks/useParallax.js`)

A React hook that manages parallax effects for individual elements.

```jsx
import { useParallax } from '../hooks/useParallax';

const MyComponent = () => {
  const parallaxRef = useParallax(0.5); // 0.5 is the parallax speed
  
  return (
    <img 
      ref={parallaxRef}
      src="image.jpg" 
      alt="Parallax image" 
    />
  );
};
```

### 2. Asset Component (`src/components/Asset.jsx`)

A reusable component for displaying images with optional parallax effects.

```jsx
import Asset from './Asset';

<Asset
  asset={imageData}
  parallax={true}
  parallaxSpeed={0.8}
  className="my-custom-class"
  imgClassName="my-image-class"
/>
```

### 3. CarouselBackground Component (`src/components/CarouselBackground.jsx`)

A complete carousel component with background transitions and parallax effects.

```jsx
import CarouselBackground from './CarouselBackground';

const slides = [
  {
    asset: imageData1,
    heading: "Slide 1",
    text: "Description 1"
  },
  {
    asset: imageData2,
    heading: "Slide 2", 
    text: "Description 2"
  }
];

<CarouselBackground slides={slides} />
```

## CSS Classes

### Parallax Assets
- `.asset--with-parallax` - Applied to elements with parallax effects
- `.asset--standard` - Applied to elements without parallax effects

### Carousel
- `.carousel-fading-background__asset` - Background image container
- `.carousel-fading-background__asset--active` - Currently active background
- `.carousel-fading-background__content-holder` - Content overlay
- `.carousel-fading-background__button` - Navigation buttons

## Performance Optimizations

1. **GSAP ScrollTrigger**: Uses GSAP's optimized scroll handling instead of vanilla JavaScript
2. **Will-change**: CSS `will-change: transform` for better performance
3. **Transform3D**: Uses `transform: translateZ(0)` for hardware acceleration
4. **Cleanup**: Proper cleanup of ScrollTrigger instances to prevent memory leaks
5. **Throttled Updates**: Smooth scrubbing with `scrub: 1` for better performance

## Usage Examples

### Basic Parallax Image
```jsx
<div className="asset asset--with-parallax">
  <img 
    src="image.jpg" 
    data-speed="0.5"
    className="asset__image"
    alt="Parallax image"
  />
</div>
```

### Carousel with Parallax Backgrounds
```jsx
<CarouselBackground 
  slides={[
    {
      asset: { image: [{ src: "forest.jpg", alt: "Forest" }] },
      heading: "Reducing our carbon footprint",
      text: "Our homes capture and store atmospheric carbon..."
    },
    {
      asset: { image: [{ src: "bird.jpg", alt: "Bird" }] },
      heading: "Responsible FSC‑certified materials", 
      text: "The forests we source from preserve biological diversity..."
    }
  ]}
/>
```

## Migration from Old System

The old system had several issues:
- Debug borders (green, blue, orange, red, purple)
- Conflicting scroll event listeners
- Multiple parallax implementations
- Performance issues with unthrottled scroll events

The new system:
- ✅ Clean CSS without debug borders
- ✅ Single, optimized parallax implementation
- ✅ GSAP ScrollTrigger for smooth performance
- ✅ Proper cleanup and memory management
- ✅ React hooks for better integration
- ✅ Reusable components

## Dependencies

- GSAP (with ScrollTrigger plugin)
- React 16.8+ (for hooks)

## Browser Support

- Modern browsers with CSS transforms support
- IE11+ (with polyfills if needed)
