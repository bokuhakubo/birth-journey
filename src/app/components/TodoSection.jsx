export default function TodoSection() {
    return (
        <div className="max-w-sm mx-auto">
            <h2 className="font-bold mb-4 text-xl">タスク</h2>
            <div>
                <ul>
                    <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                        <div className="flex-1 basis-4/5">
                            <p className="text-sm">押入れの整理</p>
                        </div>
                        <div className="flex-1 basis-1/5 flex flex-col justify-center items-center">
                            <span className="rounded-full p-1 bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </span>
                            <span className="text-xs mt-1">完了</span>
                        </div>
                    </li>
                    <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                        <div className="flex-1 basis-4/5">
                            <p className="text-sm">コーヒー棚の整理</p>
                        </div>
                        <div className="flex-1 basis-1/5 flex flex-col justify-center items-center">
                            <span className="rounded-full p-1 bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </span>
                            <span className="text-xs mt-1">未完了</span>
                        </div>
                    </li>
                    <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                        <div className="flex-1 basis-4/5">
                            <p className="text-sm">ベビーカー置くスペース（玄関）</p>
                        </div>
                        <div className="flex-1 basis-1/5 flex flex-col justify-center items-center">
                            <span className="rounded-full p-1 bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </span>
                            <span className="text-xs mt-1">完了</span>
                        </div>
                    </li>
                    <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                        <div className="flex-1 basis-4/5">
                            <p className="text-sm">赤ちゃん用の洗濯物・タオル置くスペース（洗面所）</p>
                        </div>
                        <div className="flex-1 basis-1/5 flex flex-col justify-center items-center">
                            <span className="rounded-full p-1 bg-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </span>
                            <span className="text-xs mt-1">保留</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}