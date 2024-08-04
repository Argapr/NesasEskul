"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar/navbarFeature.js";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useRouter } from "next/router.js";
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
  const router = useRouter();
  const [selectedProfile, setSelectedProfile] = useState(null);

  const showOverlay = (profile) => {
    setSelectedProfile(profile);
  };

  const hideOverlay = () => {
    setSelectedProfile(null);
  };
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
        <div className="relative md:w-[30rem] w-full">
          <input
            type="text"
            placeholder="Cari Foto"
            className="w-full md:w-[30rem] px-4 py-2 focus:outline-none focus:text-[##494646] text-[#494646] bg-transparent border border-[#000000] rounded-lg"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button style={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)" }} className="h-8 w-8 rounded-lg bg-[#fff] flex items-center flex-col justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="mt-[2rem] mx-5">
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
                  <button onClick={() => showOverlay(profil)} className="bg-[#90e6f0] text-[#fff] font-normal text-lg rounded-lg px-2 py-0 absolute bottom-2 right-2">
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Detail Profile */}
          {selectedProfile && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-5 rounded-lg">
                <div className="justify-end flex items-center">
                  <button onClick={hideOverlay}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          opacity="0.5"
                          d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
                          fill="#1C274C"
                        ></path>{" "}
                        <path
                          d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0607 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
                          fill="#1C274C"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="mt-[-5px]">
                  <h1 className="text-4xl font-bold">{selectedProfile.name}</h1>
                  <p className="mt-2 font-medium">Pembimbing: {selectedProfile.pembimbing}</p>
                  <p className="mt-2 font-medium">Jumlah: {selectedProfile.jumlah} Orang</p>
                  <p className="text-lg w-[35rem] mt-5">{selectedProfile.deskripsi}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Button To Top */}
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
