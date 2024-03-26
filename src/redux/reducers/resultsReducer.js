import { GET_JOB_LIST } from "../actions";

const initState = {
  jobsList: [],
};

const resultsReducer = function (state = initState, action) {
  switch (action.type) {
    case GET_JOB_LIST:
      return {
        ...state,
        jobsList: action.payload,
      };

    default:
      return state;
  }
};

export default resultsReducer;
