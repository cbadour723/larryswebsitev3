import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] text-[#F2F2F2] py-6">
      <div className="text-center">
        <p>&copy; 2024 Larry&apos;s Deli Que. All rights reserved.</p>
        <div className="mt-4">
          <p className="mb-2">718 S. Anderson Blvd., Topsail Beach, NC, United States, North Carolina</p>
          <p className="mb-2">(910) 928-8010</p>
          <p className="mb-4">Hello@larrysdeli-que.com</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/larrysdelique/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/larrysdeli_que/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
