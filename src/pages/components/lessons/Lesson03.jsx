import React from 'react'

const Lesson03 = () => {
  return (
    <>
        <div className="container border border-gray-500">
            <details>
                <summary>レッスン3. HTMLの基本的な書き方</summary>
                <div>
                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            さて、旅人さん、パイモンちゃん、前回はHTMLの基本を学びましたね。今日はもう少し詳しくHTMLの作り方について学んでいこう
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        そうだぞ！HTMLでウェブページを作るんだった！でも、具体的な書き方はまだよくわからないな…
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            エヘヘ、心配しないで。さて、まず最初に、HTMLの基本的な雛形を見てみよう
                            </p>
                        </div>
                    </div>

                    <div className="container border border-gray-500  bg-white my-7 p-7 text-xl">
                        <code>
                            &lt;!DOCTYPE html&gt;<br/>
                            &lt;html&gt;<br/>
                            &nbsp; &lt;head&gt;<br/>
                            &nbsp; &nbsp; &lt;title&gt;タイトル&lt;/title&gt;<br/>
                            &nbsp; &lt;/head&gt;<br/>
                            &nbsp; &lt;body&gt;<br/>
                            &nbsp; &nbsp; &lt;!-- ここにコンテンツを書く --&gt;<br/>
                            &nbsp; &lt;/body&gt;<br/>
                            &lt;/html&gt;<br/>
                        </code>
                    
                    </div>
                    
                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            これが基本の形。そして、この『&lt;body&gt;』タグの中に、他のタグを入れてコンテンツを作っていくんだ。例えば、見出しの文を書くための『&lt;h1&gt;』や、適当に構造を整理するための『&lt;div&gt;』、ボタンを作るための『&lt;button&gt;』などのタグを使ってね
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* 旅人のセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        なるほど&lt;head&gt;という開きタグと、「/」がついている&lt;/head&gt;という閉じタグが書かれるまでの間に記述をする内容が、&lt;head&gt;タグ内の記述ということなのか
                            </p>
                        </div>
                        <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        &lt;body&gt;から&lt;/body&gt;までの部分も同じ感じになってそうだぞ、ここは&lt;body&gt;タグの部分ってことか！
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* 旅人のセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        でも、全部のタグに閉じタグがあるわけじゃないんだっけ？
                            </p>
                        </div>
                        <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            うん、そうだね。実はHTMLには閉じない特殊なタグもあるんだ。『&lt;br/&gt;』みたいなものがその一例。これは改行を意味するタグで、閉じタグが必要ないんだよ
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        わかった。雛形を元に、開きタグと閉じタグ、そして閉じない特殊なタグを使って、実際にHTMLを書いてみよう
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>


                    <div className="container border border-gray-500  bg-yellow-400">
                        <h2>ここまでのまとめ</h2>
                        <p className="text-xl text-blue-800">
                            <a href="https://qiita.com/n-Taro/items/204df29c21e9fb2d45f8" target="_blank" rel="noopener noreferrer">
                                HTMLの基本のテンプレートはこちらのサイトなどを参考にしよう<br/>
                                (index.html の中身の部分をコピペしよう)
                            </a>
                        </p>
                        <br/>
                        <p>・開きタグと閉じタグがあるね</p>
                        <span className="text-xl">
                            <p>&lt;body&gt;    〜〜      &lt;/body&gt;</p>
                            <p>&lt;h1&gt;    〜〜      &lt;/h1&gt;</p>
                            <p>&lt;div&gt;    〜〜      &lt;/div&gt;</p>
                            <p>&lt;button&gt;    〜〜      &lt;/button&gt;</p>
                        </span>
                        <br/>

                        <p>・閉じない特殊なタグも少しあるよ</p>
                        <span className="text-xl">
                        <p>&lt;br/&gt;</p>
                        など
                        </span>
                    </div>
                </div>
            </details>
        </div>
    </>
  )
}

export default Lesson03