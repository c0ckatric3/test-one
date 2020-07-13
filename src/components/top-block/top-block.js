import React from "react"
import Header from "./header/header";
import ButtonMain from "./button/button";

const TopBlock = () => {
    return (
        <div className="block purple">
            <Header />
            <span className="main-header">
                Hi there! We are the new kids on the block
                and we build awesome websites and mobile apps.
                </span>
            <ButtonMain />
        </div>
    )
}

export default TopBlock