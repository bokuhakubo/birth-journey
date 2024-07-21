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
      <div className="px-5 pt-10 pb-20">
        {isLoading ? (
          <div className="text-center">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="max-w-sm">
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="text-gray-600">予定日</p>
                <p className="text-xl font-bold text-black">2025年3月2日</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 mt-4">
                <p className="text-gray-600">現在</p>
                <p className="text-xl font-bold text-black">{weeks}週{days}日</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 mt-4">
                <p className="text-gray-600">あと</p>
                <p className="text-xl font-bold text-black">{daysLeft}日</p>
              </div>
            </div>

            <div className="mt-20 max-w-sm">
              <div>
                <p className="font-mono font-medium text-sm text-gray-600 border-b border-gray-600 mb-2 pb-1">7/6（土）</p>
                <p className="font-medium">胎嚢(たいのう)確認</p>
                <p></p>
              </div>
              <div className="mt-8">
                <p className="font-mono font-medium text-sm text-gray-600 border-b border-gray-600 mb-2 pb-1">7/20（土）</p>
                <p className="font-medium">心拍確認</p>
                <p className="text-sm mt-2">1.2センチに成長</p>
              </div>
              <div className="mt-8">
                <p className="font-mono font-medium text-sm text-gray-600 border-b border-gray-600 mb-2 pb-1">7/29（月）</p>
                <p className="font-medium">診察予定</p>
                <p></p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
