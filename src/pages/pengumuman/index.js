import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbarFeature.js";

const homePage = () => {
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
        <div className="mx-[5rem] grid grid-cols-5 gap-4">
          <div>
            <div>
              <div class="h-[8rem] bg-black overflow-hidden relative">
                <div class="absolute flex z-50 right-2 top-2">
                  <div class="bg-[#fff] h-7 w-[4rem] rounded-2xl flex justify-center items-center">
                    <p class="text-[#000] font-semibold">Detail</p>
                  </div>
                  <div class="bg-[#fff] h-7 w-7 rounded-full flex justify-center items-center ms-[-2px]">
                    <Image src="/next-to-forum.png" alt="" height={15} width={15} style={{ rotate: "-25deg" }} />
                  </div>
                </div>
                <div class="relative">
                  <Image src="/4.jpeg" alt="" height={100} width={300} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
                </div>
              </div>
              <div className="ms-5">
                <h1 className="font-bold text-xl text-[#fff]">Basket</h1>
                <p className="text-[#dedddd] mt-1">
                  kjhadkhkahdkaifhahrifhlarfhlarcfha <br /> cnhalc v fafhae aihfaeaoaoef ohoa ahe
                </p>
                <div className="flex items-center mt-3">
                  <div className="h-6 w-6 rounded-full bg-[#fff] flex justify-center items-center">
                    <Image src="/update.png" alt="" height={15} width={15} />
                  </div>
                  <p className="ms-2 text-[#fff] text-[0.8rem]">2 Desember 2023</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div class="h-[8rem] overflow-hidden relative">
                <div class="absolute flex z-50 right-2 top-2">
                  <div class="bg-[#fff] h-7 w-[4rem] rounded-2xl flex justify-center items-center">
                    <p class="text-[#000] font-semibold">Detail</p>
                  </div>
                  <div class="bg-[#fff] h-7 w-7 rounded-full flex justify-center items-center ms-[-2px]">
                    <Image src="/next-to-forum.png" alt="" height={15} width={15} style={{ rotate: "-25deg" }} />
                  </div>
                </div>
                <div class="relative">
                  <Image src="/6.JPG" alt="" height={100} width={300} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
                </div>
              </div>
              <div className="ms-5">
                <h1 className="font-bold text-xl text-[#fff]">Tata Rias </h1>
                <p className="text-[#dedddd] mt-1">
                  kjhadkhkahdkaifhahrifhlarfhlarcfha <br /> cnhalc v fafhae aihfaeaoaoef ohoa ahe
                </p>
                <div className="flex items-center mt-3">
                  <div className="h-6 w-6 rounded-full bg-[#fff] flex justify-center items-center">
                    <Image src="/update.png" alt="" height={15} width={15} />
                  </div>
                  <p className="ms-2 text-[#fff] text-[0.8rem]">2 Desember 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div class="h-[23rem] bg-black overflow-hidden relative">
              <div class="absolute flex z-50 right-2 top-2">
                <div class="bg-[#fff] h-7 w-[4rem] rounded-2xl flex justify-center items-center">
                  <p class="text-[#000] font-semibold">Detail</p>
                </div>
                <div class="bg-[#fff] h-7 w-7 rounded-full flex justify-center items-center ms-[-2px]">
                  <Image src="/next-to-forum.png" alt="" height={15} width={15} style={{ rotate: "-25deg" }} />
                </div>
              </div>
              <div class="relative">
                <Image src="/3.jpeg" alt="" height={100} width={600} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
              </div>
            </div>
            <div className="ms-5">
              <h1 className="font-bold text-3xl text-[#fff]">Marching Band</h1>
              <p className="text-[#dedddd] mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Sem et tortor consequat id porta.
                Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Ut ornare lectus sit amet est placerat in egestas. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.
              </p>
              <div className="flex items-center mt-3">
                <div className="h-6 w-6 rounded-full bg-[#fff] flex justify-center items-center">
                  <Image src="/update.png" alt="" height={15} width={15} />
                </div>
                <p className="ms-2 text-[#fff] text-[0.8rem]">2 Desember 2023</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex">
              <div class="h-[20rem] relative bg-black bg-opacity-50 backdrop-blur-3xl w-[120rem]">
                <div class="absolute flex z-50 right-2 top-2">
                  <div class="bg-[#fff] h-7 w-[4rem] rounded-2xl flex justify-center items-center">
                    <p class="text-[#000] font-semibold">Detail</p>
                  </div>
                  <div class="bg-[#fff] h-7 w-7 rounded-full flex justify-center items-center ms-[-2px]">
                    <Image src="/next-to-forum.png" alt="" height={15} width={15} style={{ rotate: "-25deg" }} />
                  </div>
                </div>
                <Image src="/1.JPG" alt="" height={100} width={400} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
              </div>
              <div className="ms-5">
                <h1 className="font-bold text-3xl text-[#fff]">Paskibra</h1>
                <p className="text-[#dedddd] mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Sem et tortor consequat id porta.
                  Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Ut ornare lectus sit amet est placerat in egestas. Nec dui nunc mattis enim ut tellus elementum sagittis vitae.
                </p>
                <div className="flex items-center mt-3">
                  <div className="h-6 w-6 rounded-full bg-[#fff] flex justify-center items-center">
                    <Image src="/update.png" alt="" height={15} width={15} />
                  </div>
                  <p className="ms-2 text-[#fff] text-[0.8rem]">2 Desember 2023</p>
                </div>
              </div>
            </div>
            <div className="flex mt-5">
              <div class="h-[15rem] relative bg-black bg-opacity-50 backdrop-blur-3xl w-[100rem]">
                <div class="absolute flex z-50 right-2 top-2">
                  <div class="bg-[#fff] h-7 w-[4rem] rounded-2xl flex justify-center items-center">
                    <p class="text-[#000] font-semibold">Detail</p>
                  </div>
                  <div class="bg-[#fff] h-7 w-7 rounded-full flex justify-center items-center ms-[-2px]">
                    <Image src="/next-to-forum.png" alt="" height={15} width={15} style={{ rotate: "-25deg" }} />
                  </div>
                </div>
                <Image src="/7.jpeg" alt="" height={100} width={400} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
              </div>
              <div className="ms-5">
                <h1 className="font-bold text-3xl text-[#fff]">Paskibra</h1>
                <p className="text-[#dedddd] mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Sem et tortor consequat id porta.
                </p>
                <div className="flex items-center mt-3">
                  <div className="h-6 w-6 rounded-full bg-[#fff] flex justify-center items-center">
                    <Image src="/update.png" alt="" height={15} width={15} />
                  </div>
                  <p className="ms-2 text-[#fff] text-[0.8rem]">2 Desember 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default homePage;
