import Image from "next/image";
import Navbar from "../../components/navbar/navbarFeature.jsx";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
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
      <main className="md:mx-[8rem]">
        <div className="md:mx-[5rem] mx-2 grid md:grid-cols-3 grid-cols-2 gap-4 md:mt-[4rem] mt-[2rem] bg-[#fff] md:p-5 p-2 rounded-lg">
          <div className=" rounded-lg md:h-[32rem] bg-[#ebe3e3b9] h-auto p-5 mt-2 col-span-2 md:col-span-1">
            <div className="relative">
              <input type="text" placeholder="cari eskul" className="px-2 py-2 w-full rounded-lg focus:outline-none border border-[#000] bg-transparent focus:text-[#363535] text-[#363535]" value={searchTerm} onChange={handleSearchChange} />
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
            <p className="mt-3 font-semibold text-[#000000] text-sm md:text-xl">Kategori</p>
            <div className="mx-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`md:m-1 m-1 border border-[#000] p-2 rounded-lg hover:bg-[#fff] hover:text-[#000] hover:drop-shadow-lg hover:border-[#fff] ${
                    selectedCategory === category ? "bg-[#fff] text-[#000] drop-shadow-lg" : "text-[#000]"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  <p className="text-xs md:text-xs">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-2 md:mx-0 mx-1">
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
              .filter((pengumuman) => pengumuman.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((pengumuman) => {
                const uploadDate = new Date(pengumuman.uploadDate);
                const currentDate = new Date();
                const timeDiff = currentDate.getTime() - uploadDate.getTime();
                const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Hitung selisih hari

                // Buat teks waktu upload yang sesuai
                let timeText = "";
                if (daysDiff === 1) {
                  timeText = "1 hari yang lalu";
                } else if (daysDiff > 1) {
                  timeText = "${daysDiff} hari yang lalu";
                } else {
                  timeText = "Hari ini";
                }

                return (
                  <div key={pengumuman.id}>
                    <div className="h-auto bg-[#ebe3e3b9] p-5 rounded-xl mt-2">
                      <div className="h-[12rem] w-full bg-[#00000083] flex justify-center items-center">
                        {pengumuman.image && <img src={pengumuman.image} alt={pengumuman.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />}
                      </div>
                      <p className="mt-2 font-bold text-3xl">{pengumuman.name}</p>
                      <p className="mt-2">{pengumuman.pengumuman.length > 100 ? pengumuman.pengumuman.substring(0, 110) + "..." : pengumuman.pengumuman}</p>
                      <div className="flex items-center mt-5">
                        <div className="h-7 px-3 bg-[#e9e1e1a1] rounded-xl flex items-center justify-center">
                          <div className="h-5 w-5 bg-white rounded-full items-center flex justify-center">
                            <Image src="/assets/update.png" alt="" height={10} width={10} />
                          </div>
                          <p className="text-[10px] px-1">{timeText}</p>
                        </div>
                        <div className="w-7 h-7 bg-[#e9e1e1a1] flex items-center justify-center rounded-full ms-3" onClick={() => handleShowDetail(pengumuman.id)}>
                          <Image src="/assets/speech-bubble.png" alt="" height={15} width={15} />
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
                          <button onClick={addComment} className="py-2 px-4 bg-[#90e6f0] text-white rounded-lg mt-2 w-full">
                            Kirim
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
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
    </>
  );
};

export default Pengumuman;
