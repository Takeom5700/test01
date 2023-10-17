import React from 'react'

const Lesson05 = () => {
  return (
    <>
        <div className="container border border-gray-500">
            <details>
                <summary>レッスン5. プログラミング言語の種類いろいろ</summary>
                <div>
                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            あっ、こんにちは旅人さん、パイモンちゃん！今日は特別なゲストを招いて、プログラミングの世界の旅をしてみようと思うんだよ〜
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        え？特別ゲストって、誰だよ？
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* 旅人のセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        ウェンティ、また誰か面白い人を連れてきたのかな？
                            </p>
                        </div>
                        <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            えへへ、それは...モンドのディルック先生だよ！
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            モンドのディルック、約束通り参上。今日は各プログラミング言語について解説する。さて、始めようか
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        オイラもわからないことがあったら質問していいのかな？
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            もちろんだ。さて、最初はJavaScript。Webブラウザ上で動くスクリプト言語だ。多くのウェブサイトで使われている
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* 旅人のセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        なるほど。これから僕たちが学ぼうとしているやつだね。次は？
                            </p>
                        </div>
                        <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            TypeScriptだ。これはJavaScriptの機能を全て持ちつつ、さらなる特徴として「型情報」を追加した言語だ。型情報とは、変数がどのようなデータを保持しているかを明示的に示すこと。これにより、エラーを早期に発見しやすくなるんだ
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            おっと、変数って言葉が出てきちゃったね。これはこのあと勉強するよ。つまり、リンゴ酒の瓶にはリンゴ酒、水の瓶には水、と瓶にラベルを付けて中身を区別するみたいなことって感じだね
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            ...まさにその通りだ。次はPython。汎用性が高く、AIやデータ分析、ウェブ開発など幅広く使われる。初心者にもおすすめだ
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        ほうほう、これはなんかどこかで聞いたことある気がするぞ
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            続いて、Java。これは大規模なアプリケーションや企業のシステム開発でよく使われる。特に、Androidのアプリ開発では主力となっている
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        オイラのスマホに入ってるアプリもJavaで作られてるの？
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            それは十分に可能性がある。次に、Ruby。これは特にウェブ開発で有名で、Ruby on Railsというフレームワークとともに使われることが多い
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* 旅人のセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        フレームワークって、何だろう？
                            </p>
                        </div>
                        <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            いい質問だ。フレームワークは、プログラムの基本的な骨組みや機能を提供してくれるツールのこと。これにより、開発が効率的になる
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            歌のように、基本のリズムがあって、その上にメロディを乗せる感じなのかな〜
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            その考え方は正しい。さて、php。これは主にウェブサイトのサーバーサイドで動くスクリプト言語。ブログやECサイトなど、多くのウェブサイトで利用されている
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        まだまだあるのか？次、次！
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            cgiだ。これは言語というよりかはウェブサーバと外部プログラムを結びつける技術の一つを言うがたまに見かけるので一応知っとくといいかもしれない。ただ、最近では古い方法とみなされることが多い
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            時代の流れってやつだね
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            まさに。次はC。これはシステム開発や組み込みシステムで広く使われている。非常に古い言語だが、今でも重要な位置を占めている
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* 旅人のセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        原神も何かのプログラミングで作られてるの？
                            </p>
                        </div>
                        <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            まさに。それは主にC♯（Cシャープ）だろう。これは主にWindowsアプリの開発で使われる言語。ゲーム開発のプラットフォームであるUnityでの開発にも利用される
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap">
                        {/* パイモンのセリフ */}
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        ふむふむ、たくさんのプログラミング言語があるんだな
                            </p>
                        </div>
                        <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap ">
                        {/* ウェンティのセリフ */}
                        <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            ディルック先生、貴重なお話をありがとうございます！次は、リンゴ酒を片手にもって、楽しい音楽の時間にしようかな〜
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap  mb-7">
                        {/* ディルックのセリフ */}
                        <img src="/images/diruck01.png" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                            <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                            それは遠慮しておく。でも今日は知識を伝えられてよかった
                            </p>
                        </div>
                    </div>

                    <div className="container border border-gray-500  bg-yellow-400">
                        <h2>ここまでのまとめ</h2>
                        <div className="text-xl">
                        <ul>
                            <li>JavaScript・・・ウェブサイトの画面上(ブラウザ)でだけ動く機能を作るときに必要、お手軽で学びやすい</li>
                            <li>TypeScript・・・JavaScriptのお手軽さをやめた代わりにエラーを防ぎやすくした、JavaScript派生の生真面目系言語</li>
                            <li>Java・・・だいたいなんでも作れる、大規模なものを作るのに向いてる仕組みが作りやすくなっている</li>
                            <li>Python・・・古くからあるけどAI作りたい人に人気な、大量のデータの操作や計算がかなりやりやすい言語</li>
                            <li>Ruby・・・Webサイト開発だいたいできる。記述量が少なくなるように設計されていて、お手軽。</li>
                            <li>php・・・Webサイトの中側でゴニョゴニョしたりデータベースと接続したりする部分で使われることが多い。</li>
                            <li>cgi・・・やや廃れてきてるけど、Webサイトの入力フォームを作る時に使われることがある。</li>
                            <li>C・・・かなり直接的な操作をコンピューターに指示する書き方するコードで、難しめだけど処理が速い。自由度高い。</li>
                            <li>C♯・・・Cににてる書き方、きっと派生したもの。Unityってゲーム作るソフトの中ではこれを書くことが多い。</li>
                        </ul>
                        
                        などなど<br/><br/>
                        あえて初心者にわかりやすい言葉で書いています。気になったら詳しく調べてみるか誰かに聞いてね。
                    </div>
                    </div>
                </div>
            </details>
        </div>
    </>
  )
}

export default Lesson05