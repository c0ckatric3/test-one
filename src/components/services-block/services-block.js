import React from "react"

import "./services-block.sass"
import Services from "./services/services";

const ServicesBlock = () => {
    return (
        <div className="block green">
            <span className="title">SERVICES WE PROVIDE</span>
            <hr />
            <span className="info">
                We are working with both individuals and businesses from all over the globe
                to create awesome websites and applications. 
            </span>
            <Services />
        </div>
    )
}

export default ServicesBlock