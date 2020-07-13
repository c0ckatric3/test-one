import React from "react"

import TeamList from "./team-list/team-list"

const TeamBlock = () => {
    return (
        <div className="block gray">
            <span className="title black">MEET OUR BEAUTIFUL TEAM</span>
            <hr />
            <span className="info black">
            We are a small team of designers and developers, who help brands with big ideas.  
            </span>
            <TeamList />
        </div>
    )
}

export default TeamBlock