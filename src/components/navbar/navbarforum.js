import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-[5rem] bg-[#fff] flex justify-between items-center px-[10rem] drop-shadow-lg">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/IMG/logo-black.png" alt="" height={50} width={100} />
        </Link>
        <div className="relative">
          <input type="text" placeholder="cari eskul" className="bg-[#f3eeee85] rounded-lg px-3 py-2 focus:outline-none ms-10 placeholder:text-[#a19e9e] w-[15rem]" />
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
      <div className="flex">
        <p className="text-xl font-semibold">Login</p>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
          </g>
        </svg>
      </div>
    </nav>
  );
};
export default Navbar;
