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
      <nav className="">
        <div className="bg-[#ffffff] px-6 py-3 drop-shadow-lg">
          <div className="max-w-8xl mx-auto">
            <div className="flex justify-between items-center py-1 md:py-3">
              <div className="flex items-center">
                <div className="logo">
                  <Image src="/IMG/logo-black.png" alt="logo" height={100} width={110} />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center">
                  <Link href="/" className="text-[#000] p-2 hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                    Beranda
                  </Link>
                  <Link href="/galeri" className="text-[#000] p-2 hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                    Galeri
                  </Link>
                  <Link href="/pengumuman" className="text-[#000] p-2 hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                    Pengumuman
                  </Link>
                  <Link href="/profil" className="text-[#000] p-2 hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                    Profil
                  </Link>
                  <Link href="/jadwal" className="text-[#000] p-2 hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                    Jadwal
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex">
                  <button className="bg-[#90e6f0] text-white font-bold py-2 px-4 rounded-full">
                    <Link href="/forum">Forum</Link>
                  </button>
                  <button className="bg-[#90e6f0] py-2 px-2 rounded-full ms-[-8px]">
                    <Link href="/forum">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 rotate-[-25deg]">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                        </g>
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black" onClick={toggleNavbar}>
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
        </div>
        {isClick && (
          <div className="md:hidden mt-[-1px] bg-[#ffffff]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-[#000] p-2 block hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                Beranda
              </Link>
              <Link href="/galeri" className="text-[#000] p-2 block hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                Galeri
              </Link>
              <Link href="/pengumuman" className="text-[#000] p-2 block hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                Pengumuman
              </Link>
              <Link href="/profil" className="text-[#000] p-2 block hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                Profil
              </Link>
              <Link href="/jadwal" className="text-[#000] p-2 block hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl">
                Jadwal
              </Link>
              <div className="flex justify-end">
                <button className="bg-[#90e6f0] text-white font-bold py-2 px-4 rounded-full">
                  <Link href="/forum">Forum</Link>
                </button>
                <button className="bg-[#90e6f0] py-2 px-2 rounded-full ms-[-8px]">
                  <Link href="/forum">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 rotate-[-25deg]">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                      </g>
                    </svg>
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
