import React from "react"

import "./reviews.sass"
import face1 from "../../../img/anna.jpg"
import face2 from "../../../img/lolya.jpg"
import face3 from "../../../img/anna1.jpg"
import face4 from "../../../img/nanya.jpg"


const Reviews = () => {
    return (
        <div className="reviews-main">
            <div className="reviews one">
                <div className="block-1">
                    <img src={ face4 } alt="nanya" />
                    <span className="review">
                        “Nullam dapibus blandit orci, viverra gravida dui lobortis eget.
                        Maecenas fringilla urna eu nisl scelerisque.”
                    </span>
                </div>
                <div className="block-2">
                    <span className="name">Chanel Iman </span>
                    <span className="type">CEO of Pinterest </span>
                </div>

            </div>
            <div className="reviews one">
                <div className="block-1">
                    <img src={ face2 } alt="lolya" />
                    <span className="review">
                        “Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
                        In condimentum facilisis porta.”
                    </span>
                </div>
                <div className="block-2">
                    <span className="name">ADRIANA LIMA</span>
                    <span className="type">Founder of Instagram</span>
                </div>
            </div>
            <div className="reviews">
                <div className="block-1">
                    <img src={ face3 } alt="anna2" />
                    <span className="review">
                        “Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
                        In condimentum facilisis porta.”  
                    </span>
                </div>
                <div className="block-2">
                    <span className="name">ANNE HATHAWAY</span>
                    <span className="type">Lead Designer at Behance </span>
                </div>
            </div>
            <div className="reviews">
                <div className="block-1">
                    <img src={ face1 } alt="nanya" />
                    <span className="review">
                        “Phasellus non purus vel arcu tempor commodo. Fusce semper, purus vel
                        luctus molestie, risus sem cursus neque.”  
                    </span>
                </div>
                <div className="block-2">
                    <span className="name">EMMA STONE</span>
                    <span className="type">Co-Founder of Shazam </span>
                </div>
            </div>
        </div>
    )
}

export default Reviews