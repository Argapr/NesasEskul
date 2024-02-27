import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbarFeature.js";

const HomePage = () => {
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
          <NavButton href="">Keagamaan</NavButton>
          <NavButton href="">Teknologi</NavButton>
          <NavButton href="">Kesenian</NavButton>
          <NavButton href="">Organisasi</NavButton>
          <NavButton href="">PKK</NavButton>
          <NavButton href="">Olahraga</NavButton>
          <NavButton href="">Bahasa</NavButton>
          <NavButton href="">Bela Diri</NavButton>
        </div>
        <div className="mt-[2rem] mx-[6rem]">
          <div className="grid grid-cols-4 gap-4">
            <Card title="Basket" imageUrl="/4.jpeg" />
            <Card title="Tata Rias" imageUrl="/6.JPG" />
            <Card title="Marching Band" imageUrl="/3.jpeg" />
            <Card title="Hover" imageUrl="/8.jpeg" />
          </div>
        </div>
      </main>
    </>
  );
};

const NavButton = ({ href, children }) => (
  <button className="border border-[#fff] h-[40px] w-[100px] rounded-xl text-[#fff]">
    <Link href={href}>{children}</Link>
  </button>
);

const Card = ({ title, imageUrl }) => (
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
      <Image src={imageUrl} alt="" height={700} width={700} objectFit="cover" className="rounded-lg" />
    </div>
    <p className="col-span-2 text-2xl text-center mt-2 font-semibold">{title}</p>
  </div>
);

export default HomePage;
