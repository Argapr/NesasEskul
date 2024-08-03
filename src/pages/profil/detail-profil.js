import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar/navbarFeature.js";

const deskripsiProfil = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex m-10">
          <Link href="#">
            <Image src="/back.png" alt="icon image" height={30} width={30} />
          </Link>
          <p className="text-[#fff] text-xl">Kembali</p>
        </div>
        <div className="bg-[#fff] mx-[10rem] h-[35rem] rounded-lg grid grid-cols-2 gap-4">
          <div className="h-[35rem] justify-center items-center col-start-1 row-span-2 flex flex-col relative">
            <div className="w-[20rem] h-[25rem] bg-black z-50 mb-[5rem] absolute rounded-lg overflow-hidden">
              <Image src="/3.jpeg" alt="img eskul" height={100} width={700} objectFit="cover" className="rounded-lg" />
            </div>
            <div className="w-[20rem] h-[25rem] bg-[#E4C9A9] mr-[10rem] absolute rounded-lg z-10 drop-shadow-2xl"></div>
            <div className="w-[20rem] h-[25rem] bg-[#A9E4B3] mt-[5rem] ms-[10rem] absolute rounded-lg drop-shadow-2xl"></div>
          </div>
          <div className="h-[35rem] pt-10">
            <h1 className="text-4xl font-bold">Marching Band</h1>
            <p className="mt-2 font-medium">Pembimbing: Mr. John Doe, S.Si., M.Sc.</p>
            <p className="mt-2 font-medium">Jumlah: 60 orang</p>
            <p className="text-lg w-[35rem] mt-5">
              egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus
              egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi
              morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default deskripsiProfil;
