import Image from "next/image";
import Link from "next/link";

const login = () => {
  return (
    <div className="relative bg-[#fff] h-[100vh] w-[100%] flex justify-center items-center flex-col">
      <div className="absolute top-7 left-0 ps-10 flex items-center">
        <Link href="/">
          <Image src="/logo-sekolah.png" alt="" height={30} width={50} />
        </Link>
        <h1 className="text-3xl font-bold text-[#9A9A9A] ml-2">Login</h1>
      </div>
      <form className="h-[30rem] w-[25rem] bg-[#fff] drop-shadow-2xl rounded-lg justify-center items-center">
        <p className="text-[#9A9A9A] font-semibold text-[2rem] text-center mt-5">Welcome</p>
        <div className="mx-10 mt-11">
          <label className="text-[#9A9A9A] font-semibold">Email</label>
          <input type="email" className="h-[3rem] w-[20rem] border border-[#9A9A9A] rounded-lg focus:outline-none px-4 py-4" />
          <label className="text-[#9A9A9A] font-medium">Password</label>
          <input type="password" className="h-[3rem] w-[20rem] border border-[#9A9A9A] rounded-lg focus:outline-none px-4 py-4" />
          <button className="h-[4rem] w-[20rem] bg-[#9A9A9A] text-[#fff] text-2xl rounded-xl mt-[4rem]">Login</button>
          <div className="flex items-center mt-2">
            <div className="h-[2px] w-[3rem] bg-[#9A9A9A] rounded-lg mx-1"></div>
            <p className="text-[#9A9A9A] text-[1rem]">login menggunakan google</p>
            <div className="h-[2px] w-[3rem] bg-[#9A9A9A] rounded-lg mx-1"></div>
          </div>
          <div className="flex justify-center items-center flex-col mt-3">
            <Image src="/google.png" alt="" height={50} width={20} className="text-center" />
          </div>
        </div>
      </form>
      <Image src="/Vector-1.svg" alt="" height={10} width={400} className="absolute mt-[14.5rem] mr-[75rem] z-10" />
      <Image src="/Vector-2.svg" alt="" height={10} width={550} className="absolute mt-[9rem] mr-[68rem]" />
      <Image src="/Vector-3.svg" alt="" height={10} width={550} className="absolute ms-[66rem] mb-[17rem]" />
      <Image src="/Vector-4.svg" alt="" height={10} width={550} className="absolute ms-[75rem] mb-[10rem]" />
    </div>
  );
};

export default login;
