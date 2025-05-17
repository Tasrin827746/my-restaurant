'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    `font-medium hover:text-orange-600 ${
      pathname === path ? 'text-orange-600' : 'text-gray-800'
    }`;

  return (
    <nav className="w-full bg-white shadow-sm fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-2xl font-bold text-black">
              <span className="mr-1">Spicy</span>
              <Image src="/logo.png" alt="logo" width={30} height={30} />
            </Link>
          </div>

          {/* Desktop Nav */}
           <div className="hidden md:flex space-x-8 items-center">
      <Link href="/" className={linkClass('/')}>Home</Link>
      <Link href="/menu" className={linkClass('/menu')}>Menu</Link>
      <Link href="/about" className={linkClass('/about')}>About Us</Link>
      <Link href="/ratings" className={linkClass('/rating')}>Ratings</Link>
      <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
      <Link href="/reservation">
        <button className="bg-primary font-semibold text-black hover:text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300">
          Reservation
        </button>
      </Link>
    </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-4">
           <Link href="/" className={linkClass('/')}>Home</Link>
      <Link href="/menu" className={linkClass('/menu')}>Menu</Link>
      <Link href="/about" className={linkClass('/about')}>About Us</Link>
      <Link href="/ratings" className={linkClass('/rating')}>Ratings</Link>
      <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
      <Link href="/reservation">
            <button className="w-full font-semibold bg-primary text-white py-2 rounded-full hover:bg-orange-700 transition duration-300">
              Reservation
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
