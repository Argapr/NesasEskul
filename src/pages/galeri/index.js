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

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setGaleriData(data.sort((a, b) => a.name.localeCompare(b.name))); // Sort data by name
    }
    fetchData();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="m-10">
          <input type=" text" placeholder="Cari Foto" className="px-4 py-2 focus:outline-none focus:text-[#ffffff] bg-transparent border border-[#ffffff] rounded-lg" />
        </div>
        <div className="flex ms-10 flex-wrap">
          <button className="md:m-5 m-2 border border-[#fff] text-[#fff] p-2  rounded-lg hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Keagamaan</p>
          </button>
          <button className="md:m-5  m-2 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Teknologi</p>
          </button>
          <button className="md:m-5  m-2 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Kesenian</p>
          </button>
          <button className="md:m-5  m-2 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Organisasi</p>
          </button>
          <button className="md:m-5  m-2 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">PKK</p>
          </button>
          <button className="md:m-5  m-2 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Olahraga</p>
          </button>
          <button className="md:m-5  m-2 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Bahasa</p>
          </button>
          <button className="md:m-5  m-2 border border-[#fff] text-[#fff] p-2 rounded-xl hover:bg-[#fff] hover:text-[#000]">
            <p className="text-xs md:text-lg">Bela Diri</p>
          </button>
        </div>

        <div className="mx-2 md:mx-10 grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">
          {galeriData.map((galeri) => (
            <div key={galeri.id}>
              <div className="h-[18rem] bg-[#3d3d3d7a] mx-5 overflow-hidden rounded-lg relative">
                <div className="flex absolute items-center justify-between w-full z-50">
                  <div className="px-2 py-1 bg-[#fff] justify-center items-center flex m-2 rounded-2xl drop-shadow-md">
                    <p className="text-[#000] font-semibold text-[10px]">10 Agustus, 2023</p>
                  </div>
                  <div className="px-1 py-1 bg-[#fff] justify-center items-center flex m-2 rounded-full drop-shadow-md">
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
      </main>
    </>
  );
};

export default Galeri;
