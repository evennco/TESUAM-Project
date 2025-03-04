import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
export default function Footer() {
    return (
        <footer className="p-4 bg-foundationcolorred1 sm:p-6 bg-foundationcolorred1 w-full">
            <div className="mx-auto max-w-fit-content items-center">
                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 items-center gap-y-6">
                    <div className="text-center">
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase text-white">Enlaces de interés</h2>
                        <ul className="text-gray-600 text-gray-400">
                            <li className="mb-2">
                                <a href="https://flowbite.com" className="hover:text-foundationcoloryellow2 text-white text-white">Conoce nuestras instalaciones</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://tailwindcss.com/" className="hover:text-foundationcoloryellow2 text-white text-white">Contribuye con tu trabajo</a>
                            </li>
                            <li>
                                <a href="https://flowbite.com" className="hover:text-foundationcoloryellow2 text-white text-white">PQRS</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase text-white">Redes sociales</h2>
                        <div className="flex justify-center space-x-4 mb-6">
                            <a href="https://youtube.com" className="text-white text-white hover:text-foundationcoloryellow2">
                                <FaYoutube size={24} />
                            </a>
                            <a href="https://facebook.com" className="text-white text-white hover:text-foundationcoloryellow2">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-white text-white hover:text-foundationcoloryellow2">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-white text-white hover:text-foundationcoloryellow2">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-white text-white hover:text-foundationcoloryellow2">
                                <FaXTwitter size={24} />
                            </a>
                        </div>
                        <p className="text-white text-white text-xs">San José del Guaviare, Guaviare, Colombia, Surámerica</p>
                        <p className="text-white text-white text-xs">Copyright 2025 © Fundación Tejiendo Sueños en la Amazonía</p>
                    </div>
                    <div className="text-center">
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase text-white">Líneas de contacto</h2>
                        <ul className="text-white text-white">
                            <li className="mb-2">
                                <p><b>Correo:</b> dirección@tesuam.org</p>
                            </li>
                            <li className="mb-2">
                                <p><b>Correo:</b> contacto@tesuam.org</p>
                            </li>
                            <li>
                                <p><b>Teléfono:</b> 300 330 3030</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-2 border-gray-200 sm:mx-auto border-gray-700 lg:my-2" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-xs sm:text-center text-white text-white"><a href="https://flowbite.com" className="hover:underline">Términos y condiciones|Política de privacidad</a>
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <span className="text-xs sm:text-center text-white text-white">Sitio web creado y desarrollado por <a href="https://flowbite.com" className="hover:underline">www.evenn.co</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}