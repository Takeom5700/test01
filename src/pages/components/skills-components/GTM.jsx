import React from 'react'
import Image from 'next/image'

const GTM = () => {
  return (
    <div className="my-16">
        <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-blue-600 transition-all duration-300 cursor-pointer">
            {/* スキルのロゴ */}
            <div className="mb-6 lg:mb-0 self-center">
                {/* <i className="fa-brands fa-python text-9xl text-blue-600"></i> */}
                {/* <img src="/images/gtm-logo.png" alt="image" className="md:w-1/5 w-9/12 lg:w-5/12" /> */}
                <img src="/images/gtm-logo.png" alt="image" className="aspect-auto w-28 -m-1.5"/>
            </div>
            {/* スキルの説明 */}
            <div className="text-center flex flex-wrap justify-cencer lg:text-left lg:block">
                <h3 className="text-3xl font-semibold">Google Tag Manager</h3>
                <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                    <div className="badge">フロントエンド開発</div>
                </div>

                <p className="text-secondary -m-2">
                    様々なスニペット制作のサポートや、設定トラブルの解決を行ってきました。
                </p>
            </div>
        </div>
    </div>
  )
}

export default GTM