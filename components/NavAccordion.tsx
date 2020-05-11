import React, { ReactChildren } from "react";
import { NextRouter } from "next/router";

import Accordion from "./Accordion";

type PropsType = {
  path: string;
  title: string;
  children: React.ReactNode;
  location?: { pathname: string };
  open?: boolean;
  onAltButtonClick?: () => void;
  router: NextRouter;
};

const NavAccordion = (props: PropsType) => {
  const router = props.router;
  const id = (props.path + "nav-acc").replace(/\\/, "--");
  const open = router.asPath.indexOf(props.path) === 0;
  console.log(router.asPath, props.path);
  return (
    <Accordion
      id={id}
      title={props.title}
      open={open || props.open}
      onAltButtonClick={props.onAltButtonClick}
    >
      <ul className="menu menu-nav">{props.children}</ul>
    </Accordion>
  );
};

export default NavAccordion;
// export default withRouter(NavAccordion);
