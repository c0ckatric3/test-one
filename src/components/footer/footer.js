import React from "react"

import "./footer.sass"


const Footer = () => {
    return (
        <div className="footer blue-dark">
            <nav className="social-footer">
                <a href="#" className="facebook">Facebook</a>
                <a href="#" className="twitter">Twitter</a>
                <a href="#" className="google">Google+</a>
                <a href="#"className="linkedin">LinkedIn</a>
                <a href="#"className="behance">Behance</a>
                <a href="#"className="dribbble">Dribbble</a>
                <a href="#"className="github">GitHub</a>
                <div className="footer-back" />
            </nav>
        </div>
    )
}

export default Footer