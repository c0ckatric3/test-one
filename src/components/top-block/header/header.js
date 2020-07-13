import React from 'react'
import './header.sass'

import logo from "../../../img/logo.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={ logo } alt="logo" />
            </div>
            <nav>
                <a href="#" className="active">home</a>
                <a href="#">about</a>
                <a href="#">work</a>
                <a href="#">blog</a>
                <a href="#">contact</a>
            </nav>
        </div>
    )
}

export default Header