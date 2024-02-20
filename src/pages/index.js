import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbarhome.js";

const homePage = () => {
  return (
    <main className="h-screen grid place-items-center">
      <Navbar />
      <div className="bg-blue-500 h-[47rem] w-[95rem] rounded-lg mt-[2rem]"></div>
      {/* start smartchat */}
      <div className="bg-[#2F2D2D] h-[50rem] w-[90rem] mt-[-5rem] rounded-lg">
        <p className="text-white m-4 text-2xl font-semibold">SmartChat</p>
        <div className="w-[90rem] h-[40rem] flex flex-col justify-center items-center">
          <Image src="/smartchat-logo.png" alt="logo" height={100} width={100} />
          <p className="text-center mt-2 text-[#787070]">
            Berikan pertanyaan anda seputar eskul yang ada di <br /> SMK NEGERI 1 SUBANG
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <input type="text" placeholder="Cari jawaban" className="w-[80rem] px-4 py-4 rounded-lg focus:outline-none" />
            <button className="absolute inset-y-2 right-2 flex items-center px- py-4 border border-[#828282] rounded-lg">
              <Image src="/kirim.png" alt="icon logo" height={50} width={50} />
            </button>
          </div>
        </div>
      </div>
      {/* end smartchat */}
      {/* start about */}
      <div className="bg-[#2F2D2D] h-[50rem] w-[95rem] rounded-lg mt-[2rem]">
        <div className="grid grid-cols-3 gap-4 m-10">
          <div className="col-span-2">
            <p className="text-4xl text-white w-[50rem]">
              Terdapat beragam ekskul yang mencakup 36 pilihan kegiatan ekstrakurikuler. Mulai dari bidang olahraga, seni, hingga teknologi, para siswa memiliki peluang untuk mengembangkan bakat dan minat mereka melalui berbagai kegiatan
              yang menarik dan mendidik.
            </p>
          </div>
          <div className="ps-[15rem]">
            <ul className="text-white text-3xl">
              <li>
                <Link href="">Galeri</Link>
              </li>
              <li className="pt-2">
                <Link href="" className="text-[#ffffff7a]">
                  Pengumuman
                </Link>
              </li>
              <li className="pt-2">
                <Link href="" className="text-[#ffffff48]">
                  Jadwal
                </Link>
              </li>
              <li className="pt-2">
                <Link href="" className="text-[#ffffff24]">
                  Profil
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 m-10">
          <Image src="/logo.png" alt="logo about" width={300} height={300} className="mt-[17rem]" />
          <Image src="/1.JPG" alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
          <Image src="/2.JPG" alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
        </div>
        <div className="flex justify-center mt-[-1.5rem] ms-[-20rem]">
          <button className="border border-[#fff] text-white font-bold py-[-1rem] px-4 rounded-full">
            <Link href="/galeri">Lihat semua</Link>
          </button>
          <button className="bg-white py-4 px-4 rounded-full ">
            <Image src="/next-to-forum.png" alt="next-to-forum" height={25} width={25} className="rotate-[-25deg]" />
          </button>
        </div>
      </div>
      {/* end about */}
      {/* start footer */}
      <div className="bg-[#2F2D2D] h-[13rem] w-[95rem] rounded-lg mt-[2rem] px-10 mb-5" style={{ marginBottom: "2rem" }}>
        <p className="text-[#fff] text-lg mt-5">Hubungi kami</p>
        <div className="flex justify-between mt-5">
          <p className="text-white text-3xl">
            Terima kasih telah mengunjungi situs kami. <br /> Kami senang bisa berbagi dengan Anda.
          </p>
          <div className="flex mt-10">
            <Image src="/facebook.png" alt="icon sosmed facebook" height={30} width={30} style={{ marginRight: "10px", width: "auto", height: "30px " }} />
            <Image src="/youtube.png" alt="icon sosmed facebook" height={30} width={30} style={{ marginRight: "10px", width: "auto", height: "30px " }} />
            <Image src="/instagram.png" alt="icon sosmed facebook" height={30} width={30} style={{ width: "auto", height: "30px " }} />
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-[100%] h-1 rounded-lg mt-2"></div>
        <div className="flex justify-between mt-5">
          <Image src="/logo.png" alt="logo in footer" width={100} height={100} className="" />
          <ul className="flex text-[#fff]">
            <li style={{ marginRight: "1rem" }}>
              <Link href="">Beranda</Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link href="">Galeri</Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link href="">Pengumuman</Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link href="">Profil</Link>
            </li>
            <li>
              <Link href="">Jadwal</Link>
            </li>
          </ul>
          <p className="text-[#fff]">© 2024 ARGA PRATAMA</p>
        </div>
      </div>
      {/* end footer */}
      <div className="h-[0.5rem] w-[100rem]"></div>
    </main>
  );
};

export default homePage;
