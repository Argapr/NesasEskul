import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Import auth functions for email/password authentication and Google authentication
import { auth } from "../../firebase/firebaseConfig"; // Import auth object from firebaseConfig
import { useRouter } from "next/router"; // Import useRouter

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the router

  // Submit the form data to firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      router.push("/forum"); // Redirect to the forum page after successful login
    } catch (error) {
      console.error("Error logging in: ", error);
      alert("Failed to login. Please check your email and password.");
    }
  };

  // Handle login with Google
  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("Login with Google successful!");
      router.push("/forum"); // Redirect to the forum page after successful login
    } catch (error) {
      console.error("Error logging in with Google: ", error);
      alert("Failed to login with Google.");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-5 p-5 h-screen" style={{ backgroundImage: "url('/IMG/back-login.JPG')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="flex flex-col justify-between p-5">
        <img src="/IMG/logo-black.png" alt="" height={50} width={180} />
        <p className="text-white drop">
          Tumbuhkan Bakatmu, Temukan Passionmu: <br /> Bersama Eskul, Menyatu dalam Ekstrakurikuler!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl drop-shadow-xl flex justify-around items-center flex-col">
        <img src="/IMG/welcome-black.png" alt="logo welcome" height={200} width={200} />
        <div className="mx-[13rem] mt-[-10rem]">
          <p className="text-center text-[#555353]">Silakan login untuk memulai berdiskusi dan berinteraksi dengan komunitas di forum kami.</p>
          <input placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="h-[2.5rem] w-full border border-[#9A9A9A] rounded-full focus:outline-none px-4 py-4 mt-10" />
          <input placeholder="Ëntet yout Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} className="h-[2.5rem] w-full border border-[#9A9A9A] rounded-full focus:outline-none px-4 py-4 mt-3" />
          <button type="submit" className="h-[3.5rem] w-full bg-[#9A9A9A] text-[#fff] text-2xl rounded-full mt-[2.5rem]">
            Login
          </button>
          <div className="flex items-center py-3">
            <div className="mx-4 h-[1.3px] w-full rounded-full bg-[#a0a0a0]"></div>
            <p className="">or</p>
            <div className="mx-4 h-[1.3px] w-full rounded-full bg-[#a0a0a0]"></div>
          </div>
          <button className="h-[2.5rem] w-full border border-[#9A9A9A] rounded-full flex justify-center items-center" onClick={handleLoginWithGoogle}>
            <Image src="/google.png" alt="" height={50} width={18} />
            <p className="px-2 text-[#c4b8b8] text-sm">Log in with google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
