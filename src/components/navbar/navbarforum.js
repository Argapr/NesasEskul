import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between bg-[#2f2d2d] bg-opacity-50 backdrop-blur-lg rounded-full mx-[10rem] px-6 py-3 h-20 mt-5 z-50">
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={100} width={130} />
        </Link>
      </div>
      <ul className="flex text-white text-lg">
        <li className={router.pathname === "/forum" ? "active" : ""}>
          <Link href="/forum">Forum</Link>
        </li>
        <li className="mx-2"></li>
        <li className={router.pathname === "/forum/pengguna" ? "active" : ""}>
          <Link href="/forum/pengguna">Pengguna</Link>
        </li>
      </ul>
      <div className="btn-forum flex">
        <button className="bg-transparent border border-[#fff] text-[#fff] font-bold py-2 px-4 rounded-full">
          <Link href="/login">Login</Link>
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
