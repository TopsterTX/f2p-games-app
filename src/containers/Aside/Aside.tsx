import React from "react";
import s from "./Aside.module.css";
import cn from "classnames";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { IMapDispatchToProps, Props } from "./Aside.props";

class AsideInner extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <aside
        className={cn(s.aside, {
          [s.active]: this.props.isOpen === true,
        })}
      >
        <div className={s.container}></div>
      </aside>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  ...state.aside,
});

const mapDispatchToProps: IMapDispatchToProps = {
  //  showAside,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export const Aside = connector(AsideInner);
