import React from "react";
import { connect } from "react-redux";

const SearchResults = () => {

    return (
        <section className="searchResults">
            <h2>Search Results</h2>

            search results
            
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