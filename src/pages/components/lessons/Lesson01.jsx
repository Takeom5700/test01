import React from 'react'

const Lesson01 = () => {
  return (
    <>
    <div className="container border border-gray-500">
        <details>
            <summary>レッスン1. マークアップ言語とプログラミング言語</summary>
            <div>
                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        エへへ、こんにちは旅人さんとパイモンちゃん。今日はちょっと面白い話をしようか。君たち、ウェブサイトって知ってるよね？
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* 旅人のセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    ウェブサイトって、ネットを開くと見れるページのことだよね？
                        </p>
                    </div>
                    <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* パイモンのセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    オイラも知ってるぞ！でも、あれってどうやって作るんだ？
                        </p>
                    </div>
                    <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        いい質問だね、パイモンちゃん！実はウェブサイトを作るのには、主にマークアップ言語とプログラミング言語の２つが使われるんだ
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* 旅人のセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    マークアップ言語って何？
                        </p>
                    </div>
                    <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>
                
                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        マークアップ言語はね、情報や設計図をまとめて、ウェブサイトや表、絵などの形を作るための言語なんだ。例えばHTMLっていうのがあってね、それでウェブページの基本的な形を作るの
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* パイモンのセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    うーん…でも、オイラがウェブサイトで遊んだりする時、例えばボタンとかを押すと色んなことが起きるぞ？それもHTMLで作るのか？
                        </p>
                    </div>
                    <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        エヘヘ、それがプログラミング言語の出番だよ、パイモンちゃん。ボタンを押すと色んなことが起きるのは、プログラミング言語で作られた機能を使っているからなんだ。例えば、JavaScriptっていう言語がよく使われるよ
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* 旅人のセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    プログラミング言語にも色んな種類があるんだね。でも、なんでそんなにたくさんあるの？
                        </p>
                    </div>
                    <img src="/images/sora03.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        おお、いいところをついてるね、旅人さん。プログラミング言語はね、各言語ごとに書き方のルールが違ってて、その分、何を得意としているか、どんな場面で使われるかが変わってくるんだよ。例えば、ウェブサイトを作る時とアプリを作る時とで、適した言語が違ってくることもあるんだ
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* パイモンのセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    むぅっ…それって、同じことを言うのに、人間の言葉とヒルチャールの言葉で話すのと似てるか？
                        </p>
                    </div>
                    <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        まさにそう！ボクの説明、わかりやすかったかな？
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* パイモンのセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    へー、オイラこれからプログラミング言語で遊んでみたくなってきたぞ！
                        </p>
                    </div>
                    <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* 旅人のセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    パイモンが作ったプログラム、見てみたいな
                        </p>
                    </div>
                    <img src="/images/sora02.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="flex flex-wrap md:flex-nowrap ">
                    {/* ウェンティのセリフ */}
                    <img src="/images/venty01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                        <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                        エヘヘ、それはきっと面白いことになりそうだね。でも覚えておいてね、パイモンちゃんも旅人さんも。プログラミングは最初は難しいけど、コツコツと続ければきっと上手になれるよ
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap">
                    {/* パイモンのセリフ */}
                    <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                    <p className="text-xl text-center md:text-left lg:text-2xl md:text-2xl p-3 container border border-gray-500  bg-white rounded-3xl">
                    うん！頑張るぞ！
                        </p>
                    </div>
                    <img src="/images/pimon01.webp" alt="image" className="object-contain md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-1/6  z-index-1 " />    
                </div>

                <div className="container border border-gray-500  bg-yellow-400">
                    <h2>ここまでのまとめ</h2>
                    <p className="text-xl">・情報や設計図をまとめる(ウェブサイトや表や絵などの形を作る)　→マークアップ言語の役目(HTMLなど)</p>
                    <p className="text-xl">・機能を作る(ここを押したらこうなるなどの反応を作る)　→プログラミング言語の役目(JavaScriptなど)</p>
                    <br/>
                    <p className="text-xl">ウェブサイトはHTMLと何かのプログラミング言語を組み合わせて作られる</p>
                    <br/>
                    <p className="text-xl">プログラミングは各言語ごとに(同じことをやるにしても)書き方のルールが違うよ</p>
                </div>
                
            </div>
        </details>
        </div>
    </>
  )
}

export default Lesson01