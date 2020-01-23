import React from "react";
import Taxonomy from "./Taxonomy";

const Header = () => {

    return (
        <header>
            <h1>The Nightshade Family</h1>
            <h2 className="latinName">Solanaceae</h2>

            <Taxonomy />

        </header>

    )
}

export default Header;