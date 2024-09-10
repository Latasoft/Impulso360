
import Link from 'next/link';
import Scrollhandling from 'components/Scrollhandling';

import impulso360Logo from 'public/images/logob.png'

const navItems = [
    { linkText: 'Inicio', href: '#inicio' },
    { linkText: 'Servicios', href: '#serviciosIntegrales' },
    { linkText: 'Quienes somos', href: '#porQueNosotros' },
    { linkText: 'Contacto', href: '#contacto' }
];

export function Header() {

    return (
        <nav id="navbar" className="hidden opacity-0 border-b-2 border-solid border-white border-opacity-30 fixed top-0 left-0 z-50 w-full font-Roboto py-3 bg-black bg-opacity-40 backdrop-blur-md text-white transition-all -translate-y-full ease-in-out duration-[618ms]">
          <Scrollhandling />
            {!!navItems?.length && (
                <ul className=" max-w-5xl mx-auto flex flex-wrap gap-x-8 justify-center items-center">
                    <li>
                      <img src={impulso360Logo.src} className=" align-middle w-auto md:h-8 h-0 opacity-80 " alt="Netlify logo" /></li>
                    {navItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}
                            className="inline-block text-sm lg:text-lg transition opacity-80 font-bold uppercase no-underline hover:text-[#fc27aa]">
                            {item.linkText}
                      </Link>
                    </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
