import { useEffect, useState } from 'react';

export default function InfoSection({ daysLeft, weeks, days, months }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // beforeinstallpromptイベントでプロンプトを保存
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleAddToHomeScreen = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('PWA added to home screen');
      } else {
        console.log('PWA installation dismissed');
      }
      setDeferredPrompt(null);
    }
  };

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

      {/* ホーム画面に追加ボタン */}
      {isInstallable && (
        <div className="fixed bottom-0 left-0 w-full p-4 bg-blue-600 text-white">
          <button
            className="w-full py-2 font-bold text-center"
            onClick={handleAddToHomeScreen}
          >
            ホーム画面に追加
          </button>
        </div>
      )}
    </div>
  );
}
