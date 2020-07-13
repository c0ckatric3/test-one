import React from "react"

import "./team-list.sass"
import { ReactComponent as Fb } from "../../../img/Fb.svg"
import { ReactComponent as In } from "../../../img/LinkedIn.svg"
import { ReactComponent as Tw } from "../../../img/Twitter .svg"
import { ReactComponent as Em } from "../../../img/Mail.svg"

import one from "../../../img/face1.jpg"
import two from "../../../img/face2.jpg"
import three from "../../../img/face3.jpg"
import four from "../../../img/face4.jpg"


const TeamList = () => {
    return (
        <div className="team-list">
            <div className="team">
                <img className="photo" src={ one } alt="one" />
                <h4 className="name">ANNE HATHAWAY</h4>
                <span className="position">CEO / Marketing Guru</span>
                <span className="info-team">
                    Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna.
                </span>
                <div className="social">
                    <Fb className="facebook" />
                    <Tw className="twitter" />
                    <In className="linkedin" />
                    <Em className="email" />
                </div>
            </div>

            <div className="team">
                <img className="photo" src={ two } alt="two" />
                <h4 className="name">Kate Upton</h4>
                <span className="position">Creative Director</span>
                <span className="info-team">
                    Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur.
                    Excepteur sint occaecat non diam proident.
                </span>
                <div className="social">
                    <Tw className="twitter" />
                    <In className="linkedin" />
                    <Em className="email" />
                </div>
            </div>

            <div className="team">
                <img className="photo" src={ three } alt="three" />
                <h4 className="name">Olivia Wilde</h4>
                <span className="position">Lead Designer</span>
                <span className="info-team">
                    Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem nesciunt.
                </span>
                <div className="social">
                    <Fb className="facebook" />
                    <Tw className="twitter" />
                    <In className="linkedin" />
                    <Em className="email" />
                </div>
            </div>

            <div className="team">
                <img className="photo" src={ four } alt="four" />
                <h4 className="name">Ashley Greene</h4>
                <span className="position">SEO / Developer</span>
                <span className="info-team">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.
                </span>
                <div className="social">
                    <Fb className="facebook" />
                    <Tw className="twitter" />
                    <Em className="email" />
                </div>
            </div>
        </div>
    )
}

export default TeamList