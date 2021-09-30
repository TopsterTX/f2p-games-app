/// <reference types="react-scripts" />

declare global {
  interface window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
