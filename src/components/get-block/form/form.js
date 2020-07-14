import React from "react"

import "./form.sass"


const Form = () => {
    return (
        <div className="form">
            <div className="input-con">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
            </div>
            <textarea rows="10" placeholder="Your Message" />
            <button >SEND MESSAGE</button>
        </div>
    )
}

export default Form