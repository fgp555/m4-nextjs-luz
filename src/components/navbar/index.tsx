"use client";
import Link from 'next/link';

import styles from "./index.module.css";
import { Pathroutes } from '@/helpers/PathRoutes';
import { useAuth } from '@/context/AuthContext';

import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function NavBar() {

  const { dataUser } = useAuth()
  
  const [navbar, setNavbar] = useState(false);
//para evitar que se mueva
  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navbar]);

  const handleLinkClick = () => {
    setNavbar(false);
  };

  return (
    <div>
      {/* Barra superior con texto que se mueve */}
      <div className={styles.topBar}>
        <div className={styles.discountTextContainer}>
          <div className={styles.discountText}>
          Limited time special discounts! Take advantage of our offers. Limited time special discounts! Take advantage of our offers.🥰🥰
          </div>
        </div>
      </div>

      
      <div className="text-center py-4">
        <Link href="/">
          <h2 className="text-3xl text-white font-bold">APPLE CENTER</h2>
        </Link>
      </div>

      {/* NavBar */}
      <nav className="w-full bg-pink-0 left-0 right-0 z-10">
        <div className="justify-between p-1 mx-auto lg:max-w-7xl md:items-center md:flex md:p-2">
          <div className="flex items-center justify-between p-1 md:p-4 md:block">
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden flex justify-between w-full">
              <button
                className="p-2 text-gray-700 rounded-md outline-none border-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FaTimes size={30} />
                ) : (
                  <FaBars size={30} />
                )}
              </button>
              <button className="p-2 text-gray-700 rounded-md outline-none border-none">
                <FaShoppingCart size={30} />
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-start pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 block bg-black' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-start justify-start md:items-center md:justify-center flex flex-col md:flex-row md:space-x-4 text-white tracking-tight md:text-black text-2xl md:font-normal md:text-lg font-bold md:tracking-tighter">
                <li className="custom-navbar">
                  <Link href={Pathroutes.HOME} onClick={handleLinkClick}>
                    HOME
                  </Link>
                </li>
                <li className="custom-navbar">
                  <Link href={Pathroutes.PRODUCTS} onClick={handleLinkClick}>
                    PRODUCTS
                  </Link>
                </li>
                <li className="custom-navbar">
                  <Link href={Pathroutes.CONTACT} onClick={handleLinkClick}>
                    CONTACT US
                  </Link>
                </li>
                <li className="custom-navbar">
                  <Link href={Pathroutes.ABOUT} onClick={handleLinkClick}>
                    ABOUT
                  </Link>
                </li>
                <li className="custom-navbar">
                  <Link href={Pathroutes.FAQ} onClick={handleLinkClick}>
                    FAQ
                  </Link>
                </li>
                {!dataUser?.token && (
                <li className="custom-navbar">
                  <Link href={Pathroutes.LOGIN} onClick={handleLinkClick}>
                    SIGN IN
                  </Link>
                </li>

                )}
                <li className="custom-navbar md:hidden">
                  <Link href={Pathroutes.REGISTER} onClick={handleLinkClick}>
                    REGISTER
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Carrito para pantallas grandes */}
          <div className="hidden md:flex space-x-4">
            <Link href={Pathroutes.CART}>
            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
              <FaShoppingCart size={30} />
            </button>
            </Link>
            {dataUser?.token && (
            <Link href={Pathroutes.DASHBOARD}>
              <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
                <FaUser size={30} />
              </button>
            </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
