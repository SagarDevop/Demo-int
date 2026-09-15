'use client';

import React, { useState, useEffect, useRef } from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Image({
  src,
  alt,
  fill,
  priority,
  sizes,
  className = "",
  style,
  onLoad,
  onError,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If the browser already has the image in cache, complete is true immediately
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Avoid leaving image trapped behind indefinite loading shimmer on error
    setIsLoaded(true);
    if (onError) {
      onError(e);
    }
  };

  if (fill) {
    return (
      <>
        {/* Skeleton shimmer layer while image is loading */}
        {!isLoaded && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#EFECE6] via-[#F8F6F2] to-[#EFECE6] bg-[length:200%_100%] animate-shimmer" />
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          style={style}
          {...props}
        />
      </>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
      className={`transition-opacity duration-500 ease-out ${
        isLoaded ? "opacity-100" : "opacity-90"
      } ${className}`}
      style={style}
      {...props}
    />
  );
}
