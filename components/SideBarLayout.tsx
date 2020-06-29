import React from 'react';
import SideBar from './SideBar';
import { useRouter } from 'next/router';
import { RouteType } from '../lib/docs';
let Logo = require('./logo.svg');
let Github = require('./icons/github.svg');

const Brand = () => <div className="docs-brand"></div>;

const NavBar = () => (
  <div className="docs-navbar">
    <a className="off-canvas-toggle btn btn-link btn-action" href="#sidebar">
      <i className="icon icon-menu" />
    </a>
    <div className="btns d-flex">
      <Logo />
      {/* &nbsp; &nbsp;
      <input
        id="dfd"
        placeholder="Search docs"
        style={{
          background: "transparent",
          borderRadius: 30,
          marginTop: 2,
          outlineStyle: "none",
          color: "white",
          paddingLeft: 12,
          paddingRight: 12,
          borderWidth: 1,
        }}
      />
      &nbsp; */}
      {/* <Github /> */}
    </div>

    <style jsx global>{`
      .docs-navbar {
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        // background-color: rgba(13, 19, 28, 0.5);
        left: 0;
        padding-left: 13rem;
        padding-top: 0.7rem;
      }
      @media (max-width: 960px) {
        .docs-navbar {
          padding-left: 5rem;
          background-color: rgba(13, 19, 28, 0.5);
        }
      }
    `}</style>
  </div>
);

type PropsType = {
  routes: Array<RouteType>;
  children: React.ReactNode;
};

const SideBarLayout = (props: PropsType) => {
  let router = useRouter();
  return (
    <div className="docs-container off-canvas off-canvas-sidebar-show">
      <NavBar />
      <div id="sidebar" className="docs-sidebar off-canvas-sidebar">
        <Brand />
        <SideBar router={router} routes={props.routes || []} />
      </div>
      <a href="#close" className="off-canvas-overlay">
        {''}
      </a>

      <div id="content" className="docs-content off-canvas-content" role="main">
        {props.children}
      </div>
      <style global jsx>
        {`
          .docs-content {
            margin-top: 4rem;
          }
        `}
      </style>
    </div>
  );
};

export default SideBarLayout;
