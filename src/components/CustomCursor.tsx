import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Three levels of springs for a trailing cyberpunk reticle effect
  const innerSpringConfig = { damping: 25, stiffness: 350, mass: 0.1 };
  const midSpringConfig = { damping: 30, stiffness: 180, mass: 0.5 };
  const slowSpringConfig = { damping: 35, stiffness: 90, mass: 1.0 };

  const innerX = useSpring(cursorX, innerSpringConfig);
  const innerY = useSpring(cursorY, innerSpringConfig);

  const midX = useSpring(cursorX, midSpringConfig);
  const midY = useSpring(cursorY, midSpringConfig);

  const slowX = useSpring(cursorX, slowSpringConfig);
  const slowY = useSpring(cursorY, slowSpringConfig);

  useEffect(() => {
    // Only enable on desktop/non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive-item') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';

      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Halo (Slow Spring) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-purple-500/30 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: slowX,
          y: slowY,
          boxShadow: isHovered 
            ? '0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 10px rgba(139, 92, 246, 0.2)' 
            : '0 0 0px rgba(139, 92, 246, 0)',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.6)' : 'rgba(139, 92, 246, 0.25)',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />

      {/* Middle Reticle Ring (Medium Spring) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-dashed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: midX,
          y: midY,
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovered ? 1.3 : 1,
          borderColor: isHovered ? 'rgba(6, 182, 212, 0.8)' : 'rgba(236, 72, 153, 0.6)',
          rotate: isHovered ? [0, 360] : 0,
        }}
        transition={
          isHovered 
            ? { rotate: { repeat: Infinity, duration: 3, ease: 'linear' } } 
            : { type: 'tween', ease: 'easeOut', duration: 0.2 }
        }
      />

      {/* Core Glowing Dot (Fast Spring) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: innerX,
          y: innerY,
          background: isHovered 
            ? 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)' 
            : 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
          boxShadow: isHovered 
            ? '0 0 12px #00f0ff, 0 0 20px #a855f7' 
            : '0 0 6px #ec4899, 0 0 10px #8b5cf6',
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovered ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
