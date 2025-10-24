import React, { useEffect, useState } from 'react';

function ScrollProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div
      className="fixed top-0 left-0 h-[1px] rounder-r-full bg-gray-300 z-50 transition-all duration-200"
      style={{ width: `${scrollWidth}%` }}
    />
  );
}

export default ScrollProgressBar;