import React from "react";
import MenuItem from "./MenuItem";
import NavAccordion from "./NavAccordion";
import { RouteType } from "../lib/docs";
import { removeFromLast } from "../lib/utils";
// import Link from "next/link";
import { NextRouter, Router } from "next/router";
import checkCustomRoutes from "next/dist/lib/check-custom-routes";

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
      open={
        (route.routes || []).findIndex(
          (r) => props.router.asPath.indexOf(removeFromLast(r.path, ".")) === 0
        ) >= 0
      }
    >
      {(route.routes || []).map((sub) => (
        <MenuItem
          key={sub.path}
          url={removeFromLast(sub.path, ".")}
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
