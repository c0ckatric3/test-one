import React from "react"

import "./skills.sass"

const Skill = () => {
    return (
        <div className="skills">
            <div className="skill">
                <span className="percent">90<span className="pers">%</span></span>
                <span className="type">Web Design</span>
            </div>
            <div className="skill">
                <span className="percent">75<span className="pers">%</span></span>
                <span className="type">HTML / CSS</span>
            </div>
            <div className="skill">
                <span className="percent">70<span className="pers">%</span></span>
                <span className="type">GRAPHIC DESIGN</span>
            </div>
            <div className="skill">
                <span className="percent">85<span className="pers">%</span></span>
                <span className="type">UI / UX</span>
            </div>
        </div>
    )
}

export default Skill