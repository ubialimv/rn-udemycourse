import { createStore, combineReducers, compose } from "redux";
import reducerPlaces from "./reducers/reducerPlaces"

const rootReducer = combineReducers({
  places: reducerPlaces
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;