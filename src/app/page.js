"use client";

import { useEffect, useState } from "react";
import { schedules } from "./lib/Schedules";
import InfoSection from "./components/InfoSection";
import RecordSection from "./components/RecordSection";

export default function Home() {
  const dueDate = "2025-03-02";
  const [months, setMonths] = useState('');
  const [weeks, setWeeks] = useState('');
  const [days, setDays] = useState('');
  const [daysLeft, setDaysLeft] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState("");
  const [isInfoSection, setIsInfoSection] = useState(true); // 切り替え状態
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const calculatePregnancyWeeks = (dueDate) => {
    const dueDateObj = new Date(dueDate);
    const currentDate = new Date();
    const diffInMillis = dueDateObj - currentDate;
    const diffInDays = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));
    const totalPregnancyDays = 280;
    const currentPregnancyDays = totalPregnancyDays - diffInDays;
    const weeks = Math.floor(currentPregnancyDays / 7);
    const days = currentPregnancyDays % 7;
    let months;
    if (weeks < 13) months = 1 + Math.floor(weeks / 4);
    else if (weeks < 25) months = 4 + Math.floor((weeks - 12) / 4);
    else if (weeks < 37) months = 7 + Math.floor((weeks - 24) / 4);
    else months = 10;
    return { months, weeks, days, diffInDays };
  };

  const renderSchedules = (month) =>
    schedules[month]?.map((schedule, index) => (
      <div key={index} className="mt-4 p-4 rounded-xl bg-white">
        <p className="font-mono text-sm text-gray-600 mb-2">{schedule.date}</p>
        <p className="font-medium">{schedule.event}</p>
        {schedule.imageUrl && (
          <img
            src={schedule.imageUrl}
            className="max-w-40 mt-2 cursor-pointer"
            onClick={() => openModal(schedule.imageUrl)}
          />
        )}
        {schedule.description && <p className="text-sm mt-2">{schedule.description}</p>}
      </div>
    ));

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const result = calculatePregnancyWeeks(dueDate);
    setMonths(result.months);
    setWeeks(result.weeks);
    setDays(result.days);
    setDaysLeft(result.diffInDays);
    setIsLoading(false);
    setCurrentMonth(
      new Date().toLocaleString("en", { month: "long" }).toLowerCase()
    );
  }, []);

  return (
    <div className="px-5 pt-10 pb-40 bg-gray-100">
      {isLoading ? (
        <div className="text-center">
          <span className="loader"></span>
        </div>
      ) : isInfoSection ? (
        <InfoSection daysLeft={daysLeft} weeks={weeks} days={days} months={months} />
      ) : (
        <RecordSection
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          renderSchedules={renderSchedules}
        />
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          onClick={closeModal}
        >
          <img src={modalImage} className="max-w-full max-h-full" alt="" />
        </div>
      )}

      {/* 下部ナビゲーションメニュー */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around pt-2 pb-10">
          <button
            className={`flex flex-col items-center ${
              isInfoSection ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setIsInfoSection(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="text-xs mt-1">ホーム</span>
          </button>

          <button
            className={`flex flex-col items-center ${
              !isInfoSection ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setIsInfoSection(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <span className="text-xs mt-1">記録</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
