import { useRef, useState, useEffect } from 'react';
import { colors } from '../theme/colors';

const HorizontalScroll = ({ title, children }) => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [children]);

  return (
    <section className="py-16 bg-section-bg w-full flex flex-col items-center gap-8">
      <div className="w-full">
        <h2 className="text-5xl font-bold mb-12 text-gray-800 text-center shine-text">{title}</h2>
      </div>
      <div
        ref={containerRef}
        className="w-full overflow-x-auto hide-scrollbar pb-4"
      >
        <div
          ref={scrollRef}
          className="flex gap-6 items-stretch justify-center min-w-max mx-auto"
          style={{ scrollBehavior: 'smooth' }}
        >
          {children}
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="w-full max-w-4xl px-8">
        <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{
              width: `${scrollProgress}%`,
              background: `linear-gradient(90deg, ${colors.theme.blue} 0%, ${colors.theme.mint} 50%,
              ${colors.theme.green} 100%)`,
              boxShadow: '0 0 10px rgba(68, 188, 255, 0.5)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
            opacity-30 animate-shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
