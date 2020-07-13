import React from "react"

import "./services.sass"
import brand from "../../../img/Flag.svg"
import design from "../../../img/crayon.svg"
import development from "../../../img/gears.svg"
import science from "../../../img/rocket.svg"


const Services = () => {
    return (
        <div className="container">
            <div className="services">
                <img src={ brand } alt="brand" />
                <h3>Branding</h3>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</span>
            </div>
            <div className="services">
                <img src={ design } alt="design" />
                <h3>Design</h3>
                <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  </span>
            </div>
            <div className="services">
                <img src={ development } alt="development" />
                <h3>Development</h3>
                <span>At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.</span>
            </div>
            <div className="services">
                <img src={ science } alt="science" />
                <h3>ROCKET SCIENCE</h3>
                <span>Et harum quidem rerum est et expedita distinctio. Nam libero tempore.</span>
            </div>
        </div>
    )
}

export default Services