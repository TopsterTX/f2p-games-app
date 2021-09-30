import React from "react";
import s from "./Favorite.module.css";

export class Favorite extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <section className={s.favorite}>
        <div className={s.container}>FAVORITE</div>
      </section>
    );
  }
}
