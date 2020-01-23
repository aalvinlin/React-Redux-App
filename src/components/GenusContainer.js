import React from "react";
import eggplantImg from "../images/eggplant.jpg";
import nightshadeImg from "../images/nightshade.jpg";
import tomatoImg from "../images/tomatoes.jpg";
import potatoImg from "../images/potatoes.jpg";
import pepperImg from "../images/peppers.jpg";


const GenusContainer = () => {

    return (

        <div className="genusContainer">

            <section className="genusDiv">
                <h2 className="latinName">Genus: Solanum</h2>

                <div className="imgContainer">
                    <figure className="genusImgAndName">
                        <img src={nightshadeImg} />
                        <figcaption>Nightshade</figcaption>
                    </figure>
                    <figure className="genusImgAndName">
                        <img src={tomatoImg} />
                        <figcaption>Tomatoes</figcaption>
                    </figure>
                    <figure className="genusImgAndName">
                        <img src={eggplantImg} />
                        <figcaption>Eggplant</figcaption>
                    </figure>
                    <figure className="genusImgAndName">
                        <img src={potatoImg} />
                        <figcaption>Potatoes</figcaption>
                    </figure>
                </div>
                
            </section>

            <section className="genusDiv">
                <h2 className="latinName">Genus: Capsicum</h2>

                <div className="imgContainer">
                    <figure className="genusImgAndName">
                        <img src={pepperImg} />
                        <figcaption>Peppers</figcaption>
                    </figure>
                </div>
                
            </section>

        </div>

    )
}

export default GenusContainer;