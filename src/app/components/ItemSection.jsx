export default function ItemSection() {
    return (
        <div className="max-w-sm mx-auto">
            <h2 className="font-bold mb-4 text-xl">準備品</h2>
            <div>
                <div>
                    <h3 className="font-medium flex items-center">
                        <span className="w-2 h-2 block bg-black mr-2"></span>おでかけ
                    </h3>
                    <ul>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビーカー</h4>
                                <p className="text-sm mt-2">型落ちモデルがお得？</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">抱っこ紐</h4>
                                <p className="text-sm mt-2">AIRBUGGY<br />特徴：前バックル・マグネット<br />価格：3万円〜5万円</p>
                                <a href="https://www.hello-akachan.co.jp/item/39270/" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    エアバギー・ベビーキャリアベーシックプラス メッシュカバー付き
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">チャイルドシート</h4>
                                <p className="text-sm mt-2">コンビ・サイベックス・アップリカが人気<br />回転式・固定式</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">スリング</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h3 className="font-medium flex items-center">
                        <span className="w-2 h-2 block bg-black mr-2"></span>お世話
                    </h3>
                    <ul>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">寝具</h4>
                                <p className="text-sm mt-2">ベビー布団（マットレス・敷布団・敷布団シーツ・枕）<br />必要に応じてベッドインベッドの購入・ベビーベッドのレンタルを検討</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">スリーパー</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">収納棚</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">収納バッグ</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビーラック</h4>
                                <p className="text-sm mt-2">借りる予定</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center">
                                <span className="rounded-full p-1 bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">買わない</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">収納バッグ</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビー用体温計</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビー用爪切り</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビー用綿棒</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">スキンケア用品</h4>
                                <p className="text-sm mt-2">ベビーローション、ベビークリーム、ベビーオイル</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビーワセリン</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビーブラシ・くし</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビー用洗濯洗剤</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ガーゼ</h4>
                                <p className="text-sm mt-2">10枚ぐらいは必要</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ガーゼタオル</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">清浄綿</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">スタイ</h4>
                                <p className="text-sm mt-2">3〜5枚<br />授乳用は襟元に挟み込むタイプ<br />ガーゼで代用可能？</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">汗取りパッド</h4>
                                <p className="text-sm mt-2">3〜5枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">温湿度計</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h3 className="font-medium flex items-center">
                        <span className="w-2 h-2 block bg-black mr-2"></span>お風呂
                    </h3>
                    <ul>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビーバス</h4>
                                <p className="text-sm mt-2">譲ってもらう予定</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center">
                                <span className="rounded-full p-1 bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">買わない</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">湯温計</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビーソープ・沐浴剤</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">スポンジ</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">浴用ガーゼ</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">湯上がりタオル</h4>
                                <p className="text-sm mt-2">2〜3枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h3 className="font-medium flex items-center">
                        <span className="w-2 h-2 block bg-black mr-2"></span>授乳
                    </h3>
                    <ul>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">哺乳瓶</h4>
                                <p className="text-sm mt-2">3つくらい</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">哺乳瓶スタンド</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">哺乳瓶ブラシ</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">哺乳瓶用洗剤</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">哺乳瓶除菌器</h4>
                                <p className="text-sm mt-2">電子レンジで殺菌できるのが便利？</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">粉ミルク</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">調乳ポット</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">搾乳器</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">乳頭保護クリーム</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">母乳パッド</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h3 className="font-medium flex items-center">
                        <span className="w-2 h-2 block bg-black mr-2"></span>ベビー服・肌着
                    </h3>
                    <ul>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ミニハンガー</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">短肌着</h4>
                                <p className="text-sm mt-2">5〜6枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">長下着</h4>
                                <p className="text-sm mt-2">2〜3枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">コンビ肌着</h4>
                                <p className="text-sm mt-2">5〜6枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ロンパース肌着</h4>
                                <p className="text-sm mt-2">3〜5枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">コンビドレス</h4>
                                <p className="text-sm mt-2">3〜5枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">プレオール</h4>
                                <p className="text-sm mt-2">4〜6枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">セレモニードレス</h4>
                                <p className="text-sm mt-2">5〜6枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ソックス</h4>
                                <p className="text-sm mt-2">2〜3足</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ミトン</h4>
                                <p className="text-sm mt-2">2〜3組</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">帽子</h4>
                                <p className="text-sm mt-2">1〜3枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベスト</h4>
                                <p className="text-sm mt-2">1〜3枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">コンビオール</h4>
                                <p className="text-sm mt-2">1枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">バギーオール</h4>
                                <p className="text-sm mt-2">1枚</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">ベビー服</h4>
                                <p className="text-sm mt-2">5〜6枚<br />ツーウェイオール、ロンパース</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">おくるみ</h4>
                                <p className="text-sm mt-2">1〜2枚<br />素材：フリース・ポリエステル（冬）、コットン（春・秋）、ガーゼ（夏）</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h3 className="font-medium flex items-center">
                        <span className="w-2 h-2 block bg-black mr-2"></span>おむつ
                    </h3>
                    <ul>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">新生児用おむつ</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">おしり拭き</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">おむつ替えシート・マット</h4>
                                <p className="text-sm mt-2">ペット用シートが便利？</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">おむつポーチ</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">おむつ用ゴミ箱</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">布おむつ</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h3 className="font-medium flex items-center">
                        <span className="w-2 h-2 block bg-black mr-2"></span>その他
                    </h3>
                    <ul>
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">空気清浄機</h4>
                                <a href="https://panasonic.jp/airrich/products/F-VXW70.html" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    Panasonic F-VXW70-W
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                                <a href="https://www.ksdenki.com/shop/g/g4573535312024/" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ダイキン MCK554AKS-W
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center text-gray-500">
                                <span className="rounded-full p-1 bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">未購入</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}