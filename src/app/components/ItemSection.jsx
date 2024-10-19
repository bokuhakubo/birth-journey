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
                                <p className="text-sm mt-2">幅78cm以内、ニトリ</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center">
                                <span className="rounded-full p-1 bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                                <span className="text-xs mt-1">購入済み</span>
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
                                <a href="https://www.amazon.co.jp/%E3%81%8A%E3%82%80%E3%81%A4%E3%82%B9%E3%83%88%E3%83%83%E3%82%AB%E3%83%BC-%E5%8F%96%E3%82%8A%E5%A4%96%E3%81%9B%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AB-%E3%82%AA%E3%83%A0%E3%83%84%E5%8F%8E%E7%B4%8D%E3%82%B1%E3%83%BC%E3%82%B9-%E3%81%8A%E3%82%80%E3%81%A4%E5%8F%8E%E7%B4%8D%E3%83%90%E3%83%83%E3%82%B0-%E8%BB%8A%E8%BC%89%E6%97%85%E8%A1%8C%E7%94%A8%E5%8F%8E%E7%B4%8D%E3%83%90%E3%83%83%E3%82%AF/dp/B096KGSVJS/ref=sr_1_23?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3I96CRLHU1M98&dib=eyJ2IjoiMSJ9.XWKuGo1i-_flrKX5U4AyAExcxTGLOtZSyoSnxFZWQhTmafnNfRXGG5qQHiEqQLuKIsLF1Q7F-UVXSZlKgjvZTvQyoJe5qDeiuVnMPYAemyTmQtQHnK2tBvPc52A73izx9X8yGTQB5JTyqpbKeOrzMj-kUOhCT_bfJ-uPfSF3q3xztcBdCq9P19aekFxbCqBGoknnV95EE3YRV04A5iR_be_YDtenYnfVnxt5prA82ro8LxMjrybhnQJXIg0gMXC1chJHR1be4NSG5sUiPMfI7GEKbeT1y60XUmUPjX4fo5I.kBV3EOJdiedpV9yjX6eMI1WdLpoDiam0cPAMNFP20Ds&dib_tag=se&keywords=%E3%81%8A%E3%82%80%E3%81%A4%E3%82%B9%E3%83%88%E3%83%83%E3%82%AB%E3%83%BC&qid=1729333212&sprefix=%E3%81%8A%E3%82%80%E3%81%A4%E3%82%B9%E3%83%88%E3%83%83%E3%82%AB%E3%83%BC%2Caps%2C165&sr=8-23" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    Ciilee Baby おむつストッカー
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
                                <h4 className="font-medium">ベビー用体温計</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                                <a href="https://www.amazon.co.jp/CITIZEN-%E3%82%B7%E3%83%81%E3%82%BA%E3%83%B3-%E9%9B%BB%E5%AD%90%E4%BD%93%E6%B8%A9%E8%A8%88%E3%80%90%E8%80%B3%E3%83%BB%E9%A1%8D%E7%94%A8%E3%80%91CITIZEN-%E8%B5%A4%E5%A4%96%E7%B7%9A%E4%BD%93%E6%B8%A9%E8%A8%88-CTD711/dp/B07N1H8G8F/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1ZTYIHDIFMGJH&dib=eyJ2IjoiMSJ9.B_dExWtCV07rUk0ZgZWW46lDUU8BBov4kaSExBT9mjy34OXW4IvMajdrVn9OvVP_CNPvqfTgbeiGPYn1ZQslQpxgePNFcVhS9R4HUDg4y9ff5QQcZRTyYEkj8ElIBP0ZcCQjcZk1znMYmaDD10Dcf172TcvPaPJ0W5uBpC52TkZ6-G4aegoM4eifxzrNCfQQOL7IH-521z50GZ8Gx1vcb4Sk7sQYdYhCT1rMAUANs24rXvX1i_YNnl0V0GB-jLhvsqLHIlYJjU5yYOaZx_Pg1X5Ug0oTKHrEq1bFAc1U-Ig.MGLgeNElijvuMgq8ImmkkqUkCYftBEQa9lnU5lb3ShU&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC+%E4%BD%93%E6%B8%A9%E8%A8%88+%E8%80%B3&qid=1729336008&sprefix=%E3%83%99%E3%83%93%E3%83%BC+%E4%BD%93%E6%B8%A9%E8%A8%88+%E8%80%B3%2Caps%2C168&sr=8-1" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    シチズン 耳/額式体温計 CTD711 ホワイト
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
                                <h4 className="font-medium">ベビー用爪切り</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                                <a href="https://www.amazon.co.jp/%E3%83%94%E3%82%B8%E3%83%A7%E3%83%B3-Pigeon-%E6%96%B0%E7%94%9F%E5%85%90%E3%81%A4%E3%82%81%E3%81%8D%E3%82%8A%E3%83%8F%E3%82%B5%E3%83%9F-0%E3%83%B5%E6%9C%88%E3%81%8B%E3%82%89%E5%AF%BE%E8%B1%A1-%E6%8C%87%E3%81%8C%E3%81%8B%E3%82%8A%E3%81%AE%E3%81%82%E3%82%8B%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AB%E3%81%A7%E5%AE%89%E5%AE%9A%E3%81%97%E3%81%A6%E5%88%87%E3%82%8C%E3%81%BE%E3%81%99/dp/B01KO97N3S/ref=sr_1_5?crid=20614GXS5KQBZ&dib=eyJ2IjoiMSJ9.Ku-Hqk7thMPWuNY8L4eZ3GrIYZe_j5rFQxUmy6ByxoICnS2Md3UhTAYyn27NALWCeR8hjxIo1FjJKpoG2U1VNuouN1wlStPvPDoagSi6PGOXgzprm6HM2Y2Cy-fJP7wP55bq4BA4txMU5B3JqgFl0D9ua0xnd9WBd49W3FJOM9zPFnK1XFhwGbnIkRZ8Ti0Q0c5AXiCzOpOqyEzNb-ICol7Hoj94VQQuxG8qaccr0EoaCsgZcA5AEaqLijChfRK7UuRErFZWFM5L7TyuQYFvHSvOAuXwPZLhnwBhda0XwSs.33BfMy79SRpq9tMHvf8-tNfJtdic0hAIcpS56Fg_tbE&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC+%E3%81%A4%E3%82%81%E3%81%8D%E3%82%8A&qid=1729335474&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E7%94%A8%E3%81%A4%E3%82%81%2Caps%2C171&sr=8-5" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ピジョン(ベビー) 新生児つめきりハサミ
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                                <a href="https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%83%93-%E6%96%B0%E7%94%9F%E5%85%90%E3%81%8B%E3%82%89%E3%81%A4%E3%81%8B%E3%81%88%E3%82%8B-%E3%81%A4%E3%82%81%E3%81%8D%E3%82%8A%E3%83%8F%E3%82%B5%E3%83%9F-%E3%83%91%E3%82%A6%E3%83%80%E3%83%BC%E3%83%94%E3%83%B3%E3%82%AF/dp/B0CKSYCLKX/ref=sr_1_9?crid=20614GXS5KQBZ&dib=eyJ2IjoiMSJ9.Ku-Hqk7thMPWuNY8L4eZ3GrIYZe_j5rFQxUmy6ByxoICnS2Md3UhTAYyn27NALWCeR8hjxIo1FjJKpoG2U1VNuouN1wlStPvPDoagSi6PGOXgzprm6HM2Y2Cy-fJP7wP55bq4BA4txMU5B3JqgFl0D9ua0xnd9WBd49W3FJOM9zPFnK1XFhwGbnIkRZ8Ti0Q0c5AXiCzOpOqyEzNb-ICol7Hoj94VQQuxG8qaccr0EoaCsgZcA5AEaqLijChfRK7UuRErFZWFM5L7TyuQYFvHSvOAuXwPZLhnwBhda0XwSs.33BfMy79SRpq9tMHvf8-tNfJtdic0hAIcpS56Fg_tbE&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC+%E3%81%A4%E3%82%81%E3%81%8D%E3%82%8A&qid=1729335474&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E7%94%A8%E3%81%A4%E3%82%81%2Caps%2C171&sr=8-9" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    コンビ 新生児からつかえる つめきりハサミ
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
                                <h4 className="font-medium">ベビー用綿棒</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                                <a href="https://www.amazon.co.jp/%E3%83%94%E3%82%B8%E3%83%A7%E3%83%B3-%E3%83%99%E3%83%93%E3%83%BC%E7%B6%BF%E6%A3%92-%E7%B4%B0%E8%BB%B8%E3%82%BF%E3%82%A4%E3%83%97-200%E6%9C%AC%E5%85%A5/dp/B000FNXW5M/ref=sr_1_7?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2OSENW266ZZPF&dib=eyJ2IjoiMSJ9.rkRS5crJJWhx5XdlzUtBdqwi5Fb8QApM9KUN7EzzW289WjawOTgh0QS87CJvTGz7SvrY4FJ7u6x5U8uxxhQe1F2KtAFMaGsEcVFOXyTtkbf818PgUkqfCpqPcCgaftbTV7_htNTqg40XC1OkloqkDTcz4NX-Hj8fXt1jSjaQjdx3aBwWh3oNMUrm5XeLCJOOei7Nz2Pgyb-tpwzQkwLJT1jn5uZe-QJA7lVt_1PrUtHnq3G1a3m1dFAtmbTVsn2HKsCF4TEXgl3G3z_JlVzKT8lidVs9-aOX0WwPon1L8_Q.IGALj5Ggxu-spEj7RUoRzDvF3w-9GIEavFMVIWHK8VI&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC+%E7%B6%BF%E6%A3%92&qid=1729335724&sprefix=%E3%83%99%E3%83%93%E3%83%BC+%E7%B6%BF%E6%A3%92%2Caps%2C171&sr=8-7" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ピジョン ベビー綿棒 (細軸タイプ) 200本入
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
                                <h4 className="font-medium">スキンケア用品</h4>
                                <p className="text-sm mt-2">ベビーローション、ベビークリーム、<s>ベビーオイル</s></p>
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
                                <a href="https://www.amazon.co.jp/%E5%81%A5%E6%A0%84%E8%A3%BD%E8%96%AC-%E3%83%99%E3%83%93%E3%83%BC%E3%83%AF%E3%82%BB%E3%83%AA%E3%83%B3M-%E5%8C%96%E7%B2%A7%E7%94%A8%E6%B2%B9-60g/dp/B09CKQKKC8/ref=sr_1_4?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3RKPFLFSZ9UD3&dib=eyJ2IjoiMSJ9.BKI17HSrxZc6ogZ4qdKRarRVOGhKFrOXi9kyxYTElTDVi4zloxqxG12RHFtjNtIBWCRJv5dpMRasCEkqpypLoWwnzztJxj_ZB1NcwexL6SJyqBHUzq6PXfl6S5KzGvb5a9bX9RZEV82_qI6IwaUYtpDmbn9CEdmyfsfHPBh0_3Mf2C3tNi2cpnKWyZs6OvU2_cVBHddr-mtac3m0r_uxVOFnsfIj_-9OmqoWdmyvAgH_WOHNPAPwn-9dC0IoE4ySuobdS0l7Ac8nlKY6dWqoeCSruQ8uubrSt4kWLrtTaWY.YKkeL5ClFHc3s6i7rt1or0baxSAKryptjaEefv2uhVk&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC%E3%83%AF%E3%82%BB%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0&qid=1729336632&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E3%83%AF%E3%82%BB%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0%2Caps%2C172&sr=8-4" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    健栄製薬 ベビーワセリンM(化粧用油) 60g（無添加）
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                                <a href="https://www.amazon.co.jp/%E5%81%A5%E6%A0%84%E8%A3%BD%E8%96%AC-%E3%83%99%E3%83%93%E3%83%BC%E3%83%AF%E3%82%BB%E3%83%AA%E3%83%B3-60g/dp/B00F04WN9C/ref=sr_1_3?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3RKPFLFSZ9UD3&dib=eyJ2IjoiMSJ9.BKI17HSrxZc6ogZ4qdKRarRVOGhKFrOXi9kyxYTElTDVi4zloxqxG12RHFtjNtIBWCRJv5dpMRasCEkqpypLoWwnzztJxj_ZB1NcwexL6SJyqBHUzq6PXfl6S5KzGvb5a9bX9RZEV82_qI6IwaUYtpDmbn9CEdmyfsfHPBh0_3Mf2C3tNi2cpnKWyZs6OvU2_cVBHddr-mtac3m0r_uxVOFnsfIj_-9OmqoWdmyvAgH_WOHNPAPwn-9dC0IoE4ySuobdS0l7Ac8nlKY6dWqoeCSruQ8uubrSt4kWLrtTaWY.YKkeL5ClFHc3s6i7rt1or0baxSAKryptjaEefv2uhVk&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC%E3%83%AF%E3%82%BB%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0&qid=1729336632&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E3%83%AF%E3%82%BB%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0%2Caps%2C172&sr=8-3" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    健栄製薬 【保湿クリーム】ベビーワセリン 60g(乾燥肌 パラベンフリー)
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
                                <h4 className="font-medium">ベビーブラシ・くし</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                                <a href="https://www.amazon.co.jp/%E3%83%94%E3%82%B8%E3%83%A7%E3%83%B3-RL031-%E3%83%98%E3%82%A2%E3%83%BC%E3%82%BB%E3%83%83%E3%83%88/dp/B000SKBMV8/ref=sr_1_7?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3C51OR15V6PBW&dib=eyJ2IjoiMSJ9.ggSYX3WUY3ZeYI_32ztEghVwrKMgHcmH5rAU_uOszOQjkQuW7Kp7H-yBGoU2ua-vvdDeSlVRUeFpkQfa1Y2E_Fm1ejxxXq4iuEApf4K3grMEjb0EAaTROiCuJVAPimNbEemZ2TCm0wK5DDuwYJyZJqm_k5hQfOj333c4MCZ7LQedBcczMcab7JuBWS1pLwY58lkXL0mu_VGRlrTeKL5HIiHfQTQ8ePXGGARj-EpwzCqFWbKYk5BNkHOnvdXBrIn0QJhfmPR7SqxyDnLDTg_yllCgpQTI9Nz2TE3YFeXMB9U.S32mzQ_HBG46VpHTCey6aW84gQsWaABV_IuJQLjyKtE&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC%E3%83%96%E3%83%A9%E3%82%B7&qid=1729336145&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E3%83%96%E3%83%A9%E3%82%B7%2Caps%2C162&sr=8-7" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ピジョン ヘアーセット
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                                <a href="https://www.amazon.co.jp/%E3%80%90%E4%BF%9D%E8%82%B2%E5%A3%AB%E3%81%8C%E7%9B%A3%E4%BF%AE%E3%80%91-%E3%83%99%E3%83%93%E3%83%BC%E3%83%96%E3%83%A9%E3%82%B7-%E3%83%99%E3%83%93%E3%83%BC%E3%83%98%E3%82%A2%E3%83%96%E3%83%A9%E3%82%B7-%E3%83%98%E3%82%A2%E3%83%96%E3%83%A9%E3%82%B7-%E3%83%98%E3%82%A2%E3%83%BC%E3%83%96%E3%83%A9%E3%82%B7/dp/B0D9T53JM1/ref=sr_1_4?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3C51OR15V6PBW&dib=eyJ2IjoiMSJ9.ggSYX3WUY3ZeYI_32ztEghVwrKMgHcmH5rAU_uOszOQjkQuW7Kp7H-yBGoU2ua-vvdDeSlVRUeFpkQfa1Y2E_Fm1ejxxXq4iuEApf4K3grMEjb0EAaTROiCuJVAPimNbEemZ2TCm0wK5DDuwYJyZJqm_k5hQfOj333c4MCZ7LQedBcczMcab7JuBWS1pLwY58lkXL0mu_VGRlrTeKL5HIiHfQTQ8ePXGGARj-EpwzCqFWbKYk5BNkHOnvdXBrIn0QJhfmPR7SqxyDnLDTg_yllCgpQTI9Nz2TE3YFeXMB9U.S32mzQ_HBG46VpHTCey6aW84gQsWaABV_IuJQLjyKtE&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC%E3%83%96%E3%83%A9%E3%82%B7&qid=1729336145&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E3%83%96%E3%83%A9%E3%82%B7%2Caps%2C162&sr=8-4" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                【保育士が監修】 ベビーブラシ クシ
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
                                <h4 className="font-medium">ベビー用洗濯洗剤</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                                <a href="https://www.amazon.co.jp/arau-%E3%82%A2%E3%83%A9%E3%82%A6-%E3%82%A2%E3%83%A9%E3%82%A6%E3%83%99%E3%83%93%E3%83%BC-%E6%B4%97%E6%BF%AF%E3%81%9B%E3%81%A3%E3%81%91%E3%82%93-800mL/dp/B08GCV86Q4/ref=sr_1_7?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=9XL9Y30PWTRP&dib=eyJ2IjoiMSJ9.a9lVaZ4F0O8LbDkjY3Cqvzu-u4kPLiOD6R9ibsa1c961n0K6F4-5l7DVzzVBALHK1MtKXc-2x-Qlq00Ev9eszL5xQ1rT9vdXAR1mqccXKnW7EvCZKf73scSoHkzYvSudVGGcWU1esClxHh9WMR0QxPn_AYM1HTR_tguxBzsepXG3C8ybQiSr8bJQvp6B0bwL3QNgYTZQ2Jhte0oxHrxuoWhvB1h2w1vmmdqpNqGa9xQbvj70CzTtIM3dGT0iXlBGs30HkArHWKmACnoowkiB8K-dO7YMVWpnHHutiCwTN6c.bwiGp4imdoZ17KSbnGz7VUj5X4R4lmPijY46w2gYSng&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC%E7%94%A8%E6%B4%97%E6%BF%AF%E6%B4%97%E5%89%A4&qid=1729336753&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E7%94%A8%E6%B4%97%E6%BF%AF%E6%B4%97%E5%89%A4%2Caps%2C165&sr=8-7" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    arau.(アラウ) アラウベビー 洗濯せっけん 本体 800mL
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                                <a href="https://www.amazon.co.jp/arau-%E3%82%A2%E3%83%A9%E3%82%A6-%E3%82%A2%E3%83%A9%E3%82%A6%E3%83%99%E3%83%93%E3%83%BC-%E6%B4%97%E6%BF%AF%E3%81%9B%E3%81%A3%E3%81%91%E3%82%93-2060mL/dp/B08GCWDKBR/ref=sr_1_6?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=9XL9Y30PWTRP&dib=eyJ2IjoiMSJ9.a9lVaZ4F0O8LbDkjY3Cqvzu-u4kPLiOD6R9ibsa1c961n0K6F4-5l7DVzzVBALHK1MtKXc-2x-Qlq00Ev9eszL5xQ1rT9vdXAR1mqccXKnW7EvCZKf73scSoHkzYvSudVGGcWU1esClxHh9WMR0QxPn_AYM1HTR_tguxBzsepXG3C8ybQiSr8bJQvp6B0bwL3QNgYTZQ2Jhte0oxHrxuoWhvB1h2w1vmmdqpNqGa9xQbvj70CzTtIM3dGT0iXlBGs30HkArHWKmACnoowkiB8K-dO7YMVWpnHHutiCwTN6c.bwiGp4imdoZ17KSbnGz7VUj5X4R4lmPijY46w2gYSng&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC%E7%94%A8%E6%B4%97%E6%BF%AF%E6%B4%97%E5%89%A4&qid=1729336753&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E7%94%A8%E6%B4%97%E6%BF%AF%E6%B4%97%E5%89%A4%2Caps%2C165&sr=8-6" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    arau.(アラウ) アラウベビー 洗濯せっけん 詰替 2060mL ハーブ
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
                                <h4 className="font-medium">ガーゼ</h4>
                                <p className="text-sm mt-2">10枚ぐらいは必要</p>
                                <a href="https://www.amazon.co.jp/s?k=%E3%83%99%E3%83%93%E3%83%BC+%E3%82%AC%E3%83%BC%E3%82%BC&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=I7OUCQ1CFSCQ&sprefix=%E3%83%99%E3%83%93%E3%83%BC+%E3%82%AC%E3%83%BC%E3%82%BC%2Caps%2C172&ref=nb_sb_noss_1" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ベビー ガーゼ 一覧 Amazon
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
                                <a href="https://www.amazon.co.jp/s?k=%E3%83%99%E3%83%93%E3%83%BC+%E6%B8%85%E6%B5%84%E7%B6%BF&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=98JRC87ATXB5&sprefix=%E3%83%99%E3%83%93%E3%83%BC+%E6%B8%85%E6%B5%84%E7%B6%BF%2Caps%2C159&ref=nb_sb_noss_1" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ベビー 清浄綿 一覧 Amazon
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
                                <h4 className="font-medium">スタイ</h4>
                                <p className="text-sm mt-2">3〜5枚<br />授乳用は襟元に挟み込むタイプ<br />ガーゼで代用可能？</p>
                                <a href="https://www.amazon.co.jp/s?k=%E3%83%99%E3%83%93%E3%83%BC+%E3%82%B9%E3%82%BF%E3%82%A4&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2QXIP7D6OC02O&sprefix=%E3%83%99%E3%83%93%E3%83%BC+%E3%82%B9%E3%82%BF%E3%82%A4%2Caps%2C172&ref=nb_sb_noss_1" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ベビー スタイ 一覧 Amazon
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
                                <a href="https://www.amazon.co.jp/s?k=%E3%83%99%E3%83%93%E3%83%BC+%E6%B8%A9%E6%B9%BF%E5%BA%A6%E8%A8%88&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=LT0GIJO2K8ST&sprefix=%E3%83%99%E3%83%93%E3%83%BC+%E6%B8%A9%E6%B9%BF%E5%BA%A6%E8%A8%88%2Caps%2C161&ref=nb_sb_noss_1" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ベビー 温湿度計 一覧 Amazon
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                                <a href="https://www.amazon.co.jp/%E3%82%BF%E3%83%8B%E3%82%BF-%E6%B8%A9%E6%B9%BF%E5%BA%A6%E8%A8%88-%E3%82%B3%E3%83%B3%E3%83%87%E3%82%A3%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC-%E3%82%A2%E3%82%A4%E3%83%9C%E3%83%AA%E3%83%BC-TC-422-IV/dp/B0CCT3K6QM/ref=sr_1_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=J9LM8H7HUN0L&dib=eyJ2IjoiMSJ9.Sxr8E2sRmM_416KEfUtGKZzKVdlBKlnIt6M9WyaNN5005bXJXIrr8u6ykHa_Yy6T5X_Mgi2atzlMdZspK1t5wnPy7VGR3mULNbF1-6Yb2jLmK9o4mxbUTl2u5hcTMw80M7SSm4hDq1XSDq2CyM2pJI55c9SEQix43MupMeyf5IJvYHefV17OjHJfnNZ3N2CZ0iSMjziadxleAFyelF7ss0cEcSTXrlUW7Jam81pIwOvewmR5v3p6Ahwlk-tshML7xThXiOO2Pe07uLepKCu_-f88QMNywOY-dBpFhroRzm4.mlWKR-zPY9h5sw8jhvjk8YjXTTHFjwpeh0oOaxh3rfg&dib_tag=se&keywords=%E3%82%B3%E3%83%B3%E3%83%87%E3%82%A3%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC&qid=1729338414&sprefix=%E3%82%B3%E3%83%B3%E3%83%87%E3%82%A3%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC%2Caps%2C170&sr=8-2" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    タニタ(Tanita) 温湿度計 コンディションセンサー
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
                                <a href="https://www.amazon.co.jp/s?k=%E6%B9%AF%E6%B8%A9%E8%A8%88+%E8%B5%A4%E3%81%A1%E3%82%83%E3%82%93&crid=2MJ8SYYVB8D92&sprefix=%E6%B9%AF%E6%B8%A9%E8%A8%88%2Caps%2C163&ref=nb_sb_ss_ts-doa-p_2_3" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ベビー 湯温計 一覧 Amazon
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
                                <h4 className="font-medium">ベビーソープ・沐浴剤</h4>
                                {/* <p className="text-sm mt-2"></p> */}
                                <a href="https://www.amazon.co.jp/arau-%E3%82%A2%E3%83%A9%E3%82%A6-%E3%82%A2%E3%83%A9%E3%82%A6-%E3%83%99%E3%83%93%E3%83%BC-%E6%B3%A1%E5%85%A8%E8%BA%AB%E3%82%BD%E3%83%BC%E3%83%97-450%EF%BD%8D%EF%BD%8C/dp/B0B9FR7997/ref=sr_1_28?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=IHOFTB0CZV7W&dib=eyJ2IjoiMSJ9.hR6z82mjxDE5ScHzsUJMr8Em1PxRwpn1bOK1-SArdQZHmO8VwCgODyw_O5JzJGtaL5W-QSuN7I3aQezahqTzW3VbtRsrBJw7klC6Ts5AZQ8c1E34rTEz9-yFrDXokRgElB9dZIp37E2H5ucb9yGcjkaWsEAcDnJb8DBydo8_fm8pb0HFT3ACcx4Ky1AOvZkb0jgXlKAegSZkpS3qBrtvZfPYTDErSYxmQJzAl4YS8Q9XU6iOeaFJoTiO0_VnqmHDrg9quAJUlXHdqPk6swyz0oK-m5VI0zXTaO91Hhyo0L0.v5uct68cHSKoC6-4aGRDfsQRn5mgK9cNoCL5ibq0GaI&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC%E3%82%BD%E3%83%BC%E3%83%97&qid=1729338792&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E3%82%BD%E3%83%BC%E3%83%97%2Caps%2C173&sr=8-28" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    arau.(アラウ)アラウ.ベビー 泡全身ソープ 本体 450ml
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-1 mt-[-3px]">
                                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                                    </svg>
                                </a>
                                <a href="https://www.amazon.co.jp/%E3%83%94%E3%82%B8%E3%83%A7%E3%83%B3-Pigeon-%E3%83%99%E3%83%93%E3%83%BC%E5%85%A8%E8%BA%AB%E6%B3%A1%E3%82%BD%E3%83%BC%E3%83%97-%E3%81%97%E3%81%A3%E3%81%A8%E3%82%8A-500ml/dp/B09R9M5WNS/ref=sr_1_15?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=IHOFTB0CZV7W&dib=eyJ2IjoiMSJ9.hR6z82mjxDE5ScHzsUJMr8Em1PxRwpn1bOK1-SArdQZHmO8VwCgODyw_O5JzJGtaL5W-QSuN7I3aQezahqTzW3VbtRsrBJw7klC6Ts5AZQ8c1E34rTEz9-yFrDXokRgElB9dZIp37E2H5ucb9yGcjkaWsEAcDnJb8DBydo8_fm8pb0HFT3ACcx4Ky1AOvZkb0jgXlKAegSZkpS3qBrtvZfPYTDErSYxmQJzAl4YS8Q9XU6iOeaFJoTiO0_VnqmHDrg9quAJUlXHdqPk6swyz0oK-m5VI0zXTaO91Hhyo0L0.v5uct68cHSKoC6-4aGRDfsQRn5mgK9cNoCL5ibq0GaI&dib_tag=se&keywords=%E3%83%99%E3%83%93%E3%83%BC%E3%82%BD%E3%83%BC%E3%83%97&qid=1729338792&sprefix=%E3%83%99%E3%83%93%E3%83%BC%E3%82%BD%E3%83%BC%E3%83%97%2Caps%2C173&sr=8-15" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    ピジョン Pigeon ベビー全身泡ソープ しっとり 500ml
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
                                <a href="https://www.amazon.co.jp/s?k=%E6%B2%90%E6%B5%B4%E3%82%AC%E3%83%BC%E3%82%BC&crid=2KY75O6RLVHOL&sprefix=%E3%82%82%E3%81%8F%E3%82%88%2Caps%2C170&ref=nb_sb_ss_ts-doa-p_4_3" target="_blank" rel="nofollow noopener" className="text-sm mt-2 text-blue-500 underline block">
                                    沐浴ガーゼ 一覧 Amazon
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
                        <li className="mt-4 p-4 rounded-xl bg-white flex items-center">
                            <div className="flex-1 basis-4/5">
                                <h4 className="font-medium">クローゼットケース</h4>
                                <p className="text-sm mt-2">おむつのストック</p>
                            </div>
                            <div className="flex-1 basis-1/5 flex flex-col justify-center items-center">
                                <span className="rounded-full p-1 bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
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