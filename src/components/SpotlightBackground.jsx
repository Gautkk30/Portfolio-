import React, { useEffect, useState } from 'react';

export default function SpotlightBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 32px Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Subtle Mouse Radial Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-opacity duration-500 blur-[120px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(9, 9, 11, 0) 70%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
        }}
      />

      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />
    </div>
  );
}
