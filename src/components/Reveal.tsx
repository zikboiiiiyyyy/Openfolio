import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'fade';

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
};

export function Reveal({ children, className = '', variant = 'up', delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!element || reduceMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;
  const classes = ['reveal', `reveal--${variant}`, isVisible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={elementRef} className={classes} style={style}>
      {children}
    </div>
  );
}
