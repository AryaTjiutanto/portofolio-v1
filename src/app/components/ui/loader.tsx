'use client';
import { useEffect, useState } from 'react';

export default function LoaderWrapper() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startFade = setTimeout(() => {
      setIsFading(true);
    }, 500);

    const removeLoader = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => {
      clearTimeout(startFade);
      clearTimeout(removeLoader);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <section
      className={`fixed inset-0 flex items-center justify-center bg-black text-white text-xl p-5 text-center z-50 transition-opacity duration-300 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-fit flex flex-col items-center justify-center gap-5">
        <img src="/logo.png" className="w-16 h-16" alt="Logo" />
        <span className="font-mono text-xs md:text-sm bg-neutral-900 text-green-400 px-3 py-1 rounded">
          console.<span className="text-blue-400">log</span>(
          <span className="text-yellow-300">
            "Hello, bright and wonderful people"
          </span>
          );
        </span>
      </div>
    </section>
  );
}