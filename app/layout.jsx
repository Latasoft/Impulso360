import '../styles/globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import AOSInitializer from 'components/AOSInitializer';

export const metadata = {
    title: 'Impulso 360'
};

const RootLayout = ({children}) => { 
    return (
        <html lang="es" className={`scroll-smooth`}>
            <head>
            </head>
            <body className="antialiased text-white bg-black">
                <AOSInitializer />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
