import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: 'Espacio 360'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi"   className={`scroll-smooth`}>
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-black">
            <Header />
            {children}
            </body>
        </html>
    );
}
