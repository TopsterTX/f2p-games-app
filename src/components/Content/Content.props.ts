import { IGame, IGames } from "../../store/reducers/games/types";

export type Props = IPropsContent & IMapStateToProps & IMapDispatchToProps;

interface IPropsContent {}

export interface IStateContent {
  isMax: boolean;
}

export interface IMapStateToProps extends IGames {}

export interface IMapDispatchToProps {
  getGames: any;
  getNextGames: any;
}
