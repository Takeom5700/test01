import React from 'react'
import Javascript from "./skills-components/Javascript.jsx";
import Python from "./skills-components/Python.jsx";
import HTML_CSS from "./skills-components/HTML_CSS.jsx";
import GTM from "./skills-components/GTM.jsx";
import GoogleAnalytics from "./skills-components/GoogleAnalytics.jsx";

const SkillSection = () => {
  return (
    <div id="skills" className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
            <h2 className="secondary-title">スキルスタック</h2>
            <p className="section-paragraph">
                私は以下のスキルを持っています
            </p>
            <Javascript />
            <Python />
            <HTML_CSS />
            <GTM />
            <GoogleAnalytics />

        </section>
    </div>
  )
}

export default SkillSection