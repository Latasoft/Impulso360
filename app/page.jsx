
import Link from 'next/link';

import ServiciosBlock from 'components/serviciosblock'; 
import Clientesimagenes from 'components/Clientesimagenes';

import impulso360Logo from 'public/images/logob.png';
import anglesDown from 'public/images/angles-down.svg';

import porQueNosotros from 'public/images/porQueNosotros.webp';

import instagramIcono from 'public/images/instagram.png';
import telefonoIcono from 'public/images/telefono.png';
import correoIcono from 'public/images/email.png';

const pilaresBlocks = [
    { titulo: 'Enfoque Estratégico Personalizado', texto: 'Entendemos que cada negocio es único. Trabajamos contigo para comprender tus objetivos, identificar desafíos específicos y desarrollar estrategias de marketing digital a medida. No ofrecemos soluciones genéricas; creamos estrategias que se alinean con tu visión y metas empresariales.' },
    { titulo: 'Innovación y Adaptabilidad Continuas', texto: 'El marketing digital evoluciona constantemente. Nos comprometemos a mantenerte al tanto de las últimas tendencias y tecnologías. Nuestro equipo altamente capacitado se esfuerza por la innovación constante para asegurar que tu presencia en línea esté siempre a la par con las mejores prácticas y te dé una ventaja competitiva sostenible.' },
    { titulo: 'Resultados Medibles y Tangibles', texto: 'No nos conformamos con promesas vacías. Implementamos estrategias con datos y métricas concretas para asegurarnos de que cada campaña genere resultados tangibles.' }
];

const Page = () => {

    return (
        <main className={` relative text-white font-Roboto  bg-black`}>
        <div className={` fixed h-screen top-0 left-0 w-full `}>
            <video poster='images/portadaFondoVideo.png' className='object-cover object-center h-full w-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                <source src='images/portadaFondoVideo.mp4' type="video/mp4" />
            </video>
        </div>

            <section className={` h-screen relative w-full bg-cover bg-center bg-transparent overflow-hidden  `} id={`inicio`}>
                <div className={`  absolute top-0 left-0 w-full h-full bg-fucsiaAzulRatioFondo opacity-40 `} />
                <div className={` relative mx-auto flex flex-col w-full h-full items-center justify-center px-4`}>
                    <h2 data-aos-once="true" data-aos='fade-right' className={` max-w-5xl text-left w-full transition-all ease-in-out text-5xl md:text-6xl lg:text-7xl font-bold lg:my-0 opacity-80`}>En<img className={` inline-block h-16 md:h-20 lg:h-24 w-auto `}  src={impulso360Logo.src} alt='' /></h2>
                    <h3 data-aos-once="true" data-aos='fade-right' className={` font-RobotoCondensed max-w-5xl text-left w-full transition-all ease-in-out text-2xl md:text-3xl lg:text-4xl font-light lg:my-0 opacity-80 `}>comienza tu transformación digital hoy</h3>
                    <p data-aos-once="true" data-aos='fade-right' className={` max-w-5xl text-left w-full text-lg mt-3 md:mt-4 lg:mt-6 `}><Link className={` inline-block transition-all ease-in-out duration-200 text-white no-underline font-medium opacity-80 text-lg lg:text-xl hover:translate-y-1 `} href='#serviciosIntegrales' ><img className={` inline-block mr-3 h-5 w-auto `} src={anglesDown.src} alt='Angles Down' /> Conoce más aquí <img className={` inline-block ml-3 h-5 w-auto`} src={anglesDown.src} alt='Angles Down' /></Link></p>
                </div>
            </section>
            
            <section className={`relative pt-16 bg-black bg-opacity-50 backdrop-blur-md `} id={`serviciosIntegrales`}>
                <h3 className={` max-w-5xl mx-auto transition-all ease-in-out text-3xl lg:text-4xl font-semibold mb-8 text-center uppercase font-RobotoCondensed opacity-80`}>Servicios integrales</h3>
                <ServiciosBlock />
            </section>

            <section className={` relative w-full bg-white bg-opacity-10 overflow-hidden `} id={`porQueNosotros`}>

                <div className={` relative max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 px-4 md:px-0 pt-16 `}>
                    <div className={` p-4 bg-white bg-opacity-30 `}>
                        <h3 className={` text-[#b10c72] transition-all ease-in-out text-3xl lg:text-4xl font-semibold font-RobotoCondensed mx-4 mb-8 mt-4 `}>¿Por qué nosotros?</h3>
                        <ul className={` list-disc transition-all ease-in-out text-lg ml-8 mr-4 `}>
                            <li data-aos-once="true" data-aos='fade-right' className={` my-4 `}>Nuestro servicio incluye la implementación de un CRM de última generación que optimiza la gestión de leads y seguimientos. Con esta herramienta, podrás mejorar la eficiencia de tu empresa y aumentar tus oportunidades de venta.</li>
                            <li data-aos-once="true" data-aos='fade-right' className={` my-4 `}>Colaboramos estrechamente contigo para comprender tus metas, identificar desafíos específicos y crear estrategias de marketing digital personalizadas.</li>
                            <li data-aos-once="true" data-aos='fade-right' className={` my-4 `}>No brindamos soluciones estándar, sino que diseñamos estrategias que se ajustan de forma precisa a tu visión y objetivos comerciales.</li>
                            <li data-aos-once="true" data-aos='fade-right' className={` my-4 `}>Nos dedicamos a potenciar el crecimiento de tu empresa a través de servicios integrales de marketing digital y la implementación estratégica de CRM.</li>
                        </ul>
                    </div>
                    <div className={`flex items-center justify-center p-4 text-center bg-white bg-opacity-30 `}>
                        <img  data-aos-once="true" data-aos='flip-left' className={` mx-auto `} src={porQueNosotros.src} alt='' />
                    </div>
                </div>
                <div className={` relative px-4 pt-16`}>
                    <p data-aos-once="true" data-aos='fade' className={` opacity-80 max-w-5xl mx-auto px-8 text-center text-white font-light text-2xl lg:text-3xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>Nos consideramos socios estratégicos de tu éxito. Nos dedicamos a impulsar tu presencia en línea, aumentar la visibilidad de tu marca y, en última instancia, a potenciar el crecimiento sostenible de tu negocio en el mundo digital.</p>
                </div>
                <div className={` relative px-4 py-16`}>
                    <h2 className={` max-w-5xl mx-auto text-center w-full transition-all ease-in-out duration-100 text-3xl lg:text-3xl font-bold lg:my-2 opacity-80 uppercase`}>Nuestros tres pilares esenciales</h2>
                    {!!pilaresBlocks?.length && (
                        <div className={` mx-auto max-w-5xl grid md:grid-cols-3 grid-cols-1 mt-8 `}>
                            {pilaresBlocks.map((item, index) => (
                                <div key={index} data-aos-once="true" data-aos='fade-up' className={` mx-auto text-center w-full text-lg ${index % 2 === 0 ? 'bg-white' : 'bg-[#b10c72]'} bg-opacity-30 p-8 `}>
                                    <h3 className={` text-2xl font-medium mb-6 opacity-80 `}>{item.titulo}</h3>
                                    <p className={` text-lg text-justify hyphens-auto  indent-4 `}>{item.texto}</p>
                                </div>
                            ))};
                        </div>
                    )};
                </div>
                <p className={` relative max-w-5xl mx-auto px-8 text-center text-white font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>
                    Algunos de los clientes que han confiado en nosotros</p>
                <p className={` relative max-w-5xl mx-auto px-8 mt-8 text-center pb-16 `}>
                    <Clientesimagenes /></p>
            </section>

            <section className={` relative lg:pb-24 `} id={`contacto`} >
            <div className={`  absolute top-0 left-0 w-full h-full  bg-fucsiaAzulRatioFondo opacity-60 `} />
                <div className={`  absolute top-0 left-0 w-full h-full bg-white opacity-60 `} />
                <div className={`  absolute top-0 left-0 w-full h-full opacity-100 bg-repeat `} style={{ backgroundImage: `url('images/noise.png')` }} />

                <p className={` relative max-w-5xl mx-auto px-8 pt-16 pb-4 text-center text-black font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>
                    ¿Aún no estás seguro? Contactanos para ofrecerte una asesoria personalizada y aclarar tus dudas.
                </p>
                <div className={` relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-black bg-opacity-60 `}>
                    <div className={` w-full pt-6 md:py-6 text-center text-white font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>

                        <form className={` mx-8 appearance-none text-left text-black font-normal text-lg lg:text-xl font-RobotoCondensed `} action='https://api.web3forms.com/submit' method='post'>
                            <input className={` block my-4 p-2 w-full appearance-none text-black bg-neutral-200 `} type='text' placeholder='Nombre' />
                            <input className={` block my-4 p-2 w-full appearance-none text-black bg-neutral-200 `} type='email' placeholder='Correo' />
                            <input className={` block my-4 p-2 w-full appearance-none text-black bg-neutral-200 `} type='tel' placeholder='Teléfono' />
                            <input className={` block my-4 p-2 w-full appearance-none text-black bg-neutral-200 `} type='text' placeholder='Asunto' />
                            <textarea className={` block my-4 p-2 w-full appearance-none text-black bg-neutral-200 `} rows='8' placeholder='Mensaje'></textarea>
                            <input className={` inline-block mt-4 appearance-none transition-all ease-in-out duration-200 rounded-full py-1 px-12 uppercase hover:bg-white bg-[#b10c72] hover:text-black text-white no-underline font-medium cursor-pointer `} type='submit' value='Enviar' />
                        </form>

                    </div>
                    <div className={` py-8 flex flex-col justify-center text-left text-white font-normal text-lg lg:text-xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>
                        <adress className={` not-italic `}>
                            <p className={` ml-8 `}>Dirección: Av. Los Rosales 122, 28021, Madrid.</p>
                            <p className={` ml-8 `}><Link className={` no-underline `} href='mailto:info@misitio.com'>Email: info@misitio.com</Link></p>
                            <p className={` ml-8 `} ><Link className={` no-underline `} href='tel:tel:914123456'>Teléfono: 914-123-456</Link></p>
                        </adress>
                        <p className={` ml-8 mt-8`}><Link className={` inline-block w-12 mx-3`} href='/'><img src={instagramIcono.src} alt='' /></Link><Link className={` inline-block w-12 mx-3`} href='/'><img src={correoIcono.src} alt='' /></Link><Link className={` inline-block w-12 mx-3`} href='/'><img src={telefonoIcono.src} alt='' /></Link></p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;