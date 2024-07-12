"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const dueDate = "2025-03-02";
  const [weeks, setWeeks] = useState('');
  const [days, setDays] = useState('');
  const [daysLeft, setDaysLeft] = useState('');

  const calculatePregnancyWeeks = (dueDate) => {
    const dueDateObj = new Date(dueDate); // 出産予定日 → Dateオブジェクト
    const currentDate = new Date(); // 現在の日付
    const diffInMillis = dueDateObj - currentDate; // 出産予定日 - 現在の日付（ミリ秒）
    const diffInDays = Math.floor(diffInMillis / (1000 * 60 * 60 * 24)); // ミリ秒 → 日

    const totalPregnancyDays = 280; // 280日（40週）

    const currentPregnancyDays = totalPregnancyDays - diffInDays; // 現在の妊娠日数

    const weeks = Math.floor(currentPregnancyDays / 7); // 何週
    const days = Math.floor(currentPregnancyDays % 7); // 何日

    console.log(diffInDays);

    return { weeks, days, diffInDays };
  };

  useEffect(() => {
    const result = calculatePregnancyWeeks(dueDate);
    setWeeks(result.weeks);
    setDays(result.days);
    setDaysLeft(result.diffInDays);
  }, [dueDate]);

  return (
    <div>
      <div className="text-center py-10 px-5">
        <p className="mb-2">出産予定日</p>
        <p className="font-medium text-2xl">{dueDate}</p>
        <p className="mt-2">あと{daysLeft}日</p>
      </div>
      <div className="text-center">
        <p>現在{weeks}週{days}日</p>
      </div>
    </div>
  );
}
