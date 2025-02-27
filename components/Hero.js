import React, { useEffect, useRef } from 'https://esm.sh/react@18.3.1'
import { gsap } from 'https://esm.sh/gsap@3.12.5'
import { Code2, Cpu } from 'https://esm.sh/lucide-react@0.344.0'

// Exact same Hero component code from Hero.tsx
const Hero = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = gsap.utils.selector(headingRef.current)('.char');
    
    const tl = gsap.timeline();
    
    gsap.set(containerRef.current, { opacity: 0 });
    gsap.set(chars, { yPercent: 100, opacity: 0 });
    gsap.set(subtextRef.current, { opacity: 0, y: 20 });
    gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 });

    tl.to(containerRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    .to(chars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.02,
      ease: "back.out(1.7)"
    })
    .to(subtextRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    .to(buttonRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.6");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2;
      const yPos = (clientY / window.innerHeight - 0.5) * 2;

      gsap.to('.parallax-layer', {
        x: xPos * 20,
        y: yPos * 20,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block">{char}</span>
    ));
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        >
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video>
        <div className="parallax-layer absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 parallax-layer">
          <Code2 className="w-8 h-8 text-blue-500" />
          <Cpu className="w-8 h-8 text-purple-500" />
        </div>
        
        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight overflow-hidden">
          {splitText("I'm a ")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            {splitText("FULL-STACK DEVELOPER")}
          </span>
          {splitText(" & AI SOFTWARE ENGINEER")}
        </h1>
        
        <p ref={subtextRef} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Building intelligent, scalable, and secure web solutions
        </p>
        
        <button
          ref={buttonRef}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          <span className="relative z-10">Let's Work Together</span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default Hero; 