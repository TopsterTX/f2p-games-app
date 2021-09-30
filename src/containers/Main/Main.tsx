import React from "react";
import s from "./Main.module.css";
import { Route, Redirect, Switch } from "react-router-dom";
import { Content, Favorite } from "../../components";
import cn from "classnames";

export const Main: React.FC<{}> = (): JSX.Element => {
  return (
    <main className={s.main}>
      <Switch>
        <Route path="/" render={() => <Content />} exact />
        <Route path="/favorite" render={() => <Favorite />} exact />
      </Switch>
      <Redirect to="/" />
    </main>
  );
};
