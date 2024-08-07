"use client";
import { useState, useEffect } from "react";
import NesasPintar from "../components/SmartChat";
import Image from "next/image";
import Navbar from "../components/navbar/navbarhome";
import Carousel from "../components/carousel";

const HomePage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="lg:m-8 m-2 ">
      <div className="relative h-screen rounded-lg mb-[-9rem]">
        <div className="carousel">
          <Carousel />
        </div>
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
      </div>
      {/* S: smartchat */}
      <NesasPintar />
      {/* E: smartchat */}
      {/* S: about */}
      <div className="bg-[#ffffff] p-5 rounded-lg mt-[2rem] relative drop-shadow-lg">
        <div className="col-span-3 lg:w-[50rem] w-[19rem]">
          <p className="text-xl md:text-4xl font-bold text-[#000]">Tentang Eskul</p>
          <p className="pt-2 text-[#000] md:text-xl lg:text-2xl">
            Terdapat beragam ekskul yang mencakup 36 pilihan kegiatan ekstrakurikuler. Mulai dari bidang olahraga, seni, hingga teknologi, para siswa memiliki peluang untuk mengembangkan bakat dan minat mereka melalui berbagai kegiatan yang
            menarik dan mendidik.
          </p>
        </div>
        <div className="p-5">
          <Image src="/assets/logo-black.png" alt="logo" height={30} width={100} />
        </div>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
          <Image src="/assets/about1.JPG" alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
          <Image src="/assets/8.jpeg" alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
          <Image src="/assets/about3.jpeg" alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
        </div>
      </div>
      {/* E: about */}
      {/* S: footer */}
      <div className="bg-[#ffffff] h-auto rounded-lg mt-[2rem] px-2 lg:px-10 drop-shadow-lg">
        <Image src="/assets/logo-black.png" alt="logo in footer" width={100} height={100} className="pt-5" />
        <div className="flex justify-between mt-2 lg:mt-5">
          <p className="text-[#000] text-xs lg:text-xl lg:w-[40rem] w-[15rem]">Terima kasih telah mengunjungi situs kami. Kami senang bisa berbagi dengan Anda.</p>
          <div>
            <p className="text-[#000] text-xs">Hubungi kami</p>
            <div className="flex mt-2 justify-end">
              <Image src="/assets/facebook.png" alt="icon sosmed facebook" height={30} width={30} style={{ marginRight: "10px", width: "auto", height: "20px " }} />
              <Image src="/assets/youtube.png" alt="icon sosmed facebook" height={30} width={30} style={{ marginRight: "10px", width: "auto", height: "20px " }} />
              <Image src="/assets/instagram.png" alt="icon sosmed facebook" height={30} width={30} style={{ width: "auto", height: "20px " }} />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-[100%] h-[1px] lg:h-1 rounded-lg mt-2"></div>
        <div className="flex justify-E: mt-5">
          <p className="text-[#000] text-xs">© 2024 ARGA PRATAMA</p>
        </div>
        <div className="h-2"></div>
      </div>
      {/* E: footer */}
      {/* Scroll-to-top button */}
      {showScrollButton && (
        <div className="z-50 fixed bottom-10 right-5 md:right-10 bg-[#90e6f0] drop-shadow-lg px-2 py-2 md:px-4 md:py-4 rounded-full shadow cursor-pointer" onClick={scrollToTop}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className="md:w-7 w-6">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18V2m0 0l7 7m-7-7L3 9"></path>{" "}
            </g>
          </svg>
        </div>
      )}
    </main>
  );
};

export default HomePage;