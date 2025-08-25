import React, { useState, useRef, useEffect } from 'react';

const OptimizedVideo = ({ 
  mp4Src, 
  webmSrc, 
  posterSrc, 
  className, 
  onLoad, 
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const handleLoadedData = () => {
    setIsLoaded(true);
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, but video is ready
        setIsLoaded(true);
        setIsLoading(false);
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading video...</p>
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className={`${className} transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        poster={posterSrc}
        preload="metadata"
        {...props}
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        {mp4Src && <source src={mp4Src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>

      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-lg font-medium">Video unavailable</p>
            <p className="text-sm opacity-75">Please refresh the page</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OptimizedVideo;
