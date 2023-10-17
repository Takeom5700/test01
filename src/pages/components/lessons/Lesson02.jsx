import React from 'react'

const Lesson02 = () => {
  return (
    <>
    <div className="container border border-gray-500">
        <details>
            <summary>レッスン2. コーディングするための便利ツール</summary>
            <div>
                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        エへへ、今日も元気そうな旅人さんとパイモンちゃん。実は今日、ボクたちが話すのはね、コーディングについてなんだ
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* パイモンのセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    コーディングってなんだ？食べれるのか？
                        </p>
                    </div>
                    <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        あはは、残念だけど食べ物じゃないよ、パイモンちゃん。コーディングとはね、コンピュータープログラムを書くことを言うんだ。君たちも知ってると思うけど、それを書くとき、ただのメモ帳でもできるんだよ
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* 旅人のセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    メモ帳にコードを書いてもいいんだ。でも、そうすると色々と大変そう…
                        </p>
                    </div>
                    <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>
                
                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        おっと、センスがいいね、旅人さん。実際、普通のメモ帳でコードを書くと、色々と見にくかったり、大変だったりするんだ。だから人々は『プログラミングするための機能もりもりメモ帳』みたいな便利なアプリを作って使ってるんだよ
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* パイモンのセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    えっ、それってどういうことだ？
                        </p>
                    </div>
                    <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        それがね、<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800">VScode</a>やAtom、Anacondaといったツールのことなんだ。これらはコーディングをしやすくするための便利な機能がたくさん入っているんだよ。エラーを見つけやすくしたり、コードを色分けしてくれたりね
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* 旅人のセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    へぇ、それは便利そうだね。でも、そんなツールを使わなくても、コードを書いて結果を見る方法はないの？
                        </p>
                    </div>
                    <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        うん、それもあるんだよ。Web上にはコードを書いて、その結果をすぐに見ることができるサイトもあるんだ。例えば、<a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="text-blue-800">CodePen</a>っていうサイトなどかがあってね…
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* パイモンのセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    パイモン、コードを書いて遊んでみたい！ウェンティ、教えてよ！
                        </p>
                    </div>
                    <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        エヘヘ、もちろんだよ。でもね、コードを書くのは楽しいけど、最初はちょっと難しいかもしれないから、コツコツと続けることが大事なんだよ。一緒に頑張ろうね
                        </p>
                    </div>
                </div>
                <div className="container border border-gray-500  bg-white my-7 p-7 text-xl">
                    旅人とパイモンはウェンティの話を真剣に聞き、コーディングの世界へのファーストステップを踏み出します。彼らの会話を通じて、プログラミング環境やツールについて楽しく学びましょう。
                </div>
                

                <div className="container border border-gray-500  bg-yellow-400">
                    <h2>ここまでのまとめ</h2>
                    <p className="text-xl">
                    HTMLやプログラミングはメモ帳みたいなのに書いていっても作れるんだけど、とても分かりにくくなるので、「プログラミングするための機能もりもりメモ帳」みたいな便利なアプリがいくつもあるよ
                    （<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                                VSCode
                    </a>やatomやanacondaなどが人気だよ）
                    Web上でコード書けて結果がすぐ見れるサイトもあるみたいだね
                    (<a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
                        https://codepen.io/
                    </a>
                    など)
                    </p>
                </div>
                
            </div>
        </details>
        </div>
    </>
  )
}

export default Lesson02