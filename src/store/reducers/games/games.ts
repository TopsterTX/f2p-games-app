import { Action, IDefaultState } from "./types";

const defaultState: IDefaultState = {
  games: [],
};

export default (state = defaultState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
