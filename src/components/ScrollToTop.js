// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Przewiń do góry z animacją
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    
    // Natychmiastowe przewinięcie dla szybkości
    window.scrollTo(0, 0);
    
    // Dodatkowe płynne przewinięcie jeśli potrzeba
    setTimeout(() => {
      scrollToTop();
    }, 100);
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;