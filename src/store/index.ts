import { createStore, applyMiddleware, compose, combineReducers } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import logger from "redux-logger";
import thunk from "redux-thunk";
import games from "./reducers/games/games";
import aside from "./reducers/aside/aside";

const rootReducer = combineReducers({
  games,
  aside,
});

const composeDevTools =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : compose;

export const store = createStore(
  rootReducer,
  composeDevTools(applyMiddleware(thunk, logger))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
