import React from "react";
import "../styles/index.scss";

type PropsType = {
  children?: React.ReactNode;
};

export default function SimpleLayout(props: PropsType) {
  return (
    <div className="container grid-xl">
      <div className="columns">
        <div className="col-12">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
