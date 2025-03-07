
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import departureAnimation from '../../../../animation/departure.json';

interface BackgroundAnimationProps {
  className?: string;
}

const BackgroundAnimation = ({ className = '' }: BackgroundAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: departureAnimation
      });
      
      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute w-full h-full pointer-events-none opacity-20 z-0 ${className}`} 
    />
  );
};

export default BackgroundAnimation;
