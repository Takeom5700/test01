import React from 'react'
import { useState } from "react";
import Lesson01 from "../components/lessons/Lesson01.jsx";
import Lesson02 from "../components/lessons/Lesson02.jsx";
import Lesson03 from "../components/lessons/Lesson03.jsx";
import Lesson04 from "../components/lessons/Lesson04.jsx";
import Lesson05 from "../components/lessons/Lesson05.jsx";

const TopicSection = () => {
    const [selectedChapter, setSelectedChapter] = useState(1);
    const selectedChapterChange = e => {
        console.log("test");
        const chapterNum = e.currentTarget.getAttribute('data-num');
        setSelectedChapter(chapterNum);
    }

  return (
    // <div className="backgroundImg-01">
    <div 
        className={selectedChapter==1? "backgroundImg-01" :selectedChapter==2? "backgroundImg-02":''}>
        
            <button data-num={1} onClick={selectedChapterChange} className={selectedChapter==1? "bg-amber-300 px-6 py-4 font-bold rounded-lg transition-all duration-300 mt-10":"bg-theme px-6 py-4 font-bold rounded-lg transition-all duration-300 mt-10"}>
                <span>第１章　マークアップ言語(HTML)とプログラミング言語</span>
            </button>
        <br/>

        <button data-num={2} onClick={selectedChapterChange} className={selectedChapter==2? "bg-amber-300 px-6 py-4 font-bold rounded-lg transition-all duration-300 mt-10":"bg-theme px-6 py-4 font-bold rounded-lg transition-all duration-300 mt-10"}>
            <span>2章以降に説明する予定の内容はこちら</span>
        </button>

        <div id="topic" className="container mt-64 justify-between items-center mx-auto px-8 md:px-14 lg:p-24 w-full text-3xl tracking-widest bg-neutral-100/90">
        {selectedChapter==1?
            <>
            <Lesson01 />
                <br/>
                <Lesson02 />
                <br/>
                <Lesson03 />
                <br/>
                <Lesson04 />
                <br/>
                <Lesson05 />
                <br/>

                <div className="container border border-gray-500  bg-yellow-400">
                    <div>・第１章のまとめ</div>
                    <div>つまりHTMLとプログラミング言語(JavaScriptか、JavaScript+何か)を組み合わせてホームページが作られてるよ</div>
                    <div>ちなみにデザイン部分はcssっていうマークアップ言語を使って別に作られたものを後からあてはめていくよ</div>
                    <br/>
                    <div>・・・つまり<span className="font-bold">HTML</span>という土台の上に、<span className="font-bold">JavaScriptなどのプログラミング言語</span>と<span className="font-bold">css</span>が接続されているという構造でホームページは作られているよ</div>
                </div>
                <br/>
            </>      
        :""}
        {selectedChapter!=1?
        <>
                <div>プログラミングは主に計算（なにかの処理）をするよ！つまり超高機能な電卓ってこと。</div>
            <div>電卓みたいに簡単な計算をしてみよう</div>
            <div>HTMLとJavaScriptを繋げるのは簡単！</div>
            <div>さっき作ったボタン押したら計算されて結果が表示されるようにできるよ</div>
            <div>クォーテーションマークで囲うと文字列として認識されるよ、囲わないと式として認識されるよ</div>
            <div>プログラミングとは、関数、変数、式、文</div>
            <div>処理の内容が長くなると、まとまりとして管理するよ</div>
            <div>そのまとまりを関数(またはメソッド)と呼ぶよ</div>
            <div>初期からもともと入ってる関数もあるよ</div>
            <div>console logとかalertがその典型でよく使うよ</div>
            <div>関数の中でその関数をまたや別の関数を実行することもできるよ</div>
            <div>関数は、何かを勝手にやって終わるだけのものと、結果の値を伝えてくれるものどっちも作れる</div>
            <div>関数には時には違うものを指定して実行する引数というのを設定できる。これにより同じ関数でも実行内容や結果を多様にできるよ</div>
            <div>関数を作って実行してみよう</div>
            <div>変数</div>
            <div>変数に文字入れたい？数字入れたい？</div>
            <div>変数の基本型の種類</div>
            <div>・string</div>
            <div>・int (number)</div>
            <div>・boorean</div>
            <div>変数はリストにできる</div>
            <div>リストは何重にもできる</div>
            <div>リスト以外にも辞書『連想配列』や『マップ』と呼ばれることもあります）ってのもあるよ</div>
            <div>変数をどこに書く？〜グローバル変数とローカル変数〜</div>
            <div>式と文</div>
            <div>みんな使ってる言葉はよくよく考えてみると文という構造の中に式が入っているようだね</div>
            <div>主に使われてる文の種類は意外と少ないよ</div>
            <div>if文〜もしもホニャララなら〜</div>
            <div>if〜else文〜それ以外は〜</div>
            <div>switch文（if 文で代用できるのであんま重要ではないけど使う人はガンガン使う)</div>
            <div>if文の中に書く「もしも」の条件を書く時は演算子(論理演算子や比較演算子など)を使うよ</div>
            <div>for文〜家族全員のお皿をテーブルに置こう〜</div>
            <div>while文(for文で代用できるのであんま重要じゃないけど使う人はガンガン使う)</div>
            <div>何かの文の中にまた何かの文を何重にも入れていくことが自由にできるよ</div>
            <div>もうデザイン以外はなんでも作れるよ、やったね！</div>
            <div>何か作りたいものある？なければいっぱいアイテム入ってる宝箱作ってみない？</div>
            <div>データの扱い方</div>
        </>
        :""}
        </div>
    </div>
  )
}

export default TopicSection