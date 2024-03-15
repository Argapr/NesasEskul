import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbarforum";
import { useState } from "react";

const Forum = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [selectedEskul, setSelectedEskul] = useState(""); // State baru untuk menyimpan nama eskul yang sedang ditampilkan

  const toggleVisibility = (dropdown, eskul) => { // Menerima parameter baru 'eskul'
    setVisibleDropdown((prev) => (prev === dropdown ? null : dropdown));
    setSelectedEskul(eskul); // Perbarui state 'selectedEskul' dengan nama eskul yang diklik
  };

  return (
    <>
      <Navbar />
      <main className="px-[10rem]">
        <div className="grid grid-cols-3 gap-3 mt-12">
          <div className="col-span-2">
            <div className="bg-[#fff] drop-shadow-lg rounded-md p-5 h-[5rem]">
              <p className="judul font-semibold text-2xl">{selectedEskul}</p>
            </div>
            <div className="bg-[#fff] mt-3 drop-shadow-lg rounded-md p-5 h-[15rem]"></div>
          </div>
          <div className="bg-[#fff] rounded-md p-2 drop-shadow-lg">
            <p className="text-center font-mono text-2xl">Kategori</p>
            <div className="m-4">
              <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-start items-center">
                <Image src="/popularity.png" alt="" height={30} width={30} className="m-2" />
                <p className="text-lg font-normal">Populer</p>
              </div>
              {/* S: Keagamaan */}
              <div>
                <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src="/keagamaan.png" alt="" height={30} width={30} className="m-2" />
                    <p className="text-lg font-normal">Keagamaan</p>
                  </div>
                  <button onClick={() => toggleVisibility("Keagamaan")} className="me-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 17L6 9L18 9L12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {visibleDropdown === "Keagamaan" && (
                  <div className="mt-1 p-2 border border-[#e4dfdf] rounded-lg">
                    <div className="h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center" onClick={() => toggleVisibility("Keagamaan", "Nasyid")}>
                      <p className="text-sm ms-3">Nasyid</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Tahfidz</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">BTQ</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Kaligrafi</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Qiroat</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Marawis</p>
                    </div>
                  </div>
                )}
              </div>
              {/* E: keagamaan */}

              {/* S: Teknologi */}
              <div>
                <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src="/teknologi.png" alt="" height={30} width={30} className="m-2" />
                    <p className="text-lg font-normal">Teknologi</p>
                  </div>
                  <button onClick={() => toggleVisibility("teknologi")} className="me-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 17L6 9L18 9L12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {visibleDropdown === "teknologi" && (
                  <div className="mt-1 p-2 border border-[#e4dfdf] rounded-lg">
                    <div className="h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">HOVER</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">PLH</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">IT CLUB</p>
                    </div>
                  </div>
                )}
              </div>
              {/* E: Teknologi */}

              {/* S: PKK */}
              <div>
                <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src="/pkk.png" alt="" height={30} width={30} className="m-2" />
                    <p className="text-lg font-normal">PKK</p>
                  </div>
                  <button onClick={() => toggleVisibility("pkk")} className="me-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 17L6 9L18 9L12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {visibleDropdown === "pkk" && (
                  <div className="mt-1 p-2 border border-[#e4dfdf] rounded-lg">
                    <div className="h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Tata Rias</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Tata Boga</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Tata Busana</p>
                    </div>
                  </div>
                )}
              </div>
              {/* E: PKK */}

              {/* S: Organisasi */}
              <div>
                <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src="/organisasi.png" alt="" height={30} width={30} className="m-2" />
                    <p className="text-lg font-normal">Organisasi</p>
                  </div>
                  <button onClick={() => toggleVisibility("organisasi")} className="me-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 17L6 9L18 9L12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {visibleDropdown === "organisasi" && (
                  <div className="mt-1 p-2 border border-[#e4dfdf] rounded-lg">
                    <div className="h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">PMR</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Paskibra</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Pramuka</p>
                    </div>
                  </div>
                )}
              </div>
              {/* E: Organisasi */}

              {/* S: Olahraga */}
              <div>
                <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src="/olahraga.png" alt="" height={30} width={30} className="m-2" />
                    <p className="text-lg font-normal">Olahraga</p>
                  </div>
                  <button onClick={() => toggleVisibility("olahraga")} className="me-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 17L6 9L18 9L12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {visibleDropdown === "olahraga" && (
                  <div className="mt-1 p-2 border border-[#e4dfdf] rounded-lg">
                    <div className="h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Volley Ball</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Basket Ball</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Bulu Tangkis</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Hand Ball</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Futsal</p>
                    </div>
                  </div>
                )}
              </div>
              {/* E: Olahraga */}

              {/* S: Kesenian */}
              <div>
                <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src="/kesenian.png" alt="" height={30} width={30} className="m-2" />
                    <p className="text-lg font-normal">Kesenian</p>
                  </div>
                  <button onClick={() => toggleVisibility("kesenian")} className="me-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 17L6 9L18 9L12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {visibleDropdown === "kesenian" && (
                  <div className="mt-1 p-2 border border-[#e4dfdf] rounded-lg">
                    <div className="h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Seni Tari</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Karawitan</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Paduan Suara</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Marching Band</p>
                    </div>
                  </div>
                )}
              </div>
              {/* E: Kesenian */}

              {/* S: Bela Diri */}
              <div>
                <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src="/bela-diri.png" alt="" height={30} width={30} className="m-2" />
                    <p className="text-lg font-normal">Bela Diri</p>
                  </div>
                  <button onClick={() => toggleVisibility("bela-diri")} className="me-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 17L6 9L18 9L12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {visibleDropdown === "bela-diri" && (
                  <div className="mt-1 p-2 border border-[#e4dfdf] rounded-lg">
                    <div className="h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Tarung Derajat</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Pencak Silat</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Karate</p>
                    </div>
                  </div>
                )}
              </div>
              {/* E: Bela Diri */}

              {/* S: Bahasa */}
              <div>
                <div className="h-10 border-[#e4dfdf] border rounded-md flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <Image src="/bahasa.png" alt="" height={30} width={30} className="m-2" />
                    <p className="text-lg font-normal">Bahasa</p>
                  </div>
                  <button onClick={() => toggleVisibility("bahasa")} className="me-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 17L6 9L18 9L12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                {visibleDropdown === "bahasa" && (
                  <div className="mt-1 p-2 border border-[#e4dfdf] rounded-lg">
                    <div className="h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">English Club</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Nihongo Kai</p>
                    </div>
                    <div className="mt-2 h-7 border border-[#e4dfdf] hover:bg-[#e4dfdf] rounded-md flex items-center">
                      <p className="text-sm ms-3">Literasi</p>
                    </div>
                  </div>
                )}
              </div>
              {/* E: Bahasa */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Forum;