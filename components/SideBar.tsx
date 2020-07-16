import React from "react";
import MenuItem from "./MenuItem";
import NavAccordion from "./NavAccordion";
import { NextRouter, Router } from "next/router";
import { RouteType } from "../lib/docs";
import { removeFromLast } from "../lib/utils";

type PropsType = {
  router: NextRouter;
  routes: Array<RouteType>;
};

const SideBar = (props: PropsType) => {
  let menu = props.routes.map((route, i) => (
    <NavAccordion
      key={route.path || i}
      router={props.router}
      path={removeFromLast(route.path, ".") || i.toString()}
      title={route.title}
      open={ true }
    >
      {(route.routes || []).map((sub) => (
        <MenuItem
          key={sub.path}
          as={removeFromLast(sub.path, ".")}
          href={'/docs/[...slug]'}
          text={sub.title}
        />
      ))}
    </NavAccordion>
  ));
  return (
    <div className="docs-nav">
      <div className="accordion-container">{menu}</div>
    </div>
  );
};

export default SideBar;
