import React from "react";

const Taxonomy = () => {

    return (
        <section className="taxonomy">
            <h2>Taxonomy</h2>

            <div className="taxonomyList">    
                <p>Kingdom: <span className="latinName">Plantae</span></p>
                <p>Phylum: <span className="latinName">?</span></p>
                <p>Order: <span className="latinName">Solanales</span></p>
                <p>Family: <span className="latinName">Solanaceae</span></p>
            </div>
        </section>
    )
}

export default Taxonomy;