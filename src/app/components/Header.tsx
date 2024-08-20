// components/Header.tsx
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const Header: React.FC = () => {
  return (
    <header className="bg-Marina-Blue p-4">
      <nav className="flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/assets/images/larryslogo.jpg" 
              alt="Larry's Deli Que Logo" 
              width={150} // Adjust the width as needed
              height={50} // Adjust the height as needed
              className="mr-4"
            />
          </Link>
        </div>
        {/* Navigation links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link> {/* Added link to the menu page */}
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
