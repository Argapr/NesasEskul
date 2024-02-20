import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbarFeature.js";

const homePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex m-12">
          <div className="h-[2rem] w-[2rem] rounded-full border border-[#fff] flex justify-center items-center">
            <Image src="/calendar.png" alt="" height={15} width={15} />
          </div>
          <p className="text-xl ms-5 text-[#fff]">21 - 27 Januari 2023</p>
        </div>
        <div className="mx-[7rem] flex justify-between items-center">
          <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
            <Link href="">Keagamaan</Link>
          </button>
          <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
            <Link href="">Teknologi</Link>
          </button>
          <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
            <Link href="">Kesenian</Link>
          </button>
          <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
            <Link href="">Organisasi</Link>
          </button>
          <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
            <Link href="">PKK</Link>
          </button>
          <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
            <Link href="">Olahraga</Link>
          </button>
          <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
            <Link href="">Bahasa</Link>
          </button>
          <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
            <Link href="">Bela Diri</Link>
          </button>
        </div>
        <div className="mt-[2rem] mx-[6rem]">
          <div className="grid grid-cols-4 gap-4">
            <div className="h-[23rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[18rem] bg-black mx-5 overflow-hidden rounded-lg relative">
                <div className="flex absolute items-center justify-between w-full">
                  <div className="h-[2rem] w-[7rem] bg-[#fff] justify-center items-center flex m-1 rounded-2xl">
                    <p className="text-[#000] font-semibold text-xs">10 Agustus, 2023</p>
                  </div>
                  <div className="h-[2rem] w-[2rem] bg-[#fff] justify-center items-center flex m-1 rounded-full">
                    <Image src="/more.png" alt="" width={20} height={20} />
                  </div>
                </div>
                <Image src="/4.jpeg" alt="" height={700} width={700} objectFit="cover" className="rounded-lg" />
              </div>
              <p className="col-span-2 text-2xl text-center mt-2 font-semibold">Basket</p>
            </div>
            <div className="h-[23rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[18rem] bg-black mx-5 overflow-hidden rounded-lg relative">
                <div className="flex absolute items-center justify-between w-full">
                  <div className="h-[2rem] w-[7rem] bg-[#fff] justify-center items-center flex m-1 rounded-2xl drop-shadow-2xl">
                    <p className="text-[#000] font-semibold text-xs">10 Agustus, 2023</p>
                  </div>
                  <div className="h-[2rem] w-[2rem] bg-[#fff] justify-center items-center flex m-1 rounded-full">
                    <Image src="/more.png" alt="" width={20} height={20} />
                  </div>
                </div>
                <Image src="/6.JPG" alt="" height={700} width={600} objectFit="cover" className="rounded-lg" />
              </div>
              <p className="col-span-2 text-2xl text-center mt-2 font-semibold">Tata Rias</p>
            </div>
            <div className="h-[23rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[18rem] bg-black mx-5 overflow-hidden rounded-lg relative">
                <div className="flex absolute items-center justify-between w-full">
                  <div className="h-[2rem] w-[7rem] bg-[#fff] justify-center items-center flex m-1 rounded-2xl drop-shadow-2xl">
                    <p className="text-[#000] font-semibold text-xs">10 Agustus, 2023</p>
                  </div>
                  <div className="h-[2rem] w-[2rem] bg-[#fff] justify-center items-center flex m-1 rounded-full">
                    <Image src="/more.png" alt="" width={20} height={20} />
                  </div>
                </div>
                <Image src="/3.jpeg" alt="" height={700} width={600} objectFit="cover" className="rounded-lg" />
              </div>
              <p className="col-span-2 text-2xl text-center mt-2 font-semibold">Marching Band</p>
            </div>
            <div className="h-[23rem] bg-[#fff] rounded-lg pt-5">
              <div className="h-[18rem] bg-black mx-5 overflow-hidden rounded-lg relative">
                <div className="flex absolute items-center justify-between w-full">
                  <div className="h-[2rem] w-[7rem] bg-[#fff] justify-center items-center flex m-1 rounded-2xl drop-shadow-2xl">
                    <p className="text-[#000] font-semibold text-xs">10 Agustus, 2023</p>
                  </div>
                  <div className="h-[2rem] w-[2rem] bg-[#fff] justify-center items-center flex m-1 rounded-full">
                    <Image src="/more.png" alt="" width={20} height={20} />
                  </div>
                </div>
                <Image src="/8.jpeg" alt="" height={700} width={600} objectFit="cover" className="rounded-lg" />
              </div>
              <p className="col-span-2 text-2xl text-center mt-2 font-semibold">Hover</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default homePage;
