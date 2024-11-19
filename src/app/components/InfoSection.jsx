import { useEffect, useState } from 'react';

export default function InfoSection({ daysLeft, weeks, days, months, isPWA }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  return (
    <>
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
                <p className="text-xl font-bold text-black">2025年2月7日(金)</p>
                {/* <p className="text-sm text-black mt-2">
                帝王切開は陣痛前に行うことが多いので、早ければ2025年2月16日頃...?
                </p> */}
            </div>
        </div>
        {!isPWA && (
          <div className='max-w-sm mx-auto mt-16'>
            <h2 className='font-bold text-xl mb-4'>ホーム画面に追加する手順</h2>
            <p className='text-sm'>下記手順に従ってホーム画面に追加すればアプリのように使えます。</p>
            <div className='mt-8 p-4 bg-white border border-gray-200 rounded-xl'>
              <h3 className='font-medium mb-2'>iPhone / iPadの場合（Safari）</h3>
              <ol className='list-decimal pl-4 text-sm'>
                <li className='mb-2'>画面下の 「共有」 アイコン（四角と上向き矢印）をタップします。</li>
                <li className='mb-2'>スクロールして 「ホーム画面に追加」 を選択します。</li>
                <li className='mb-2'>任意の名前を入力し、「追加」をタップします。</li>
                <li className='mb-2'>ホーム画面にアイコンが表示されます。</li>
              </ol>
            </div>
            <div className='mt-4 p-4 bg-white border border-gray-200 rounded-xl'>
              <h3 className='font-medium mb-2'>iPhone / iPadの場合（Chrome）</h3>
              <ol className='list-decimal pl-4 text-sm'>
                <li className='mb-2'>画面右上の 共有 アイコン（四角と上向き矢印）をタップします。</li>
                <li className='mb-2'>「ホーム画面に追加」 を選択します。</li>
                <li className='mb-2'>名前を入力し、「追加」をタップします。</li>
                <li className='mb-2'>ホーム画面にアイコンが表示されます。</li>
              </ol>
            </div>
            <div className='mt-4 p-4 bg-white border border-gray-200 rounded-xl'>
              <h3 className='font-medium mb-2'>Androidの場合</h3>
              <ol className='list-decimal pl-4 text-sm'>
                <li className='mb-2'>画面右上の「︙」（メニューアイコン）をタップします。</li>
                <li className='mb-2'>「ホーム画面に追加」 を選択します。</li>
                <li className='mb-2'>表示されるポップアップで「追加」をタップします。</li>
                <li className='mb-2'>ホーム画面にアイコンが表示されます。</li>
              </ol>
            </div>
          </div>
        )}
    </>
  );
}
