import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbarforum.js";

const forumHome = () => {
  return (
    <>
      <header className="bg-blue-500 h-[30rem] grid relative overflow-hidden">
        <Navbar />
        <div className="absolute inset-0">
          <Image src="/bg-forum.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
        <p className="text-[#fff] font-semibold text-5xl text-center z-10 mt-[10rem]">Selamat Datang di Forum NesasEskul</p>
        <div className="flex justify-center">
          <div className="relative">
            <input type="text" placeholder="Cari Forum  " className="w-[50rem] px-4 py-4 rounded-full shadow-xl focus:outline-none" />
            <button className="absolute inset-y-2 right-2 flex items-center px-5 py-4 bg-[#9A9A9A] rounded-full h-[2.5rem]">
              <p className="text-[#fff]">Cari</p>
            </button>
          </div>
        </div>
      </header>
      <main className=""></main>
    </>
  );
};

export default forumHome;
