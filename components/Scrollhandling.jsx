"use client";
import { useEffect } from 'react';

const Scrollhandling = () => {

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById('navbar');
          navbar.classList.remove('hidden');
          const theHeight = window.innerHeight * 0.618;
          if (window.scrollY >= theHeight) {
            navbar.classList.remove('-translate-y-full','opacity-0');
            navbar.classList.add('translate-y-0','opacity-100');
          } else {
            navbar.classList.remove('translate-y-0', 'opacity-100');
            navbar.classList.add('-translate-y-full', 'opacity-0');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    

  return null;
};

export default Scrollhandling;
