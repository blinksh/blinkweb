import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const _closeSideBar = () => {
  const link = document.getElementById("sidebar-close");
  if (link != null) {
    link.click();
  }

  if (document.body) {
    document.body.scrollTop = 0;
  }

  if (document.documentElement) {
    document.documentElement.scrollTop = 0;
  }
};

type PropsType = {
  url: string;
  text: string;
};

const MenuItem = ({ url, text }: PropsType) => {
  const router = useRouter();
  return (
    <li className="menu-item">
      <Link href={url}>
        <a
          onClick={_closeSideBar}
          className={router.asPath === url ? "active" : ""}
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
