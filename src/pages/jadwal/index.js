import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbarFeature.js";
import Head from "next/head";
import { useState } from "react";

const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateCalendar = (month, year) => {
  const totalDays = daysInMonth(month, year);
  const firstDay = new Date(year, month).getDay();
  const calendar = [];

  // Menambahkan sel kosong di awal kalender
  for (let i = 0; i < firstDay; i++) {
    const prevMonthDays = daysInMonth(month - 1 < 0 ? 11 : month - 1, month - 1 < 0 ? year - 1 : year);
    calendar.push({
      day: prevMonthDays - firstDay + i + 1,
      dayOfWeek: i,
      isInCurrentMonth: false,
    });
  }

  // Menambahkan tanggal bulan saat ini
  for (let i = 1; i <= totalDays; i++) {
    calendar.push({
      day: i,
      dayOfWeek: (firstDay + i - 1) % 7,
      isInCurrentMonth: true,
    });
  }

  // Menambahkan sel kosong di akhir kalender
  const remainingDays = 7 - (calendar.length % 7);
  for (let i = 0; i < remainingDays; i++) {
    calendar.push({
      day: i + 1,
      dayOfWeek: (firstDay + totalDays + i) % 7,
      isInCurrentMonth: false,
    });
  }

  return calendar;
};

const Jadwal = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const calendar = generateCalendar(month, year);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pb-5">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10 md:mx-[6rem] mx-1 md:mt-[7rem] mt-8">
          <div className="col-span-2 justify-center items-center rounded-xl bg-[#ffffff] md:p-5 p-3 drop-shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#632222]">
                {new Date(year, month).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <div className="flex">
                <button className="mr-4" onClick={prevMonth}>
                  <Image src="/IMG/back.png" alt="" height={20} width={20} />
                </button>
                <button className="ml-4" onClick={nextMonth}>
                  <Image src="/IMG/next.png" alt="" height={20} width={20} />
                </button>
              </div>
            </div>
            <table className="w-full h-[25rem] border-collapse bg-[#fff] mt-2">
              <thead>
                <tr>
                  {dayNames.map((dayName, index) => (
                    <th key={index} className="border border-[#D9D3D3] md:p-4 p-0 text-sm md:text-lg text-center bg-[#E7E7E7]">
                      {dayName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendar.map((day, index) => {
                  if (index % 7 === 0) {
                    return (
                      <tr key={index}>
                        {[...Array(7).keys()].map((i) => {
                          const currentIndex = index + i;
                          return (
                            <td key={i} className={`border border-[#D9D3D3] relative ${calendar[currentIndex].isInCurrentMonth ? "font-bold" : "text-gray-300"}`}>
                              {calendar[currentIndex].day && <span className="absolute top-1 right-2 p-1">{calendar[currentIndex].day}</span>}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-[#ffffff] md:h-auto h-[25rem] rounded-xl drop-shadow-lg md:col-span-1 col-span-2 md:mx-0 mx-7">
            <div className="h-[4rem] rounded-t-xl bg-[#e0dbdb] items-center flex ps-10">
              <p className="text-[#fff] font-semibold text-xl">Detail Kegiatan Eskul</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Jadwal;
