import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbarFeature.js";

const jadwal = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex">
          <div className="h-10 w-10 rounded-full border border-[#fff] justify-center">
            <Image src="/calendar.png" alt="" width={20} height={20} />
          </div>
          <p className="text-[#fff]">20 - 27 Januari</p>
        </div>
      </main>
    </>
  );
};

export default jadwal;
