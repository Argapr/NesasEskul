import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbarFeature.js";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Profil"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Profil = () => {
  const [profilData, setProfilData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setProfilData(data.sort((a, b) => a.name.localeCompare(b.name))); // Sort data by name
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

  const filteredData = profilData.filter((profil) => {
    return profil.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="md:mx-10 md:mt-[5rem] mt-[3rem] mx-2">
        <div className="grid md:grid-cols-4 grid-cols-5 gap-4">
          <div className="col-span-3 md:col-span-3 relative">
            <input type="text" placeholder="Cari Eskul" className="w-full px-3 md:h-14 h-10 md:px-4 md:py-4 rounded-lg focus:outline-none border border-[#fff] bg-transparent" value={searchTerm} onChange={handleSearchChange} />
            <button className="absolute top-0 right-0 md:h-[3.5rem] h-[2.5rem] px-5 flex items-center bg-[#fff] rounded-r-lg">
              <Image src="/search.png" alt="icon logo" height={20} width={20} />
            </button>
          </div>
          <div className="relative col-span-2 md:col-span-1">
            <select name="cars" id="cars" className="appearance-none w-full bg-transparent border border-gray-300 h-10 md:h-14 pl-3 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-[#2f2d2d  ] focus:border-[#fff] text-[#d6d6d6]">
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
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center px-02 md:h-[3.5rem] w-12 bg-white rounded-r-lg text-[#000]">
              <svg className="fill-current h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-[2rem]">
          <div className="grid md:grid-cols-4 gap-4">
            {filteredData.map((profil) => (
              <div key={profil.id}>
                <div className="h-[7rem] bg-[#fff] rounded-lg flex items-center px-8 relative">
                  <div className="flex items-center">
                    <div className="h-[60px] w-[60px]">{profil.image && <img src={profil.image} alt={profil.name} height={700} width={100} objectFit="cover" />}</div>
                    <div className="ms-2">
                      <p className="text-2xl font-semibold">{profil.name}</p>
                      <p className="text-sm font-light">Ekstrakulikuler</p>
                    </div>
                  </div>
                  <button className="bg-[#2F2D2D] text-[#fff] font-normal text-lg rounded-full px-2 py-0 absolute bottom-2 right-2">Detail</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Konten Anda */}
        {showScrollButton && (
          <div className="z-50 fixed bottom-10 right-5 md:right-10 bg-[#fff] px-2 py-2 md:px-4 md:py-4 rounded-full shadow cursor-pointer drop-shadow-2xl" onClick={scrollToTop}>
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

export default Profil;
