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
      src="https://i.postimg.cc/4NKRHgGg/logo-with-tagline.png"
      alt="Company Logo"
      width={60}  // Set your desired width
      height={60}  // Set your desired height
      className="logoImage"
    />
        <Link href="/" className="logo">
          <span className="logoText">YourLogo</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navLinks">
          <Link href="/about" className="navLink">About</Link>
          <Link href="/contact" className="navLink">Contact</Link>
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