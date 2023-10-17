import React from 'react'

const Javascript = () => {
  return (
    <div className="my-16">
        <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
            {/* スキルのロゴ */}
            <div className="mb-6 lg:mb-0 self-center">
                <i className="fa-brands fa-square-js text-9xl text-yellow-300"></i>
            </div>
            {/* スキルの説明 */}
            <div className="text-center flex flex-wrap justify-cencer lg:text-left lg:block">
                <h3 className="text-3xl font-semibold">Javascript</h3>
                <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                    <div className="badge">ウェブサイト制作</div>
                    <div className="badge">フロントエンド開発</div>
                </div>
                <p className="text-secondary">
                Javascriptエンジニア。
                様々なCMSや、Reactやnext.jsで開発をしています。
                </p>
            </div>
        </div>
    </div>
  )
}

export default Javascript