import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const hoverableElements = ['a', 'button', 'h1', 'h2', 'h3', '.hover-target', 'img'];

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Initial GSAP setup
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // Mouse move animation
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursor, {
        backgroundColor: 'rgba(147, 51, 234, 0.5)',
        duration: 0.3
      });
      gsap.to(follower, {
        borderColor: 'rgba(147, 51, 234, 0.5)',
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(cursor, {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        duration: 0.3
      });
      gsap.to(follower, {
        borderColor: 'rgba(255, 255, 255, 0.8)',
        duration: 0.3
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    
    hoverableElements.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverableElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      });
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-4 h-4 bg-white/80 rounded-full mix-blend-difference transition-transform duration-300 ease-out"
      />
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-50 w-10 h-10 border border-white/80 rounded-full mix-blend-difference transition-transform duration-300 ease-out"
      />
    </>
  );
};

export default Cursor; 