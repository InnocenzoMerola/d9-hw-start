import { configureStore, combineReducers } from "@reduxjs/toolkit";

import favouritesReducer from "../reducers/favouritesReducer";
import resultsReducer from "../reducers/resultsReducer";

const jobReduces = combineReducers({
  favourite: favouritesReducer,
  result: resultsReducer,
});

const store = configureStore({
  reducer: jobReduces,
});

export default store;
