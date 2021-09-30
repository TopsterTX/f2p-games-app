import { Actions, ActionTypes } from "./types";

export const changeDisplayAside = (bool: boolean): Actions => {
  return {
    type: ActionTypes.CHANGE_DISPLAY_ASIDE,
    payload: bool,
  };
};
