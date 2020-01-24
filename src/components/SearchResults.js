import React from "react";
import { connect } from "react-redux";

const SearchResults = ({showResults, commonName, species}) => {
  
    return (
        <section className="searchResults">
            <h2>Search Results</h2>

            <p>Common name: {commonName}</p>

            <p>Known species: {species.join(", ")}</p>
            
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
  
        showResults: state.showResults,
        commonName: state.commonName,
        species: state.species
    }
  }

export default connect(mapStateToProps, {})(SearchResults);