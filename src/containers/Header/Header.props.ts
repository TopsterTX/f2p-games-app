export interface IMapStateToProps {
  isOpen: boolean;
}

export interface IMapDispatchToProps {
  changeDisplayAside: any;
}

interface IProps {}

export type Props = IMapDispatchToProps & IMapStateToProps & IProps;
