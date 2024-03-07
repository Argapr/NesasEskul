import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-transparent rounded-full mt-5 mx-10 px-6 py-3 h-20 z-50">
      <div className="logo">
        <Image src="/logo.png" alt="logo" height={100} width={130} />
      </div>

      {/* Hamburger Menu */}
      <div className="block md:hidden">
        <button onClick={toggleNavbar} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Navbar Items */}
      <ul className={`md:flex md:items-center md:justify-center md:bg-black md:bg-opacity-20 md:w-[30rem] md:h-[4rem] md:rounded-full ${isOpen ? "block" : "hidden"} md:block`}>
        <li>
          <Link href="/">Beranda</Link>
        </li>
        <li className="mx-2">|</li>
        <li>
          <Link href="/galeri">Galeri</Link>
        </li>
        <li className="mx-2">|</li>
        <li>
          <Link href="/pengumuman">Pengumuman</Link>
        </li>
        <li className="mx-2">|</li>
        <li>
          <Link href="/profil">Profil</Link>
        </li>
        <li className="mx-2">|</li>
        <li>
          <Link href="/jadwal">Jadwal</Link>
        </li>
        <li className="mx-2">|</li>
        <li>
          <Link href="/forum">Forum</Link>
        </li>
      </ul>

      {/* Forum Button */}
      <div className="btn-forum hidden md:flex">
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
          <Link href="/forum">Forum</Link>
        </button>
        <button className="bg-white py-2 px-2 rounded-full ms-[-5px]">
          <Link href="/forum">
            <Image src="/next-to-forum.png" alt="next-to-forum" height={20} width={20} className="rotate-[-25deg]" />
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
