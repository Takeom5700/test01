import React from 'react'

const Lesson04 = () => {
  return (
    <>
        <div className="container border border-gray-500">
            <details>
                <summary>レッスン4. ボタンを作ってみよう</summary>
                <div>
                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            さてさて、旅人さん、パイモンちゃん、今日は特別なボタンの作成に挑戦してみるのはどうかな？
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        ボタン？それって、押したら何か起きるボタンのこと？
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            エヘヘ、まさにその通り！押すと何かが起こる魔法のボタンをHTMLで作ってみよう
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* 旅人のセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        面白そうだね。それに、ウェブページを使う時、ボタンってよく見るから役立ちそう。どうやって作るの？
                            </p>
                        </div>
                        <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            実は、とっても簡単なんだよ。さっきの『&lt;body&gt;』タグの中にこうやって書くだけ
                            </p>
                        </div>
                    </div>

                    <div className="container border border-gray-500  bg-white my-7 p-7 text-xl">
                        <code>
                        &nbsp;&lt;button type="button"&gt;魔法のボタン&lt;/button&gt;
                        </code>
                    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        むぅっ…それだけ？ホントにこれでボタンが作れるの？
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>
                    
                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            うん、それだけで大丈夫。実際にブラウザで表示してみれば、クリックできるボタンができてるはずだよ
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        むぅっ…それだけ？ホントにこれでボタンが作れるの？でも…これだけだと押しても何も起きないな？
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            うん、その通り、パイモンちゃん。今の段階では何も起きないんだ。でも、その“何も起きない”のは、これからのお楽しみだよ
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* 旅人のセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        なるほど。これで自分たちのウェブページにもボタンを追加できるようになるんだ。ありがと、ウェンティ
                            </p>
                        </div>
                        <img src="/images/sora02.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap  mb-7">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            何をおっしゃる、君たちの学びの旅のお手伝いをするのは、吟遊詩人としてのボクの役目だから。エヘヘッ
                            </p>
                        </div>
                    </div>

                    <div className="container border border-gray-500  bg-yellow-400">
                        <h2>ここまでのまとめ</h2>
                        ・これを&lt;body&gt;タグの中に書いてみよう
                        <div className="text-xl bg-gray-400 text-white">
                            &lt;button type="button"&gt;クリック！&lt;/button&gt;
                        </div>
                        <br/>
                        <p className="text-xl text-blue-800">
                            <a href="https://catnose.me/learning/html/button" target="_blank" rel="noopener noreferrer">
                                こちらのサイトを参考にしよう
                    </a>
                </p>
                    </div>
                </div>
            </details>
        </div>
    </>
  )
}

export default Lesson04