import React from 'react'

const PortfolioSection = () => {
  return (
    <div id="portfolio" className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
            <h2 className="secondary-title">ポートフォリオ</h2>
            <p className="section-paragraph">
                私が作ってきたWebアプリケーションがこちら
            </p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                <img src="./images/portfolio1.jpg" 
                     alt="" 
                     className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" 
                />
                <img src="./images/portfolio2.jpg" 
                     alt="" 
                     className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" 
                />
                <img src="./images/portfolio3.jpg" 
                     alt="" 
                     className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" 
                />
                <img src="./images/portfolio4.jpg" 
                     alt="" 
                     className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" 
                />
                <img src="./images/portfolio5.jpg" 
                     alt="" 
                     className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" 
                />
                <img src="./images/portfolio6.jpg" 
                     alt="" 
                     className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" 
                />

            </div>

        </section>
    </div>
  )
}

export default PortfolioSection