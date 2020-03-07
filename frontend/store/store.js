import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web



const persistConfig = {
  key: "root",
  storage,
  whitelist: ['entities']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
if (process.env.NODE_ENV === "development") middleware.push(logger);


const configureStore = (preloadedState = {}) => {
  let store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
  let persistor = persistStore(store);
  return { store, persistor };
};

// const configureStore = (preloadedState = {}) =>
//   createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;