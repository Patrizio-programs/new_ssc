'use client';

import Link from 'next/link';
import { useState } from 'react';
import './navbar.css';
import Image from 'next/legacy/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
      <Image
      src="https://i.postimg.cc/w3KkfJGg/logo-with-tagline-removebg-preview.png"
      alt="Company Logo"
      width={150}  // Set your desired width
      height={150}  // Set your desired height
      className="logoImage"
      unoptimized
    />
        <Link href="/" className="logo">
          <span className="logoText">SIMPLY SPANISH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navLinks">
          <Link href="/about" className="navLink">ABOUT</Link>
          <Link href="/contact" className="navLink">CONTACT</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`menuButton ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobileMenu ${isOpen ? 'open' : ''}`}>
        <Link href="/about" className="mobileLink" onClick={toggleMenu}>About</Link>
        <Link href="/contact" className="mobileLink" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
}