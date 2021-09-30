import React from "react";
import s from "./Header.module.css";
import cn from "classnames";
import { Props, IMapStateToProps, IMapDispatchToProps } from "./Header.props";
import { RootState } from "../../store";
import { changeDisplayAside } from "./../../store/reducers/aside/asideActions";
import { connect } from "react-redux";
import { ReactComponent as Loupe } from "../../icons/search.svg";
import { ReactComponent as Bookmarks } from "../../icons/bookmark.svg";
import { NavLink } from "react-router-dom";

export class HeaderInner extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <header className={s.header}>
        <div className={s.container}>
          <button
            className={cn(s.button, {
              [s.active]: this.props.isOpen === true,
            })}
            onClick={this.clickHandler}
          >
            <span></span>
          </button>
          <div className={s.search}>
            <input type="text" className={s.input} placeholder="Поиск..." />
            <Loupe className={cn(s.loupe, s.icon)} />
          </div>
          <div className={s.addons}>
            <NavLink to="/favorite">
              <Bookmarks className={cn(s.bookmark, s.icon)} />
            </NavLink>
            <span className={cn(s.changer, s.icon)} />
          </div>
        </div>
      </header>
    );
  }

  clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    this.props.changeDisplayAside(!this.props.isOpen);
  };
}

const mapStateToProps = (state: RootState): IMapStateToProps => ({
  ...state.aside,
});

const mapDispatchToProps: IMapDispatchToProps = {
  changeDisplayAside,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export const Header = connector(HeaderInner);
