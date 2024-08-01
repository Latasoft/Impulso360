import Link from 'next/link';
import Image from 'next/image';

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

export default function Page() {
    return (
        <main className={` text-white font-Roboto  sm:mt-16  lg:mt-20`}>
            <section className={` h-screen relative w-full bg-cover bg-center bg-black overflow-hidden  `} >
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/portadaFondoVideo.png' className='object-cover object-center h-full w-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/portadaFondoVideo.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className={`  absolute top-0 left-0 w-full h-full bg-fucsiaAzulRatioFondo opacity-40 `} />
                <div className={` relative mx-auto flex flex-col w-full h-full items-center justify-center px-4`}>
                    <h2 className={` max-w-5xl text-left w-full transition-all ease-in-out duration-100 text-4xl  lg:text-5xl font-bold lg:my-2 opacity-80`}>En Impulso 360</h2>
                    <h3 className={` max-w-5xl text-left w-full transition-all ease-in-out duration-100 text-2xl lg:text-3xl font-semibold lg:my-2 opacity-80 `}>comienza tu transformación digital hoy</h3>
                    <p className={` max-w-5xl text-left w-full text-lg my-8 `}><Link className={` transition-all ease-in-out duration-200 rounded-full py-3 px-6 hover:bg-white bg-[#b10c72] hover:text-black text-white no-underline font-medium`} href='' >Conoce más aquí</Link></p>
                </div>
            </section>
            <section>
                <h3 className={` max-w-5xl mx-auto transition-all ease-in-out duration-100 text-3xl lg:text-4xl font-semibold m-8 text-center uppercase font-RobotoCondensed`}>Servicios integrales</h3>
                {!!serviciosBlocks?.length && (
                    <div className={` grid grid-cols-1 md:grid-cols-2 `}>
                        {serviciosBlocks.map((item, index) => (
                            <div key={index} className={` w-full bg-cover bg-center `} style={{ backgroundImage: `url('${item.fondoImagen.src}')`, }}>
                                <div className={` py-28 md:px-4 lg:px-8 xl:px-16 text-center`}>
                                    <div className={`py-6 bg-black bg-opacity-60`}>
                                        <h3 className={` transition-all ease-in-out duration-100 text-3xl lg:text-4xl font-semibold mx-4 my-8 font-RobotoCondensed`}>{item.titulo}</h3>
                                        <p className={` transition-all ease-in-out duration-100 text-lg lg:text-xl m-4 `}>{item.descripcion}</p>
                                        <p className={`  text-lg mx-4 my-8 `}><Link className={` transition-all ease-in-out duration-200 rounded-full py-3 px-6 bg-white hover:bg-[#b10c72] text-black hover:text-white no-underline font-medium`} href='' >Cotiza aquí</Link></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <section>
                <div className={` max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 `}>
                    <div className={` p-8 `}>
                        <h3 className={` text-[#b10c72] transition-all ease-in-out duration-100 text-3xl lg:text-4xl font-semibold font-RobotoCondensed mx-4 my-8 `}>¿Por qué nosotros?</h3>
                        <ul className={` list-disc transition-all ease-in-out duration-100 text-lg ml-8 mr-4 `}>
                            <li className={` my-4 `}>Nuestro servicio incluye la implementación de un CRM de última generación que optimiza la gestión de leads y seguimientos. Con esta herramienta, podrás mejorar la eficiencia de tu empresa y aumentar tus oportunidades de venta.</li>
                            <li className={` my-4 `}>Colaboramos estrechamente contigo para comprender tus metas, identificar desafíos específicos y crear estrategias de marketing digital personalizadas.</li>
                            <li className={` my-4 `}>No brindamos soluciones estándar, sino que diseñamos estrategias que se ajustan de forma precisa a tu visión y objetivos comerciales.</li>
                            <li className={` my-4 `}>Nos dedicamos a potenciar el crecimiento de tu empresa a través de servicios integrales de marketing digital y la implementación estratégica de CRM.</li>
                        </ul>
                    </div>
                    <div className={`flex items-center justify-center p-8 text-center `}>
                        <Image className={` mx-auto `} src={porQueNosotros} alt='' />
                    </div>
                </div>
                <div className={` bg-white `}>
                    <p className={` max-w-5xl mx-auto px-8 py-16 text-center text-black font-semibold text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-RobotoCondensed`}>Nos consideramos socios estratégicos de tu éxito. Nos dedicamos a impulsar tu presencia en línea, aumentar la visibilidad de tu marca y, en última instancia, a potenciar el crecimiento sostenible de tu negocio en el mundo digital.</p>
                </div>
            </section>
            <section className={` relative w-full bg-cover bg-center bg-black overflow-hidden `} >
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/portadaFondoVideo.png' className='object-cover object-center h-full w-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/portadaFondoVideo.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className={` relative px-4 py-16`}>
                    <h2 className={` max-w-5xl mx-auto text-center w-full transition-all ease-in-out duration-100 text-3xl lg:text-3xl font-bold lg:my-2 opacity-80 uppercase`}>Nuestros tres pilares esenciales</h2>
                    <div className={` mx-auto max-w-5xl grid md:grid-cols-3 grid-cols-1 mt-8 `}>
                    <div className={` mx-auto text-center w-full text-lg bg-white bg-opacity-30 p-8 `}>
                        <h3 className={` text-2xl font-medium mb-4`}>Enfoque Estratégico Personalizado</h3>
                        <p className={` text-lg`}>Entendemos que cada negocio es único. Trabajamos contigo para comprender tus objetivos, identificar desafíos específicos y desarrollar estrategias de marketing digital a medida. No ofrecemos soluciones genéricas; creamos estrategias que se alinean con tu visión y metas empresariales.</p>
                    </div>
                    <div className={` mx-auto text-center w-full text-lg bg-[#b10c72] bg-opacity-30 p-8 `}>
                        <h3 className={` text-2xl font-medium mb-4`}>Enfoque Estratégico Personalizado</h3>
                        <p className={` text-lg`}>Entendemos que cada negocio es único. Trabajamos contigo para comprender tus objetivos, identificar desafíos específicos y desarrollar estrategias de marketing digital a medida. No ofrecemos soluciones genéricas; creamos estrategias que se alinean con tu visión y metas empresariales.</p>
                    </div>
                    <div className={` mx-auto text-center w-full text-lg bg-white bg-opacity-30 p-8 `}>
                        <h3 className={` text-2xl font-medium mb-4`}>Enfoque Estratégico Personalizado</h3>
                        <p className={` text-lg`}>Entendemos que cada negocio es único. Trabajamos contigo para comprender tus objetivos, identificar desafíos específicos y desarrollar estrategias de marketing digital a medida. No ofrecemos soluciones genéricas; creamos estrategias que se alinean con tu visión y metas empresariales.</p>
                    </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

