import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'flip-up'
  | 'fade';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  className = '',
  style = {},
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Compute transform based on animation type
  const getInitialTransform = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate3d(0, 36px, 0)';
      case 'fade-down':
        return 'translate3d(0, -36px, 0)';
      case 'fade-left':
        return 'translate3d(-40px, 0, 0)';
      case 'fade-right':
        return 'translate3d(40px, 0, 0)';
      case 'zoom-in':
        return 'scale(0.92)';
      case 'flip-up':
        return 'perspective(600px) rotateX(15deg) translate3d(0, 30px, 0)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const combinedStyle: CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal-container ${isVisible ? 'revealed' : ''} ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
}

/**
 * Animated number counter component for stats
 */
interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = '',
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {hasStarted ? count.toLocaleString() : '0'}
      {suffix}
    </span>
  );
}
