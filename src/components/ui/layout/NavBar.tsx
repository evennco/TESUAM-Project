'use client'
import { FiAlignJustify } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa6';
import { useState } from 'react';
import Image from 'next/image';
import Frases from '@/components/ui/common/Phrases';
import logo from '../../../../public/images/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const currentPath = usePathname();
  const getLinkClass = (path: string) => {
    return currentPath === path
      ? 'block py-2 pr-4 pl-3 text-foundationcolorred2 rounded lg:bg-transparent lg:text-foundationcoloryellow2 lg:p-0 dark:text-foundationcoloryellow2'
      : 'block py-2 pr-4 pl-3 text-gray-700 border-white-100 hover:bg-white-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-foundationcoloryellow2 lg:p-0 dark:text-white lg:dark:hover:text-foundationcoloryellow2 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700';
  };

  return (
    <>
      <div className="w-full bg-foundationcolorred2 py-2">
        <Frases />
      </div>
      <nav className="bg-foundationcolorred1 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-foundationcolorred1">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-fit-content">
          <Link href="/">
            <Image
              src={logo}
              alt="TESUAM Logo"
              height={50}
              className="w-30 h-auto sm:w-36 sm:h-auto md:w-40 md:h-auto lg:w-40 lg:h-auto"
            />
            <p className="flex items-center"></p>
          </Link>
          <div className="flex items-center lg:order-2">
            <a href="#" className="flex items-center text-white bg-foundationcoloryellow1 hover:text-foundationcolorwhite focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-2 lg:px-3 py-1 lg:py-1 mr-2 dark:hover:bg-foundationcoloryellow2 focus:outline-none">
              <FaHeart className="w-4 h-4 mr-2" />
              Donar
            </a>
            {isAuthenticated && (
              <Link href="/admin">
                <a className="flex items-center text-white bg-foundationcoloryellow1 hover:bg-foundationcoloryellow2 hover:text-foundationcoloryellow2 focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-2 lg:px-3 py-1 lg:py-1 mr-2 dark:hover:bg-foundationcoloryellow2 focus:outline-none">
                  Admin Panel
                </a>
              </Link>
            )}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-foundationcolorwhite rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menu principal</span>
              <FiAlignJustify className="w-6 h-6" />
            </button>
          </div>
          <div className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link href="/" replace>
                  <p className={getLinkClass('/')}>Inicio</p>
                </Link>
              </li>
              <li>
                <Link href="/about" replace>
                  <p className={getLinkClass('/about')}>Conócenos</p>
                </Link>
              </li>
              <li>
                <Link href="/projectspage" replace>
                  <p className={getLinkClass('/projectspage')}>Proyectos</p>
                </Link>
              </li>
              <li>
                <Link href="/support" replace>
                  <p className={getLinkClass('/support')}>Apóyanos</p>
                </Link>
              </li>
              <li>
                <Link href="/contact" replace>
                  <p className={getLinkClass('/contact')}>Contáctanos</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}