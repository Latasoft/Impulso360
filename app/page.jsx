"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import impulso360Logo from 'public/images/logob.png'
import anglesDown from 'public/images/angles-down.svg'

import porQueNosotros from 'public/images/porQueNosotros.webp';
import portadaFondoB from 'public/images/portadaFondoB.jpg';
import portadaFondoC from 'public/images/portadaFondoC.jpg';
import portadaFondoD from 'public/images/portadaFondoD.jpg';
import portadaFondoE from 'public/images/portadaFondoE.jpg';
import portadaFondoF from 'public/images/portadaFondoF.jpg';
import portadaFondoG from 'public/images/portadaFondoG.jpg';

const serviciosBlocks = [
    { fondoImagen: portadaFondoB, titulo: 'Estrategias digitales', descripcion: 'Transformamos tus metas comerciales en estrategias digitales efectivas. Desde la identificación del público objetivo hasta análisis competitivo, creamos planes personalizados para tu éxito.' },
    { fondoImagen: portadaFondoC, titulo: 'SEO (Optimización de Motores de Búsqueda)', descripcion: 'Mejoramos tu visibilidad online con investigación de palabras clave, optimización de contenido y construcción de enlaces estratégicos. Aumenta tu posición en los motores de búsqueda y atrae a tu audiencia objetivo.' },
    { fondoImagen: portadaFondoD, titulo: 'SEM (Marketing en Motores de Búsqueda)', descripcion: 'Gestionamos campañas publicitarias en Google, optimizando presupuestos y enfocándonos en estrategias de palabras clave. Aumenta la visibilidad y atrae clientes potenciales de manera efectiva.' },
    { fondoImagen: portadaFondoE, titulo: 'Redes Sociales', descripcion: 'Gestionamos tus perfiles en redes sociales, desarrollamos estrategias de contenido social y ejecutamos campañas publicitarias. Conéctate con tu audiencia, y ahora, también optimizamos tus campañas de pago para maximizar el alcance y la conversión.' },
    { fondoImagen: portadaFondoF, titulo: 'Email Marketing', descripcion: 'Diseñamos y ejecutamos campañas de email marketing impactantes. Mantén a tus clientes informados, comprometidos y listos para convertirse.' },
    { fondoImagen: portadaFondoG, titulo: 'Diseño y Desarrollo Web', descripcion: 'Creamos sitios web responsivos y optimizados para brindar una experiencia excepcional al usuario. Desde la velocidad hasta la integración de tecnologías, garantizamos una presencia online efectiva.' }
]


import clientesA from 'public/images/clientesA.png';
import clientesB from 'public/images/clientesB.png';
import clientesC from 'public/images/clientesC.webp';
import clientesD from 'public/images/clientesD.webp';
import clientesE from 'public/images/clientesE.webp';
import clientesF from 'public/images/clientesF.webp';

const clientesImagenes = [
    { imagen: clientesA },
    { imagen: clientesB },
    { imagen: clientesC },
    { imagen: clientesD },
    { imagen: clientesE },
    { imagen: clientesF }
]


import instagramIcono from 'public/images/instagram.png';
import telefonoIcono from 'public/images/telefono.png';
import correoIcono from 'public/images/email.png';

import portadaVideo from 'public/images/portadaFondoVideo.mp4';

export default function Page() {

const [currentClientesImagenesIndex, setCurrentClientesImagenesIndex] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentClientesImagenesIndex((prevIndex) => (prevIndex + 1) % clientesImagenes.length);
        setFade(true);
      }, 618);
    }, 2382);

    return () => clearInterval(interval);
  }, []);

  const { imagen } = clientesImagenes[currentClientesImagenesIndex];

    return (
        <main className={` relative text-white font-Roboto `}>
            <section className={` h-screen relative w-full bg-cover bg-center bg-black overflow-hidden  `} id={`inicio`}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/portadaFondoVideo.png' className='object-cover object-center h-full w-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src={portadaVideo} type="video/mp4" />
                    </video>
                </div>
                <div className={`  absolute top-0 left-0 w-full h-full bg-fucsiaAzulRatioFondo opacity-40 `} />
                <div className={` relative mx-auto flex flex-col w-full h-full items-center justify-center px-4`}>
                    <h2 data-aos-duration="3618" data-aos-once="true" data-aos='fade-right' className={` max-w-5xl text-left w-full transition-all ease-in-out text-4xl  lg:text-7xl font-bold lg:my-0 opacity-80`}>En<Image className={` inline-block h-12 lg:h-24 w-auto `} src={impulso360Logo} alt='' /></h2>
                    <h3 data-aos-duration="3618" data-aos-once="true" data-aos='fade-right' className={` font-RobotoCondensed max-w-5xl text-left w-full transition-all ease-in-out text-3xl lg:text-4xl font-light lg:my-0 opacity-80 `}>comienza tu transformación digital hoy</h3>
                    <p data-aos-duration="3618" data-aos-once="true"  data-aos='fade-right' className={` max-w-5xl text-left w-full text-lg my-8 `}><Link className={` inline-block transition-all ease-in-out duration-200 text-white no-underline font-medium opacity-80 text-lg lg:text-xl hover:translate-y-1 `} href='#serviciosIntegrales' ><Image className={` inline-block mr-3 h-5 w-auto `} src={anglesDown} alt='Angles Down' /> Conoce más aquí <Image className={` inline-block ml-3 h-5 w-auto`} src={anglesDown} alt='Angles Down' /></Link></p>
                {/* <p className={` max-w-5xl text-left w-full text-lg my-8 `}><Link className={` transition-all ease-in-out duration-200 rounded-full py-3 px-6 hover:bg-white bg-[#b10c72] hover:text-black text-white no-underline font-medium`} href='' >Conoce más aquí</Link></p> */}
                </div>
            </section>
            <section className={` pt-16 bg-black `} id={`serviciosIntegrales`}>
                <h3 className={` max-w-5xl mx-auto transition-all ease-in-out text-3xl lg:text-4xl font-semibold mb-8 text-center uppercase font-RobotoCondensed opacity-80`}>Servicios integrales</h3>
                {!!serviciosBlocks?.length && (
                    <div className={` mx-auto grid grid-cols-1 md:grid-cols-2 `}>
                        {serviciosBlocks.map((item, index) => (
                            <div key={index} className={` w-full bg-cover bg-center `} style={{ backgroundImage: `url('${item.fondoImagen.src}')`, }}>
                                <div className={` transition-all ease-in-out duration-700 flex flex-col items-center ${ index % 2 === 0 ? 'md:items-end' : 'md:items-start'} py-28 px-2 md:px-3 lg:px-6 xl:px-12 `}>
                                    <div data-aos-duration="3618" data-aos-once="true"  data-aos={index % 2 === 0 ? 'fade-up' : 'fade-up'} className={` transition-all ease-in-out py-8 bg-black bg-opacity-70 text-center max-w-md `} >
                                        <h3 className={`transition-all ease-in-out text-3xl lg:text-4xl font-semibold mx-4 mb-8 font-RobotoCondensed opacity-80`}>{item.titulo}</h3>
                                        <p className={`transition-all ease-in-out text-lg lg:text-xl mx-4 `}>{item.descripcion}</p>
                                        {/* <p className={`  text-lg mx-4 my-8 `}><Link className={` transition-all ease-in-out duration-200 rounded-full py-3 px-6 bg-white hover:bg-[#b10c72] text-black hover:text-white no-underline font-medium`} href='' >Cotiza aquí</Link></p> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <section className={` relative w-full bg-cover bg-center bg-black overflow-hidden `} id={`porQueNosotros`}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/portadaFondoVideo.png' className='object-cover object-center h-full w-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src={portadaVideo} type="video/mp4" />
                    </video>
                </div>
                <div className={` relative max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 px-4 md:px-0 pt-16 `}>
                    <div className={` p-4 bg-white bg-opacity-30 `}>
                        <h3 className={` text-[#b10c72] transition-all ease-in-out text-3xl lg:text-4xl font-semibold font-RobotoCondensed mx-4 mb-8 mt-4 `}>¿Por qué nosotros?</h3>
                        <ul className={` list-disc transition-all ease-in-out text-lg ml-8 mr-4 `}>
                            <li data-aos-duration="3618" data-aos-once="true"  data-aos='fade-right' className={` my-4 `}>Nuestro servicio incluye la implementación de un CRM de última generación que optimiza la gestión de leads y seguimientos. Con esta herramienta, podrás mejorar la eficiencia de tu empresa y aumentar tus oportunidades de venta.</li>
                            <li data-aos-duration="3618" data-aos-once="true"  data-aos='fade-right' className={` my-4 `}>Colaboramos estrechamente contigo para comprender tus metas, identificar desafíos específicos y crear estrategias de marketing digital personalizadas.</li>
                            <li data-aos-duration="3618" data-aos-once="true"  data-aos='fade-right' className={` my-4 `}>No brindamos soluciones estándar, sino que diseñamos estrategias que se ajustan de forma precisa a tu visión y objetivos comerciales.</li>
                            <li data-aos-duration="3618" data-aos-once="true"  data-aos='fade-right' className={` my-4 `}>Nos dedicamos a potenciar el crecimiento de tu empresa a través de servicios integrales de marketing digital y la implementación estratégica de CRM.</li>
                        </ul>
                    </div>
                    <div className={`flex items-center justify-center p-4 text-center bg-white bg-opacity-30 `}>
                        <Image data-aos-duration="3618" data-aos-once="true"  data-aos='flip-left' className={` mx-auto `} src={porQueNosotros} alt='' />
                    </div>
                </div>
                <div className={` relative px-4 pt-16`}>
                    <p data-aos-duration="3618" data-aos-once="true"  data-aos='fade' className={` opacity-80 max-w-5xl mx-auto px-8 text-center text-white font-light text-2xl lg:text-3xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>Nos consideramos socios estratégicos de tu éxito. Nos dedicamos a impulsar tu presencia en línea, aumentar la visibilidad de tu marca y, en última instancia, a potenciar el crecimiento sostenible de tu negocio en el mundo digital.</p>
                </div>
                <div className={` relative px-4 py-16`}>
                    <h2 className={` max-w-5xl mx-auto text-center w-full transition-all ease-in-out duration-100 text-3xl lg:text-3xl font-bold lg:my-2 opacity-80 uppercase`}>Nuestros tres pilares esenciales</h2>

                    <div className={` mx-auto max-w-5xl grid md:grid-cols-3 grid-cols-1 mt-8 `}>

                        <div data-aos-duration="3618" data-aos-once="true"  data-aos='fade-right' className={` mx-auto text-center w-full text-lg bg-white bg-opacity-30 p-8 `}>
                            <h3 className={` text-2xl font-medium mb-4 opacity-80 `}>Enfoque Estratégico Personalizado</h3>
                            <p className={` text-lg`}>Entendemos que cada negocio es único. Trabajamos contigo para comprender tus objetivos, identificar desafíos específicos y desarrollar estrategias de marketing digital a medida. No ofrecemos soluciones genéricas; creamos estrategias que se alinean con tu visión y metas empresariales.</p>
                        </div>
                        <div data-aos-duration="3618" data-aos-once="true"  data-aos='fade-right' className={` mx-auto text-center w-full text-lg bg-[#b10c72] bg-opacity-30 p-8 `}>
                            <h3 className={` text-2xl font-medium mb-4 opacity-80`}>Innovación y Adaptabilidad Continuas</h3>
                            <p className={` text-lg`}>El marketing digital evoluciona constantemente. Nos comprometemos a mantenerte al tanto de las últimas tendencias y tecnologías. Nuestro equipo altamente capacitado se esfuerza por la innovación constante para asegurar que tu presencia en línea esté siempre a la par con las mejores prácticas y te dé una ventaja competitiva sostenible.</p>
                        </div>
                        <div data-aos-duration="3618" data-aos-once="true"  data-aos='fade-right' className={` mx-auto text-center w-full text-lg bg-white bg-opacity-30 p-8 `}>
                            <h3 className={` text-2xl font-medium mb-4 opacity-80`}>Resultados Medibles y Tangibles</h3>
                            <p className={` text-lg`}>No nos conformamos con promesas vacías. Implementamos estrategias con datos y métricas concretas para asegurarnos de que cada campaña genere resultados tangibles.</p>
                        </div>

                    </div>
                </div>
                <p className={` relative max-w-5xl mx-auto px-8 text-center text-white font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>
                    Algunos de los clientes que han confiado en nosotros
                </p>
                <p className={` relative max-w-5xl mx-auto px-8 mt-8 text-center pb-16 `}>
                    <Image className={` mx-5 inline-block transition-opacity duration-[618ms] ease-in-out ${fade ? 'opacity-100' : 'opacity-0'} `} src={ imagen } alt='' />
                </p>
            </section>
            <section className={` bg-white `} id={`contacto`}>
                    <p className={` max-w-5xl mx-auto px-8 pt-16 pb-4 text-center text-black font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>
                        ¿Aún no estás seguro? Contactanos para ofrecerte una asesoria personalizada y aclarar tus dudas.
                    </p>
                <div className={` max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-black`}>
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
                        <p className={` ml-8 mt-8`}><Link className={` inline-block w-12 mx-3`} href='/'><Image src={instagramIcono} alt='' /></Link><Link className={` inline-block w-12 mx-3`} href='/'><Image src={correoIcono} alt='' /></Link><Link className={` inline-block w-12 mx-3`} href='/'><Image src={telefonoIcono} alt='' /></Link></p>
                    </div>
                </div>
                <p className={` max-w-5xl mx-auto py-8 px-8 text-left text-black font-normal text-lg lg:text-xl font-RobotoCondensed`}>
                    ©Impulso360 todos los derechos reservados
                </p>
            </section>
        </main>
    );
}

