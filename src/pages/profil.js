import Image from "next/image";
import Navbar from "../components/navbar/navbarFeature.js";

const homePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mx-10 mt-[5rem]">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 relative">
            <input type="text" placeholder="Cari Eskul" className="w-[70rem] px-4 py-4 rounded-lg focus:outline-none border border-[#fff] bg-transparent" />
            <button className="absolute inset-y-0 right-0 flex items-center px-4 py-4 bg-[#fff] rounded-r-lg">
              <Image src="/search.png" alt="icon logo" height={20} width={20} />
            </button>
          </div>
          <div className="relative">
            <select name="cars" id="cars" className="appearance-none w-full bg-transparent border border-gray-300 py-[1rem] pl-3 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-[#2f2d2d  ] focus:border-[#fff] text-[#d6d6d6]">
              <option value="">Kategori</option>
              <option value="keagamaan">Keagamaan</option>
              <option value="teknologi">Teknologi</option>
              <option value="kesenian">Kesenian</option>
              <option value="organisasi">Organisasi</option>
              <option value="pkk">PKK</option>
              <option value="olahraga">Olahraga</option>
              <option value="bahasa">Bahasa</option>
              <option value="bela-diri">Bela Diri</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center px-02 h-[3.3rem] w-12 bg-white rounded-r-lg text-[#000]">
              <svg className="fill-current h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-[2rem]">
          <div className="grid grid-cols-4 gap-4">
            <div className="h-[25rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[20rem] bg-black mx-5 overflow-hidden rounded-lg">
                <Image src="/1.jpg" alt="" height={700} width={600} objectFit="cover" className="rounded-lg" />
              </div>
              <div className="mx-5 mt-2 grid grid-cols-3 gap-4">
                <p className="col-span-2 text-2xl ms-2 font-semibold">Paskibra</p>
                <button className="bg-[#2F2D2D] text-[#fff] font-semibold text-xl py-2 px-0 rounded-full">Detail</button>
              </div>
            </div>
            <div className="h-[25rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[20rem] bg-black mx-5 overflow-hidden rounded-lg">
                <Image src="/3.jpeg" alt="" height={675} width={460} objectFit="cover" className="rounded-lg" />
              </div>
              <div className="mx-5 mt-2 grid grid-cols-3 gap-4">
                <p className="col-span-2 text-2xl ms-2 font-semibold">Marching Band</p>
                <button className="bg-[#2F2D2D] text-[#fff] font-semibold text-xl py-2 px-0 rounded-full">Detail</button>
              </div>
            </div>
            <div className="h-[25rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[20rem] bg-black mx-5 overflow-hidden rounded-lg">
                <Image src="/4.jpeg" alt="" height={675} width={460} objectFit="cover" className="rounded-lg" />
              </div>
              <div className="mx-5 mt-2 grid grid-cols-3 gap-4">
                <p className="col-span-2 text-2xl ms-2 font-semibold">Basket </p>
                <button className="bg-[#2F2D2D] text-[#fff] font-semibold text-xl py-2 px-0 rounded-full">Detail</button>
              </div>
            </div>
            <div className="h-[25rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[20rem] bg-black mx-5 overflow-hidden rounded-lg">
                <Image src="/2.JPG" alt="" height={5} width={600} objectFit="cover" className="rounded-lg" />
              </div>
              <div className="mx-5 mt-2 grid grid-cols-3 gap-4">
                <p className="col-span-2 text-2xl ms-2 font-semibold">Futsal</p>
                <button className="bg-[#2F2D2D] text-[#fff] font-semibold text-xl py-2 px-0 rounded-full">Detail</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[2rem]">
          <div className="grid grid-cols-4 gap-4">
            <div className="h-[25rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[20rem] bg-black mx-5 overflow-hidden rounded-lg">
                <Image src="/5.jpg" alt="" height={700} width={600} objectFit="cover" className="rounded-lg" />
              </div>
              <div className="mx-5 mt-2 grid grid-cols-3 gap-4">
                <p className="col-span-2 text-2xl ms-2 font-semibold">Paskibra</p>
                <button className="bg-[#2F2D2D] text-[#fff] font-semibold text-xl py-2 px-0 rounded-full">Detail</button>
              </div>
            </div>
            <div className="h-[25rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[20rem] bg-black mx-5 overflow-hidden rounded-lg">
                <Image src="/6.jpg" alt="" height={675} width={460} objectFit="cover" className="rounded-lg" />
              </div>
              <div className="mx-5 mt-2 grid grid-cols-3 gap-4">
                <p className="col-span-2 text-2xl ms-2 font-semibold">Marching Band</p>
                <button className="bg-[#2F2D2D] text-[#fff] font-semibold text-xl py-2 px-0 rounded-full">Detail</button>
              </div>
            </div>
            <div className="h-[25rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[20rem] bg-black mx-5 overflow-hidden rounded-lg">
                <Image src="/7.jpeg" alt="" height={675} width={460} objectFit="cover" className="rounded-lg" />
              </div>
              <div className="mx-5 mt-2 grid grid-cols-3 gap-4">
                <p className="col-span-2 text-2xl ms-2 font-semibold">Basket </p>
                <button className="bg-[#2F2D2D] text-[#fff] font-semibold text-xl py-2 px-0 rounded-full">Detail</button>
              </div>
            </div>
            <div className="h-[25rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[20rem] bg-black mx-5 overflow-hidden rounded-lg">
                <Image src="/8.jpeg" alt="" height={675} width={460} objectFit="cover" className="rounded-lg" />
              </div>
              <div className="mx-5 mt-2 grid grid-cols-3 gap-4">
                <p className="col-span-2 text-2xl ms-2 font-semibold">Futsal</p>
                <button className="bg-[#2F2D2D] text-[#fff] font-semibold text-xl py-2 px-0 rounded-full">Detail</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default homePage;
