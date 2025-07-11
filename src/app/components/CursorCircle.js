'use client';

import { useEffect, useState } from 'react';

export default function CursorCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:grid border border-indigo-400 place-content-center"
      style={{
        top: position.y - 10,
        left: position.x - 10,
        width: 30,
        height: 30,
        borderRadius: '50%',
        position: 'fixed',
        transition: 'transform 0.1s ease-out',
      }}
    >
    </div>
  );
}
