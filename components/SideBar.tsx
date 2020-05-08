import React from "react";
import MenuItem from "./MenuItem";
import NavAccordion from "./NavAccordion";
// import Link from "next/link";

const SideBar = ({ router }: any) => {
  return (
    <div className="docs-nav">
      <div className="accordion-container">
        {/* <Link href="/admin">
          <div className="accordion">
            <input hidden />
            <label className="accordion-header c-hand">Getting started</label>
          </div>
        </Link> */}

        <NavAccordion path="/docs/basics" title="Basics">
          <MenuItem url="/docs/home" text="Navigation" />
          <MenuItem url="/admin/orders/new" text="SSH Keys" />
          <MenuItem url="/admin/order-drafts" text="Hosts" />
        </NavAccordion>
        <NavAccordion path="/docs/commands" title="Customizations">
          <MenuItem url="/docs/ls" text="Themes" />
          <MenuItem url="/admin/orders/new" text="Fonts" />
          <MenuItem url="/admin/order-drafts" text="Smart keys" />
        </NavAccordion>
        <NavAccordion path="/docs/commands1" title="Buildin Commands">
          <MenuItem url="/docs/ls" text="ls" />
          <MenuItem url="/admin/orders/new" text="ssh" />
          <MenuItem url="/admin/order-drafts" text="mosh" />
        </NavAccordion>
      </div>
    </div>
  );
};

export default SideBar;
