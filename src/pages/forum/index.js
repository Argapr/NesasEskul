import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/navbarforum.js";

const ForumHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("Populer");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <header className="h-[30rem] grid relative overflow-hidden">
        <Navbar />
        <div className="absolute inset-0">
          <Image src="/bg-forum.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
        <p className="text-[#fff] font-semibold text-5xl text-center z-10 mt-[10rem]">Selamat Datang di Forum NesasEskul</p>
        <div className="flex justify-center">
          <div className="relative">
            <input type="text" placeholder="Cari Forum  " className="w-[50rem] px-4 py-4 rounded-full shadow-xl focus:outline-none" />
            <button className="absolute inset-y-2 right-2 flex items-center px-5 py-4 bg-[#9A9A9A] rounded-full h-[2.5rem]">
              <p className="text-[#fff]">Cari</p>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-[20rem]">
        <div className="grid grid-cols-3 gap-3 mt-10 relative">
          <div className="col-span-2 ">
            <div className="judul h-[5rem] bg-[#fff] shadow-xl flex items-center ps-5 rounded-t-lg">
              {(selectedCategory === "Populer" && <Image src="/popularity.png" alt="" height={50} width={50} />) ||
                (selectedCategory === "Keagamaan" && <Image src="/keagamaan.png" alt="" height={50} width={50} />) ||
                (selectedCategory === "Kesenian" && <Image src="/kesenian.png" alt="" height={50} width={50} />) ||
                (selectedCategory === "PKK" && <Image src="/pkk.png" alt="" height={50} width={50} />) ||
                (selectedCategory === "Olahraga" && <Image src="/olahraga.png" alt="" height={50} width={50} />) ||
                (selectedCategory === "Organisasi" && <Image src="/organisasi.png" alt="" height={50} width={50} />) ||
                (selectedCategory === "Bela Diri" && <Image src="/bela-diri.png" alt="" height={50} width={50} />) ||
                (selectedCategory === "Bahasa" && <Image src="/bahasa.png" alt="" height={50} width={50} />) ||
                (selectedCategory === "Teknologi" && <Image src="/teknologi.png" alt="" height={50} width={50} />)}
              <p className="text-xl font-medium ms-3">{selectedCategory}</p>
            </div>
            <div className=" bg-[#fff] mt-5 shadow-xl pt-2">
              {selectedCategory === "Populer" && (
                <div className="h-12 mx-2 flex justify-between items-center">
                  <p className="text-black">hello world</p>
                </div>
              )}

              {selectedCategory === "Keagamaan" && (
                <div className="mx-5">
                  <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Nasyid</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E3E4A9] border-l-4 border-[#D9DD00] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Tahfidz</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9E4B3] border-l-4 border-[#5AEE73] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">BTQ</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9C5E4] border-l-4 border-[#4E98EA] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Kaligrafi</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E4C9A9] border-l-4 border-[#EB9F44] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Qiroat</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Marawis</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-3"></div>
                </div>
              )}

              {selectedCategory === "Teknologi" && (
                <div className="mx-5">
                  <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">HOVER</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E3E4A9] border-l-4 border-[#D9DD00] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">IT Club</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9E4B3] border-l-4 border-[#5AEE73] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">PLH</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-3"></div>
                </div>
              )}

              {selectedCategory === "Kesenian" && (
                <div className="mx-5">
                  <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Seni Tari</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E3E4A9] border-l-4 border-[#D9DD00] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Karawitan</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9E4B3] border-l-4 border-[#5AEE73] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Paduan Suara</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9C5E4] border-l-4 border-[#4E98EA] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Marching Band</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-3"></div>
                </div>
              )}

              {selectedCategory === "PKK" && (
                <div className="mx-5">
                  <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Tata Rias</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E3E4A9] border-l-4 border-[#D9DD00] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Tata Boga</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9E4B3] border-l-4 border-[#5AEE73] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Tata Busana</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-3"></div>
                </div>
              )}

              {selectedCategory === "Organisasi" && (
                <div className="mx-5">
                  <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">PMR</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E3E4A9] border-l-4 border-[#D9DD00] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Paskibra</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9E4B3] border-l-4 border-[#5AEE73] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Pramuka</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9C5E4] border-l-4 border-[#4E98EA] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">PIK-R</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-3"></div>
                </div>
              )}

              {selectedCategory === "Bahasa" && (
                <div className="mx-5">
                  <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">English Club</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E3E4A9] border-l-4 border-[#D9DD00] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Nihongo Kai</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9E4B3] border-l-4 border-[#5AEE73] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Literasi</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-3"></div>=
                </div>
              )}

              {selectedCategory === "Olahraga" && (
                <div className="mx-5">
                  <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Volley Ball</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E3E4A9] border-l-4 border-[#D9DD00] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Basket Ball</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9E4B3] border-l-4 border-[#5AEE73] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Bulu Tangkis</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9C5E4] border-l-4 border-[#4E98EA] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Hand Ball</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E4C9A9] border-l-4 border-[#EB9F44] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Futsal</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-3"></div>
                </div>
              )}

              {selectedCategory === "Bela Diri" && (
                <div className="mx-5">
                  <div className="Tarung-derajat h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Tarung Derajat</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#E3E4A9] border-l-4 border-[#D9DD00] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Pencak Silat</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-[5rem] bg-[#A9E4B3] border-l-4 border-[#5AEE73] rounded-xl mt-3">
                    <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Karate</h1>
                    <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                  </div>
                  <div className="h-3"></div>
                </div>
              )}
            </div>
          </div>
          <div className="kategori">
            <p className="text-[#fff] font-semibold text-xl">Kategori</p>
            <button className={`border ${selectedCategory === "Populer" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[5rem] rounded-full mx-1 mt-3`} onClick={() => handleCategoryClick("Populer")}>
              Populer
            </button>
            <button className={`border ${selectedCategory === "Keagamaan" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[6rem] rounded-full mx-1`} onClick={() => handleCategoryClick("Keagamaan")}>
              Keagamaan
            </button>
            <button className={`border ${selectedCategory === "Teknologi" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[6rem] rounded-full mx-1`} onClick={() => handleCategoryClick("Teknologi")}>
              Teknologi
            </button>
            <button className={`border ${selectedCategory === "Kesenian" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[5rem] rounded-full mx-1 mt-2`} onClick={() => handleCategoryClick("Kesenian")}>
              Kesenian
            </button>
            <button className={`border ${selectedCategory === "PKK" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[3.5rem] rounded-full mx-1`} onClick={() => handleCategoryClick("PKK")}>
              PKK
            </button>
            <button className={`border ${selectedCategory === "Organisasi" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[6rem] rounded-full mx-1`} onClick={() => handleCategoryClick("Organisasi")}>
              Organisasi
            </button>
            <button className={`border ${selectedCategory === "Bahasa" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[4rem] rounded-full mx-1 mt-2`} onClick={() => handleCategoryClick("Bahasa")}>
              Bahasa
            </button>
            <button className={`border ${selectedCategory === "Olahraga" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[5rem] rounded-full mx-1`} onClick={() => handleCategoryClick("Olahraga")}>
              Olahraga
            </button>
            <button className={`border ${selectedCategory === "Bela Diri" ? "bg-[#fff] text-[#000]" : "border-[#fff]-100 bg-transparent text-[#fff]"} h-7 w-[5rem] rounded-full mx-1`} onClick={() => handleCategoryClick("Bela Diri")}>
              Bela diri
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForumHome;
