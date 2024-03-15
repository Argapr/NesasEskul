import Image from "next/image";
import Navbar from "@/components/navbar/navbarFeature";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebaseConfig.js";
import { collection, getDocs, addDoc, query, where, onSnapshot } from "firebase/firestore";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Pengumuman"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Pengumuman = () => {
  const [pengumumanData, setPengumumanData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ["keagamaan", "kesenian", "teknologi", "pkk", "bahasa", "bela-diri", "organisasi", "olahraga"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Tangani perubahan kategori yang dipilih
  };

  const handleShowDetail = (id) => {
    setSelectedPost(id);
    fetchComments(id);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setPengumumanData(data.sort((a, b) => a.name.localeCompare(b.name))); // Sort data by name
    }
    fetchData();

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchComments = async (postId) => {
    const q = query(collection(db, "Pengumuman", postId, "comments"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setComments(data);
    });

    return unsubscribe;
  };

  const addComment = async () => {
    if (!username.trim()) {
      alert("Masukkan username");
      return;
    }

    if (!newComment.trim()) {
      alert("Masukkan komentar");
      return;
    }

    // Menambahkan komentar ke dalam array state
    setComments([...comments, { username, comment: newComment }]);

    try {
      // Menyimpan data komentar ke dalam database
      const docRef = await addDoc(collection(db, "Pengumuman", selectedPost, "comments"), {
        username,
        comment: newComment,
      });
      console.log("Comment added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding comment: ", error);
    }

    // Mengosongkan input komentar setelah disimpan
    setNewComment("");
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="md:mx-[5rem] mx-2 grid md:grid-cols-5 gap-4 md:mt-[6rem] mt-[2rem]">
          <div className="mx-5 rounded-lg md:h-[32rem] h-[10rem] col-span-2 mt-6">
            <input type="text" placeholder="cari eskul" className="px-2 py-2 w-full rounded-lg focus:outline-none border border-[#fff] bg-transparent focus:text-[#fff] text-[#ffffff]" value={searchTerm} onChange={handleSearchChange} />
            <p className="mt-3 font-semibold text-[#ffffff] text-sm md:text-xl">Kategori</p>
            <div className="mx-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`md:m-1 m-1 border border-[#fff] p-2 rounded-lg hover:bg-[#fff] hover:text-[#000] ${selectedCategory === category ? "bg-[#fff] text-[#000]" : "text-[#fff]"}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  <p className="text-xs md:text-xs">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-2 md:mx-0 mx-1 mt-3">
            {pengumumanData
              .filter((pengumuman) => {
                // Jika tidak ada kategori yang dipilih, tampilkan semua data
                if (selectedCategory === null) {
                  return true;
                } else {
                  // Jika kategori telah dipilih, tampilkan hanya data dengan kategori yang sesuai
                  return pengumuman.kategori === selectedCategory;
                }
              })
              .filter((galeri) => galeri.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((pengumuman) => (
                <div key={pengumuman.id}>
                  <div className="h-auto bg-[#f0eded] p-5 rounded-xl mt-2">
                    <div className="h-[12rem] w-full bg-[#00000083] flex justify-center items-center">
                      {pengumuman.image && <img src={pengumuman.image} alt={pengumuman.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />}
                    </div>
                    <p className="mt-2 font-bold text-3xl">{pengumuman.name}</p>
                    <p className="mt-2">{pengumuman.pengumuman.length > 100 ? pengumuman.pengumuman.substring(0, 100) + "..." : pengumuman.pengumuman}</p>
                    <div className="flex items-center mt-5">
                      <div className="h-7 w-[7rem] bg-[#e9e1e1a1] rounded-xl flex items-center justify-center">
                        <div className="h-5 w-5 bg-white rounded-full items-center flex justify-center">
                          <Image src="/update.png" alt="" height={10} width={10} />
                        </div>
                        <p className="text-[10px] px-1">3, Januari, 2023</p>
                      </div>
                      <div className="w-7 h-7 bg-[#e9e1e1a1] flex items-center justify-center rounded-full ms-3" onClick={() => handleShowDetail(pengumuman.id)}>
                        <Image src="/speech-bubble.png" alt="" height={15} width={15} />
                      </div>
                    </div>
                  </div>
                  {selectedPost === pengumuman.id && (
                    <div className="h-auto bg-[#f0eded] p-5 rounded-xl mt-1">
                      <p>{pengumuman.pengumuman}</p>
                      <p className="mt-5 font-semibold">Komentar {comments.length}</p>
                      <div className="h-[1px] w-full bg-[#2b2a2a5b] mt-1"></div>
                      <div className="column-comment">
                        {comments.map((comment, index) => (
                          <div key={index} className="mt-3">
                            <p className="font-semibold">{comment.username}</p>
                            <p>{comment.comment}</p>
                          </div>
                        ))}
                      </div>
                      <div className="h-[1px] w-full bg-[#2b2a2a5b] mt-1"></div>
                      <div className="mt-3">
                        <div className="grid grid-cols-2 gap-2">
                          <input type="text" placeholder="Masukkan nama" value={username} onChange={(e) => setUsername(e.target.value)} className="py-2 px-4 focus:outline-none rounded-lg mt-2" />
                          <input type="text" placeholder="Berikan komentar" value={newComment} onChange={(e) => setNewComment(e.target.value)} className="py-2 px-4 focus:outline-none rounded-lg mt-2" />
                        </div>
                        <button onClick={addComment} className="py-2 px-4 bg-blue-500 text-white rounded-lg mt-2 w-full">
                          Kirim
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        {showScrollButton && (
          <div className="z-50 fixed bottom-10 right-5 md:right-10 bg-[#fff] px-2 py-2 md:px-4 md:py-4 rounded-full shadow cursor-pointer drop-shadow-2xl" onClick={scrollToTop}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className="md:w-7 w-6">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18V2m0 0l7 7m-7-7L3 9"></path>
              </g>
            </svg>
          </div>
        )}
      </main>
    </>
  );
};

export default Pengumuman;
