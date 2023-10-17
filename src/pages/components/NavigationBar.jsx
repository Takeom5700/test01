import React, { useState } from 'react';

const NavigationBar = () => {
  const [isMenu_in_hamburger_Open, setIsMenu_in_hamburger_Open] = useState(false);
  return (
    <header className="py-6">
        <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg font-bold">
              <a href="/">
              ゆうきのためのプログラミング講座
              </a>
            </div>
            <div className="space-x-12 hidden md:flex items-center">
                <a href="#home" className="hover:text-selected-text transition-all duration-300">ホーム</a>
                <a href="#topic" className="hover:text-selected-text transition-all duration-300">Topic</a>
            </div>

            <div>
            {isMenu_in_hamburger_Open ? (
              <ul>
                <li><a href="#home">ホーム</a></li>
                <li><a href="#topic">Topic</a></li>
              </ul>

            ):""}
            </div>

            <div className="md:hidden">
              {isMenu_in_hamburger_Open ? (
                  <button onClick={() => setIsMenu_in_hamburger_Open(!isMenu_in_hamburger_Open)}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                ): (
                  <button onClick={() => setIsMenu_in_hamburger_Open(!isMenu_in_hamburger_Open)}>
                   <i className="fa-solid fa-bars"></i>
                  </button>
                ) 
              }
            </div>
            
        </div>
    </header>
  )
}

export default NavigationBar