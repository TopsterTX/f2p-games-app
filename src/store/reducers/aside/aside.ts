import { IDefaultState, Actions, ActionTypes } from "./types";

const defaultState: IDefaultState = {
  isOpen: false,
};

export default (state = defaultState, action: Actions): IDefaultState => {
  switch (action.type) {
    case ActionTypes.CHANGE_DISPLAY_ASIDE:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
