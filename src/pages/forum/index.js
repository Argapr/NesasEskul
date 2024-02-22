import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbarforum.js";

const forumHome = () => {
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
            <div className="h-[5rem] bg-[#fff] shadow-xl flex items-center ps-5 rounded-t-lg">
              <Image src="/popularity.png" alt="" height={50} width={50} />
              <p className="text-xl font-medium ms-3">Populer</p>
            </div>
            <div className=" bg-[#fff] mt-5 shadow-xl pt-2">
              <div className="h-12 mx-2 flex justify-between items-center">
                <div className="h-10 w-10 rounded-full bg-black relative flex items-center">
                  <Image src="/profil.jpeg" alt="" height={50} width={50} objectFit="cover" className="rounded-full" />
                  <div className="ms-2">
                    <h1 className="font-bold text-2xl">Arga</h1>
                  </div>
                </div>
                <div>
                  <button className="border border-[#747474] bg-transparent text-[#747474] h-7 w-[6rem] rounded-full mx-1">Keagamaan</button>
                </div>
              </div>
              <div className="question">
                <p className="judul font-bold ms-5">Ada apa aja eskul di smea?</p>
                <p className="deskripsi font-normal ms-5">saya membutuhkan jawaban ini utnuk tes masuk eskul yang ada di smkn 1 subang</p>
                <div className="bg-[#302f2f] h-[20rem] relative overflow-hidden">
                  <Image src="/question1.png" alt="" height={400} width={400} objectFit="cover" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
                </div>
                <div className="flex items-center ms-5 mt-2">
                  <Image src="/speech-bubble.png" alt="" height={20} width={20} />
                  <p className="ms-2">5</p>
                </div>
                <div className="h-1"></div>
              </div>
            </div>
            <div className="bg-[#fff] mt-5 shadow-xl pt-2">
              <div className="h-12 mx-2 flex justify-between items-center">
                <div className="h-10 w-10 rounded-full bg-black relative flex items-center">
                  <Image src="/profil.jpeg" alt="" height={50} width={50} objectFit="cover" className="rounded-full" />
                  <div className="ms-2">
                    <h1 className="font-bold text-2xl">Yuga</h1>
                  </div>
                </div>
                <div>
                  <button className="border border-[#747474] bg-transparent text-[#747474] h-7 w-[6rem] rounded-full mx-1">PKK</button>
                </div>
              </div>
              <div className="question">
                <p className="judul font-bold ms-5">Ada apa aja eskul di smea?</p>
                <p className="deskripsi font-normal ms-5">saya membutuhkan jawaban ini utnuk tes masuk eskul yang ada di smkn 1 subang</p>
                <p className="font-semibold ms-5 mt-3">5 jawaban</p>
                <button className="h-[2rem] w-[6rem] bg-transparent border border-[#555353] flex ms-3 rounded-lg items-center justify-center">
                  <Image src="/icon-jawab.png" alt="icon jawab" height={30} width={20} />
                  <p className="">Jawab</p>
                </button>
                <div className="h-1"></div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-[#fff] font-semibold text-xl">Kategori</p>
            <button className="border border-[#fff]-100 bg-[#fff] text-[#000] h-7 w-[5rem] rounded-full mx-1 mt-3">Populer</button>
            <button className="border border-[#fff]-100 bg-transparent text-[#fff] h-7 w-[6rem] rounded-full mx-1">Keagamaan</button>
            <button className="border border-[#fff]-100 bg-transparent text-[#fff] h-7 w-[5rem] rounded-full mx-1">Teknologi</button>
            <button className="border border-[#fff]-100 bg-transparent text-[#fff] h-7 w-[3rem] rounded-full mx-1">PKK</button>
            <button className="border border-[#fff]-100 bg-transparent text-[#fff] h-7 w-[5.5rem] rounded-full mx-1 mt-3">Organisasi</button>
            <button className="border border-[#fff]-100 bg-transparent text-[#fff] h-7 w-[4rem] rounded-full mx-1">Bahasa</button>
            <button className="border border-[#fff]-100 bg-transparent text-[#fff] h-7 w-[5rem] rounded-full mx-1">Kesenian</button>
            <button className="border border-[#fff]-100 bg-transparent text-[#fff] h-7 w-[5rem] rounded-full mx-1">Olahraga</button>
            <button className="border border-[#fff]-100 bg-transparent text-[#fff] h-7 w-[5rem] rounded-full mx-1 mt-3">Bela Diri</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default forumHome;
