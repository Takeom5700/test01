import React, { useState } from 'react';

const Menu_in_hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        {/* <div className="text-lg font-bold">
          <a href="/">
          SiteName.com
          </a>
        </div> */}
        <div className="space-x-12 hidden md:flex items-center">
            <a href="#home" className="hover:text-selected-text transition-all duration-300">ホーム</a>
            <a href="#portfolio" className="hover:text-selected-text transition-all duration-300">ポートフォリオ</a>
            <a href="#skills" className="hover:text-selected-text transition-all duration-300">スキル一覧</a>
            <a href="#contact">
                <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">お問い合わせ</button>
            </a>
        </div>

        <div className="md:hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Menu_in_hamburger