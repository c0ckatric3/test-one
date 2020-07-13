import React from "react"

import Portfolio from "./portfolio/portfolio"
import PortfolioMenu from "./portfolio-menu/portfolio-menu"


const PortfolioBlock = () => {
    return (
        <div className="block yellow">
            <span className="title black">OUR PORTFOLIO</span>
            <hr />
            <span className="info black">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet  consectetur, adipisci velit, sed quia non numquam
            </span>
            <PortfolioMenu />
            <Portfolio />
        </div>
    )
}

export default PortfolioBlock