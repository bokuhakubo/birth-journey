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
    <div>
      <div className="px-5 py-20">
        {isLoading ? (
          <div className="text-center">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="flex justify-center">
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
            <div className="mt-10 border-l-4 border-black pl-4">
              <div>
                <p>7/6（土）</p>
                <p>胎嚢(たいのう)確認</p>
                <p></p>
              </div>
              <div className="mt-8">
                <p>7/20（土）</p>
                <p>心拍確認</p>
                <p>1.2センチ</p>
              </div>
              <div className="mt-8">
                <p>7/29（月）</p>
                <p>診察予定</p>
                <p></p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
