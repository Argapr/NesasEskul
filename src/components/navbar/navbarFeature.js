import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between bg-[#2f2d2d] rounded-full mx-10 px-6 py-3 h-20 mt-5">
      <div className="logo">
        <Image src="/logo.png" alt="logo" height={100} width={130} />
      </div>
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
      <div className="btn-forum flex">
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full">Forum</button>
        <button className="bg-white py-2 px-2 rounded-full ms-[-5px]">
          <Image src="/next-to-forum.png" alt="next-to-forum" height={20} width={20} className="rotate-[-25deg]" />
        </button>
      </div>
      <style jsx>{`
        .active {
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
