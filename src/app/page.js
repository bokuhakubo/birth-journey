"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const dueDate = "2025-03-02";
  const [months, setMonths] = useState('');
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
              <div className="p-4 rounded-xl bg-white">
                <p className="font-mono font-medium text-sm text-gray-600 mb-2">7/6（土）</p>
                <p className="font-medium">胎嚢(たいのう)確認</p>
                <div className="mt-3">
                  <img src="/tainou.jpg" className="max-w-40" />
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white">
                <p className="font-mono font-medium text-sm text-gray-600 mb-2">7/20（土）</p>
                <p className="font-medium">心拍確認</p>
                <div className="mt-3">
                  <img src="/shinpaku.jpg" className="max-w-40" />
                  <p className="text-sm mt-2">1.2センチに成長</p>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white">
                <p className="font-mono font-medium text-sm text-gray-600 mb-2">7/24（水）</p>
                <p className="font-medium">母子健康手帳GET</p>
                <div className="mt-3">
                  <img src="/tetyou.jpg" className="max-w-40" />
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white">
                <p className="font-mono font-medium text-sm text-gray-600 mb-2">7/25（木）</p>
                <p className="font-medium">点滴</p>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white">
                <p className="font-mono font-medium text-sm text-gray-600 mb-2">7/26（金）</p>
                <p className="font-medium">点滴</p>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white">
                <p className="font-mono font-medium text-sm text-gray-600 mb-2">7/27（土）</p>
                <p className="font-medium">点滴</p>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white">
                <p className="font-mono font-medium text-sm text-gray-600 mb-2">7/28（日）</p>
                <p className="font-medium">点滴</p>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white">
                <p className="font-mono font-medium text-sm text-gray-600 mb-2">7/29（月）</p>
                <p className="font-medium">診察・点滴</p>
                <div className="mt-3">
                  <img src="/twocenti.jpg" className="max-w-40" />
                  <p className="text-sm mt-2">2センチに成長</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
