"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const dueDate = "2025-03-02";
  const [weeks, setWeeks] = useState('');
  const [days, setDays] = useState('');
  const [daysLeft, setDaysLeft] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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

    return { weeks, days, diffInDays };
  };

  useEffect(() => {
    const result = calculatePregnancyWeeks(dueDate);
    setWeeks(result.weeks);
    setDays(result.days);
    setDaysLeft(result.diffInDays);
    setIsLoading(false);
  }, [dueDate]);

  return (
    <div className="h-screen">
      <div className="p-5 h-full flex items-center justify-center">
        {isLoading ? (
          <div className="text-center">
            <span className="loader"></span>
          </div>
        ) : (
          <div>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-title">予定日</div>
                <div className="stat-value text-2xl">2025年3月2日</div>
              </div>
              <div className="stat">
                <div className="stat-title">現在</div>
                <div className="stat-value text-2xl">{weeks}週{days}日</div>
              </div>
              <div className="stat">
                <div className="stat-title">あと</div>
                <div className="stat-value text-2xl">{daysLeft}日</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
