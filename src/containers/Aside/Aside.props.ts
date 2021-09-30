export interface IMapStateToProps {
  isOpen: boolean;
}

export interface IMapDispatchToProps {}

interface IProps {}

export type Props = IMapStateToProps & IMapDispatchToProps & IProps;
