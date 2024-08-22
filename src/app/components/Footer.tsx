import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] text-[#F2F2F2] py-6">
      <div className="max-w-screen-lg mx-auto text-center px-4">
        <p className="mb-4">&copy; 2024 Pirates Turf Putt Putt. All rights reserved.</p>
        
        <div className="mb-6 text-sm">
          <p className="mb-2">718 S. Anderson Blvd., Topsail Beach, NC 28445, United States</p>
          <p className="mb-2">(910) 928-8010</p>
          <p className="mb-4">contact@piratesturf.com</p>
        </div>
        
        <div className="mb-6 text-sm">
          <h3 className="text-lg font-bold mb-2">Hours of Operation</h3>
          <p className="mb-1">Tuesday - Saturday: 5:00 PM - 11:00 PM</p>
          <p>Sunday & Monday: Closed</p>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/profile.php?id=61560024142452" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/piratesturfnc/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

