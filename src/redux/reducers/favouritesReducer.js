import { ADD_TO_FAVOURITES } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";

const initState = {
  content: [],
};

const favouritesReducer = function (state = initState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: state.content.concat(action.payload),
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,

        content: state.content.filter((job, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesReducer;
