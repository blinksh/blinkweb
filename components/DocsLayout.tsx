import React from "react";

type PropsType = {
  children?: React.ReactNode;
};

export default function DocsLayout(props: PropsType) {
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
