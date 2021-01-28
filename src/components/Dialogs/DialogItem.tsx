import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
	id: number
	name: string
}

export const DialogItem = (props: Props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};