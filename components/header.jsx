"use client";
import Image from 'next/image';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

import impulso360Logo from 'public/images/logob.png'

const navItems = [
    { linkText: 'Inicio', href: '#inicio' },
    { linkText: 'Servicios', href: '#serviciosIntegrales' },
    { linkText: 'Quienes somos', href: '#porQueNosotros' },
    { linkText: 'Contacto', href: '#contacto' }
];

export function Header() {
    useEffect(() => {
      AOS.init({
        duration: 1200,
      });
    }, []);


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const theHeight = window.innerHeight * 0.618;
      if (window.scrollY >= theHeight) {
        navbar.classList.remove('-translate-y-full');
        navbar.classList.add('translate-y-0');
      } else {
        navbar.classList.remove('translate-y-0');
        navbar.classList.add('-translate-y-full');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <nav id="navbar" className="border-b-2 border-solid border-white border-opacity-30 fixed top-0 left-0 z-50 w-full font-Roboto py-3 bg-black bg-opacity-70 text-white transition-transform transform -translate-y-full ease-in-out duration-[618ms]">

            {!!navItems?.length && (
                <ul className=" max-w-5xl mx-auto flex flex-wrap gap-x-8 justify-center items-center">
                    <li>
                       
                            <Image src={impulso360Logo} className=" align-middle w-auto md:h-8 h-0 opacity-80 " alt="Netlify logo" />
                        
                    </li>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block text-sm lg:text-lg transition opacity-80 font-bold uppercase no-underline hover:text-[#fc27aa]"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
