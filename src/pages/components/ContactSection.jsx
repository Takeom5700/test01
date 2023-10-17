import React from 'react'

const ContactSection = () => {
  return (
    <div id="contact" className="container mt-52 mb-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
            <h2 className="secondary-title">お問い合わせ</h2>
            <p className="section-paragraph">
                ご依頼やご質問などなどなんでもお気軽にご連絡ください。
            </p>
            <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
                <div className="space-y-12">
                    <div>
                        <label className="block mb-6 text-xl font-bold">お名前
                            <input 
                                type="text" className="w-full border border-inputBorder bg-input px-4 py-4" 
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block mb-6 text-xl font-bold">メールアドレス
                            <input 
                                type="email" className="w-full border border-inputBorder bg-input px-4 py-4" 
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block mb-6 text-xl font-bold">メッセージ
                            <input 
                                type="text" className="w-full border border-inputBorder bg-input px-4 py-4" 
                            />
                        </label>
                    </div>
                    <button className="px-8 py-3 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
                            送信する
                    </button>
                </div>

                <div>
                    <p className="text-secondary">(+60)145030621</p>
                    <a href="mailto:takechan5700@gmail.com">takechan5700@gmail.com</a>

                    {/* sns */}
                    <div className="mt-20 space-x-6">
                        <a href="#">
                            <i className="fa-brands fa-twitter text-3xl text-blue-400"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-facebook text-3xl text-blue-600"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-instagram text-3xl text-pink-400"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactSection