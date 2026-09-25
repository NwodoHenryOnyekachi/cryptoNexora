import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface RevealProps {
  children: ReactNode;
  variant?: 'up' | 'scale' | 'left' | 'right';
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'span';
}

/**
 * Scroll-triggered fade/slide/scale reveal. Pure CSS transitions driven by
 * IntersectionObserver, so it stays dependency-free and cheap to render.
 */
export default function Reveal({ children, variant = 'up', delay = 0, className = '', style, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = variant === 'scale' ? 'reveal-scale' : variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : 'reveal';
  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`${revealClass}${visible ? ' reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms', ...style }}
    >
      {children}
    </Tag>
  );
}
