import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from 'react-icons/fa';
import Link from 'next/link';

import { Pathroutes } from '@/helpers/PathRoutes';

const Footer = () => {
    return (
        <footer className='bg-pink-0 text-black flex flex-col items-center p-4'>
          <div className='w-full mb-2'>
            <ul className='font-normal flex flex-col items-center space-y-2'>
              <Link href={Pathroutes.HOME}>Home</Link>
              <Link href={Pathroutes.ABOUT}>About</Link>
              <Link href={Pathroutes.PRODUCTS}>Shop</Link>
              <Link href={Pathroutes.FAQ}>FAQ&apos;s</Link>
              <Link href={Pathroutes.CONTACT}>Contact Us</Link>
              <Link href={Pathroutes.PRIVACY}>Privacy Policy</Link>
            </ul>
          </div>
        
          <div className='w-full mb-4'>
            <h3 className='text-center  text-m font-semibold mb-2'>Payment methods</h3>
            <div className='flex justify-center space-x-4'>
                {/* Tarjetas de medios de pago */}
                <div><FaCcVisa size={30} /></div>
                <div><FaCcMastercard size={30} /></div>
                <div><FaCcAmex size={30} /></div>
                <div><FaPaypal size={30} /></div>
            </div>
          </div>
  
          {/* Derechos de autor y QR */}
          <div className="w-full text-center mt-4">
            <p className='text-m'>© 2024 Apple Center. All rights reserved.</p>
          </div>
        </footer>
    );
}

export default Footer;
