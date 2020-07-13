import React from "react"
import "./app.sass"

import TopBlock from "../top-block/top-block"
import ServicesBlock from "../services-block/services-block"
import TeamBlock from "../team-block/team-block"


const App = () => {
    return (
        <>
            <TopBlock />
            <ServicesBlock />
            <TeamBlock />
        </>
    )
}

export default App