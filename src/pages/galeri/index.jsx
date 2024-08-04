import Navbar from "../../components/Navbar/navbarFeature.jsx";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig.jsx";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Image from "next/image.js";

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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ["keagamaan", "kesenian", "teknologi", "bela-diri", "organisasi", "pkk", "olahraga", "bahasa"];
  const [isDownloadLinkVisible, setIsDownloadLinkVisible] = useState(false);

  const handleDownloadClick = async (image) => {
    try {
      // Ambil URL gambar dari objek galeri
      const imageUrl = image;

      // Buat elemen <a> dengan properti href dan download
      const a = document.createElement("a");
      a.href = imageUrl;
      a.download = "galeri_image.jpg";

      // Simulasikan klik pada elemen <a> untuk memulai unduhan
      a.click();
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Tangani perubahan kategori yang dipilih
  };

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
      <main>
        <div className="mx-10 md:mx-12 mt-8">
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
        </div>
        <p className="ms-12 mt-3 font-semibold text-[#000000] text-sm md:text-xl">Kategori</p>
        <div className="flex ms-10 flex-wrap mt-0 md:mt-0">
          {categories.map((category) => (
            <button
              key={category}
              className={`md:m-5 m-1 border border-[#000] p-2 rounded-lg hover:bg-[#fff] hover:text-[#000] hover:border-[#fff] hover:drop-shadow-lg ${
                selectedCategory === category ? "bg-[#fff] text-[#000] border border-[#fff] drop-shadow-lg" : "text-[#000]"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              <p className="text-xs md:text-lg">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            </button>
          ))}
        </div>
        <div className="mx-2 md:mx-10 grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">
          {galeriData
            .filter((galeri) => {
              // Jika tidak ada kategori yang dipilih, tampilkan semua data
              if (selectedCategory === null) {
                return true;
              } else {
                // Jika kategori telah dipilih, tampilkan hanya data dengan kategori yang sesuai
                return galeri.category === selectedCategory;
              }
            })
            .filter((galeri) => galeri.name.toLowerCase().includes(searchTerm.toLowerCase()))
            // .filter((galeri) => galeri.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((galeri) => {
              // Hitung selisih waktu antara waktu upload dan waktu sekarang
              const uploadDate = new Date(galeri.uploadDate);
              const currentDate = new Date();
              const timeDiff = currentDate.getTime() - uploadDate.getTime();
              const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Hitung selisih hari

              // Buat teks waktu upload yang sesuai
              let timeText = "";
              if (daysDiff === 1) {
                timeText = "1 hari yang lalu";
              } else if (daysDiff > 1) {
                timeText = "${daysDiff} hari yang lalu";
              } else {
                timeText = "Hari ini";
              }

              return (
                <div key={galeri.id} className="h-[18rem] bg-[#3d3d3d7a] mx-5 overflow-hidden rounded-lg relative">
                  <div className="flex absolute items-center justify-between w-full z-50">
                    <div className="px-2 py-1 bg-[#fff] justify-center items-center flex m-2 rounded-2xl drop-shadow-md">
                      <p className="waktu text-[#000] font-semibold text-[10px]">{timeText}</p>
                    </div>
                    <button className="unduh px-1 py-1 bg-[#fff] justify-center items-center flex m-2 rounded-full drop-shadow-md" onClick={() => handleDownloadClick(galeri.image)}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <p className="absolute bottom-2 text-xl font-semibold text-[#fff] drop-shadow-2xl z-50" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                    {galeri.name}
                  </p>
                  {galeri.image && <Image src={galeri.image} alt={galeri.name} height={700} width={700} objectFit="cover" className="rounded-lg" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />}
                  {isDownloadLinkVisible && (
                    <a href={galeri.image} download={galeri.name} style={{ display: "none" }}>
                      Download Image
                    </a>
                  )}
                </div>
              );
            })}
        </div>
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
    </>
  );
};

export default Galeri;
