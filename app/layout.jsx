import '../styles/globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
    title: 'Impulso 360'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi" className={`scroll-smooth`}>
            <head>
            </head>
            <body className="antialiased text-white bg-black">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
