"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-transparent pt-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="logo">
                <Image src="/logo.png" alt="logo" height={100} width={110} />
              </div>
            </div>
            <div className="hidden md:block backdrop-blur-2xl bg-[#ffffff2a] rounded-full px-8 py-4">
              <div className="space-x-8">
                <Link href="/" className="text-white">
                  Beranda
                </Link>
                <Link href="/galeri" className="text-white">
                  Galeri
                </Link>
                <Link href="/pengumuman" className="text-white">
                  Pengumuman
                </Link>
                <Link href="/profil" className="text-white">
                  Profil
                </Link>
                <Link href="/jadwal" className="text-white">
                  Jadwal
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex">
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                  <Link href="/forum">Forum</Link>
                </button>
                <button className="bg-white py-2 px-2 rounded-full ms-[-5px]">
                  <Link href="/forum">
                    <Image src="/next-to-forum.png" alt="next-to-forum" height={20} width={20} className="rotate-[-25deg]" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                {isClick ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden bg-[#ffffff5e] rounded-xl">
            <div className="px-2 pt-2pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Beranda
              </Link>
              <Link href="/galeri" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Galeri
              </Link>
              <Link href="/pengumuman" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Pengumuman
              </Link>
              <Link href="/profil" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Profil
              </Link>
              <Link href="/jadwal" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                Jadwal
              </Link>
              <div className="flex justify-end">
                <button className="bg-white text-black font-bold py-1 px-3 rounded-full">
                  <Link href="/forum">Forum</Link>
                </button>
                <button className="bg-white py-2 px-2 rounded-full ms-[-5px]">
                  <Link href="/forum">
                    <Image src="/next-to-forum.png" alt="next-to-forum" height={20} width={20} className="rotate-[-25deg]" />
                  </Link>
                </button>
              </div>
              <div className="h-4"></div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
