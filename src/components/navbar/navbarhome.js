import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-transparent rounded-full mx-10 px-6 py-3 h-20 z-50 w-[95rem] absolute mb-[40rem]">
      <div className="logo">
        <Image src="/logo.png" alt="logo" height={100} width={130} />
      </div>
      <ul className="flex text-white text-lg bg-black bg-opacity-20 w-[30rem] h-[4rem] justify-center rounded-full items-center backdrop-blur-lg">
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
      </ul>
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
    </nav>
  );
};

export default Navbar;
