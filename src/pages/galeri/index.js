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
        <div className="flex m-12">
          <div className="h-[2rem] w-[2rem] rounded-full border border-[#fff] flex justify-center items-center">
            <Image src="/calendar.png" alt="" height={15} width={15} />
          </div>
          <p className="text-xl ms-5 text-[#fff]">21 - 27 Januari 2023</p>
        </div>
        {/* <div className="mx-[7rem] flex justify-between items-center">
          <button>Keagamaan</button>
          <button>Teknologi</button>
          <button>Kesenian</button>
          <button>Organisasi</button>
          <button>PKK</button>
          <button>Olahraga</button>
          <button>Bahasa</button>
          <button>Bela Diri</button>
        </div> */}
        <div className="mx-10 grid grid-cols-4 gap-5">
          {galeriData.map((galeri) => (
            <div key={galeri.id}>
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
                  {galeri.image && <img src={galeri.image} alt={galeri.name} height={700} width={700} objectFit="cover" className="rounded-lg" />}
                </div>
                <p className="col-span-2 text-2xl text-center mt-2 font-semibold">{galeri.name}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Galeri;
