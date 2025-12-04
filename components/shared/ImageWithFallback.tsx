'use client';

import { useState } from 'react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackText,
  objectFit = 'cover',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`bg-secondary-200 flex items-center justify-center text-secondary-500 ${className || ''}`}
      >
        <span className="text-sm">
          {fallbackText || alt.charAt(0).toUpperCase() || '?'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ objectFit }}
      onError={() => setHasError(true)}
    />
  );
}

