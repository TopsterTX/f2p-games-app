export interface IGames {
  games: Array<IGame>;
  next: string;
  error: string;
  status: string;
  isLoading: boolean;
}

export interface IGame {
  added?: number;
  added_by_status?: {};
  background_image?: string;
  clip?: any;
  dominant_color?: string;
  esrb_rating?: {};
  genres?: [];
  id?: number;
  metacritic?: number;
  name?: string;
  parent_platforms?: [];
  platforms?: Array<{
    platform: {
      name: string;
    };
  }>;
  playtime?: number;
  rating?: number;
  rating_top?: number;
  ratings?: [];
  ratings_count?: number;
  released?: string;
  reviews_count?: number;
  reviews_text_count?: number;
  saturated_color?: string;
  short_screenshots?: [];
  slug?: string;
  stories?: [];
  suggestions_count?: number;
  tags?: [];
  tba?: boolean;
  updated?: string;
  user_game?: any;
}

export enum ActionTypes {
  GET_GAMES = "GET_GAMES",
  GET_ERROR = "GET_ERROR",
  GET_NEXT = "GET_NEXT",
  GET_STATUS = "GET_STATUS",
  GET_NEXT_GAMES = "GET_NEXT_GAMES",
  CHANGE_LOADING = "CHANGE_LOADING",
}

interface IGetNext {
  type: ActionTypes.GET_NEXT;
  payload: string;
}

interface IGetNextGames {
  type: ActionTypes.GET_NEXT_GAMES;
  payload: Array<{}>;
}

interface IGetGames {
  type: ActionTypes.GET_GAMES;
  payload: [];
}

interface IGetError {
  type: ActionTypes.GET_ERROR;
  payload: string;
}

interface IGetStatus {
  type: ActionTypes.GET_STATUS;
  payload: string;
}

interface IChangeLoading {
  type: ActionTypes.CHANGE_LOADING;
}

export type Actions =
  | IChangeLoading
  | IGetStatus
  | IGetError
  | IGetGames
  | IGetNext
  | IGetNextGames;
