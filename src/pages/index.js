import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbarhome.js";

const HomePage = () => {
  const [image1, setImage1] = useState("/1.JPG");
  const [image2, setImage2] = useState("/2.JPG");
  const [galleryLink, setGalleryLink] = useState("/galeri");

  // State to manage whether to show the scroll-to-top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional - smooth scrolling animation
    });
  };

  // Event listener to check if the user has scrolled down enough to show the button
  useEffect(() => {
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

  const handleLinkClick = (image1Url, image2Url, link, event) => {
    event.preventDefault();
    setImage1(image1Url);
    setImage2(image2Url);
    setGalleryLink(link);
  };
  return (
    <main className="lg:m-10 m-2">
      <div className="bg-blue-500 h-screen rounded-lg">
        <Navbar />
      </div>
      {/* start smartchat */}
      <div className="bg-[#2F2D2D] relative h-[40rem] lg:h-screen md:h-[50rem] md:mx-12 mx-2 mt-[-9rem] rounded-lg flex justify-center items-center flex-col">
        <p className="text-white absolute left-5 top-2 text-2xl font-semibold">SmartChat</p>
        <div className="w-full h-[40rem] flex flex-col justify-center items-center">
          <Image src="/smartchat-logo.png" alt="logo" height={100} width={100} className="mx-auto w-[15%] md:w-[10%] lg:w-[7%] object-contain" />
          <p className="text-center mt-2 text-[#787070] md:text-base lg:text-sm text-[12px]">
            Berikan pertanyaan anda seputar eskul yang ada di <br /> SMK NEGERI 1 SUBANG
          </p>
        </div>

        <div className="relative w-full md:px-10 px-5 mb-5">
          <input type="text" placeholder="Cari jawaban" className="w-full px-2 py-2 md:px-4 md:py-4 rounded-lg focus:outline-none" />
          <button className="absolute inset-y-1 md:inset-y-2 md:right-12 right-0 flex items-center">
            <Image src="/kirim.png" alt="icon logo" height={50} width={50} className="w-[60%] md:w-[70%] lg:w-[90%] object-contain" />
          </button>
        </div>
      </div>
      {/* end smartchat */}
      {/* start about */}
      <div className="bg-[#2f2d2d] h-auto rounded-lg mt-[2rem] relative">
        <div className="col-span-3 mx-5 lg:w-[50rem] w-[19rem]">
          <p className="pt-5 text-xl md:text-4xl font-bold text-[#fff]">Tentang Eskul</p>
          <p className="pt-2 text-white  md:text-xl lg:text-2xl">
            Terdapat beragam ekskul yang mencakup 36 pilihan kegiatan ekstrakurikuler. Mulai dari bidang olahraga, seni, hingga teknologi, para siswa memiliki peluang untuk mengembangkan bakat dan minat mereka melalui berbagai kegiatan yang
            menarik dan mendidik.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-5 lg:mx-10 mt-5 lg:mt7">
          <div className="flex items-center justify-start">
            <Image src="/logo.png" alt="logo" height={30} width={100} />
          </div>
          <div className="flex justify-center items-center flex-col">
            <ul className="text-white text-xl flex">
              <li className="m-2">
                <Link href="/" onClick={(e) => handleLinkClick("/1.JPG", "/2.JPG", "/galeri", e)}>
                  Galeri
                </Link>
              </li>
              <li className="m-2">
                <Link href="/" onClick={(e) => handleLinkClick("/2.JPG", "/1.JPG", "/pengumuman", e)}>
                  Pengumuman
                </Link>
              </li>
              <li className="m-2">
                <Link href="/" onClick={(e) => handleLinkClick("/profil.png", "/profil-image.jpg", "/profil", e)}>
                  Profil
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-5 lg:mx-10">
          <Image src="/logo.png" alt="logo about" width={300} height={300} className="mt-" />
          <Image src={image1} alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
          <Image src={image2} alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
        </div>

        <div className="flex justify-end lg:me-10 me-5 mt-5">
          <button className="border border-[#fff] text-white font-semibold px-2 rounded-full">
            <Link href={galleryLink} className="text-sm lg:text-lg">
              Lihat semua
            </Link>
          </button>
          <button className="bg-white h-6 w-6 lg:h-10 lg:w-10 rounded-full">
            <Link href={galleryLink} className="flex justify-center items-center flex-col">
              <Image src="/next-to-forum.png" alt="next-to-forum" height={25} width={25} className="rotate-[-25deg] w-[60%] md:w-[70%] lg:w-[70%] object-contain" />
            </Link>
          </button>
        </div>
        <div className="h-10"></div>
      </div>
      {/* end about */}
      {/* start footer */}
      <div className="bg-[#2F2D2D] h-auto rounded-lg mt-[2rem] px-2 lg:px-10" style={{ marginBottom: "2rem" }}>
        <Image src="/logo.png" alt="logo in footer" width={100} height={100} className="pt-5" />
        <div className="flex justify-between mt-2 lg:mt-5">
          <p className="text-white text-xs lg:text-xl lg:w-[40rem] w-[15rem]">Terima kasih telah mengunjungi situs kami. Kami senang bisa berbagi dengan Anda.</p>
          <div>
            <p className="text-[#fff] text-xs">Hubungi kami</p>
            <div className="flex mt-2 justify-end">
              <Image src="/facebook.png" alt="icon sosmed facebook" height={30} width={30} style={{ marginRight: "10px", width: "auto", height: "20px " }} />
              <Image src="/youtube.png" alt="icon sosmed facebook" height={30} width={30} style={{ marginRight: "10px", width: "auto", height: "20px " }} />
              <Image src="/instagram.png" alt="icon sosmed facebook" height={30} width={30} style={{ width: "auto", height: "20px " }} />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-[100%] h-[1px] lg:h-1 rounded-lg mt-2"></div>
        <div className="flex justify-end mt-5">
          <p className="text-[#fff] text-xs">© 2024 ARGA PRATAMA</p>
        </div>
        <div className="h-2"></div>
      </div>
      {/* end footer */}
      {/* Scroll-to-top button */}
      {showScrollButton && (
        <div className="fixed bottom-10 right-5 md:right-10 bg-[#fff] px-4 py-4 rounded-full shadow cursor-pointer" onClick={scrollToTop}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-7">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18V2m0 0l7 7m-7-7L3 9"></path>{" "}
            </g>
          </svg>
        </div>
      )}
    </main>
  );
};

export default HomePage;
