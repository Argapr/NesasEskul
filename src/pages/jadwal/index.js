// pages/jadwal.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar/navbarFeature.js';

const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateCalendar = (month, year) => {
  const totalDays = daysInMonth(month, year);
  const firstDay = new Date(year, month).getDay();
  const calendar = [];

  for (let i = 0; i < firstDay; i++) {
    const prevMonthDays = daysInMonth(month - 1 < 0 ? 11 : month - 1, month - 1 < 0 ? year - 1 : year);
    calendar.push({
      day: prevMonthDays - firstDay + i + 1,
      dayOfWeek: i,
      isInCurrentMonth: false,
    });
  }

  for (let i = 1; i <= totalDays; i++) {
    calendar.push({
      day: i,
      dayOfWeek: (firstDay + i - 1) % 7,
      isInCurrentMonth: true,
    });
  }

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
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');
  const [activeDay, setActiveDay] = useState(null);
  const [detail, setDetail] = useState('');

  useEffect(() => {
    const dummyEvents = [
      { kegiatan1: "Senin", kegiatan2: "Rabu", name: "Marching Band" },
      { kegiatan1: "Selasa", kegiatan2: "Rabu", name: "Futsal" },
      { kegiatan1: "Jum'at", kegiatan2: "Sabtu", name: "Paskibra" }
    ];
    setEvents(dummyEvents);
  }, []);

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

  const handleDayClick = (day, dayOfWeek) => {
    const dayName = dayNames[dayOfWeek];
    setSelectedDay(dayName);
    setActiveDay(day);

    const activities = events.filter(event => event.kegiatan1 === dayName || event.kegiatan2 === dayName);

    if (activities.length > 0) {
      setDetail(activities.map(activity => `<p>${activity.name}</p>`).join(''));
    } else {
      setDetail(null);
    }
  };

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
                          const isActive = activeDay === calendar[currentIndex].day && calendar[currentIndex].isInCurrentMonth;
                          return (
                            <td
                              key={i}
                              className={`border border-[#D9D3D3] relative ${calendar[currentIndex].isInCurrentMonth ? "font-bold" : "text-gray-300"} ${isActive ? 'bg-[#dad8d873] text-white' : ''}`}
                              onClick={() => calendar[currentIndex].day && handleDayClick(calendar[currentIndex].day, calendar[currentIndex].dayOfWeek)}
                            >
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
            <div className="p-5 text-2xl" dangerouslySetInnerHTML={{ __html: detail }}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Jadwal;
