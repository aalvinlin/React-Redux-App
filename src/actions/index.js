import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const search = (searchQuery) => dispatch => {

    console.log("clicked with search query", searchQuery);

    dispatch({ type: FETCHING_DATA_START, payload: searchQuery });

    axios.get("https://swapi.co/api/people/1")
        .then(response => {

            console.log("connected to database:", response);

            dispatch({ type: FETCHING_DATA_SUCCESS, payload: searchQuery });

        })
        .catch(response => {
            
            console.log("error:", response);

            dispatch({ type: FETCHING_DATA_FAILURE, payload: response });
        })
}


