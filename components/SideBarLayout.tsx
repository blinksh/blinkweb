import React from 'react';
import SideBar from './SideBar';
import { useRouter } from 'next/router';
import { RouteType } from '../lib/docs';
import PrevNext from './PrevNext';
let Github = require('./icons/github.svg');

type PropsType = {
  routes: Array<RouteType>;
  children: React.ReactNode;
};

const SideBarLayout = (props: PropsType) => {
  let router = useRouter();
  return (
    <div className="docs-container off-canvas off-canvas-sidebar-show">
      <div id="sidebar" className="docs-sidebar off-canvas-sidebar">
        <SideBar router={router} routes={props.routes || []} />
      </div>
      <a href="#close" className="off-canvas-overlay">
        {''}
      </a>

      <div id="content" className="docs-content off-canvas-content" role="main">
        {props.children}
      </div>
    </div>
  );
};

export default SideBarLayout;
