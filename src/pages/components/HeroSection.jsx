import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    // <div id="home" className="container mt-16 flex justify-between">
    <div id="home" className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
                <h1 className="font-bold text-5xl text-center md:text-left lg:text-5xl md:text-3xl pb-32">
                ゆうきさんのための<br/>プログラミング講座<br/>
                </h1>
                {/* <a href="#topic">
                      <i className="fa-solid fa-music mr-1"></i>
                      <span>Topic</span>
                </a> */}
                <br/>
            </div>
            {/* <img src="/images/human.jpg" alt="image" className="md:absolute lg:top-2 lg:right-52 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-3/6" /> */}
            <img src="/images/cat01.png" alt="image" className="md:absolute lg:top-50 lg:right-52 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-2/6" />
        </div>
    </div>
  )
}

export default HeroSection