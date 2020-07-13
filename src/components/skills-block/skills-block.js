import React from "react"

import Skill from "./skills/skills"

const SkillsBlock = () => {
    return (
        <div className="block white">
            <span className="title black">WE GOT SKILLS!</span>
            <hr />
            <span className="info black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <Skill />
        </div>
    )
}

export default SkillsBlock