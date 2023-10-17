import React from 'react'

const HTML_CSS = () => {
  return (
    <div className="my-16">
        <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-400 transition-all duration-300 cursor-pointer">
            {/* スキルのロゴ */}
            <div className="mb-6 lg:mb-0 self-center">
                <i className="fa-brands fa-html5 text-9xl text-orange-400"></i>
            </div>
            {/* スキルの説明 */}
            <div className="text-center flex flex-wrap justify-cencer lg:text-left lg:block">
                <h3 className="text-3xl font-semibold">HTML/CSS</h3>
                <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                    <div className="badge">UI/UX</div>
                    <div className="badge">ホームページ制作</div>
                </div>

                <p className="text-secondary">
                    ホームページ制作・デザインを手がけてきました。
                </p>
            </div>
        </div>
    </div>
  )
}

export default HTML_CSS