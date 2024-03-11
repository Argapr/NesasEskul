import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbarFeature.js";

const Pengumuman = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="md:mx-[5rem] mx-2 grid md:grid-cols-5 gap-4 mt-[6rem]">
          <div className="p-3 rounded-lg bg-[#ffff] w-full h-[32rem]">
            <input type="text" placeholder="cari berita eskul disini" className="px-2 py-2 w-full rounded-lg focus:outline-none border border-[#000] bg-transparent focus:text-[#000] text-[#000000] " />
            <p className="mt-3 font-semibold text-[#000000] text-xl">Kategori</p>
            <div className="mx-2 mt-2">
              <div className="w-full h-10 rounded-md border-2 border-l-[#000] flex items-center">
                <div className="ms-2 h-7 w-7 rounded-full bg-red-700"></div>
                <p className="ms-3">Keaagaman</p>
              </div>
              <div className="w-full mt-2 h-10 rounded-md border-2 border-l-[#000] flex items-center">
                <div className="ms-2 h-7 w-7 rounded-full bg-red-700"></div>
                <p className="ms-3">Teknologi</p>
              </div>
              <div className="w-full mt-2 h-10 rounded-md border-2 border-l-[#000] flex items-center">
                <div className="ms-2 h-7 w-7 rounded-full bg-red-700"></div>
                <p className="ms-3">Kesenian</p>
              </div>
              <div className="w-full mt-2 h-10 rounded-md border-2 border-l-[#000] flex items-center">
                <div className="ms-2 h-7 w-7 rounded-full bg-red-700"></div>
                <p className="ms-3">Organisasi</p>
              </div>
              <div className="w-full mt-2 h-10 rounded-md border-2 border-l-[#000] flex items-center">
                <div className="ms-2 h-7 w-7 rounded-full bg-red-700"></div>
                <p className="ms-3">PKK</p>
              </div>
              <div className="w-full mt-2 h-10 rounded-md border-2 border-l-[#000] flex items-center">
                <div className="ms-2 h-7 w-7 rounded-full bg-red-700"></div>
                <p className="ms-3">Olahraga</p>
              </div>
              <div className="w-full mt-2 h-10 rounded-md border-2 border-l-[#000] flex items-center">
                <div className="ms-2 h-7 w-7 rounded-full bg-red-700"></div>
                <p className="ms-3">Bela Diri</p>
              </div>
              <div className="w-full mt-2 h-10 rounded-md border-2 border-l-[#000] flex items-center">
                <div className="ms-2 h-7 w-7 rounded-full bg-red-700"></div>
                <p className="ms-3">Bahasa</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="h-auto bg-[#f0eded] p-5 rounded-xl">
              <div className="h-[12rem] w-full bg-black"></div>
              <p className="mt-2 font-bold text-3xl">Marching Band</p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex items-center mt-5">
                <div className="h-7 w-[7rem] bg-[#e9e1e1a1] rounded-xl flex items-center justify-center">
                  <div className="h-5 w-5 bg-white rounded-full items-center flex justify-center">
                    <Image src="/update.png" alt="" height={10} width={10} />
                  </div>
                  <p className="text-[10px] px-1">3, Januari, 2023</p>
                </div>
                <div className="w-7 h-7 bg-[#e9e1e1a1] flex items-center justify-center rounded-full ms-3">
                  <Image src="/speech-bubble.png" alt="" height={15} width={15} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-black"></div>
        </div>
      </main>
    </>
  );
};

export default Pengumuman;
