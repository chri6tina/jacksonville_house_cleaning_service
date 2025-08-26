'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  style,
  ...props
}: OptimizedImageProps) {
  // Handle external images
  const isExternalImage = src.startsWith('http');
  
  if (isExternalImage) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        style={style}
        {...props}
      />
    );
  }

  // For local images, use Next.js Image component
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        sizes={sizes}
        style={style}
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      sizes={sizes}
      style={style}
      {...props}
    />
  );
}

// Specialized image components for common use cases
export function HeroImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className={className}
      priority={true}
      quality={90}
      sizes="100vw"
    />
  );
}

export function ThumbnailImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={400}
      height={300}
      className={className}
      quality={80}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
    />
  );
}

export function IconImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={64}
      height={64}
      className={className}
      quality={90}
      sizes="64px"
    />
  );
}
