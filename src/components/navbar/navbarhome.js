import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar bg-[#2f2d2d] space-">
      <div className="logo">
        <Image src="/logo.png" alt="logo" height={100} width={130} />
      </div>
      <ul className="nav text-white text-lg">
        <li>
          <a href="/">Beranda</a>
        </li>
        |
        <li>
          <a href="/galeri">Galeri</a>
        </li>
        |
        <li>
          <a href="/pengumuman">Pengumuman</a>
        </li>
        |
        <li>
          <a href="/profil">Profil</a>
        </li>
        |
        <li>
          <a href="/jadwal">Jadwal</a>
        </li>
      </ul>
      <div className="btn-forum">
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full">Forum</button>
        <button className="bg-white py-2 px-2 rounded-full mt-4">
          <Image src="/next-to-forum.png" alt="next-to-forum" height={20} width={20} className="rotate-100" />
        </button>
      </div>
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 50px;
          margin: 30px 50px;
          padding: 0 30px;
          height: 70px;
          z-index: 1000;
          top: 0;
          width: calc(100% - 100px);
        }
        .nav {
          display: flex;
        }
        .nav a {
          padding: 10px 10px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
