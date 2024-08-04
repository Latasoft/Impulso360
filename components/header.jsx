import Image from 'next/image';
import Link from 'next/link';

import impulso360Logo from 'public/images/logo.png'

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Servicios', href: '/' },
    { linkText: 'Quienes somos', href: '/' },
    { linkText: 'Contacto', href: '/' }
];

export function Header() {
    return (
        <nav className=" fixed top-0 left-0 z-50 w-full font-Roboto py-6 bg-black bg-opacity-70 text-white">

            {!!navItems?.length && (
                <ul className=" max-w-5xl mx-auto flex flex-wrap gap-x-6 justify-center items-center">
                    <li>
                        <Link href="/">
                            <Image src={impulso360Logo} className=" align-middle w-auto lg:h-11 md:h-8 h-0" alt="Netlify logo" />
                        </Link>
                    </li>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block text-sm lg:text-lg transition hover:opacity-80 font-bold uppercase no-underline hover:text-[#fc27aa]"
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
