import { Suspense, lazy, ComponentType } from 'react';

interface LazyLoadProps {
  fallback?: React.ReactNode;
}

// Default loading component
const DefaultFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-luxury-gold"></div>
  </div>
);

// Higher-order component for lazy loading
export function withLazyLoad<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: P) {
    return (
      <Suspense fallback={fallback || <DefaultFallback />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Lazy load wrapper component
export function LazyLoad({ 
  children, 
  fallback = <DefaultFallback /> 
}: { 
  children: React.ReactNode; 
  fallback?: React.ReactNode;
}) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}

// Image lazy loading component
export function LazyImage({ 
  src, 
  alt, 
  className = "", 
  ...props 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  [key: string]: any;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`lazy ${className}`}
      loading="lazy"
      {...props}
    />
  );
}

