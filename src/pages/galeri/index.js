import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbarFeature.js";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Galeri"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Galeri = () => {
  const [galeriData, setGaleriData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setGaleriData(data.sort((a, b) => a.name.localeCompare(b.name))); // Sort data by name
    }
    fetchData();

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = galeriData.filter((galeri) => {
    return galeri.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const downloadImage = (imageUrl) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.jpg");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="mx-10 md:mx-12 mt-8">
          <input
            type="text"
            placeholder="Cari Foto"
            className="w-full md:w-[30rem] px-4 py-2 focus:outline-none focus:text-[#ffffff] text-[#fff] bg-transparent border border-[#ffffff] rounded-lg"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex ms-10 flex-wrap mt-5 md:mt-0">
          <button className="md:m-5 m-1 border border-[#fff] text-[#fff] p-2  rounded-lg hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Keagamaan</p>
          </button>
          <button className="md:m-5  m-1 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Teknologi</p>
          </button>
          <button className="md:m-5  m-1 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Kesenian</p>
          </button>
          <button className="md:m-5  m-1 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Organisasi</p>
          </button>
          <button className="md:m-5  m-1 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">PKK</p>
          </button>
          <button className="md:m-5  m-1 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Olahraga</p>
          </button>
          <button className="md:m-5  m-1 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Bahasa</p>
          </button>
          <button className="md:m-5  m-1 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Bela Diri</p>
          </button>
        </div>
        <div className="mx-2 md:mx-10 grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">
          {filteredData.map((galeri) => (
            <div key={galeri.id}>
              <div className="h-[18rem] bg-[#3d3d3d7a] mx-5 overflow-hidden rounded-lg relative">
                <div className="flex absolute items-center justify-between w-full z-50">
                  <div className="px-2 py-1 bg-[#fff] justify-center items-center flex m-2 rounded-2xl drop-shadow-md">
                    <p className="text-[#000] font-semibold text-[10px]">10 Agustus, 2023</p>
                  </div>
                  <div className="unduh px-1 py-1 bg-[#fff] justify-center items-center flex m-2 rounded-full drop-shadow-md" onClick={() => downloadImage(galeri.image)}>
                    <Image src="/more.png" alt="" width={20} height={20} />
                  </div>
                </div>
                <p className="absolute bottom-2 text-xl font-semibold text-[#fff] drop-shadow-2xl z-50" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                  {galeri.name}
                </p>
                {galeri.image && <img src={galeri.image} alt={galeri.name} height={700} width={700} objectFit="cover" className="rounded-lg" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />}
              </div>
            </div>
          ))}
        </div>
        {/* Scroll-to-top button */}
        {showScrollButton && (
          <div className="z-50 fixed bottom-10 right-5 md:right-10 bg-[#fff] px-2 py-2 md:px-4 md:py-4 rounded-full shadow cursor-pointer" onClick={scrollToTop}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className="md:w-7 w-6">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18V2m0 0l7 7m-7-7L3 9"></path>
              </g>
            </svg>
          </div>
        )}
      </main>
    </>
  );
};

export default Galeri;
