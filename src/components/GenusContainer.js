import React from "react";

import { connect } from "react-redux";
import { search } from "../actions";

import "../images/eggplant.jpg";
import "../images/nightshade.jpg";
import "../images/tomatoes.jpg";
import "../images/potatoes.jpg";
import "../images/peppers.jpg";


const GenusContainer = ({genusPlants}) => {

    return (

        <div className="genusContainer">

            <section className="genusDiv">
                <h2 className="latinName">Genus: Solanum</h2>

                <div className="imgContainer">

                    {genusPlants.map(plant => {

                        let imgUrl = require(`../images/${plant}.jpg`);

                        return (
                            <figure className="genusImgAndName" key={plant}>
                                <img src={imgUrl} onClick={() => search(plant)} />
                                <figcaption onClick={() => search(plant)}>{plant[0].toUpperCase() + plant.slice(1, plant.length)}</figcaption>
                            </figure>
                        )

                    })}
                    
                </div>
                
            </section>

        </div>

    )
}

const mapStateToProps = (state) => {
    return {

        showResults: state.showResults,
        commonName: state.commonName,
        species: state.species
    }
}

export default connect(mapStateToProps, { connect})(GenusContainer);