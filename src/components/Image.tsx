import React, { useState } from "react";

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
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
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
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
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
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={handleLoad}
      className={`transition-opacity duration-500 ease-out ${
        isLoaded ? "opacity-100" : "opacity-90"
      } ${className}`}
      style={style}
      {...props}
    />
  );
}
