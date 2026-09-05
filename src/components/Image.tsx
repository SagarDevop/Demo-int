import React from "react";

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
  ...props
}: ImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        style={style}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={className}
      style={style}
      {...props}
    />
  );
}
