import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { auth } from "../../firebase/firebaseConfig";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        // Generate random background color
        const randomColor = getRandomColor();
        setBackgroundColor(randomColor);
      } else {
        setUser(null);
        setBackgroundColor("");
      }
    });

    return unsubscribe;
  }, []);

  // Function to generate random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-[#2f2d2d] bg-opacity-50 backdrop-blur-lg rounded-full mx-[10rem] px-6 py-3 h-20 mt-5 z-50">
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={100} width={130} />
        </Link>
      </div>
      <ul className="flex text-white text-lg">
        <li className={router.pathname === "/forum" ? "active" : ""}>
          <Link href="/forum">Forum</Link>
        </li>
        <li className="mx-2"></li>
        <li className={router.pathname === "/forum/pengguna" ? "active" : ""}>
          <Link href="/forum/pengguna">Pengguna</Link>
        </li>
      </ul>
      <div className="btn-forum flex">
        {user ? (
          <div>
            {/* Display username if user is logged in */}
            <div className="rounded-full h-10 w-10 flex justify-center items-center mr-4" style={{ backgroundColor }}>
              <p className="text-white font-bold text-lg">{user.displayName.charAt(0)}</p>
            </div>
          </div>
        ) : (
          <button className="bg-transparent border border-[#fff] text-[#fff] font-bold py-2 px-4 rounded-full">
            <Link href="/login">Login</Link>
          </button>
        )}
      </div>
      <style jsx>{`
        .active {
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
