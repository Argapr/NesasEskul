import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
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
                  <Image src="/assets/logo-black.png" alt="logo" height={100} width={110} />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center">
                  <Link href="/" className={`text-[#000] p-2 m-1 ${router.pathname === "/" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                    Beranda
                  </Link>
                  <Link href="/galeri" className={`text-[#000] p-2 m-1 ${router.pathname === "/galeri" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                    Galeri
                  </Link>
                  <Link href="/pengumuman" className={`text-[#000] p-2 m-1 ${router.pathname === "/pengumuman" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                    Pengumuman
                  </Link>
                  <Link href="/profil" className={`text-[#000] p-2 m-1 ${router.pathname === "/profil" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                    Profil
                  </Link>
                  <Link href="/jadwal" className={`text-[#000] p-2 m-1 ${router.pathname === "/jadwal" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                    Jadwal
                  </Link>
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
              <Link href="/" className={`text-[#000] p-2 block ${router.pathname === "/" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                Beranda
              </Link>
              <Link href="/galeri" className={`text-[#000] p-2 block ${router.pathname === "/galeri" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                Galeri
              </Link>
              <Link href="/pengumuman" className={`text-[#000] p-2 block ${router.pathname === "/pengumuman" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                Pengumuman
              </Link>
              <Link href="/profil" className={`text-[#000] p-2 block ${router.pathname === "/profil" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                Profil
              </Link>
              <Link href="/jadwal" className={`text-[#000] p-2 block ${router.pathname === "/jadwal" ? "bg-[#90e6f0] rounded-xl text-white" : "hover:text-[#fff] hover:bg-[#90e6f0] hover:rounded-xl"}`}>
                Jadwal
              </Link>
              <div className="h-4"></div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
