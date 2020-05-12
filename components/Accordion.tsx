import React from "react";

type PropTypes = {
  id: string;
  title: string;
  open?: boolean;
  children: React.ReactNode;
};

const Accordion = (props: PropTypes) => (
  <div className="accordion" style={{ position: "relative" }}>
    <input
      type="checkbox"
      id={props.id}
      name={props.id + "-name"}
      defaultChecked={props.open}
      hidden
    />
    <label className="accordion-header c-hand" htmlFor={props.id}>
      {props.title}
    </label>
    <div className="accordion-body">{props.children}</div>
  </div>
);

export default Accordion;
