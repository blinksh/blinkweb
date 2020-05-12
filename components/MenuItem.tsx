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
  as: string;
  text: string;
};

const MenuItem = ({ url, as, text }: PropsType) => {
  const router = useRouter();
  return (
    <li className="menu-item">
      <Link href={url} as={as}>
        <a
          onClick={_closeSideBar}
          className={router.asPath.indexOf(as) === 0 ? "active" : ""}
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
