export interface IDefaultState {
  isOpen: boolean;
}

export enum ActionTypes {
  CHANGE_DISPLAY_ASIDE = "CHANGE_DISPLAY_ASIDE",
}

interface IShowAsideAction {
  type: ActionTypes.CHANGE_DISPLAY_ASIDE;
  payload: boolean;
}

export type Actions = IShowAsideAction;
