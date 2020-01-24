import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from "../actions";

const initialState = {
    
    showResults: false,
    commonName: "",
    species: []
    
}

const testState = {

    showResults: true,
    commonName: "unknown",
    species: ["one", "two", "three"]
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case FETCHING_DATA_START:

            console.log("starting to fetch data...");

            return state;

        case FETCHING_DATA_SUCCESS:

            console.log("data obtained.");

            return {...state, showResults: true};

        case FETCHING_DATA_FAILURE:

            console.log("couldn't get data...");

            return testState;
        
        default:

            console.log("default case...");

            return testState;
    }
}