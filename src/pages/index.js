"use client";
import { useState, useEffect } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbarhome.js";

const HomePage = () => {
  const [message, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyDONTPyCQJnFxZdAUvbKL-d5TR4tRKBok8";
  const MODEL_NAME = "gemini-1.0-pro-001";

  const genAI = new GoogleGenerativeAI(API_KEY);

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  useEffect(() => {
    const initChat = async () => {
      try {
        const newChat = await genAI.getGenerativeModel({ model: MODEL_NAME }).startChat({
          generationConfig,
          safetySettings,
          history: message.map((msg) => ({
            text: msg.text,
            role: msg.role,
          })),
        });
        setChat(newChat);
      } catch (error) {
        setError("Failed to initialixe char. please try again");
      }
    };
    initChat();
  }, []);

  const handleSendMessage = async () => {
    try {
      const userMessage = {
        text: userInput,
        role: "user",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setUserInput("");

      if (chat) {
        const result = await chat.sendMessage(userInput);
        const botMessage = {
          text: result.response.text(),
          role: "bot",
          timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      setError("Failed to send message. please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.prevenDefault();
      handleSendMessage();
    }
  };

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
      <div className="bg-[#ffffff] overflow-hidden md:mx-12 mx-2 mt-[-9rem] rounded-lg drop-shadow-lg">
        <div className="h-[5rem] bg-[#dfd6d6] items-center flex">
          <p className="text-[#7a7272] text-2xl font-semibold p-2">SmartChat</p>
        </div>
        <div className="h-[32rem] border-b border-gray-400 flex-1 overflow-y-auto p-3">
          {message.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}>
              <span className={`${msg.role === "user" ? ` text-[#000000]` : msg.role === "bot" ? `text-black` : ""}`}>{msg.text}</span>
              <p className={`text-xs text-black mt-1`}>{msg.role === "bot" ? "Bot" : "You"}</p>
            </div>
          ))}
        </div>
        <div className="relative md:px-5 px-2 m-2">
          <input type="text" placeholder="Cari jawaban" className="w-full px-2 py-2 md:px-4 md:py-4 bg-[#dfd6d6] rounded-lg focus:outline-none" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyPress} />
          <button onClick={handleSendMessage} className="absolute inset-y-1 md:inset-y-2 md:right-5 right-[-13px] flex items-center">
            <Image src="/kirim.png" alt="icon logo" height={50} width={50} className="w-[60%] md:w-[70%] lg:w-[90%] object-contain" />
          </button>
        </div>
      </div>
      {/* end smartchat */}
      {/* start about */}
      <div className="bg-[#ffffff] p-5 rounded-lg mt-[2rem] relative drop-shadow-lg">
        <div className="col-span-3 lg:w-[50rem] w-[19rem]">
          <p className="text-xl md:text-4xl font-bold text-[#000]">Tentang Eskul</p>
          <p className="pt-2 text-[#000] md:text-xl lg:text-2xl">
            Terdapat beragam ekskul yang mencakup 36 pilihan kegiatan ekstrakurikuler. Mulai dari bidang olahraga, seni, hingga teknologi, para siswa memiliki peluang untuk mengembangkan bakat dan minat mereka melalui berbagai kegiatan yang
            menarik dan mendidik.
          </p>
        </div>
        <div className="p-5">
          <Image src="/IMG/logo-black.png" alt="logo" height={30} width={100} />
        </div>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
          <Image src="/IMG/about1.JPG" alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
          <Image src="/IMG/8.jpeg" alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
          <Image src="/IMG/about3.jpeg" alt="eskul marching band" width={500} height={500} className="h-[22rem] rounded-lg mt-[1rem]" />
        </div>
      </div>
      {/* end about */}
      {/* start footer */}
      <div className="bg-[#ffffff] h-auto rounded-lg mt-[2rem] px-2 lg:px-10 drop-shadow-lg">
        <Image src="/IMG/logo-black.png" alt="logo in footer" width={100} height={100} className="pt-5" />
        <div className="flex justify-between mt-2 lg:mt-5">
          <p className="text-[#000] text-xs lg:text-xl lg:w-[40rem] w-[15rem]">Terima kasih telah mengunjungi situs kami. Kami senang bisa berbagi dengan Anda.</p>
          <div>
            <p className="text-[#000] text-xs">Hubungi kami</p>
            <div className="flex mt-2 justify-end">
              <Image src="/facebook.png" alt="icon sosmed facebook" height={30} width={30} style={{ marginRight: "10px", width: "auto", height: "20px " }} />
              <Image src="/youtube.png" alt="icon sosmed facebook" height={30} width={30} style={{ marginRight: "10px", width: "auto", height: "20px " }} />
              <Image src="/instagram.png" alt="icon sosmed facebook" height={30} width={30} style={{ width: "auto", height: "20px " }} />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-[100%] h-[1px] lg:h-1 rounded-lg mt-2"></div>
        <div className="flex justify-end mt-5">
          <p className="text-[#000] text-xs">© 2024 ARGA PRATAMA</p>
        </div>
        <div className="h-2"></div>
      </div>
      {/* end footer */}
      {/* Scroll-to-top button */}
      {showScrollButton && (
        <div className="z-50 fixed bottom-10 right-5 md:right-10 bg-[#90e6f0] drop-shadow-lg px-2 py-2 md:px-4 md:py-4 rounded-full shadow cursor-pointer" onClick={scrollToTop}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className="md:w-7 w-6">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18V2m0 0l7 7m-7-7L3 9"></path>{" "}
            </g>
          </svg>
        </div>
      )}
    </main>
  );
};

export default HomePage;
