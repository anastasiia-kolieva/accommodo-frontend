'use client';

import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full h-16 bg-[var(--white)] flex items-center justify-between px-6 shadow-md">
      <div className="flex-1 mx-6 hidden sm:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-[var(--radius-sm)]"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative hover:bg-[var(--accent-hover)] p-2 rounded-[var(--radius-sm)] transition">
          <Image src="/icons/bell.svg" alt='bell icon' width={20} height={20} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="relative">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 hover:bg-[var(--accent-hover)] p-2 rounded-[var(--radius-sm)] transition cursor-pointer"
            >
                <Image
                    src="/icons/userLogo.jpg"
                    alt="user logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                />
                <span className="hidden md:inline text-[var(--black)] text-sm font-medium">UserName</span>
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 origin-top-right bg-[var(--white)] border border-gray-200 rounded-md shadow-lg z-20 animate-fade">
                    <ul className="py-1">
                        <li>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-[var(--accent-hover)] transition">
                                My profile
                            </button>
                        </li>
                        <li>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-[var(--accent-hover)] transition">
                                Settings
                            </button>
                        </li>
                        <li>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-[var(--accent-hover)] transition">
                                Exit
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
