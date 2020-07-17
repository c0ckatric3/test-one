import React from "react"
import Reviews from "./reviews/reviews"


const AboutBlock = () => {
    return (
        <div className="block pink">
            <span className="title">WHAT POEPLE SAY ABOUT US</span>
            <hr />
            <span className="info">Our clients love us!</span>
            <Reviews />
        </div>
    )
}

export default AboutBlock