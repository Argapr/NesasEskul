import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function NesasPintar() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const handleAskQuestion = async () => {
    if (question.trim() === "") return;

    setIsLoading(true);

    const res = await fetch(`/api/answer?question=${encodeURIComponent(question)}`);
    const data = await res.json();

    setTimeout(() => {
      setMessages([...messages, { sender: "user", text: question }, { sender: "system", text: data.answer }]);
      setQuestion("");
      setIsLoading(false);
    }, 500); // Adjust delay as needed
  };

  useEffect(() => {
    const chatBoxElement = chatBoxRef.current;
    if (chatBoxElement) {
      setIsOverflow(chatBoxElement.scrollHeight > chatBoxElement.clientHeight);
    }
  }, [messages]);

  return (
    <div className="bg-[#ffffff] overflow-hidden md:mx-12 mx-2 rounded-lg drop-shadow-lg">
      <div className="h-[5rem] items-center flex">
        <p className="text-[#000] text-2xl font-semibold p-4">NesasPintar</p>
      </div>
      <div ref={chatBoxRef} className={`chat-box p-4 mb-4 h-[32rem] ${isOverflow ? "overflow-y-scroll flex flex-col" : ""}`}>
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="loading"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full">
            <img src="assets/smartchat-logo.png" alt="Logo" className="w-32 h-32 opacity-50" />
            <p className="mt-3 text-sm text-center">Tanyakan sesuatu seputar ekstrakulikuler yang ada di SMKN 1 SUBANG</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`message mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-3 py-2 rounded mb-1 ${message.sender === "user" ? "bg-[#90e6f0b0] text-white" : "bg-[#e0dada71]"}`} style={{ whiteSpace: "pre-wrap" }}>
                {message.text}
              </span>
            </div>
          ))
        )}
      </div>
      <div className="md:px-5 px-2 m-2 flex items-center">
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Tanyakan sesuatu..." className="px-2 py-2 md:px-4 md:py-4 bg-[#dfd6d69d] rounded-l-lg focus:outline-none w-full" />
        <button onClick={handleAskQuestion} className="bg-[#90e6f0] text-white px-4 py-2 md:py-4 rounded-r-lg">
          Tanya
        </button>
      </div>
    </div>
  );
}
