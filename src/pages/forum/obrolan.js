import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/navbarforum.js";
import { useRouter } from "next/router";

const Question = () => {
  const [selectedEskul, setSelectedEskul] = useState("Null");
  const [searchInput, setSearchInput] = useState(""); // State untuk menyimpan nilai input pencarian
  const [showOverlay, setShowOverlay] = useState(false); // State untuk menampilkan atau menyembunyikan overlay
  const router = useRouter();

  useEffect(() => {
    const { eskul } = router.query;
    if (eskul) {
      setSelectedEskul(eskul);
    }
  }, [router.query]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value); // Mengubah nilai state input pencarian saat input berubah
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Mencegah perilaku default form submission
    const eskul = searchInput.trim();
    if (eskul !== "") {
      setSelectedEskul(eskul);
      router.push(`/forum/obrolan?eskul=${eskul}`);
    }
  };

  const handleEskulClick = (eskul) => {
    setSelectedEskul(eskul);
    router.push(`/forum/obrolan?eskul=${eskul}`);
  };

  const handleCategoryClick = (category) => {
    router.push(`/forum?category=${category}`);
  };

  const handleAddQuestionClick = () => {
    setShowOverlay(true); // Menampilkan overlay ketika tombol "Tambah" diklik
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false); // Menyembunyikan overlay ketika tombol close di dalam overlay diklik
  };

  const handleFormTypeChange = (type) => {
    setFormType(type); // Mengubah jenis form yang ditampilkan
  };

  const [formType, setFormType] = useState("pertanyaan"); // State untuk menentukan jenis form yang ditampilkan
  const handleImageInputChange = (event) => {
    const file = event.target.files[0]; // Mengambil file gambar pertama dari input
    const reader = new FileReader(); // Membuat pembaca file

    reader.onloadend = () => {
      const imageDataURL = reader.result; // Mengonversi gambar menjadi URL data
      const infoDiv = document.getElementById("info"); // Mengambil div kolom informasi berdasarkan ID
      infoDiv.innerHTML += `<img src="${imageDataURL}" alt="Gambar" style="max-width:200px;height:auto;" />`; // Menambahkan gambar ke dalam kolom informasi
    };

    if (file) {
      reader.readAsDataURL(file); // Membaca file sebagai URL data
    }
  };

  return (
    <>
      <header className="h-[30rem] grid relative overflow-hidden">
        <Navbar />
        <div className="absolute inset-0">
          <Image src="/bg-forum.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
        <p className="text-[#fff] font-semibold text-5xl text-center z-10 mt-[10rem]">Selamat Datang di Forum NesasEskul</p>
        <form onSubmit={handleSearchSubmit} className="flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari Eskul"
              className="w-[50rem] px-4 py-4 rounded-full shadow-xl focus:outline-none"
              value={searchInput} // Menghubungkan nilai input dengan state
              onChange={handleSearchInputChange} // Menangani perubahan input
            />
            <button type="submit" className="absolute inset-y-2 right-2 flex items-center px-5 py-4 bg-[#9A9A9A] rounded-full h-[2.5rem]">
              <p className="text-[#fff]">Cari</p>
            </button>
          </div>
        </form>
      </header>

      <main className="mx-[20rem]">
        <div className="grid grid-cols-3 gap-3 mt-10 relative">
          <div className="col-span-2 ">
            <div className="judul h-[5rem] bg-[#fff] shadow-xl flex items-center ps-5 rounded-t-lg">
              {(selectedEskul === "Nasyid" && <Image src="/keagamaan.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Tahfidz" && <Image src="/keagamaan.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "BTQ" && <Image src="/keagamaan.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Kaligrafi" && <Image src="/keagamaan.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Qiroat" && <Image src="/keagamaan.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Marawis" && <Image src="/keagamaan.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Seni Tari" && <Image src="/kesenian.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Karawitan" && <Image src="/kesenian.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Paduan Suara" && <Image src="/kesenian.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "marching band" && <Image src="/kesenian.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Tata Rias" && <Image src="/pkk.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Tata Boga" && <Image src="/pkk.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Tata Busana" && <Image src="/pkk.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Volley Ball" && <Image src="/olahraga.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Basket Ball" && <Image src="/olahraga.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Bulu Tangkis" && <Image src="/olahraga.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Hand Ball" && <Image src="/olahraga.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Futsal" && <Image src="/olahraga.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "PMR" && <Image src="/organisasi.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Paskibra" && <Image src="/organisasi.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Pramuka" && <Image src="/organisasi.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "PIK-R" && <Image src="/organisasi.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Tarung Derajat" && <Image src="/bela-diri.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Pencak Silat" && <Image src="/bela-diri.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Karate" && <Image src="/bela-diri.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "English Club" && <Image src="/bahasa.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Nihongo Kai" && <Image src="/bahasa.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "Literari" && <Image src="/bahasa.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "HOVER" && <Image src="/teknologi.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "PLH" && <Image src="/teknologi.png" alt="" height={50} width={50} />) ||
                (selectedEskul === "IT Club" && <Image src="/teknologi.png" alt="" height={50} width={50} />)}
              <div className="ms-3">
                <p className="text-xl font-medium">{selectedEskul}</p>
                <p className="text-sm font-light">Ekstrakulikuler</p>
              </div>
            </div>
            <div>
              {/* Tampilkan konten sesuai dengan selectedEskul */}
              {selectedEskul === "Paskibra" && (
                <div className="h-[5rem] bg-[#E4A9A9] border-l-4 border-[#EA4444] rounded-xl mt-3 cursor-pointer">
                  <h1 className="font-bold text-[#000] ms-5 pt-3 text-2xl">Nasyid</h1>
                  <p className="text-[#292929] font-light ms-5">Ekstrakulikuler</p>
                </div>
              )}
            </div>
          </div>
          <div className="kategori">
            <button className="tambah h-10 w-[12rem] bg-[#3d3a3a] rounded-xl flex items-center justify-center" onClick={handleAddQuestionClick}>
              <Image src="/icon-tambah.png" alt="icon tambah pertanyaan" height={30} width={30} />
              <p className="text-[#fff]">Tambah pertanyaan</p>
            </button>
            {/* Overlay */}
            {showOverlay && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <div className="bg-white p-8 rounded-lg h-auto">
                  {/* tombol untuk menutup overflay */}
                  <button type="button" className="rounded-md" onClick={handleCloseOverlay}>
                    <Image src="/close.png" alt="" height={15} width={15} />
                  </button>
                  {/* Tombol untuk memilih jenis form */}
                  <div className="flex justify-evenly items-center w-[40rem]">
                    <button className={`text-xl pertanyaan ${formType === "pertanyaan" ? "text-blue-500 font-bold" : "text-gray-500"}`} onClick={() => setFormType("pertanyaan")}>
                      Tambah Pertanyaan
                    </button>
                    <button className={`text-xl informasi ${formType === "informasi" ? "text-blue-500 font-bold" : "text-gray-500"}`} onClick={() => setFormType("informasi")}>
                      Buat Informasi
                    </button>
                  </div>

                  {/* Form untuk menambah pertanyaan atau informasi */}
                  {formType === "pertanyaan" && (
                    <form className="pertanyaan">
                      {/* Input untuk pertanyaan */}
                      <div className="mb-4 mt-5">
                        <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                          Pertanyaan
                        </label>
                        <input type="text" id="question" name="question" placeholder="awali dengan APA dan BAGAIMANA dan MENGAPA" className="mt-1 p-2 w-full border-[#706b6b] border-b-2 focus:outline-none" />
                      </div>
                      {/* Tombol untuk mengirim pertanyaan*/}
                      <div className="flex justify-end items-end">
                        <button type="button" className="bg-blue-300 px-4 py-2 rounded-md">
                          Buat
                        </button>
                      </div>
                    </form>
                  )}

                  {formType === "informasi" && (
                    <form className="informasi">
                      {/* Input untuk informasi */}
                      <div
                        className="mb-4 mt-5 border-[#706b6b] border-b-2 focus:outline-none"
                        contentEditable="true"
                        id="info"
                        placeholder="Buat informasi di sini"
                        style={{ minHeight: "100px", padding: "10px", border: "1px solid #706b6b", borderRadius: "5px" }}
                      ></div>
                      {/* Tombol untuk mengirim informasi*/}
                      <div className="flex justify-between items-center">
                        <label htmlFor="imageInput" className="cursor-pointer">
                          <Image src="/image-gallery.png" alt="icon tambah img" height={20} width={20} />
                          <input type="file" id="imageInput" accept="image/*" className="hidden" onChange={handleImageInputChange} />
                        </label>
                        <button type="button" className="bg-blue-300 px-4 py-2 rounded-md">
                          Buat
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}
            {/* Kategori */}
            <p className="text-[#fff] font-semibold text-xl mt-3">Kategori</p>
            <button className=" rounded-full mx-1 mt-3 h-7 w-[5rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("Populer")}>
              Populer
            </button>
            <button className=" rounded-full mx-1 h-7 w-[6rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("Keagamaan")}>
              Keagamaan
            </button>
            <button className=" rounded-full mx-1 h-7 w-[6rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("Teknologi")}>
              Teknologi
            </button>
            <button className=" rounded-full mx-1 h-7 mt-2 w-[5rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("Kesenian")}>
              Kesenian
            </button>
            <button className=" rounded-full mx-1 h-7 w-[3.5rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("PKK")}>
              PKK
            </button>
            <button className=" rounded-full mx-1 h-7 w-[6rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("Organisasi")}>
              Organisasi
            </button>
            <button className=" rounded-full mx-1 h-7 mt-2 w-[4rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("Bahasa")}>
              Bahasa
            </button>
            <button className=" rounded-full mx-1 h-7 w-[5rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("Olahraga")}>
              Olahraga
            </button>
            <button className=" rounded-full mx-1 h-7 w-[5rem] border border-[#fff]  text-[#ffff]" onClick={() => handleCategoryClick("Bela Diri")}>
              Bela Diri
            </button>
            {/* Tambahkan kategori lainnya */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Question;
