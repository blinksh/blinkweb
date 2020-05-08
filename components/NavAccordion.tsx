import React, { ReactChildren } from "react";
import { useRouter } from "next/router";

import Accordion from "./Accordion";

type PropsType = {
  path: string;
  title: string;
  children: React.ReactNode;
  location?: { pathname: string };
  open?: boolean;
  onAltButtonClick?: () => void;
};

const NavAccordion = (props: PropsType) => {
  const router = useRouter();
  const id = (props.path + "nav-acc").replace(/\\/, "--");
  const open = router.pathname.indexOf(props.path) === 0;
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
