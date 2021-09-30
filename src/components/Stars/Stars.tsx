import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { ReactComponent as Star } from "./star.svg";
import s from "./Stars.module.css";
import { IProps } from "./Stars.props";
import cn from "classnames";

export const Stars: React.FC<IProps> = ({ rating = 0 }): JSX.Element => {
  return (
    <div className={s.rating} data-tooltip={rating}>
      <Star
        className={cn(s.star, {
          [s.filled]: Math.round(rating) >= 1,
        })}
      />
      <Star
        className={cn(s.star, {
          [s.filled]: Math.round(rating) >= 2,
        })}
      />
      <Star
        className={cn(s.star, {
          [s.filled]: Math.round(rating) >= 3,
        })}
      />
      <Star
        className={cn(s.star, {
          [s.filled]: Math.round(rating) >= 4,
        })}
      />
      <Star
        className={cn(s.star, {
          [s.filled]: Math.round(rating) === 5,
        })}
      />
    </div>
  );
};
