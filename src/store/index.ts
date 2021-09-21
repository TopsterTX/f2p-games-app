import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import games from "./reducers/games/games";

const rootReducer = combineReducers({
  games,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : (f: void): void => {}
  )
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
