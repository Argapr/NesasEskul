import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbarFeature.js";

const deskripsiBerita = () => {
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
        <div className="mx-[12rem]">
          <h1 className="text-5xl font-bold text-[#fff]">Tari</h1>
          <div className="bg-black h-[30rem] mt-10 overflow-hidden">
            <Image src="/7.jpeg" alt="img eskul" height={100} width={1500} objectFit="cover" />
          </div>
          <p className="mt-12 text-[#fff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere. Tempor id eu nisl nunc mi ipsum. Sed odio morbi quis
            commodo odio aenean sed adipiscing diam. Volutpat est velit egestas dui id. Neque sodales ut etiam sit amet nisl purus in mollis. Suspendisse sed nisi lacus sed viverra tellus in hac. Diam phasellus vestibulum lorem sed. Nec
            tincidunt praesent semper feugiat. Enim ut tellus elementum sagittis vitae et leo. Ante metus dictum at tempor. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Pulvinar neque laoreet suspendisse
            interdum consectetur libero.
          </p>
          <p className="mt-10 text-[#fff]">
            Enim eu turpis egestas pretium aenean pharetra magna ac. Neque viverra justo nec ultrices dui sapien eget. Massa vitae tortor condimentum lacinia quis. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Sit amet nisl
            purus in mollis nunc. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Fusce ut placerat orci nulla pellentesque dignissim enim. Fringilla est ullamcorper eget nulla facilisi. Vitae auctor eu augue ut
            lectus arcu bibendum at. Sed augue lacus viverra vitae. Lobortis scelerisque fermentum dui faucibus in. Suscipit adipiscing bibendum est ultricies. Ac tortor dignissim convallis aenean et tortor at risus viverra. Amet mattis
            vulputate enim nulla aliquet porttitor. Pellentesque elit eget gravida cum sociis natoque penatibus et. Risus ultricies tristique nulla aliquet enim. Nulla aliquet porttitor lacus luctus accumsan.
          </p>
          <div className="mt-12 bg-black h-[20rem]"></div>
        </div>
      </main>
    </>
  );
};

export default deskripsiBerita;
