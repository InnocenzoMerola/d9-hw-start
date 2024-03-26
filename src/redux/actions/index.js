export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOB_LIST = "GET_JOB_LIST";

export const addToFavourites = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};

export const removeFromFavourites = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i,
  };
};

export const getJobAction = (query) => {
  return (dispatch, getState) => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Error fetching results");
        }
      })
      .then((fetchedJobs) => {
        dispatch({
          type: GET_JOB_LIST,
          payload: fetchedJobs.data,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};
