import { Dispatch } from "redux";
import { BASE_URL } from "../../../constants/constants";
import { Actions, ActionTypes } from "./types";
import { apiGames } from "../../../axios/axios";

export const getGames = () => async (dispatch: Dispatch<Actions>) => {
  try {
    dispatch({ type: ActionTypes.CHANGE_LOADING });
    const res = await apiGames(BASE_URL, {
      params: {
        key: "8e0955ab6c164cd391aa843f70b32c91",
        page_size: "20",
      },
    });
    dispatch({ type: ActionTypes.GET_GAMES, payload: res.data.results });
    dispatch({ type: ActionTypes.GET_NEXT, payload: res.data.next });
  } catch (e) {
    dispatch({ type: ActionTypes.GET_ERROR, payload: `${e}` });
  } finally {
    dispatch({ type: ActionTypes.CHANGE_LOADING });
  }
};

export const getNextGames =
  (url: string) => async (dispatch: Dispatch<Actions>) => {
    try {
      dispatch({ type: ActionTypes.CHANGE_LOADING });
      const res = await apiGames(url);
      dispatch({ type: ActionTypes.GET_NEXT_GAMES, payload: res.data.results });
      dispatch({ type: ActionTypes.GET_NEXT, payload: res.data.next });
    } catch (e) {
      dispatch({ type: ActionTypes.GET_ERROR, payload: `${e}` });
    } finally {
      dispatch({ type: ActionTypes.CHANGE_LOADING });
    }
  };
