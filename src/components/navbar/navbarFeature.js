import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#2f2d2d] rounded-full mx-10 px-6 py-3 h-20 z-50 mt-5">
      <div className="logo">
        <Image src="/logo.png" alt="logo" height={100} width={130} />
      </div>
      <ul className="flex text-white text-lg">
        <li>
          <a href="/">Beranda</a>
        </li>
        <li className="mx-2">|</li>
        <li>
          <a href="/galeri">Galeri</a>
        </li>
        <li className="mx-2">|</li>
        <li>
          <a href="/pengumuman">Pengumuman</a>
        </li>
        <li className="mx-2">|</li>
        <li>
          <a href="/profil">Profil</a>
        </li>
        <li className="mx-2">|</li>
        <li>
          <a href="/jadwal">Jadwal</a>
        </li>
      </ul>
      <div className="btn-forum flex">
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full">Forum</button>
        <button className="bg-white py-2 px-2 rounded-full ms-[-5px]">
          <Image src="/next-to-forum.png" alt="next-to-forum" height={20} width={20} className="rotate-[-25deg]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
