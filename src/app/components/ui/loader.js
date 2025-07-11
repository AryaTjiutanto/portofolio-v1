'use client';
import { useEffect, useRef, useState } from 'react';

export default function LoaderWrapper() {
  const loaderRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleReady = () => {
      setTimeout(() => {
        if (loaderRef.current) {
          loaderRef.current.classList.remove('opacity-100');
          loaderRef.current.classList.add('opacity-0');
        }

        setTimeout(() => {
          setIsHidden(true);
        }, 300);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleReady();
    } else {
      window.addEventListener('DOMContentLoaded', handleReady);
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', handleReady);
    };
  }, []);

  if (isHidden) return null;

  return (
    <section
      ref={loaderRef}
      className="fixed w-full h-full inset-0 flex items-center justify-center bg-neutral-900 text-white text-xl transition-opacity duration-300 p-5 text-center opacity-100 z-50"
    >
      <div className="w-fit flex flex-col items-center justify-center gap-5">
        <img src="/logo.png" className="w-16 h-16" alt="Logo" />
        <span className="font-mono text-xs md:text-sm bg-neutral-900 text-green-400 px-3 py-1 rounded">
          console.<span className="text-blue-400">log</span>(
          <span className="text-yellow-300">"Hello, bright and wonderful person"</span>
          );
        </span>
      </div>
    </section>
  );
}
