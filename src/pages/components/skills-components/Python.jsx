import React from 'react'

const Python = () => {
  return (
    <div className="my-16">
        <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-blue-600 transition-all duration-300 cursor-pointer">
            {/* スキルのロゴ */}
            <div className="mb-6 lg:mb-0 self-center">
                <i className="fa-brands fa-python text-9xl text-blue-600"></i>
            </div>
            {/* スキルの説明 */}
            <div className="text-center flex flex-wrap justify-cencer lg:text-left lg:block">
                <h3 className="text-3xl font-semibold">Python</h3>
                <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                    <div className="badge">AI/DX</div>
                    <div className="badge">データサイエンス</div>
                </div>

                <p className="text-secondary">
                    Pythonを利用して遺伝的学習プログラムや自動メロディ生成システムを研究開発していました。
                </p>
            </div>
        </div>
    </div>
  )
}

export default Python