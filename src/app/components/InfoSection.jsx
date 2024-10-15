export default function InfoSection({ daysLeft, weeks, days, months }) {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-xl p-4">
        <div className="grid grid-cols-2">
          <div>
            <p className="text-gray-600">あと</p>
            <p className="text-xl font-bold text-black">{daysLeft}日</p>
          </div>
          <div>
            <p className="text-gray-600">現在</p>
            <p className="text-xl font-bold text-black">
              {weeks}週{days}日<span className="text-base">({months}ヶ月)</span>
            </p>
          </div>
        </div>
        <div>
          <img src="/baby.png" alt="Baby" />
        </div>
        <div>
          <p className="text-gray-600">予定日</p>
          <p className="text-xl font-bold text-black">2025年3月2日</p>
          <p className="text-sm text-black mt-2">
            帝王切開は陣痛前に行うことが多いので、早ければ2025年2月16日頃...?
          </p>
        </div>
      </div>
    );
  }
  