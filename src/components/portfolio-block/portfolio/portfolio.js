import React from "react"

import "./portfolio.sass"
import work from "../../../img/Works.png"


const Portfolio = () => {
    return (
        <div className="portfolio">
            <img src={ work } alt="work" className="work" />
            <button className="more-project">LOAD MORE PROJECTS</button>
        </div>
    )
}

export default Portfolio