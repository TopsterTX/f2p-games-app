import React, { useEffect } from "react";
import s from "./Game.module.css";
import { IProps } from "./Game.props";
import { NavLink } from "react-router-dom";
import { Stars } from "../Stars/Stars";
import { platform } from "process";
import { Platform } from "./../Platform/Platform";

export const Game: React.FC<IProps> = ({
  background_image = "",
  rating = 0,
  reviews_count = 0,
  name = "",
  platforms = [],
}): JSX.Element => {
  return (
    //<a href={game_url}>
    <article className={s.game}>
      <a href="" className={s.image}>
        <img
          src={background_image}
          alt=""
          width="270"
          height="162"
          decoding="async"
          loading="lazy"
        />
        <span className={s.title}>{name}</span>
      </a>

      <div className={s.container}>
        <section className={s.stars}>
          <Stars rating={rating} />
          <span className={s.reviews}>Обзоров: {reviews_count}</span>
        </section>
        <section className={s.platforms}>
          <span className={s.reviews}>Платформы:</span>
          {platforms.map((el) => (
            <Platform platform={el.platform.name} />
          ))}
        </section>
      </div>
    </article>
    //</a>
  );
};
