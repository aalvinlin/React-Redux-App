import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const search = (plant) => dispatch => {

    dispatch({ type: FETCHING_DATA_START, payload: plant });

    axios.get("https://trefle.io/api/plants?q=" + plant + "?token=")
        .then(response => {

            console.log("connected to database:", response);

            dispatch({ type: FETCHING_DATA_SUCCESS, payload: plant });

        })
        .catch(response => {
            
            console.log("error:", response);

            dispatch({ type: FETCHING_DATA_FAILURE, payload: response });
        })
}


