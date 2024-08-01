import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

import impulso360Logo from 'public/images/logo.png'

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Servicios', href: '/' },
    { linkText: 'Quienes somos', href: '/' },
    { linkText: 'Contacto', href: '/' }
];

export function Header() {
    return (
        <nav className=" max-w-5xl mx-auto flex justify-center items-center font-Roboto bg-black text-white">
            <Link href="/">
                <Image src={impulso360Logo} alt="Netlify logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-6 ">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block transition hover:opacity-80 font-bold uppercase no-underline"
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
