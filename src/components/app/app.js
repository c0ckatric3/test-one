import React from "react"
import "./app.sass"

import TopBlock from "../top-block/top-block"
import ServicesBlock from "../services-block/services-block"
import TeamBlock from "../team-block/team-block"
import SkillsBlock from "../skills-block/skills-block"
import PortfolioBlock from "../portfolio-block/portfolio-block"


const App = () => {
    return (
        <>
            <TopBlock />
            <ServicesBlock />
            <TeamBlock />
            <SkillsBlock />
            <PortfolioBlock />
        </>
    )
}

export default App