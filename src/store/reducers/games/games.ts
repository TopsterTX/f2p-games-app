import { Actions, IGames, ActionTypes } from "./types";

const defaultState: IGames = {
  games: [],
  error: "",
  status: "",
  next: "",
  isLoading: false,
};

export default (state = defaultState, action: Actions): IGames => {
  switch (action.type) {
    case ActionTypes.GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case ActionTypes.GET_NEXT_GAMES:
      return {
        ...state,
        games: [...state.games, ...action.payload],
      };
    case ActionTypes.GET_NEXT:
      return {
        ...state,
        next: action.payload,
      };
    case ActionTypes.CHANGE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case ActionTypes.GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.GET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
