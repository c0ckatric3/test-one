import React from "react"

import "./portfolio-menu.sass"


const PortfolioMenu = () => {
    return (
        <div className="portfolio-menu">
            <nav className="menu">
                <a href="#" className="active" >all</a>
                <a href="#" >web</a>
                <a href="#" >apps</a>
                <a href="#" >icons</a>
            </nav>
        </div>
    )
}

export default PortfolioMenu