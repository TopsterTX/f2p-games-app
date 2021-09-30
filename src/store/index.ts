import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import games from "./reducers/games/games";
import aside from "./reducers/aside/aside";

const rootReducer = combineReducers({
  games,
  aside,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : undefined
  )
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
