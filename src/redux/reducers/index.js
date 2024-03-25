const initState = {
  favourites: {
    content: [],
  },
};

const mainReducer = function (state = initState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.concat(action.payload),
        },
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((job, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
