import React from "react";
import s from "./Platform.module.css";
import { IPlatformProps } from "./Platform.props";
import cn from "classnames";
import { NavLink } from "react-router-dom";

export const Platform: React.FC<IPlatformProps> = ({
  platform,
}): JSX.Element => {

  return (
    <NavLink
      to="/platfrom"
      className={cn(s.platform)}
    >
      {platform}
    </NavLink>
  );
};
