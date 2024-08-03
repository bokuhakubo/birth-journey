"use client"

import { useEffect, useState } from "react";
import { schedules } from "./lib/Schedules";


export default function Home() {
  const dueDate = "2025-03-02";
  const [months, setMonths] = useState('');
  const [weeks, setWeeks] = useState('');
  const [days, setDays] = useState('');
  const [daysLeft, setDaysLeft] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState("july");

  const calculatePregnancyWeeks = (dueDate) => {
    const dueDateObj = new Date(dueDate); // 出産予定日 → Dateオブジェクト
    const currentDate = new Date(); // 現在の日付

    dueDateObj.setHours(0, 0, 0, 0); // 時間部分をリセットして0時にセット
    currentDate.setHours(0, 0, 0, 0); // 時間部分をリセットして0時にセット

    const diffInMillis = dueDateObj - currentDate; // 出産予定日 - 現在の日付（ミリ秒）
    const diffInDays = Math.floor(diffInMillis / (1000 * 60 * 60 * 24)); // ミリ秒 → 日

    const totalPregnancyDays = 280; // 280日（40週）

    const currentPregnancyDays = totalPregnancyDays - diffInDays; // 現在の妊娠日数

    const weeks = Math.floor(currentPregnancyDays / 7); // 何週
    const days = Math.floor(currentPregnancyDays % 7); // 何日

    // 何ヶ月
    let months;
    if (weeks < 13) {
      months = 1 + Math.floor(weeks / 4); // 1〜12週
    } else if (weeks < 25) {
      months = 4 + Math.floor((weeks - 12) / 4); // 13〜24週
    } else if (weeks < 37) {
      months = 7 + Math.floor((weeks - 24) / 4); // 25〜36週
    } else {
      months = 10; // 37〜40週
    }

    return {months, weeks, days, diffInDays };
  };

  const renderSchedules = (month) => {
    return schedules[month].map((schedule, index) => (
      <div key={index} className="mt-4 p-4 rounded-xl bg-white">
        <p className="font-mono font-medium text-sm text-gray-600 mb-2">{schedule.date}</p>
        <p className="font-medium">{schedule.event}</p>
        {schedule.imageUrl && (
          <div className="mt-3">
            <img src={schedule.imageUrl} className="max-w-40" />
            {schedule.description && <p className="text-sm mt-2">{schedule.description}</p>}
          </div>
        )}
      </div>
    ));
  };

  useEffect(() => {
    const result = calculatePregnancyWeeks(dueDate);
    setMonths(result.months);
    setWeeks(result.weeks);
    setDays(result.days);
    setDaysLeft(result.diffInDays);
    setIsLoading(false);
  }, [dueDate]);

  return (
    <div>
      <div className="px-5 pt-10 pb-20 bg-gray-100">
        {isLoading ? (
          <div className="text-center">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="max-w-sm mx-auto">
              <div className="bg-white rounded-xl p-4">
                <p className="text-gray-600">予定日</p>
                <p className="text-xl font-bold text-black">2025年3月2日</p>
              </div>
              <div className="bg-white rounded-xl p-4 mt-4">
                <p className="text-gray-600">現在</p>
                <p className="text-xl font-bold text-black">{weeks}週{days}日（{months}ヶ月）</p>
              </div>
              <div className="bg-white rounded-xl p-4 mt-4">
                <p className="text-gray-600">あと</p>
                <p className="text-xl font-bold text-black">{daysLeft}日</p>
              </div>
            </div>
            <div className="mt-10 max-w-sm mx-auto">
              <h2 className="font-bold mb-4 text-xl">スケジュール</h2>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded ${currentMonth === "july" ? "bg-black text-white" : "bg-gray-200"}`}
                  onClick={() => setCurrentMonth("july")}
                >
                  7月
                </button>
                <button
                  className={`px-4 py-2 rounded ${currentMonth === "august" ? "bg-black text-white" : "bg-gray-200"}`}
                  onClick={() => setCurrentMonth("august")}
                >
                  8月
                </button>
              </div>
              <div className="mt-4">
                {renderSchedules(currentMonth)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
