import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2f2d2d] rounded-full mx-5 md:mx-10 px-6 py-3 h-15 md:h-20 mt-5">
      <div className="flex items-center justify-between">
        <div className="logo">
          <Image src="/logo.png" alt="logo" height={100} width={130} />
        </div>
        <div className="hidden md:block">
          <ul className="flex text-white text-lg">
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/">Beranda</Link>
            </li>
            <li className="mx-2">|</li>
            <li className={router.pathname === "/galeri" ? "active" : ""}>
              <Link href="/galeri">Galeri</Link>
            </li>
            <li className="mx-2">|</li>
            <li className={router.pathname === "/pengumuman" ? "active" : ""}>
              <Link href="/pengumuman">Pengumuman</Link>
            </li>
            <li className="mx-2">|</li>
            <li className={router.pathname === "/profil" ? "active" : ""}>
              <Link href="/profil">Profil</Link>
            </li>
            <li className="mx-2">|</li>
            <li className={router.pathname === "/jadwal" ? "active" : ""}>
              <Link href="/jadwal">Jadwal</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="btn-forum flex">
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
        <div className="md:hidden">
          <button className="text-white" onClick={handleMenuToggle}>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col text-white text-lg">
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/">Beranda</Link>
            </li>
            <li className={router.pathname === "/galeri" ? "active" : ""}>
              <Link href="/galeri">Galeri</Link>
            </li>
            <li className={router.pathname === "/pengumuman" ? "active" : ""}>
              <Link href="/pengumuman">Pengumuman</Link>
            </li>
            <li className={router.pathname === "/profil" ? "active" : ""}>
              <Link href="/profil">Profil</Link>
            </li>
            <li className={router.pathname === "/jadwal" ? "active" : ""}>
              <Link href="/jadwal">Jadwal</Link>
            </li>
            <li>
              <div className="btn-forum flex">
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                  <Link href="/forum">Forum</Link>
                </button>
                <button className="bg-white py-2 px-2 rounded-full ms-[-5px]">
                  <Link href="/forum">
                    <Image src="/next-to-forum.png" alt="next-to-forum" height={20} width={20} className="rotate-[-25deg]" />
                  </Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
